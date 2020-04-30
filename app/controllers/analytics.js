const mongoose = require('mongoose');
const baseController = require('./baseController');
const analyticsModel = require('../models/analytics');

apps
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
            "timesSeries": [],
            "lastUpdatedAt": "04-25-2020",
            "province": "NA"
        }
        analyticsModel.saveRecord(data,false)
    }
}

let analytics = new analyticsContorller(analyticsModel);

module.exports = analytics;