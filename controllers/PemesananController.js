const db = require("../models");

const { getRandomNumber } = require("../utils/getRandomInt");

const Pemesanan = db.Pemesanan;
const Detail_pemesanan = db.Detail_pemesanan;
const Tiket = db.Tiket;
const Jenis_tiket = db.Jenis_tiket;
const Op = db.Sequelize.Op;

// Create and Save new Pemesanan
exports.create = async (req, res) => {
  const id = req.params.id;

  // Get ticket by id
  const tiket = await Tiket.findByPk(id)
    .then((data) => data)
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        message: "Error retrieving Tiket with id=" + id,
      });
    });

  const userId = "48595390";

  // Ticket stock validation
  if (req.body.jumlah_tiket > tiket.dataValues.stok) {
    console.error("Your order is out of stock");
    res.flash("alert-notif", "Your order is out of stock");
    res.redirect("/" + id);
  } else if (req.body.jumlah_tiket <= 0) {
    console.error("The order cannot be null");
    res.flash("alert-notif", "The order cannot be null");
    res.redirect("/" + id);
  }

  //Check order eather exist or not
  const enumValues = db.Sequelize.literal(
    `"Pemesanan"."status" = 'pending'::"enum_pemesanans_status"`
  );
  var condition = { user_id: userId, status: enumValues };

  const orderCheck = await Pemesanan.findOne({
    where: condition,
  })
    .then((data) => {
      console.log(data + "\n orderCheck");
      return data;
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Pemesanan.",
      });
    });

    
  if (orderCheck === null) {
    let pemesananData = {
      pemesanan_id: getRandomNumber(12),
      user_id: userId,
      pembayaran_id: getRandomNumber(12),
      tanggal_pesan: new Date(),
      total_harga: 0,
    };
    await Pemesanan.create(pemesananData)
      .then((data) => {
        console.log("Data pemesanan successfully inserted.");
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Pemesanan.",
        });
      });
  }

  let newOrder = await Pemesanan.findOne({
    where: condition,
  })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Pemesanan.",
      });
    });

  //Check Detail order eather exist or not
  let detailPemesananCheck = await Detail_pemesanan.findOne({
    where: {
      tiket_id: tiket.dataValues.id.toString(),
      pemesanan_id: newOrder.dataValues.id.toString(),
    },
  })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).send({
        message:
          err.message + " detailPemesanan errors" ||
          "Some error occurred while retrieving Pemesanan.",
      });
    });

  var jenisTiket = await Jenis_tiket.findOne({
    where: { id: tiket.dataValues.jenis_tiket_id },
  })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message + " jenis tiket errors" ||
          "Some error occurred while retrieving Pemesanan.",
      });
    });

    
  if (detailPemesananCheck === null) {
    
    //Store Detail_order data

    let detailPemesanan = {
      detail_pemesanan_id: getRandomNumber(8),
      pemesanan_id: newOrder.dataValues.id,
      tiket_id: tiket.dataValues.id,
      tanggal_wisata: new Date(),
      jumlah_tiket: req.body.jumlah_tiket,
      total_harga: jenisTiket.dataValues.harga * req.body.jumlah_tiket,
    };

    Detail_pemesanan.create(detailPemesanan)
      .then((data) => {
        console.log("Data detail_pemesanan successfully inserted.");
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the User.",
        });
      });
  } else {
    let detailPemesanan = await Detail_pemesanan.findOne({
      where: {
        tiket_id: tiket.dataValues.id.toString(),
        pemesanan_id: newOrder.dataValues.id.toString(),
      },
    })
      .then((data) => {
        return data;
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Pemesanan.",
        });
      });

    detailPemesanan.dataValues.jumlah_tiket += req.body.jumlah_tiket;

    //Current Price
    let newDetailOrderPrice =
      jenisTiket.dataValues.harga * req.body.jumlah_tiket;

    // Add current price to existing price
    detailPemesanan.dataValues.total_harga += newDetailOrderPrice;

    await Detail_pemesanan.update(detailPemesanan.dataValues, {
      where: { id: detailPemesanan.dataValues.id },
    }).then((data) => data);
    // res.send("ticket sucessufully added.");
  }

  //Update Total price of orders
  let pemesanan = await Pemesanan.findOne({
    where: condition,
  }).then((data) => data);

  pemesanan.dataValues.total_harga += jenisTiket.dataValues.harga * req.body.jumlah_tiket;
  await Pemesanan.update(pemesanan.dataValues, {
    where: { id: pemesanan.dataValues.id },
  }).then((data) => data);

  // res.flash("notif", "Order is successfully added to cart");
  res.redirect("checkout");
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
