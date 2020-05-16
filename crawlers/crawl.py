#author : Vishal R
#date: 26/04

import pandas as pd
import requests
import io
from flask import Flask, request, redirect, url_for, abort, jsonify, flash
from flask_cors import CORS, cross_origin
from datetime import datetime,timezone, timedelta

app = Flask(__name__)
app.config["DEBUG"] = True

base_path_john_hopkins = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/'


def get_latest_csv(valid_date):
    valid_file_name = valid_date +'.csv'
    valid_url = base_path_john_hopkins+valid_file_name
    print('trying to get data for......',valid_date,valid_url)
    r = requests.get(valid_url)
    if r.ok:
        data = r.content.decode('utf8')
        df = pd.read_csv(io.StringIO(data))
        df.to_csv('../lab/data/'+valid_file_name,index=False)


@app.route("/ignition")
@cross_origin()
def ignition():
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



