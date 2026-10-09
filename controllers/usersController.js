const db = require('../utils/db-connection');

const getAllUsers = (req,res) => {
    const query = `select * from users`;

    db.execute(query,(err,data) => {
        if(err){
            res.status(500).send(err.message);
            db.end();
            return;
        }

        res.status(200).send(data);
    })
}

const addUser = (req,res) => {
    const {name ,email} = req.body;

    const insertQuery = `INSERT INTO users (name,email) values (?,?)`;

    db.execute(insertQuery,[name,email],(err) => {
        if(err){
            res.status(500).send(err.message);
            db.end();
            return;
        }

        res.status(200).send("user added");
    })
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