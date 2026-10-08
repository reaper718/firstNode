const express = require('express');

const app = express();

const booksRouter = require("./routers/books");

app.use("/books",booksRouter);

app.listen(3000, () => {
    console.log("Server is up and running on port 3000! Ready to handle requests");
})