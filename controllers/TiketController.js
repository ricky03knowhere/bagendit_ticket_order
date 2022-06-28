const { getSomeDataByConds } = require("../interfaces/RepositoryInterface");
const db = require("../models");
const Loket = db.Loket;
const Tiket = db.Tiket;
const Jenis_tiket = db.Jenis_tiket;

// Retrieve all tiket from the database.
exports.tiket = async (req, res) => {
  const data = await Tiket.findAll({ include: Jenis_tiket });
  return data;
};

// Retrieve all loket from the database.
exports.loket = async (req, res) => {
  const lokets = await Loket.findAll({
    include: {
      model: Tiket,
    },
    order: [["id", "ASC"]],
  });
  return lokets;
};
