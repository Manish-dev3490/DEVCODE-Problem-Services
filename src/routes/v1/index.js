const express=require('express');
const ProblemRouter = require('./Problem-Router');
const V1Router=express.Router();

// If any api comes to the route  and starts with /problems it will go to ProblemRouter
V1Router.use("/problems",ProblemRouter);

module.exports=V1Router;