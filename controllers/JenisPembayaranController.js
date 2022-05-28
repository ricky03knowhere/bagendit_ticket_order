const db = require("../models");
const Jenis_pembayaran = db.Jenis_pembayaran;
const Op = db.Sequelize.Op;

// Retrieve all jenis pembayaran from the database.
exports.findAll = (req, res) => {
  const date = req.query.date;
  var condition = date
    ? {
        date: {
          [Op.iLike]: `%${date}%`,
        },
      }
    : null;
  Jenis_pembayaran.findAll({
    where: condition,
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving jenis pembayaran.",
      });
    });
};

