#author : Vishal R
#date: 06/06
import pandas as pd
import requests
import io
import datetime
import pymongo
import numpy as np
from config import DB_URL, API_URL
from constants import STATE_CODES


def process_india_state_wise_data(india_collection):
    r = requests.get('https://api.covid19india.org/states_daily.json')
    response = r.json() 
    for state_code, state_name in STATE_CODES.items():
        #print(state_code,state_name)
        state_code = state_code.lower()
        total_confirmed = 0
        total_deaths = 0
        total_recovered = 0
        total_active = 0
        for idx, data in enumerate(response['states_daily']):
            overalldate = datetime.datetime.strptime(data['date'],'%d-%b-%y')
            day = str(overalldate.day)
            month = str(overalldate.month)
            year = str(overalldate.year)
            counter = 0
            if len(day) < 2:
                day = '0'+str(day)
            if len(month) < 2:
                month = '0'+str(month)
            valid_date = month+'-'+day+'-'+year
            if counter <= 2:
                if data['status'] =='Confirmed':
                    confirmed = int(data[state_code])
                if data['status'] =='Recovered':
                    recovered = int(data[state_code])
                if data['status'] =='Deceased':
                    deaths = int(data[state_code])
                    active = confirmed - (recovered + deaths)
                    print("IN " ,state_name ," On ", valid_date, " stats was, confirmed: ",confirmed, "deaths: ", deaths, " and recovered: ", recovered)
                    total_confirmed = total_confirmed + confirmed  
                    total_deaths = total_deaths + deaths  
                    total_recovered = total_recovered + recovered
                    total_active = total_confirmed - (total_recovered + total_deaths)

                    print("FINAL COUNT for ",state_name ," on" ,valid_date, "total confirmed:", total_confirmed, " total deaths:", total_deaths, " and total recovered:", total_recovered)
                    add_data_for_state_india(india_collection,state_name,state_code, valid_date, total_confirmed, confirmed, total_deaths, deaths, total_recovered, recovered, total_active, active)

            counter =0

def add_data_for_state_india(india_collection, state, state_code, valid_date, total_confirmed, delta_confirmed, total_deaths, delta_deaths, total_recovered, delta_recovered, total_active, delta_active):
    if india_collection.find({'name': state}).count() >0:
        date_obj = {
            "date": str(valid_date),
            "confirmed": {"count": total_confirmed, "delta": delta_confirmed },
            "deaths": {"count": total_deaths, "delta": delta_deaths},
            "recovered": {"count": total_recovered, "delta": delta_recovered},
            "active": {"count":total_active, "delta": delta_active},
        }
        india_collection.update({'name': state}, {'$push': {'timeSeries': date_obj}}) 
    else:
        date_obj = [{
        "date": str(valid_date),
        "confirmed": {"count": total_confirmed, "delta": delta_confirmed },
        "deaths": {"count": total_deaths, "delta": delta_deaths},
        "recovered": {"count": total_recovered, "delta": delta_recovered},
        "active": {"count":total_active, "delta": delta_active},
        }]
        datax =  {
            "name": state,
            "name_code":state_code,
            "coordinates":
            {
                "lat": '0',
                "long": '0'
            },
            "firstIncidentDate": "TBD",
            "timeSeries":date_obj,
            "lastUpdatedAt": "04-25-2020",
            "province": "NA"

        }
        x = india_collection.insert_one(datax)


def convert_date_to_respone_format(date):
    formatted_date = datetime.datetime.strptime(date, "%m-%d-%Y")
    return datetime.date.strftime(formatted_date, "%d-%b-%y")


def process_india_state_wise_data_for_date(india_collection, valid_date_from_crawler):
    r = requests.get('https://api.covid19india.org/states_daily.json')
    response = r.json() 
    valid_date = convert_date_to_respone_format(valid_date_from_crawler)
    print("valid date is", valid_date)
    for state_code, state_name in STATE_CODES.items():
        #print(state_code,state_name)
        state_code = state_code.lower()
        res_data = requests.get(API_URL+'/api/v0.1/analytics/count?scope=india&source='+state_name+'&duration=latest').json()
        previous_confirmed_count = res_data[0]['timeSeries'][0]['confirmed']['count']
        previous_deaths_count = res_data[0]['timeSeries'][0]['deaths']['count']
        previous_recovered_count = res_data[0]['timeSeries'][0]['recovered']['count']
        previous_active_count = res_data[0]['timeSeries'][0]['active']['count']
        for idx, data in enumerate(response['states_daily']):
            counter = 0
            if counter <= 2:
                #print(data['date'])
                if data['date'] == valid_date and data['status'] =='Confirmed':
                    confirmed = int(data[state_code])
                if data['date'] == valid_date and data['status'] =='Recovered':
                    recovered = int(data[state_code])
                if data['date'] == valid_date and data['status'] =='Deceased':
                    deaths = int(data[state_code])
                    active = confirmed - (recovered + deaths)
                    print("IN " ,state_name ," On ", valid_date, " stats was, confirmed: ",confirmed, "deaths: ", deaths, " and recovered: ", recovered)
                    total_confirmed = previous_confirmed_count + confirmed  
                    total_deaths = previous_deaths_count + deaths  
                    total_recovered = previous_recovered_count + recovered
                    total_active = total_confirmed - (total_recovered + total_deaths)

                    print("FINAL COUNT for ",state_name ," on" ,valid_date, "total confirmed:", total_confirmed, " total deaths:", total_deaths, " and total recovered:", total_recovered)
                    add_data_for_state_india(india_collection, state_name,state_code, valid_date, total_confirmed, confirmed, total_deaths, deaths, total_recovered, recovered, total_active, active)

            counter =0
    
    
