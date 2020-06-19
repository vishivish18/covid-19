"use-strict";

// let db = require('./db'),
let mongoose = require("mongoose"),
  schema = require("./schema"),
  CountrySchema = new mongoose.Schema(schema.dbSchema["countries"]);
// CountrySchema.index({ batchId: 1 });

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
  addNewColumn: async function () {
    return this.find({},{"name":1})
  },
  getAggregateResult: function(criteria) {
    return this.aggregate([{$project:{name: 1,slug:1, timeSeries: { $arrayElemAt: [ "$timeSeries", -1 ] }}},{$sort:{"timeSeries.confirmed.count":-1}}])
      //.allowDiskUse(true)
      //.exec();
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
