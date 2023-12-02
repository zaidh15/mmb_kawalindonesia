const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'kawal_indonesia',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 10,
});

module.exports = pool;
