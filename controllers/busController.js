const db = require("../utils/db-connection");
const Buses = require("../models/buses");

const addBus = async (req,res) => {
    try {
       const {busNumber, totalSeats, availableSeats} = req.body;
       
       const bus = await Buses.create({
        busNumber: busNumber,
        totalSeats: totalSeats,
        availableSeats: availableSeats
       })

       res.status(200).send("bus added");
    } catch (error) {
        res.status(500).send(error);
    }
}

const getAvailableSeats = (req,res) => {
    try {
        const {seats} = req.params;

        const bus = Buses.findAll({
            where: {
                seats: seats
            }
        })

        res.status(200).send(bus);
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports ={
    addBus,
    getAvailableSeats
}