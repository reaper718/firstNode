const express = require('express');

const app = express();

app.use((req,res,next) => {
    console.log("OAuthentication Middleware called");
    next();
})

app.use("/welcome",(req,res,next) => {
    req.user = "Rudra";
    next();
})

app.get("/welcome",(req,res) => {
    console.log("Inside welcome request");
    res.send(`<h1>Welcome ${req.user}</h1>`);
})

app.listen(3000, () => {
    console.log("Server is up and running on port 3000! Ready to handle requests");
})