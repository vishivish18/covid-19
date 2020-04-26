const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.Types.ObjectId;

const schemas = {
    countries: {
        name: {
            type: String,
            required: true
        },
        coordinates: {
            lat: String,
            long: String
        },
        firstIncidentDate: {
            type: Date
        },
        timesSeries: [{
            date: Date,
            confirmed: {
                count: Number,
                delta: Number
            },
            deaths: {
                count: Number,
                delta: Number
            },
            recovered: {
                count: Number,
                delta: Number
            },
            active: {
                count: Number,
                delta: Number
            },
        }],
        lastUpdatedAt: {
            type: Date
        }
        province: String

    }
};

module.exports.dbSchema = schemas;