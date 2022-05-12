const db = require("../models");
const Pemesanan = db.Pemesanan;
const Op = db.Sequelize.Op;

// Create and Save new Pemesanan
exports.create = (req, res) => {
  // Create Pemesanan
  const pemesanan = req.body;

  // Save Pemesanan in the database
  Pemesanan.create(pemesanan)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating  Pemesanan.",
      });
    });
};

// Retrieve all pemesanan from the database.
exports.findAll = (req, res) => {
  const date = req.query.date;
  var condition = date
    ? {
        date: {
          [Op.iLike]: `%${date}%`,
        },
      }
    : null;
  Pemesanan.findAll({
    where: condition,
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving pemesanan.",
      });
    });
};

// Find single Pemesanan with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Pemesanan.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Pemesanan with id=" + id,
      });
    });
};

// Delete pemesanan by Id
exports.delete = (req, res) => {
  const id = req.params.id;
  Pemesanan.destroy({
    where: {
      id: id,
    },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Pemesanan was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Pemesanan with id=${id}. Maybe Pemesanan was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Pemesanan with id=" + id,
      });
    });
};
