const db = require("../models");

// Retrieve all objek wisata from the database.
exports.index = async () => {
  const data = await db.sequelize.query("select * from objek_wisatas");
  return data[0];
};
