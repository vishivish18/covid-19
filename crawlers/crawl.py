#author : Vishal R
#date: 26/04

import pandas as pd
import requests
import io

base_path_john_hopkins = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/'

url = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/04-24-2020.csv'
r = requests.get(url).content
if r.ok:
    data = r.content.decode('utf8')
    df = pd.read_csv(io.StringIO(data))

