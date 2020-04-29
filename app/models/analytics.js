"use-strict";

// let db = require('./db'),
let mongoose = require("mongoose"),
  schema = require("./schema"),
  CountrySchema = new mongoose.Schema(schema.dbSchema["countries"]);
CountrySchema.index({ batchId: 1 });

CountrySchema.methods = {};
CountrySchema.statics = {
  saveRecord: function(data, isMany) {
    console.log("hreereree")
    if (isMany) {
      return this.insertMany(data).then(res => {
        return res;
      });
    } else {
      return this.create(data).then(res => {
        return res;
      });
    }
  },
  get: function(criteria, sortOrder, limit, columns, pageNo) {
    if (criteria && sortOrder && limit && pageNo && columns) {
      return this.find(criteria, columns)
        .sort(sortOrder)
        .skip(pageNo > 0 ? (pageNo - 1) * limit : 0)
        .limit(parseInt(limit))
        .exec();
    } else if (criteria && limit && pageNo && columns) {
      return this.find(criteria, columns)
        .skip(pageNo > 0 ? (pageNo - 1) * limit : 0)
        .limit(parseInt(limit))
        .exec();
    } else if (criteria && columns && sortOrder && limit) {
      return this.find(criteria, columns)
        .sort(sortOrder)
        .limit(parseInt(limit))
        .exec();
    } else if (criteria && limit && columns) {
      return this.find(criteria, columns)
        .limit(parseInt(limit))
        .exec();
    } else if (criteria && sortOrder && columns) {
      return this.find(criteria, columns)
        .sort(sortOrder)
        .exec();
    } else if (criteria && columns) {
      return this.find(criteria, columns).exec();
    } else if (criteria && sortOrder && limit) {
      return this.find(criteria)
        .sort(sortOrder)
        .limit(parseInt(limit))
        .exec();
    } else if (criteria && sortOrder) {
      return this.find(criteria)
        .sort(sortOrder)
        .exec();
    } else if (criteria && limit) {
      return this.find(criteria)
        .limit(parseInt(limit))
        .exec();
    } else if (criteria && columns) {
      return this.find(criteria, columns).exec();
    } else if (criteria) {
      return this.find(criteria).exec();
    } else {
      return this.find().exec();
    }
  },
  getAggregateResult: function(criteria) {
    return this.aggregate(criteria)
      .allowDiskUse(true)
      .exec();
  },
  getDistinctResult: (key, criteria) => {
    return this.distinct(key, criteria).exec();
  },
  updateData: function(criteria, updatedObj) {
    return this.findOneAndUpdate(criteria, updatedObj, { new: true }).exec();
  },
  getCount: function(criteria) {
    return this.count(criteria).exec();
  }
};
let Country = mongoose.model("Country", CountrySchema);
module.exports = Country;
