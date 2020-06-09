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
from config import DB_URL, API_URL
import crawl_india as crawl_india


app = Flask(__name__)
app.config["DEBUG"] = True

base_path_john_hopkins = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/'
base_path_john_hopkins_us_data = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports_us/'
first_available_data_date = date(2020,1,22)
first_available_us_data_date = date(2020,4,12)
today = date.today()
days_since_first_data = (today-first_available_data_date).days
date_iterator = first_available_data_date

#db connection
dbstring = DB_URL
myclient = pymongo.MongoClient(dbstring)
database = myclient["covid-19"]
countries_collection = database["countries"]
usa_collection = database["usa"]
india_collection = database["india"]


##temp read, move to DB 
base_world_df = pd.read_csv('../lab/data/05-15-2020.csv')
#countries_without_province = df[pd.isnull(df['Province_State'])]
list_of_countries = base_world_df['Country_Region'].unique()
greenland_to_country = np.array(['Greenland'])
list_of_countries = np.concatenate((list_of_countries, greenland_to_country))
# list_of_countries = np.array(['Greenland'])



##adding list of US States
base_us_df = pd.read_csv('../lab/data/us/05-15-2020.csv')

list_of_US_states = base_us_df[base_us_df['Country_Region']=='US']['Province_State'].unique()
list_of_US_states = list(list_of_US_states)
list_of_US_states.remove('American Samoa')
#list_of_US_states = ['Virgin Islands']


## Getting daily data state wise for US
def get_daily_data_for_us_state(state, df, valid_date):
    confirmed_cases = 0
    death_cases = 0
    recovered_cases = 0
    active_cases = 0
    try:
        confirmed_cases = df[(df['Country/Region']=='US') & (df['Province/State']==state) ]['Confirmed'].sum()
        death_cases = df[(df['Country/Region']=='US') & (df['Province/State']==state) ]['Deaths'].sum()
        recovered_cases = df[(df['Country/Region']=='US') & (df['Province/State']==state) ]['Recovered'].sum()
        print("Total number of confirmed cases in Province/State", state, ' on ', valid_date, ' was ', confirmed_cases)
        print("Total number of deaths in Province/State", state, ' on ', valid_date, ' was ', death_cases)
        print("Total number of recovered cases in Province/State", state, ' on ', valid_date, ' was ', recovered_cases)   
        active_cases = confirmed_cases - (recovered_cases + death_cases)
        if confirmed_cases >0:
            return confirmed_cases, death_cases, recovered_cases, active_cases, valid_date
        else:
            print('No cases found in Province/State ', state, ' on ', valid_date)
            return confirmed_cases, death_cases, recovered_cases, active_cases, valid_date
    except:
        confirmed_cases = df[(df['Country_Region']=='US') & (df['Province_State']==state) ]['Confirmed'].sum()
        death_cases = df[(df['Country_Region']=='US') & (df['Province_State']==state) ]['Deaths'].sum()
        recovered_cases = df[(df['Country_Region']=='US') & (df['Province_State']==state) ]['Recovered'].sum()
        print("Total number of confirmed cases in Province_State", state, ' on ', valid_date, ' was ', confirmed_cases)
        print("Total number of deaths in Province_State", state, ' on ', valid_date, ' was ', death_cases)
        print("Total number of recovered cases in Province_State", state, ' on ', valid_date, ' was ', recovered_cases)   
        active_cases = confirmed_cases - (recovered_cases + death_cases)
        if confirmed_cases >0:
            return confirmed_cases, death_cases, recovered_cases, active_cases, valid_date
        else:
            print('No cases found in Province_State ', state, ' on ', valid_date)
            return confirmed_cases, death_cases, recovered_cases, active_cases, valid_date
        
## Saving daily data state wise for US
def add_data_for_us_state_to_db(state,incident_date, total_confirmed, delta_confirmed, total_deaths, delta_deaths, total_recovered, delta_recovered, total_active, delta_active):
    if usa_collection.find({'name': state}).count() >0:
        date_obj = {
            "date": str(incident_date),
            "confirmed": {"count": total_confirmed, "delta": delta_confirmed },
            "deaths": {"count": total_deaths, "delta": delta_deaths},
            "recovered": {"count": total_recovered, "delta": delta_recovered},
            "active": {"count":total_active, "delta": delta_active},
        }
        usa_collection.update({'name': state}, {'$push': {'timeSeries': date_obj}}) 
    else:
        date_obj = [{
        "date": str(incident_date),
        "confirmed": {"count": total_confirmed, "delta": delta_confirmed },
        "deaths": {"count": total_deaths, "delta": delta_deaths},
        "recovered": {"count": total_recovered, "delta": delta_recovered},
        "active": {"count":total_active, "delta": delta_active},
        }]
        datax =  {
            "name": state,
            "coordinates":
            {
                "lat": '0',
                "long": '0'
            },
            "firstIncidentDate": incident_date,
            "timeSeries":date_obj,
            "lastUpdatedAt": "04-25-2020"
        }
        usa_collection.insert_one(datax)


## Iterating daily files state wise for US
def process_us_state_wise_data(from_date):

    days_since_first_data = (today-from_date).days
    date_iterator = from_date
    first_case_found = False
    previous_confirmed_count = 0;
    previous_deaths_count = 0;
    previous_recovered_count = 0;
    previous_active_count = 0;
    for state in list_of_US_states:
        
        for day in range(days_since_first_data):
            date_iterator_month = str(date_iterator.month) if len(str(date_iterator.month)) > 1 else '0'+str(date_iterator.month)
            date_iterator_day = str(date_iterator.day) if len(str(date_iterator.day)) > 1 else '0'+str(date_iterator.day)
            date_iterator_year = str(date_iterator.year)
            valid_date = date_iterator_month + '-' + date_iterator_day + '-' + date_iterator_year
            valid_file_name = date_iterator_month + '-' + date_iterator_day + '-' + date_iterator_year +'.csv'
            print(state,valid_date)
            valid_date_object = date(int(date_iterator_year), int(date_iterator_month), int(date_iterator_day))

            print(day," st day valid date is:",valid_file_name)
            try:
                if valid_date_object < first_available_us_data_date:
                    print("day is", valid_date, " getting normal data")
                    df = pd.read_csv('../lab/data/'+valid_file_name)
                else:
                    print("day is", valid_date, " getting US data")
                    df = pd.read_csv('../lab/data/us/'+valid_file_name)
                
                df.fillna(0, axis=1,inplace=True)

                total_confirmed, total_deaths, total_recovered, total_active, date_of_first_incident = get_daily_data_for_us_state(state,df,valid_date)
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
                        print('Frist case for', state,  'on' , date_of_first_incident )
                        add_data_for_us_state_to_db(state, date_of_first_incident, int(total_confirmed), int(delta_confirmed), int(total_deaths), int(delta_deaths), int(total_recovered), int(delta_recovered), int(total_active), int(delta_active))
                        first_case_found = True
                    else:
                        print("case already found")
                        add_data_for_us_state_to_db(state, valid_date, int(total_confirmed), int(delta_confirmed), int(total_deaths), int(delta_deaths), int(total_recovered), int(delta_recovered),int(total_active), int(delta_active))
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





## Getting daily data country wise
def get_daily_data_for_country(country, df, valid_date):
    confirmed_cases = 0
    death_cases = 0
    recovered_cases = 0
    active_cases = 0
    try:
        if country == 'Denmark':
            try:
                confirmed_cases = df[(df['Country/Region']=='Denmark') & (df['Province/State']!='Greenland') ]['Confirmed'].sum()
                death_cases = df[(df['Country/Region']=='Denmark') & (df['Province/State']!='Greenland') ]['Deaths'].sum()
                recovered_cases = df[(df['Country/Region']=='Denmark') & (df['Province/State']!='Greenland') ]['Recovered'].sum()
            except:
                confirmed_cases = df[(df['Country_Region']=='Denmark') & (df['Province_State']!='Greenland') ]['Confirmed'].sum()
                death_cases = df[(df['Country_Region']=='Denmark') & (df['Province_State']!='Greenland') ]['Deaths'].sum()
                recovered_cases = df[(df['Country_Region']=='Denmark') & (df['Province_State']!='Greenland') ]['Recovered'].sum()
        elif country == 'Greenland':
            try:
                confirmed_cases = df[df['Province/State']=='Greenland']['Confirmed'].sum()
                death_cases = df[df['Province/State']=='Greenland']['Deaths'].sum()
                recovered_cases = df[df['Province/State']=='Greenland']['Recovered'].sum()
            except:
                confirmed_cases = df[df['Province_State']=='Greenland']['Confirmed'].sum()
                death_cases = df[df['Province_State']=='Greenland']['Deaths'].sum()
                recovered_cases = df[df['Province_State']=='Greenland']['Recovered'].sum()
        else:
            confirmed_cases = df[df['Country/Region']==country]['Confirmed'].sum()
            death_cases = df[df['Country/Region']==country]['Deaths'].sum()
            recovered_cases = df[df['Country/Region']==country]['Recovered'].sum()
        print("Total number of confirmed cases in Country/Region", country, ' on ', valid_date, ' was ', confirmed_cases)
        print("Total number of deaths in Country/Region", country, ' on ', valid_date, ' was ', death_cases)
        print("Total number of recovered cases in Country/Region", country, ' on ', valid_date, ' was ', recovered_cases)   
        active_cases = confirmed_cases - (recovered_cases + death_cases)
        if confirmed_cases >0:
            return confirmed_cases, death_cases, recovered_cases, active_cases, valid_date
        else:
            print('No cases found in Country/Region ', country, ' on ', valid_date)
            return confirmed_cases, death_cases, recovered_cases, active_cases, valid_date
    except:
        confirmed_cases = df[df['Country_Region']==country]['Confirmed'].sum()
        death_cases = df[df['Country_Region']==country]['Deaths'].sum()
        recovered_cases = df[df['Country_Region']==country]['Recovered'].sum()
        print("Total number of confirmed cases in Country_Region", country, ' on ', valid_date, ' was ', confirmed_cases)
        print("Total number of deaths in Country_Region", country, ' on ', valid_date, ' was ', death_cases)
        print("Total number of recovered cases in Country_Region", country, ' on ', valid_date, ' was ', recovered_cases)   
        active_cases = confirmed_cases - (recovered_cases + death_cases)
        if confirmed_cases >0:
            return confirmed_cases, death_cases, recovered_cases, active_cases, valid_date
        else:
            print('No cases found in Country_Region ', country, ' on ', valid_date)
            return confirmed_cases, death_cases, recovered_cases, active_cases, valid_date
        
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
    for country in list_of_countries:
        
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

                total_confirmed, total_deaths, total_recovered, total_active, date_of_first_incident = get_daily_data_for_country(country,df,valid_date)
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
def get_daily_data_for_world(df, valid_date):
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

# Process all world data date wise
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

        total_confirmed, total_deaths, total_recovered, total_active, world_minimum_confirmed, world_minimum_deaths, world_minimum_recovered, world_maximum_confirmed, world_maximum_deaths, world_maximum_recovered, date_of_first_incident = get_daily_data_for_world(df,valid_date)
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
                add_data_for_world_to_db(valid_date, int(total_confirmed), int(delta_confirmed), int(total_deaths), int(delta_deaths), int(total_recovered), int(delta_recovered),int(total_active), int(delta_active), int(world_minimum_confirmed), int(world_minimum_deaths), int(world_minimum_recovered), int(world_maximum_confirmed), int(world_maximum_deaths), int(world_maximum_recovered))
        date_iterator = date_iterator + timedelta(days=1)    


def process_us_state_wise_data_for_date(for_date):
    valid_date = for_date
    valid_file_name = for_date+'.csv'
    df = pd.read_csv('../lab/data/us/'+valid_file_name)
    df.fillna(0, axis=1,inplace=True)
    for state in list_of_US_states:
        total_confirmed, total_deaths, total_recovered, total_active, day_of_incidence = get_daily_data_for_us_state(state,df,valid_date)
        print("=========confirmed",total_confirmed)
        print("=========deaths",total_deaths)
        print("=========recovered",total_recovered)
        print("=========active",total_active)
        print("=========date",day_of_incidence)
        res_data = requests.get(API_URL+'/api/v0.1/analytics/count?scope=usa&source='+ state +'&duration=latest').json()
        previous_confirmed_count = res_data[0]['timeSeries'][0]['confirmed']['count']
        previous_deaths_count = res_data[0]['timeSeries'][0]['deaths']['count']
        previous_recovered_count = res_data[0]['timeSeries'][0]['recovered']['count']
        previous_active_count = res_data[0]['timeSeries'][0]['active']['count']

        delta_confirmed = total_confirmed - previous_confirmed_count
        delta_deaths = total_deaths - previous_deaths_count
        delta_recovered = total_recovered - previous_recovered_count
        delta_active = total_active - previous_active_count
        
        print("delta",delta_confirmed,delta_deaths, delta_recovered, delta_active )
        add_data_for_us_state_to_db(state, day_of_incidence, int(total_confirmed), int(delta_confirmed), int(total_deaths), int(delta_deaths), int(total_recovered), int(delta_recovered),int(total_active), int(delta_active))
    return None






def process_country_wise_data_for_date(for_date):
    valid_date = for_date
    valid_file_name = for_date+'.csv'
    df = pd.read_csv('../lab/data/'+valid_file_name)
    df.fillna(0, axis=1,inplace=True)
    for country in list_of_countries:
        total_confirmed, total_deaths, total_recovered, total_active, day_of_incidence = get_daily_data_for_country(country,df,valid_date)
        print("=========confirmed",total_confirmed)
        print("=========deaths",total_deaths)
        print("=========recovered",total_recovered)
        print("=========active",total_active)
        print("=========date",day_of_incidence)
        res_data = requests.get(API_URL+'/api/v0.1/analytics/count?scope=world&source='+ country +'&duration=latest').json()
        previous_confirmed_count = res_data[0]['timeSeries'][0]['confirmed']['count']
        previous_deaths_count = res_data[0]['timeSeries'][0]['deaths']['count']
        previous_recovered_count = res_data[0]['timeSeries'][0]['recovered']['count']
        previous_active_count = res_data[0]['timeSeries'][0]['active']['count']

        delta_confirmed = total_confirmed - previous_confirmed_count
        delta_deaths = total_deaths - previous_deaths_count
        delta_recovered = total_recovered - previous_recovered_count
        delta_active = total_active - previous_active_count
        
        print("delta",delta_confirmed,delta_deaths, delta_recovered, delta_active )
        add_data_for_country_to_db(country, day_of_incidence, int(total_confirmed), int(delta_confirmed), int(total_deaths), int(delta_deaths), int(total_recovered), int(delta_recovered),int(total_active), int(delta_active))
    return None

def process_world_data_for_date(for_date):
    print("==6=== inside world_wise_data")
    valid_date = for_date
    valid_file_name = for_date+'.csv'
    df = pd.read_csv('../lab/data/'+valid_file_name)
    df.fillna(0, axis=1,inplace=True)
    total_confirmed, total_deaths, total_recovered, total_active, world_minimum_confirmed, world_minimum_deaths, world_minimum_recovered, world_maximum_confirmed, world_maximum_deaths, world_maximum_recovered, date_of_first_incident = get_daily_data_for_world(df,valid_date)
    print("=========confirmed",total_confirmed)
    print("=========deaths",total_deaths)
    print("=========recovered",total_recovered)
    print("=========active",total_active)
    res_data = requests.get(API_URL+'/api/v0.1/analytics/count?scope=world&source=World&duration=latest').json()
    previous_confirmed_count = res_data[0]['timeSeries'][0]['confirmed']['count']
    previous_deaths_count = res_data[0]['timeSeries'][0]['deaths']['count']
    previous_recovered_count = res_data[0]['timeSeries'][0]['recovered']['count']
    previous_active_count = res_data[0]['timeSeries'][0]['active']['count']
    delta_confirmed = total_confirmed - previous_confirmed_count
    delta_deaths = total_deaths - previous_deaths_count
    delta_recovered = total_recovered - previous_recovered_count
    delta_active = total_active - previous_active_count
    print("delta",delta_confirmed,delta_deaths, delta_recovered, delta_active )
    add_data_for_world_to_db(valid_date, int(total_confirmed), int(delta_confirmed), int(total_deaths), int(delta_deaths), int(total_recovered), int(delta_recovered),int(total_active), int(delta_active), int(world_minimum_confirmed), int(world_minimum_deaths), int(world_minimum_recovered), int(world_maximum_confirmed), int(world_maximum_deaths), int(world_maximum_recovered))
    return None


# Get latest CSV and valid date
def get_latest_csv(valid_date):
    valid_file_name = valid_date +'.csv'
    valid_url = base_path_john_hopkins+valid_file_name
    valid_url_for_us = base_path_john_hopkins_us_data+valid_file_name
    print('trying to get data for......',valid_date,valid_url)
    requestWorld = requests.get(valid_url)
    requestUS = requests.get(valid_url_for_us)
    if requestWorld.ok:
        data = requestWorld.content.decode('utf8')
        df = pd.read_csv(io.StringIO(data))
        df.to_csv('../lab/data/'+valid_file_name,index=False)
    if requestUS.ok:
        data = requestUS.content.decode('utf8')
        df = pd.read_csv(io.StringIO(data))
        df.to_csv('../lab/data/us/'+valid_file_name,index=False)
    process(valid_date)

# Process to be called after valid date
def process(valid_date):
    if valid_date is None:
        process_country_wise_data(from_date=first_available_data_date)
        process_world_data(from_date=first_available_data_date)
        process_us_state_wise_data(from_date=first_available_us_data_date)
        return jsonify({"Message" : "Crawler processed for" +first_available_data_date}), 200
    else:
        process_country_wise_data_for_date(for_date=valid_date)
        process_world_data_for_date(for_date=valid_date)
        process_us_state_wise_data_for_date(for_date=valid_date)
        crawl_india.process_india_state_wise_data_for_date(india_collection, valid_date_from_crawler=valid_date)
        return jsonify({"Message" : "Crawler processed for " +valid_date}), 200
    


# API Routes

## Route for checking ignition
@app.route("/ignition")
@cross_origin()
def ignition():
    return jsonify({"Message" : "Crawler is live"}), 200


## Route for crawling data
@app.route('/crawler', methods=['GET'])
def crawl():
    secret = request.args.get('secret') # escaping bot hits, no intention to add auth as of now
    if secret == 'coronalogy':
        valid_date = request.args.get('date')
        if valid_date is None:
            now_utc = datetime.now(timezone.utc)
            yesterday_utc = now_utc - timedelta(days=1)
            yesterday_day = str(yesterday_utc.day)
            yesterday_month = str(yesterday_utc.month)
            yesterday_year = str(yesterday_utc.year)
            print("Current Time is", now_utc)
            print("Yesterday was", yesterday_utc)
            print("Yesterday day", yesterday_day)
            print("Yesterday month", yesterday_month)
            print("Yesterday year", yesterday_year)

            if len(yesterday_day) <2 :
                print("Yesterday day length is less than 2",yesterday_day )
                yesterday_day = '0'+str(yesterday_utc.day)
                print("NEW yesterday day is", yesterday_day)
            if len(yesterday_month) <2 :
                print("Yesterday month length is less than 2",yesterday_month )
                yesterday_month = '0'+str(yesterday_utc.month)
                print("NEW yesterday month is", yesterday_month)

            valid_date = yesterday_month+'-'+yesterday_day+'-'+yesterday_year
            print("valid date is", valid_date)
            hour_of_day= now_utc.hour
            print("hour of day is",hour_of_day )
            if hour_of_day >= 4:
                print("hour of day is less than 4",hour_of_day)
                get_latest_csv(valid_date)
            else:
                print("hour of day is not less than 4",hour_of_day)
                print("time not right",valid_date)
        else:
            print("valid date is",valid_date)
            get_latest_csv(valid_date)
            
    
        return jsonify({"Time" : valid_date}), 200
    else:
        return jsonify({"Secret NOT VALID" : secret}), 200


##Route for processing data
@app.route("/process")
@cross_origin()
def process_all():
    secret = request.args.get('secret') # escaping bot hits, no intention to add auth as of now
    if secret == 'coronalogy': 
        process_country_wise_data(from_date=first_available_data_date)
        process_world_data(from_date=first_available_data_date)
        process_us_state_wise_data(from_date=first_available_data_date)
        crawl_india.process_india_state_wise_data(india_collection)
        return jsonify({"Message" : "Crawler processed for" +str(first_available_data_date)}), 200
    else:
        return jsonify({"Secret NOT VALID" : secret}), 200


# @app.route("/temp")
# @cross_origin()
# def temp():
#     crawl_india.process_india_state_wise_data_for_date(india_collection, valid_date_from_crawler='06-08-2020')
#     return jsonify({"Done for date":"Success"}), 200

app.run(host="0.0.0.0",debug=True,port=8000)



