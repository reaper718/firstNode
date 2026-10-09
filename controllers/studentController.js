const connection = require('../utils/db-connection');
const db = require('../utils/db-connection');

const addEntries = (req,res) => {
    const { email, name } = req.body;
    const insertQuery = `INSERT INTO students (email, name) VALUES (?,?)`;

    db.execute(insertQuery, [email, name], (err) => {
        if(err){
            console.log(err.message);
            res.status(500).send(err.message);
            connection.end();
            return;
        }

        console.log("values has been added");
        res.staus(200).send(`Student with ${name} has been added`); 
    })
}

const updateEntry = (req,res) => {
    const {id} = req.params;
    const {name} = req.body;

    const updateQuery = 'UPDATE students set name = ? where id = ?';

    db.execute(updateQuery, [name, id] ,(err,result) => {
        if(err){
            res.staus(500).send(err.message);
            db.end();
            return ;
        }

        if(result.affectedRows === 0){
            res.staus(404).send("student not found");
            return;
        }

        res.status(200).send("student recor updated");
    })
}

const deleteEntry = (req,res) => {
    const {id} = req.params;

    const deleteQuery = `DELETE FROM students where id = ?`;

    db.execute(deleteQuery,[id],(err,result) => {
        if(err){
            res.staus(500).send(err.message);
            db.end();
            return;
        }

        if(result.affectedRows === 0){
            res.staus(404).send("student not found");
            return;
        }

        res.status(200).send("student record deleted");
    })
}

module.exports ={
    addEntries,
    updateEntry,
    deleteEntry
}