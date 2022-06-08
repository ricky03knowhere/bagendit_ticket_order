const { getSomeDataByConds } = require("../interfaces/RepositoryInterface");
const db = require("../models");
const Tiket = db.Tiket;
const Loket = db.Loket;

// Retrieve all tiket from the database.
exports.index = async (req, res) => {
  // const data = await getSomeDataByConds(Tiket, {}, res);
  const data = await Loket.findAll({include: Tiket});
  return res.send(data);
};
