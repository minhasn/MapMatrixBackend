const mysql = require('mysql2');
require('dotenv').config();

// Create the MySQL connection pool
const pool = mysql.createPool({
  user: process.env.DATABASE_USER || 'root',
  password: process.env.DATABASE_PASSWORD || 'RTYtGyNSeerXbGzCjgZKAwemeDsFAvao',
  host: process.env.DATABASE_HOST || 'junction.proxy.rlwy.net',
  port: process.env.DATABASE_PORT || 10063,
  database: process.env.DATABASE_NAME || 'railway',
  waitForConnections: true,       // Automatically queue connection requests when all connections are in use
  connectionLimit: 10,            // Limit of connections to maintain in the pool
  queueLimit: 0                   // No limit on the number of queued connection requests
});

// Check the connection
pool.getConnection((err, connection) => {
  if (err) {
    console.error('Database connection error:', err.stack);
    return;
  }
  console.log("Database connected successfully");
  connection.release(); // release the connection back to the pool
});

module.exports = pool;
