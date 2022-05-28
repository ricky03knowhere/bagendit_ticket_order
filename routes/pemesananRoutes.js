module.exports = (app) => {
  const pemesanan = require("../controllers/PemesananController");
  var router = require("express").Router();

  // Create new Pemesanan
  router.post("/:id", pemesanan.create);
  // Retrieve all Pemesanans
  router.get("/", pemesanan.findAll);
  // Checkout Pemesanans
  router.get("/checkout", pemesanan.findAll);
  // Retrieve single Pemesanan with id
  router.get("/:id", pemesanan.findOne);
  // Delete Pemesanan with id
  router.delete("/:id", pemesanan.delete);

  app.use("/api/pemesanan", router);
};
