const {
  getDataByConds,
  getSomeDataByConds,
} = require("../interfaces/RepositoryInterface");
const { sequelize } = require("../models");

const db = require("../models");
const Pemesanan = db.Pemesanan;
const Detail_pemesanan = db.Detail_pemesanan;

// History Pemesanan
exports.index = async (req, res) => {
  const userId = req.user.user_id;
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
          pemesanan_id: pemesanan[i].id.toString(),
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

      count.push(data[0]);
    } else {
      return res.send({ pemesanan, count });
    }
  }
};

// History Pemesanan Detail
exports.detail = async (req, res) => {
  const id = req.params.id;

  let detailPemesanan = await getSomeDataByConds(
    Detail_pemesanan,
    { pemesanan_id: id },
    res
  );
  let pemesanan = await getDataByConds(Pemesanan, { id: id }, res);
  res.send({ detailPemesanan, pemesanan });
};
