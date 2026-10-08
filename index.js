const express = require('express');

const app = express();

app.use((req,res,next) => {
    console.log(`${req.method} request made to ${req.url}`);
    next();
})

app.post("/products",(req,res) => {
    res.send('A new product has been added.');
})

app.get("/products",(req,res) => {
    console.log("Here is the list of all products.");
    res.send("Here is the list of all products.");
})

app.post("/categories",(req,res) => {
    res.send('A new category has been created.');
})

app.get("/categories",(req,res) => {
    console.log("Here is the list of all categories");
    res.send("Here is the list of all categories");
})

app.use((req,res) => {
    res.status(404).send("<h1>404 Page Not found</h1>");
    console.log("Route not found")
})

app.listen(3000, () => {
    console.log("Server is up and running on port 3000! Ready to handle requests");
})