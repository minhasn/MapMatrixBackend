const client = require('../config/db');

const { v4: uuidv4 } = require('uuid'); // Make sure this is included

class Property {
  static async create({ Title, City, Price, Type, Description, Image, Zipcode, Longitude, Latitude, User_Id }) {
    const parsedLongitude = parseFloat(Longitude);
    const parsedLatitude = parseFloat(Latitude);
    const PropertyId = uuidv4(); // Generate a new UUID for the property

    const result = await client.query(
      `INSERT INTO "Property" (
        "PropertyId", "Title", "City", "Price", "Type", "Description", "Image", "ZipCode", "Geometry", "UserId"
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, point($9, $10), $11)
      RETURNING *`,
      [PropertyId, Title, City, Price, Type, Description, Image, Zipcode, parsedLongitude, parsedLatitude, User_Id]
    );

    return result.rows[0];
  }

  static async getAll() {
    const result = await client.query('SELECT * FROM "Property"');
    return result.rows;
  }
}

module.exports = Property;
