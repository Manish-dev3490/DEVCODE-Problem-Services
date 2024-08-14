const express=require('express');
const ProblemRouter = require('./Problem-Router');
const V1Router=express.Router();

V1Router.use("/problems",ProblemRouter);

module.exports=V1Router;