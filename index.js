const express = require('express');

const app = express();

const userRoutes = require("./routers/userRoutes");
const productRouter = require("./routers/productRouter");
const cartRouter = require("./routers/cartRouter");

app.use('public');

app.use(express.json());

app.use("/users",userRoutes);
app.use("/products",productRouter);
app.use("/cart",cartRouter);


app.listen(3000, () => {
    console.log("Server is up and running on port 3000! Ready to handle requests");
})