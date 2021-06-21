const mysql = require('mysql2');

const config = {
  host: 'localhost',
  database: 'db_damyen_1',
  user: 'root',
  password: '',
};

const pool = mysql.createPool(config);

module.exports = pool;
