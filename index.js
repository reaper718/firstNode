const express = require('express');

const app = express();

app.use((req,res,next) => {
    console.log("Output from middleware 1")
})

app.listen(3000, () => {
    console.log("Server is up and running on port 3000! Ready to handle requests");
})