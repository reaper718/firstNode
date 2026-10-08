const express = require('express');

const router = express.Router();

router.get("/",(req,res) => {
    res.send(" List all students.");
})

router.post("/:id",(req,res) => {
    const id = req.params.id;
    const name = req.query.name;
    res.send(`Student ${name}`);
})

module.exports =router;