const { Pool, Client } = require('pg');
const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    database: 'StudentTeach',
    password: 'studentTeach123',
});
module.exports = pool;

pool.query('SELECT NOW()').then(result => {
    console.log(result.rows)
    pool.end()
});


//Fra: https://www.w3jar.com/node-js-login-and-registration-system-with-express-js-and-mysql/
const mysql = require('mysql2');
const dbConnection = mysql.createPool({
    host: 'localhost', // MYSQL HOST NAME
    user: 'postgres',        // MYSQL USERNAME
    port: '5432',
    password: 'studentTeach123',    // MYSQL PASSWORD
    database: 'Studenteach'      // MYSQL DB NAME
}).promise();
module.exports = dbConnection;