const express = require('express');

const router = express.Router();

router.get("/",(req,res) => {
    res.send(" Courses: Frontend, Backend");
})

router.post("/:id",(req,res) => {
    const id = req.params.id;
    const name = req.query.name;
    const desc = req.query.description;
    res.send(`Courses ${name} ${desc}`);
})

module.exports =router;