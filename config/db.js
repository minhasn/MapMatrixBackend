const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
  user: process.env.DATABASE_USER || 'postgres',
  password: process.env.DATABASE_PASSWORD || 'cezXrCwhVcIphKrMeIrZzpeAfXmHScUL',
  host: process.env.DATABASE_HOST || 'junction.proxy.rlwy.net',
  port: process.env.DATABASE_PORT || 34591,
  database: process.env.DATABASE_NAME || 'railway',
});

client.connect()
  .then(() => console.log("Database connected successfully"))
  .catch(e => console.error('Database connection error:', e.stack));

module.exports = client;
