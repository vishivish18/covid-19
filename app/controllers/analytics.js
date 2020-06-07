const mongoose = require('mongoose');
const baseController = require('./baseController');
const countryModel = require('../models/country');
const stateModel = require('../models/state');
const indiaModel = require('../models/india');

class analyticsContorller extends baseController {
  constructor(...args) {
    super(...args);
  }
  save(req, res) {
    console.log('from controller');
    res.json("hello");
    var data = {
      "name": "India",
      "coordinates": {
        "lat": "0",
        "long": "0"
      },
      "firstIncidentDate": "01-30-2020",
      "timeSeries": [],
      "lastUpdatedAt": "04-25-2020",
      "province": "NA"
    }
    countryModel.saveRecord(data, false)
  }
  get(req, res) {
    let source = decodeURIComponent(req.query.source)
    let duration = req.query.duration
    let scope = req.query.scope
    let criteria = {}
    let columns = {}
    if(scope == 'world') {
      if (source == 'all') {
        columns = {timeSeries: {$slice: -1}}
        countryModel.getAggregateResult().then((result) => {
          var newObj = {}
          result.forEach((data)=>{
            newObj[data['name']]= data
          })
          res.json(newObj)
        })
      } else {
        if (duration == 'latest') {
          // criteria = {"name": new RegExp(`^${source}$`, 'i')}
          criteria = {"name": source}
          columns = {timeSeries: {$slice: -1}}
        }
        countryModel.get(criteria, columns).then((result) => {
          res.json(result)
        })
      }
    } else if (scope == 'usa') {
      if (source == 'all') {
        criteria = {"name": "US"}
        columns = {timeSeries: {$slice: -1}}
        stateModel.getAggregateResult().then((result) => {
          var newObj = {}
          result.forEach((data)=>{
            newObj[data['name']]= data
          })
          countryModel.get(criteria, columns).then((result) => {
            var usa_data = result[0]
            newObj['US'] = usa_data
            res.json(newObj)
          })
          
        })
      } else {
        if (duration == 'latest') {
          // criteria = {"name": new RegExp(`^${source}$`, 'i')}
          criteria = {"name": source}
          columns = {timeSeries: {$slice: -1}}
        }
        stateModel.get(criteria, columns).then((result) => {
          res.json(result)
        })
      }

    }else if (scope == 'india') {
      if (source == 'all') {
        criteria = {"name": "India"}
        columns = {timeSeries: {$slice: -1}}
        indiaModel.getAggregateResult().then((result) => {
          var newObj = {}
          result.forEach((data)=>{
            newObj[data['name']]= data
          })
          countryModel.get(criteria, columns).then((result) => {
            var india_data = result[0]
            newObj['India'] = india_data
            res.json(newObj)
          })
          
        })
      } else {
        if (duration == 'latest') {
          // criteria = {"name": new RegExp(`^${source}$`, 'i')}
          criteria = {"name": source}
          columns = {timeSeries: {$slice: -1}}
        }
        indiaModel.get(criteria, columns).then((result) => {
          res.json(result)
        })
      }

    }

  }
}

let analytics = new analyticsContorller(countryModel);

module.exports = analytics;