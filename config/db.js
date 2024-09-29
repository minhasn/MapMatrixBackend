const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
  user: process.env.DATABASE_USER || 'root',
  password: process.env.DATABASE_PASSWORD || 'RTYtGyNSeerXbGzCjgZKAwemeDsFAvao',
  host: process.env.DATABASE_HOST || 'junction.proxy.rlwy.net',
  port: process.env.DATABASE_PORT || 10063,
  database: process.env.DATABASE_NAME || 'railway',
});

client.connect()
  .then(() => console.log("Database connected successfully"))
  .catch(e => console.error('Database connection error:', e.stack));

module.exports = client;
