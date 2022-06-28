const {
  getDataByConds,
  getSomeDataByConds,
} = require("../interfaces/RepositoryInterface");
const { sequelize } = require("../models");

const db = require("../models");
const Pemesanan = db.Pemesanan;
const Detail_pemesanan = db.Detail_pemesanan;
const Tiket = db.Tiket;

// History Pemesanan
exports.index = async (req, res) => {
  const userId = req.user.id;
  const enumValues = db.Sequelize.literal(
    `"Pemesanan"."status" != 'pending'::"enum_pemesanans_status"`
  );
  const pemesanan = await Pemesanan.findAll({
    where: { user_id: userId, status: enumValues },
    order: sequelize.literal("created_at DESC"),
  });

  if (pemesanan.length === 0) {
    return res.send({ pemesanan: null });
  }

  let count = [];

  for (let i = 0; i <= pemesanan.length; i++) {
    if (pemesanan[i] != null) {
      let data = await Detail_pemesanan.findAll({
        where: {
          pemesanan_id: pemesanan[i].id,
        },
        attributes: [
          "jumlah_tiket",
          [sequelize.fn("sum", sequelize.col("jumlah_tiket")), "total"],
        ],
        group: ["Detail_pemesanan.jumlah_tiket"],
        raw: true,
      })
        .then((data) => data)
        .catch((err) => console.log(err));

      count.push(data[0].jumlah_tiket);
    } else {
      return res.render("pages/history", {
        layout: "layouts/index",
        title: "Order History",
        user: req.user,
        pemesanan,
        total: count,
      });
    }
  }
};

// History Pemesanan Detail
exports.detail = async (req, res) => {
  const id = req.params.id;

  let detailPemesanan = await Detail_pemesanan.findAll({
    where: { pemesanan_id: id },
    include: { model: Tiket },
  });

  let pemesanan = await getDataByConds(Pemesanan, { id: id }, res);
  // res.json([detailPemesanan, pemesanan]);
  res.render("pages/detailHistory", {
    layout: "layouts/index",
    title: "Your Order",
    user: req.user,
    notif: req.flash("notif"),
    detailPemesanan,
    pemesanan,
  });
};
