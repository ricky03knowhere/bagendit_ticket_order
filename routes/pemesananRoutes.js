const router = require("express").Router();
const {
  create,
  checkout,
  checkoutConfirmation,
} = require("../controllers/PemesananController");

// Create new Pemesanan
router.post("/:id", create);
// Checkout Pemesanans
router.get("/checkout", checkout);
// Checkout confirmation Pemesanans
router.get("/checkout/confirm", checkoutConfirmation);

module.exports = {
  routes: router,
};
