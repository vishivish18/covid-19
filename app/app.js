const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require("config");
const app = express();
const database = require('./database/config');
const routes = require("../app/routes");


//using imports
app.use(bodyParser.json());

app.use(cors({ origin: '*' }));

app.use(express.json());

app.get('/hope', (req, res) => {
    res.send('Hope is live, we shall overcome')
})

console.log("Base for API", routes.apiBaseUri);
app.use(routes.apiBaseUri, routes.api(app));


app.listen(3112, () => {
    console.log("Hope is live at 3112");
});