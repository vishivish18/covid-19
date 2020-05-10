"use-strict";

// let db = require('./db'),
let mongoose = require("mongoose"),
  schema = require("./schema"),
  CountrySchema = new mongoose.Schema(schema.dbSchema["countries"]);
CountrySchema.index({ batchId: 1 });

CountrySchema.methods = {};
CountrySchema.statics = {
  saveRecord: function(data, isMany) {
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
  get: async function (criteria, columns) {
    if (criteria && columns) {
      return await this.find(criteria, columns)
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
