const mysql = require('mysql2');

//connect to the database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'lpq5nx70',
        database: 'employee_db'
    },
    console.log('Connected to employee database')
);

module.exports= db;