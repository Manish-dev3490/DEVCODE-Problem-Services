const express=require('express');
const V1Router = require('./v1');
const apiRouter=express.Router();

apiRouter.use("/v1",V1Router);

module.exports=apiRouter;