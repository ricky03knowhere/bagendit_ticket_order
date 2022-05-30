const {
  getDataById,
  getDataByConds,
  createData,
  updateData,
  getSomeDataByConds,
} = require("../interfaces/PemesananInterface");
const db = require("../models");

const { getRandomNumber } = require("../utils/getRandomInt");

const Pemesanan = db.Pemesanan;
const Detail_pemesanan = db.Detail_pemesanan;
const Tiket = db.Tiket;
const Jenis_tiket = db.Jenis_tiket;
const Op = db.Sequelize.Op;

// Create and Save new Pemesanan
exports.create = async (req, res) => {
  // Get Ticket Id
  const id = req.params.id;
  // Get Ticket by Id
  const tiket = await getDataById(Tiket, id, res);
  // Get User Id
  const userId = "3492835";

  // Ticket stock validation
  if (req.body.jumlah_tiket > tiket.dataValues.stok) {
    console.error("Your order is out of stock");
    res.flash("alert-notif", "Your order is out of stock");
    return res.redirect("/" + id);
  } else if (req.body.jumlah_tiket <= 0) {
    console.error("The order cannot be null");
    res.flash("alert-notif", "The order cannot be null");
    return res.redirect("/" + id);
  }

  //Check Order eather exist or not
  const enumValues = db.Sequelize.literal(
    `"Pemesanan"."status" = 'pending'::"enum_pemesanans_status"`
  );
  let condition = { user_id: userId, status: enumValues };
  const orderCheck = await getDataByConds(Pemesanan, condition, res);

  let newOrder;
  if (orderCheck === null) {
    let pemesananData = {
      pemesanan_id: getRandomNumber(12),
      user_id: userId,
      pembayaran_id: getRandomNumber(12),
      tanggal_pesan: new Date(),
      total_harga: 0,
    };

    createData(Pemesanan, pemesananData, res);
    newOrder = await getDataByConds(Pemesanan, condition, res);
  }
  newOrder = await getDataByConds(Pemesanan, condition, res);

  const detailPemesananConds = {
    tiket_id: tiket.dataValues.id.toString(),
    pemesanan_id: newOrder.dataValues.id.toString(),
  };

  //Check Detail_order eather exist or not
  let detailPemesananCheck = await getDataByConds(
    Detail_pemesanan,
    detailPemesananConds
  );

  var jenisTiket = await getDataByConds(Jenis_tiket, {
    id: tiket.dataValues.jenis_tiket_id,
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

    createData(Detail_pemesanan, detailPemesanan, res);
  } else {
    //Update Detail_order data
    let detailPemesanan = await getDataByConds(
      Detail_pemesanan,
      detailPemesananConds
    );

    // Add current jumlah_tiket to existing jumlah_tiket
    detailPemesanan.dataValues.jumlah_tiket += req.body.jumlah_tiket;

    //Current Price
    let newDetailOrderPrice =
      jenisTiket.dataValues.harga * req.body.jumlah_tiket;

    // Add current price to existing price
    detailPemesanan.dataValues.total_harga += newDetailOrderPrice;

    updateData(Detail_pemesanan, detailPemesanan, res);
  }
  //Update Total price of orders
  let pemesanan = await getDataByConds(Pemesanan, condition, res);

  pemesanan.dataValues.total_harga +=
    jenisTiket.dataValues.harga * req.body.jumlah_tiket;

  updateData(Pemesanan, pemesanan, res);
  // res.flash("notif", "Order is successfully added to cart");
  return res.redirect("/checkout");
};

// Retrieve all pemesanan by User for checkout.
exports.checkout = async (req, res) => {
  const userId = "2434243";

  const enumValues = db.Sequelize.literal(
    `"Pemesanan"."status" = 'pending'::"enum_pemesanans_status"`
  );
  let condition = { user_id: userId, status: enumValues };

  let pemesanan = await getDataByConds(Pemesanan, condition, res);
  let detailPemesanan = {};

  if (pemesanan !== null) {
    detailPemesanan = await getSomeDataByConds(
      Detail_pemesanan,
      {
        pemesanan_id: pemesanan.dataValues.id.toString(),
      },
      res
    );
  }

  return res.send({ pemesanan, detailPemesanan });
};

// Find single Pemesanan with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  const data = getDataById(Pemesanan, id, res);

  res.send(data);
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
