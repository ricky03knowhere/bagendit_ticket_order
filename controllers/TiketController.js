const db = require("../models");
const Tiket = db.Tiket;
const Op = db.Sequelize.Op;

// Retrieve all tiket from the database.
exports.findAll = (req, res) => {
  const date = req.query.date;
  var condition = date
    ? {
        date: {
          [Op.iLike]: `%${date}%`,
        },
      }
    : null;
  Tiket.findAll({
    where: condition,
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving tiket.",
      });
    });
};
