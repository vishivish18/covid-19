#author : Vishal R
#date: 26/04

import pandas as pd
import requests
import io
import pymongo
from flask import Flask, request, redirect, url_for, abort, jsonify, flash
from flask_cors import CORS, cross_origin
from datetime import date, datetime,timezone, timedelta
import numpy as np

app = Flask(__name__)
app.config["DEBUG"] = True

base_path_john_hopkins = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/'
first_available_data_date = date(2020,1,22)
today = date.today()
days_since_first_data = (today-first_available_data_date).days
date_iterator = first_available_data_date

#db connection
myclient = pymongo.MongoClient("mongodb://localhost:27017/")
database = myclient["covid-19"]
countries_collection = database["countries"]


##temp read, move to DB 
df = pd.read_csv('../lab/data/05-15-2020.csv')
countries_without_province = df[pd.isnull(df['Province_State'])]
list_of_countries_without_province = countries_without_province['Country_Region'].unique()

## Getting daily data country wise
def get_daily_data_for_country(country, df, valid_date, first_case_found):
    confirmed_cases_count = 0
    death_cases_count = 0
    recovered_cases_count = 0
    active_cases_count = 0
    try:
        confirmed_cases = df[df['Country/Region']==country]['Confirmed']
        death_cases = df[df['Country/Region']==country]['Deaths']
        recovered_cases = df[df['Country/Region']==country]['Recovered']
        if len(confirmed_cases) > 0:
            print("Total number of confirmed cases in Country/Region", country, ' on ', valid_date, ' was ', df[df['Country/Region']==country]['Confirmed'].values[0])
            confirmed_cases_count = df[df['Country/Region']==country]['Confirmed'].values[0]
        if len(death_cases) > 0:
            print("Total number of deaths in Country/Region", country, ' on ', valid_date, ' was ', df[df['Country/Region']==country]['Deaths'].values[0])
            death_cases_count = df[df['Country/Region']==country]['Deaths'].values[0]
        if len(recovered_cases) > 0:
            print("Total number of recovered cases in Country/Region", country, ' on ', valid_date, ' was ', df[df['Country/Region']==country]['Recovered'].values[0])   
            recovered_cases_count = df[df['Country/Region']==country]['Recovered'].values[0]
            active_cases_count = confirmed_cases_count - (recovered_cases_count + death_cases_count)
            return confirmed_cases_count, death_cases_count, recovered_cases_count, active_cases_count, valid_date
        else:
            print('No cases found in Country/Region ', country, ' on ', valid_date)
            return confirmed_cases_count, death_cases_count, recovered_cases_count, active_cases_count, valid_date
    except:
        confirmed_cases = df[df['Country_Region']==country]['Confirmed']
        death_cases = df[df['Country_Region']==country]['Deaths']
        recovered_cases = df[df['Country_Region']==country]['Recovered']
        if len(confirmed_cases) > 0:
            print("Total number of confirmed cases in Country_Region", country, ' on ', valid_date, ' was ', df[df['Country_Region']==country]['Confirmed'].values[0])
            confirmed_cases_count = df[df['Country_Region']==country]['Confirmed'].values[0]
        if len(death_cases) > 0:
            print("Total number of deaths in Country_Region", country, ' on ', valid_date, ' was ', df[df['Country_Region']==country]['Deaths'].values[0])
            death_cases_count = df[df['Country_Region']==country]['Deaths'].values[0]
        if len(recovered_cases) > 0:
            print("Total number of recovered cases in Country_Region", country, ' on ', valid_date, ' was ', df[df['Country_Region']==country]['Recovered'].values[0])   
            recovered_cases_count = df[df['Country_Region']==country]['Recovered'].values[0]
            active_cases_count = confirmed_cases_count - (recovered_cases_count + death_cases_count)
            return confirmed_cases_count, death_cases_count, recovered_cases_count, active_cases_count, valid_date
        else:
            print('No cases found in Country_Region ', country, ' on ', valid_date)
            return confirmed_cases_count, death_cases_count, recovered_cases_count, active_cases_count, valid_date
    
        
    
## Saving daily data country wise
def add_data_for_country_to_db(country,incident_date, total_confirmed, delta_confirmed, total_deaths, delta_deaths, total_recovered, delta_recovered, total_active, delta_active):
    if countries_collection.find({'name': country}).count() >0:
        date_obj = {
            "date": str(incident_date),
            "confirmed": {"count": total_confirmed, "delta": delta_confirmed },
            "deaths": {"count": total_deaths, "delta": delta_deaths},
            "recovered": {"count": total_recovered, "delta": delta_recovered},
            "active": {"count":total_active, "delta": delta_active},
        }
        countries_collection.update({'name': country}, {'$push': {'timeSeries': date_obj}}) 
    else:
        date_obj = [{
        "date": str(incident_date),
        "confirmed": {"count": total_confirmed, "delta": delta_confirmed },
        "deaths": {"count": total_deaths, "delta": delta_deaths},
        "recovered": {"count": total_recovered, "delta": delta_recovered},
        "active": {"count":total_active, "delta": delta_active},
        }]
        datax =  {
            "name": country,
            "coordinates":
            {
                "lat": '0',
                "long": '0'
            },
            "firstIncidentDate": incident_date,
            "timeSeries":date_obj,
            "lastUpdatedAt": "04-25-2020",
            "province": "NA"

        }
        countries_collection.insert_one(datax)
    

## Iterating daily files country wise
def process_country_wise_data(from_date):

    days_since_first_data = (today-from_date).days
    date_iterator = from_date
    first_case_found = False
    previous_confirmed_count = 0;
    previous_deaths_count = 0;
    previous_recovered_count = 0;
    previous_active_count = 0;
    for country in list_of_countries_without_province:
        
        for day in range(days_since_first_data):
            date_iterator_month = str(date_iterator.month) if len(str(date_iterator.month)) > 1 else '0'+str(date_iterator.month)
            date_iterator_day = str(date_iterator.day) if len(str(date_iterator.day)) > 1 else '0'+str(date_iterator.day)
            date_iterator_year = str(date_iterator.year)
            valid_date = date_iterator_month + '-' + date_iterator_day + '-' + date_iterator_year
            valid_file_name = date_iterator_month + '-' + date_iterator_day + '-' + date_iterator_year +'.csv'
            print(country,valid_date)

            print(day," st day valid date is:",valid_file_name)
            try:
                df = pd.read_csv('../lab/data/'+valid_file_name)
                df.fillna(0, axis=1,inplace=True)

                total_confirmed, total_deaths, total_recovered, total_active, date_of_first_incident = get_daily_data_for_country(country,df,valid_date,first_case_found)
                delta_confirmed = total_confirmed - previous_confirmed_count
                delta_deaths = total_deaths - previous_deaths_count
                delta_recovered = total_recovered - previous_recovered_count
                delta_active = total_active - previous_active_count
                print('delta confirmed is', delta_confirmed)
                print('delta deaths is', delta_deaths)
                print('delta recovered is', delta_recovered)
                print('delta active is', delta_active)

                previous_confirmed_count = total_confirmed
                previous_deaths_count = total_deaths
                previous_recovered_count = total_recovered
                previous_active_count = total_active

                if total_confirmed > 0:
                    if first_case_found == False:
                        print('Frist case for', country,  'on' , date_of_first_incident )
                        add_data_for_country_to_db(country, date_of_first_incident, int(total_confirmed), int(delta_confirmed), int(total_deaths), int(delta_deaths), int(total_recovered), int(delta_recovered), int(total_active), int(delta_active))
                        first_case_found = True
                    else:
                        add_data_for_country_to_db(country, valid_date, int(total_confirmed), int(delta_confirmed), int(total_deaths), int(delta_deaths), int(total_recovered), int(delta_recovered),int(total_active), int(delta_active))
            except Exception as e:
                print("============EXECEPTION OCCURRED")
                print(e)
                break


            date_iterator = date_iterator + timedelta(days=1)
        days_since_first_data = (today-from_date).days
        date_iterator = from_date
        first_case_found = False
        previous_confirmed_count = 0
        previous_deaths_count = 0
        previous_recovered_count = 0


# Adding Time series data for World
## Getting daily data for world

def get_daily_data_for_world(df, valid_date, first_case_found):
    confirmed_cases_count = df['Confirmed'].sum()
    death_cases_count = df['Deaths'].sum()
    recovered_cases_count = df['Recovered'].sum()
    active_cases_count = confirmed_cases_count - (recovered_cases_count + death_cases_count)
    print(confirmed_cases_count)
    print('on ', valid_date, ' the cases are ', confirmed_cases_count)
    world_minimum_confirmed = df['Confirmed'].min()
    world_minimum_deaths = df['Deaths'].min()
    world_minimum_recovered = df['Recovered'].min()
    
    world_maximum_confirmed = df['Confirmed'].max()
    world_maximum_deaths = df['Deaths'].max()
    world_maximum_recovered = df['Recovered'].max()
    
    return confirmed_cases_count, death_cases_count, recovered_cases_count, active_cases_count, world_minimum_confirmed, world_minimum_deaths, world_minimum_recovered, world_maximum_confirmed, world_maximum_deaths, world_maximum_recovered, valid_date

 ## Saving daily data for world
def add_data_for_world_to_db(date_of_incident, total_confirmed, delta_confirmed, total_deaths, delta_deaths, total_recovered, delta_recovered, total_active, delta_active, world_minimum_confirmed, world_minimum_deaths, world_minimum_recovered, world_maximum_confirmed, world_maximum_deaths, world_maximum_recovered):
    if countries_collection.find({'name': 'World'}).count() >0:
        date_obj = {
            "date": str(date_of_incident),
            "confirmed": {"count": total_confirmed, "delta": delta_confirmed },
            "deaths": {"count": total_deaths, "delta": delta_deaths},
            "recovered": {"count": total_recovered, "delta": delta_recovered},
            "active": {"count":total_active, "delta": delta_active},
            "meta": {
                "confirmed": {
                    "min": world_minimum_confirmed,
                    "max": world_maximum_confirmed
                },
                "deaths": {
                    "min": world_minimum_deaths,
                    "max": world_maximum_deaths
                },
                "recovered": {
                    "min": world_minimum_recovered,
                    "max": world_maximum_recovered
                },
            }
        }
        countries_collection.update({'name': 'World'}, {'$push': {'timeSeries': date_obj}}) 
    else:
        date_obj = [{
        "date": str(date_of_incident),
        "confirmed": {"count": total_confirmed, "delta": delta_confirmed },
        "deaths": {"count": total_deaths, "delta": delta_deaths},
        "recovered": {"count": total_recovered, "delta": delta_recovered},
        "active": {"count":total_active, "delta": delta_active},
        }]
        datax =  {
            "name": 'World',
            "coordinates":
            {
                "lat": '0',
                "long": '0'
            },
            "firstIncidentDate": date_of_incident,
            "timeSeries":date_obj,
            "lastUpdatedAt": "04-25-2020",
            "province": "NA"

        }
        countries_collection.insert_one(datax)

def process_world_data(from_date):
    days_since_first_data = (today-first_available_data_date).days
    date_iterator = first_available_data_date
    first_case_found = False
    previous_confirmed_count = 0;
    previous_deaths_count = 0;
    previous_recovered_count = 0;
    previous_active_count = 0;
    for day in range(days_since_first_data):
        date_iterator_month = str(date_iterator.month) if len(str(date_iterator.month)) > 1 else '0'+str(date_iterator.month)
        date_iterator_day = str(date_iterator.day) if len(str(date_iterator.day)) > 1 else '0'+str(date_iterator.day)
        date_iterator_year = str(date_iterator.year)
        valid_date = date_iterator_month + '-' + date_iterator_day + '-' + date_iterator_year
        valid_file_name = date_iterator_month + '-' + date_iterator_day + '-' + date_iterator_year +'.csv'
        print(valid_date)

        #print(day," st day valid date is:",valid_file_name)
        df = pd.read_csv('../lab/data/'+valid_file_name)
        df.fillna(0, axis=1,inplace=True)

        total_confirmed, total_deaths, total_recovered, total_active, world_minimum_confirmed, world_minimum_deaths, world_minimum_recovered, world_maximum_confirmed, world_maximum_deaths, world_maximum_recovered, date_of_first_incident = get_daily_data_for_world(df,valid_date,first_case_found)
        delta_confirmed = total_confirmed - previous_confirmed_count
        delta_deaths = total_deaths - previous_deaths_count
        delta_recovered = total_recovered - previous_recovered_count
        delta_active = total_active - previous_active_count
        print('delta confirmed is', delta_confirmed)
        print('delta deaths is', delta_deaths)
        print('delta recovered is', delta_recovered)
        print('delta active is', delta_active)
        previous_confirmed_count = total_confirmed
        previous_deaths_count = total_deaths
        previous_recovered_count = total_recovered
        previous_active_count = total_active

        if total_confirmed > 0:
            if first_case_found == False:
                print('Frist case for world'  'on' , date_of_first_incident )
                add_data_for_world_to_db(date_of_first_incident, int(total_confirmed), int(delta_confirmed), total_deaths=0, delta_deaths=0, total_recovered=0, delta_recovered=0, total_active=0, delta_active=0,world_minimum_confirmed=0, world_minimum_deaths=0, world_minimum_recovered=0, world_maximum_confirmed=0, world_maximum_deaths=0, world_maximum_recovered=0)
                first_case_found = True
            else:
                add_data_for_world_to_db(valid_date, int(total_confirmed), int(delta_confirmed), int(total_deaths), int(delta_deaths), int(total_recovered), int(delta_recovered),int(total_active), int(delta_active), world_minimum_confirmed, world_minimum_deaths, world_minimum_recovered, world_maximum_confirmed, world_maximum_deaths, world_maximum_recovered)
        date_iterator = date_iterator + timedelta(days=1)    




def get_latest_csv(valid_date):
    valid_file_name = valid_date +'.csv'
    valid_url = base_path_john_hopkins+valid_file_name
    print('trying to get data for......',valid_date,valid_url)
    r = requests.get(valid_url)
    if r.ok:
        data = r.content.decode('utf8')
        df = pd.read_csv(io.StringIO(data))
        df.to_csv('data/'+valid_file_name,index=False)


@app.route("/ignition")
@cross_origin()
def ignition():
    return jsonify({"Message" : "Crawler is live"}), 200




@app.route("/process")
@cross_origin()
def process():
    #process_country_wise_data(from_date=first_available_data_date)
    process_world_data(from_date=first_available_data_date)
    return jsonify({"Message" : "Crawler is live"}), 200

@app.route('/crawler', methods=['GET'])
def crawl():
    valid_date = request.args.get('date')
    if valid_date is None:
        now_utc = datetime.now(timezone.utc)
        yesterday_utc = now_utc - timedelta(days=1)
        yesterday_day = str(yesterday_utc.day)
        yesterday_month = str(yesterday_utc.month)
        yesterday_year = str(yesterday_utc.year)
        if len(yesterday_day) <2 :
            yesterday_day = '0'+str(yesterday_utc.day)
        if len(yesterday_month) <2 :
            yesterday_month = '0'+str(yesterday_utc.month)

        valid_date = yesterday_month+'-'+yesterday_day+'-'+yesterday_year
        hour_of_day= now_utc.hour
        if hour_of_day > 4:
            get_latest_csv(valid_date)
    else:
        get_latest_csv(valid_date)
        
   
    return jsonify({"Time" : valid_date}), 200

app.run(host="0.0.0.0",port=8000)



