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

    // const createQuery = `alter table students add column age int`;

    // connection.execute(createQuery, (err) => {
    //     if(err){
    //         console.log(err);
    //         connection.end();
    //         return;
    //     }

    //     console.log("Table altered");
    // })
})

module.exports = connection;