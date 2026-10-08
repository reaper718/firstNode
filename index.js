const express = require('express');

const app = express();

const productRouter = require('./routers/products');
const categoriesRouter = require('./router/categories');

app.use("/products",productRouter);
app.use("/categories",categoriesRouter);

app.listen(3000, () => {
    console.log("Server is up and running on port 3000! Ready to handle requests");
})