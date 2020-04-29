const mongoose = require('mongoose');
const url = "mongodb://localhost:27017/covid-19";
mongoose.Promise = global.Promise;
 
mongoose.connect(url, {useNewUrlParser: true, keepAlive: 1}).then((res) =>{
    console.log("Connection to DB");
}).catch(error =>{
    console.log(error.message)
});

module.exports = mongoose