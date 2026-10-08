const express = require('express');

const router = express.Router();

router.get("/:userid",(req,res) => {
    const userId = req.params.id;
    res.send(`Fetching cart for user with ID: ${userId}`);
})

router.post("/",(req,res) => {
    const userId = req.params.id;
    res.send("Adding product to cart for user with ID: ${userId}");
})

module.exports =router; 