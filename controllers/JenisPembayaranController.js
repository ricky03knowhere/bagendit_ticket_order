const { getSomeDataByConds } = require("../interfaces/RepositoryInterface");
const db = require("../models");
const Jenis_pembayaran = db.Jenis_pembayaran;

// Retrieve all jenis pembayaran from the database.
exports.index = async (req, res) => {
  const data = await getSomeDataByConds(Jenis_pembayaran, {}, res);
  return res.send(data);
};
