const mongoose = require('mongoose');
const db = require('./db.example');
const url = db.dbString
const pwd = 'iJeX.3yhgazU29#'
const dbstring = "mongodb+srv://jarvis:"+encodeURIComponent(pwd)+"@covid-19-f8hds.mongodb.net/covid-19"


mongoose.connect(dbstring, {useNewUrlParser: true, keepAlive: 1}).then((res) =>{
    console.log("Connection to DB");
}).catch(error =>{
    console.log(error.message)
});

module.exports = mongoose


