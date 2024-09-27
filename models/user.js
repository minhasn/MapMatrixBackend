const { v4: uuidv4 } = require('uuid');
const client = require('../config/db');
const bcrypt = require('bcryptjs');

class User {
  static async create({ name, phone_number, City, Password, email, country }) {
    const password_hash = await bcrypt.hash(Password, 10);
    const id = uuidv4(); // Generate a new UUID
    const result = await client.query(
      'INSERT INTO "User" ("id", "name", "phone_number", "city", "password_hash", "email", "country") VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
      [id, name, phone_number	, City, password_hash, email, country,city]
    );
    return result.rows[0];
  }

  static async findByphone_number(phone_number) {
    const result = await client.query(
      'SELECT * FROM "User" WHERE "phone_number" = $1',
      [phone_number]
    );
    return result.rows[0];
  }

  static async delete(id) {
    await client.query('DELETE FROM "User" WHERE "UserId" = $1', [id]);
    return { message: 'User deleted successfully' };
  }
}

module.exports = User;
