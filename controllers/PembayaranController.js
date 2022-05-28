const db = require("../models");
const Pembayaran = db.Pembayaran;
const Op = db.Sequelize.Op;

// Create and Save new Pembayaran
exports.create = (req, res) => {
  // Create Pembayaran
  const pembayaran = req.body;

  // Save Pembayaran in the database
  Pembayaran.create(pembayaran)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating  Pembayaran.",
      });
    });
};

// Retrieve all pembayaran from the database.
exports.findAll = (req, res) => {
  const date = req.query.date;
  var condition = date
    ? {
        date: {
          [Op.iLike]: `%${date}%`,
        },
      }
    : null;
  Pembayaran.findAll({
    where: condition,
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving pembayaran.",
      });
    });
};

// Find single Pembayaran with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Pembayaran.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Pembayaran with id=" + id,
      });
    });
};

// Update a user by Id
exports.update = (req, res) => {
  const id = req.params.id;
  Pembayaran.update(req.body, {
    where: {
      id: id,
    },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Pembayaran was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Pembayaran with id=${id}. Maybe Pembayaran was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Pembayaran with id=" + id,
      });
    });
};