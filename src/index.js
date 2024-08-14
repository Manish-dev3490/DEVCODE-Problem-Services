const express=require('express');
const bodyparser=require('body-parser');
const { PORT } = require('./Configs/Server-config');
const apiRouter = require('./routes');
const app=express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.text());
app.use("/api",apiRouter);


app.get("/",(req,res)=>{
    res.json({msg:"Problem Services are working"});
})

app.listen(PORT,()=>{
    console.log("App is listening on the PORT",PORT);
    
})