const db = require('../utils/db-connection');
const Users = require('../models/users');

const getAllUsers = async (req,res) => {

    try {
        const users = await Users.findAll();

        res.status(200).send(users);
    } catch (error) {
        res.status(500).send(error);
    }
}

const addUser = async (req,res) => {
    try {
        const {name ,email} = req.body;

        const user = await Users.create({
            name: name,
            email:email
        })

        res.status(201).send("user created successfully");
    } catch (error) {
        res.status(500).send(error);
    }
}

const getUserById = (req,res) => {
    const id = req.params.id;
    res.send(`Fetching user with ID: ${id}`);
}

module.exports = {
    getAllUsers,
    addUser,
    getUserById
}