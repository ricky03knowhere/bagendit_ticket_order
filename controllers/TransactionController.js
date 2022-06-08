const sequelize = require("sequelize");
const db = require("../models");
const User = db.User;
const Pemesanan = db.Pemesanan;
const Jenis_tiket = db.Jenis_tiket;
const Tiket = db.Tiket;
const Op = db.Sequelize.Op;

// Show all orders group by users
exports.index = async (req, res) => {
  const results = await User.findAll({
    include: { model: Pemesanan},
  })
    .then((data) => data)
    .catch((err) => console.log(err));
  return res.send(results);
};
