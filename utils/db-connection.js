const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'testDb'
})

connection.connect((err) => {
    if(err){
        console.log(err);
        return ;
    }

    console.log("connection created");

    const createQuery = `create table IF NOT EXISTS payments (
        id int AUTO_INCREMENT PRIMARY KEY,
        amountPaid int,
        paymentStatus varchar(10)
    )`

    connection.execute(createQuery, (err) => {
        if(err){
            console.log(err);
            connection.end();
            return;
        }

        console.log("Table created");
    })
})

module.exports = connection;