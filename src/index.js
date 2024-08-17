const express = require('express');
const bodyparser = require('body-parser');
const { PORT } = require('./Configs/Server-config');
const apiRouter = require('./routes');
const errorhandler = require('./utils/errorHandlers');
const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.text());

// If any api comes to the route /api it will go to apiRouter
app.use("/api", apiRouter);


app.get("/", (req, res) => {
    res.json({ msg: "Problem Services are working" });
})

// Last Middlewqares if any expection comes 
app.use(errorhandler);

app.listen(PORT, () => {
    console.log("App is listening on the PORT", PORT);
})