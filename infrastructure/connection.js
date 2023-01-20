const mysql = require('mysql2');

const connection =  mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '181211',
    port: 3306,
    database: 'cg_backend'
})

module.exports = connection;