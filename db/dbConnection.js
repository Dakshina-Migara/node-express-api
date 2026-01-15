const mysql = require('mysql2');

const db = mysql.createPool({
  host: 'localhost',     
  user: 'root',           
  password: '1234',           
  database: 'expressdb'  
});

db.getConnection((err, connection) => {
  if (err) {
    console.error('Database connection failed:', err);
  } else {
    console.log('Database connected successfully');
    connection.release();
  }
});

module.exports = db;
