// # API routes
let express = require("express"),
    api = require("../controllers"),
    apiRoutes;

apiRoutes = (router) => {
    router = express.Router();
    router.get('/test',(req,res)=>{res.send('hello')})
    router.get('/analytics',api.analytics.save)
    return router;
};

module.exports = apiRoutes;