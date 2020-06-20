
let mongoose = require("mongoose"),
  schema = require("./schema"),
  StateSchema = new mongoose.Schema(schema.dbSchema["states"]);

StateSchema.methods = {};
StateSchema.statics = {
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
    return this.aggregate([{$project:{name: 1,timeSeries: { $arrayElemAt: [ "$timeSeries", -1 ] }}},{$sort:{"timeSeries.confirmed.count":-1}}])
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
let State = mongoose.model("usa", StateSchema,"usa");
module.exports = State;
