const router = require("express").Router();
const {
  index,
  create,
  checkout,
  checkoutConfirmation,
  remove,
} = require("../controllers/PemesananController");

// Create new Pemesanan
router.post("/:id", create);
// Checkout Pemesanans
router.get("/checkout", checkout);
// Checkout confirmation Pemesanans
router.get("/checkout/confirm", checkoutConfirmation);
// Get Tiket to Pemesanan
router.get("/:id", index);
// Remove Pemesanan
router.delete("/remove/:id", remove);

module.exports = {
  routes: router,
};
