const express = require('express');

const app = express();

const StudentRouter = require("./routers/student");
const CoursesRouter = require("./routers/courses");

app.get("/",(req,res) => {
    res.send("Welcome to the Student & Course Portal API");
})

app.use("/student",StudentRouter);
app.use("/courses",CoursesRouter);

app.use((req,res) => {
    res.status(404).send("Page not found");
})

app.listen(3000, () => {
    console.log("Server is up and running on port 3000! Ready to handle requests");
})