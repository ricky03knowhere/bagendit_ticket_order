const { tiket, loket } = require("../controllers/TiketController");
const { index } = require("../controllers/ObjWisataController");
const { authValidation } = require("../middleware/authValidation");
const { transaksi, pemesanan } = require("../controllers/TransactionController");

const router = require("express").Router();

// Tiket
router.get("/tiket", authValidation, async (req, res) => {
  return res.render("masterData/tiket", {
    layout: "layouts/index",
    icon: '<i class="fa fa-ticket me-2"></i>',
    title: "Data Tiket",
    user: req.user,
    data: await tiket(),
  });
});
// Loket
router.get("/loket", authValidation, async (req, res) =>
  res.render("masterData/loket", {
    icon: `<i class="fa fa-store me-2"></i>`,
    title: "Data Loket",
    user: req.user,
    layout: "layouts/index",
    data: await loket(),
  })
);
// Objek wisata
router.get("/objWisata", authValidation, async (req, res) =>
  res.render("masterData/objWisata", {
    icon: `<i class="fa fa-umbrella-beach me-2"></i>`,
    title: "Data Objek wisata",
    user: req.user,
    layout: "layouts/index",
    data: await index(),
  })
);
// Transaksi
router.get("/transaksi", authValidation, async (req, res) =>
  res.render("masterData/transaksi", {
    icon: `<i class="fa fa-money-bill-trend-up me-2"></i>`,
    title: "Data Transaksi",
    user: req.user,
    layout: "layouts/index",
    data: await transaksi(),
  })
);
// Pemesanan
router.get("/pemesanan", authValidation, async (req, res) =>
  res.render("masterData/pemesanan", {
    icon: `<i class="fa fa-money-check-dollar me-2"></i>`,
    title: "Data Pemesanan",
    user: req.user,
    layout: "layouts/index",
    data: await pemesanan(),
  })
);

module.exports = {
  routes: router,
};
