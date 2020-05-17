const mongoose = require('mongoose');
const baseController = require('./baseController');
const analyticsModel = require('../models/analytics');

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
    analyticsModel.saveRecord(data, false)
  }
  get(req, res) {
    let source = req.query.source
    let duration = req.query.duration
    let criteria = {}
    let columns = {}
    if (source == 'all') {
      columns = {timeSeries: {$slice: -1}}
      analyticsModel.get(criteria, columns).then((result) => {
        var newObj = {}
        result.forEach((data)=>{
          newObj[data['name']]= data
        })

        res.json(newObj)
      })
    } else {
      if (duration == 'latest') {
        criteria = {"name": new RegExp(`^${source}$`, 'i')}
        columns = {timeSeries: {$slice: -1}}
      }
      analyticsModel.get(criteria, columns).then((result) => {
        res.json(result)
      })
    }

   

  }
}

let analytics = new analyticsContorller(analyticsModel);

module.exports = analytics;