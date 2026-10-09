const express = require('express');
const db = require('./utils/db-connection');
const studentRouter = require('./routers/studentRoutes');

const app = express();

app.use("/students",studentRouter);

app.listen(3000,() => {
    console.log("server is running ")
})