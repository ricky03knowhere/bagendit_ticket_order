const db = require("../models");
const Objek_wisata = db.Objek_wisata;
const Op = db.Sequelize.Op;

// Retrieve all objek wisata from the database.
exports.findAll = (req, res) => {
  const date = req.query.date;
  var condition = date
    ? {
        date: {
          [Op.iLike]: `%${date}%`,
        },
      }
    : null;
  Objek_wisata.findAll({
    where: condition,
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving objek wisata.",
      });
    });
};
