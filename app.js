const express = require('express');
const db = require('./utils/db-connection');
const studentRouter = require('./routers/studentRoutes');
const busRouter = require('./routers/busRoutes');
const app = express();

require('./models');

app.use(express.json())

app.use("/students",studentRouter);
app.use("/buses",busRouter);

db.sync({force:true}).then(() => {
    app.listen(3000,() => {
    console.log("server is running ")
})
}).catch((err) => {
    console.log(err);
})

