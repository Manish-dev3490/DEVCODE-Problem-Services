const express=require('express');
const V1Router = require('./v1');
const apiRouter=express.Router();

// If any api comes to the route  and starts with /v1 it will go to V1Router
apiRouter.use("/v1",V1Router);

module.exports=apiRouter;