module.exports = (app) => {
  const pemesanan = require("../controllers/PemesananController");
  var router = require("express").Router();

  // Create new Pemesanan
  router.post("/:id", pemesanan.create);
  // Checkout Pemesanans
  router.get("/checkout", pemesanan.checkout);
  // Retrieve all Pemesanans
  // router.get("/", pemesanan.findAll);
  // Retrieve single Pemesanan with id
  router.get("/:id", pemesanan.findOne);
  // Delete Pemesanan with id
  router.delete("/:id", pemesanan.delete);

  app.use("/api/pemesanan", router);
};
