const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.Types.ObjectId;

const schemas = {
    countries: {
        name: {
            type: String,
            required: true,
            unique: true
        },
        slug: {
            type: String,
            unique: true
        },
        coordinates: {
            lat: String,
            long: String
        },
        firstIncidentDate: {
            type: Date
        },
        timeSeries: [{
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
        },
        province: {
            type: String
        }

    },
    states: {
        name: {
            type: String,
            required: true,
            unique: true
        },
        coordinates: {
            lat: String,
            long: String
        },
        firstIncidentDate: {
            type: Date
        },
        timeSeries: [{
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
    }
};

module.exports.dbSchema = schemas;