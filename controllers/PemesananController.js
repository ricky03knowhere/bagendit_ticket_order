const {
  getDataById,
  getDataByConds,
  createData,
  updateData,
  getSomeDataByConds,
  deleteData,
} = require("../interfaces/PemesananInterface");
const db = require("../models");

const { getRandomNumber } = require("../utils/getRandomInt");

const Pemesanan = db.Pemesanan;
const Detail_pemesanan = db.Detail_pemesanan;
const Tiket = db.Tiket;
const Jenis_tiket = db.Jenis_tiket;

// Get ticket
exports.index = async (req, res) => {
  const id = req.params.id;

  const { dataValues: tiket } = await getDataByConds(Tiket, { id: id }, res);

  res.send(tiket);
};

// Create and Save new Pemesanan
exports.create = async (req, res) => {
  // Get Ticket Id
  const id = req.params.id;
  // Get Ticket by Id
  const { dataValues: tiket } = await getDataById(Tiket, id, res);
  // Get User Id
  const userId = "8329892";

  // Ticket stock validation
  if (req.body.jumlah_tiket > tiket.stok) {
    console.error("Your order is out of stock");
    // res.flash("alert-notif", "Your order is out of stock");
    return res.redirect("/api/pemesanan/" + id);
  } else if (req.body.jumlah_tiket <= 0) {
    console.error("The order cannot be null");
    // res.flash("alert-notif", "The order cannot be null");
    return res.redirect("/api/pemesanan/" + id);
  }

  //Check Order eather exist or not
  const enumValues = db.Sequelize.literal(
    `"Pemesanan"."status" = 'pending'::"enum_pemesanans_status"`
  );
  let condition = {
    user_id: userId,
    status: enumValues,
  };
  const orderCheck = await getDataByConds(Pemesanan, condition, res);

  let newOrder = {};
  if (orderCheck === null) {
    let pemesananData = {
      pemesanan_id: getRandomNumber(12),
      user_id: userId,
      pembayaran_id: getRandomNumber(12),
      tanggal_pesan: new Date(),
      total_harga: 0,
    };

    createData(Pemesanan, pemesananData, res);

    ({ dataValues: newOrder } = await getDataByConds(
      Pemesanan,
      condition,
      res
    ));
  }
  ({ dataValues: newOrder } = await getDataByConds(Pemesanan, condition, res));

  const detailPemesananConds = {
    tiket_id: tiket.id.toString(),
    pemesanan_id: newOrder.id.toString(),
  };

  //Check Detail_order eather exist or not
  let detailPemesananCheck = await getDataByConds(
    Detail_pemesanan,
    detailPemesananConds
  );

  var { dataValues: jenisTiket } = await getDataByConds(Jenis_tiket, {
    id: tiket.jenis_tiket_id,
  });

  if (detailPemesananCheck === null) {
    //Store Detail_order data
    let detailPemesanan = {
      detail_pemesanan_id: getRandomNumber(8),
      pemesanan_id: newOrder.id,
      tiket_id: tiket.id,
      tanggal_wisata: new Date(),
      jumlah_tiket: req.body.jumlah_tiket,
      total_harga: jenisTiket.harga * req.body.jumlah_tiket,
    };

    createData(Detail_pemesanan, detailPemesanan, res);
  } else {
    //Update Detail_order data
    let { dataValues: detailPemesanan } = await getDataByConds(
      Detail_pemesanan,
      detailPemesananConds
    );

    // Add current jumlah_tiket to existing jumlah_tiket
    detailPemesanan.jumlah_tiket += req.body.jumlah_tiket;

    //Current Price
    let newDetailOrderPrice = jenisTiket.harga * req.body.jumlah_tiket;

    // Add current price to existing price
    detailPemesanan.total_harga += newDetailOrderPrice;

    updateData(Detail_pemesanan, detailPemesanan, res);
  }
  //Update Total price of orders
  let { dataValues: pemesanan } = await getDataByConds(
    Pemesanan,
    condition,
    res
  );

  pemesanan.total_harga += jenisTiket.harga * req.body.jumlah_tiket;

  updateData(Pemesanan, pemesanan, res);
  // res.flash("notif", "Order is successfully added to cart");
  return res.redirect("/api/pemesanan/checkout");
};

// Retrieve all pemesanan by User for checkout.
exports.checkout = async (req, res) => {
  const userId = "8329892";

  const enumValues = db.Sequelize.literal(
    `"Pemesanan"."status" = 'pending'::"enum_pemesanans_status"`
  );
  let condition = {
    user_id: userId,
    status: enumValues,
  };

  let pemesanan = await getDataByConds(Pemesanan, condition, res);
  let detailPemesanan = {};

  if (pemesanan !== null) {
    detailPemesanan = await getSomeDataByConds(
      Detail_pemesanan,
      {
        pemesanan_id: pemesanan.id.toString(),
      },
      res
    );
  }

  return res.send({
    pemesanan,
    detailPemesanan,
  });
};

// Checkout confirmation
exports.checkoutConfirmation = async (req, res) => {
  const user = {
    id: "8329892",
    alamat: "Kp.Ciduga RT 02 RW 09",
    no_telepon: "085861874609",
  };

  const enumValues = db.Sequelize.literal(
    `"Pemesanan"."status" = 'pending'::"enum_pemesanans_status"`
  );
  let condition = {
    user_id: user.id,
    status: enumValues,
  };
  let { dataValues: pemesanan } = await getDataByConds(
    Pemesanan,
    condition,
    res
  );
  console.log(pemesanan);
  if (user.alamat === null) {
    // res.flash('alert-notif', 'Please complete your identity first..');
    return res.redirect("/api/profile/edit");
  } else if (user.no_telepon === null) {
    // res.flash('alert-notif', 'Please complete your identity first..');
    return res.redirect("/api/profile/edit");
  } else {
    let detailPemesanan = await getSomeDataByConds(Detail_pemesanan, {
      pemesanan_id: pemesanan.id.toString(),
    });
    console.log(detailPemesanan);

    detailPemesanan.map(async ({ dataValues: pmsn }) => {
      let { dataValues: tiket } = await getDataByConds(Tiket, {
        id: parseInt(pmsn.tiket_id),
      });
      tiket.stok -= pmsn.jumlah_tiket;

      updateData(Tiket, tiket, res);
    });
  }

  pemesanan.status = "complete";

  updateData(Pemesanan, pemesanan, res);

  // res.flash('notif', 'Orders have been confirmed.')
  return res.redirect("/api/pemesanan/history/" + pemesanan.id);
};

// Remove pemesanan
exports.remove = async (req, res) => {
  const id = parseInt(req.params.id);

  let { dataValues: detailPemesanan } = await getDataByConds(
    Detail_pemesanan,
    { id: id },
    res
  );
  console.log(detailPemesanan);
  let { dataValues: pemesanan } = await getDataByConds(
    Pemesanan,
    { id: parseInt(detailPemesanan.pemesanan_id) },
    res
  );

  pemesanan.total_harga -= detailPemesanan.total_harga;
  console.log(pemesanan);
  updateData(Pemesanan, pemesanan, res);
  deleteData(Detail_pemesanan, detailPemesanan.id, res);

  let { dataValues: detailPemesananCheck } = await getDataByConds(
    Detail_pemesanan,
    { pemesanan_id: detailPemesanan.pemesanan_id },
    res
  );
  if (detailPemesananCheck === null) {
    deleteData(Pemesanan, pemesanan.id, res);
  }
  // res.flash('notif', 'Pemesanan telah dibatalkan');
  return res.redirect("/api/pemesanan/checkout");
};
