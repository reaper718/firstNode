const express = require('express');

const app = express();

app.use((req,res,next) => {
    console.log("OAuthentication Middleware called");
    next();
})

app.post("/orders",(req,res) => {
    res.send('A new order has been created');
})

app.get("/orders",(req,res) => {
    console.log("Here is the list of orders");
})

app.post("/users",(req,res) => {
    res.send('A new user has been created');
})

app.get("/orders",(req,res) => {
    console.log("Here is the list of users");
})

app.listen(3000, () => {
    console.log("Server is up and running on port 3000! Ready to handle requests");
})