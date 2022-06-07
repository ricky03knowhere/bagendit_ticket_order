const router = require("express").Router();
const {
  index,
  create,
  checkout,
  checkoutConfirmation,
  remove,
} = require("../controllers/PemesananController");
const { authValidation } = require("../middleware/authValidation");

// Create new Pemesanan
router.post("/:id", authValidation, create);
// Checkout Pemesanans
router.get("/checkout", authValidation, checkout);
// Checkout confirmation Pemesanans
router.get("/checkout/confirm", authValidation, checkoutConfirmation);
// Get Tiket to Pemesanan
router.get("/:id", authValidation, index);
// Remove Pemesanan
router.delete("/remove/:id", authValidation, remove);

module.exports = {
  routes: router,
};
