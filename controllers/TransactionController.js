const db = require("../models");
const Loket = db.Loket;
const Tiket = db.Tiket;
const Pembayaran = db.Pembayaran;
const Jenis_pembayaran = db.Jenis_pembayaran;
const Pemesanan = db.Pemesanan;

// exports.index = async (req, res) => {

// };

exports.order = async (req, res) => {
  const lokets = await Loket.findAll({
    include: {
      model: Tiket,
    },
    order: [["id", "ASC"]],
  });

  //  console.log(req.user);
  return res.render("pages/order", {
    title: "Order",
    layout: "layouts/index",
    lokets: JSON.stringify(lokets),
    user: req.user,
    alertNotif: req.flash("alertNotif"),
  });
};

exports.transaksi = async () => {
  const data = await Pembayaran.findAll({limit: 300, include: {model: Jenis_pembayaran}});
  return data;
};

exports.pemesanan = async () => {
  const data = await Pemesanan.findAll({limit: 300});
  return data;
};
