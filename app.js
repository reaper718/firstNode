const express = require('express');
const mysql = require('mysql2');


const app = express();

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

    const createQuery = `create table payments (
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

app.listen(3000,() => {
    console.log("server is running ")
})