const { getSomeDataByConds } = require("../interfaces/RepositoryInterface");
const db = require("../models");
const Objek_wisata = db.Objek_wisata;

// Retrieve all objek wisata from the database.
exports.index = async (req, res) => {
  const data = await getSomeDataByConds(Objek_wisata, {}, res);
  return res.send(data);
};
