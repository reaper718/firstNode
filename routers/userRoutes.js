const express = require('express');

const router = express.Router();

router.get("/",(req,res) => {
    res.send("Fetching all users");
})

router.get("/:id",(req,res) => {
    const id = req.params.id;
    res.send(`Fetching user with ID: ${id}`);
})

router.post("/",(req,res) => {
    res.send("Adding a new user");
})

module.exports =router;