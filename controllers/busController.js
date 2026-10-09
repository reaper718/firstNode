const db = require("../utils/db-connection");

const addBus = (req,res) => {
    const {busNumber, totalSeats, availableSeats} = req.body;

    const insertQuery = `INSERT INTO buses (busNumber, totalSeats, availableSeats) values (?,?,?)`;

    db.execute(insertQuery, [busNumber,totalSeats,availableSeats], (err) => {
        if(err){
            res.status(500).send(err.message);
            db.end();
            return;
        }

        res.status(200).send("bus added");
    })
}

const getAvailableSeats = (req,res) => {
    const {seats} = req.params;

    const query = `select * from buses where availabeSeats > ?`;

    db.execute(query,[seats], (err,data) => {
        if(err){
            res.status(500).send(err.message);
            db.end();
            return;
        }

        res.status(200).send(data);
    })
}

module.exports ={
    addBus,
    getAvailableSeats
}