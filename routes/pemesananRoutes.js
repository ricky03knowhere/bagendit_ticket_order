module.exports = (app) => {
  const pemesanan = require("../controllers/PemesananController copy");
  var router = require("express").Router();

  // Create new Pemesanan
  router.post("/", pemesanan.create);
  // Retrieve all Pemesanans
  router.get("/", pemesanan.findAll);
  // Retrieve single Pemesanan with id
  router.get("/:id", pemesanan.findOne);
  // Delete Pemesanan with id
  router.delete("/:id", pemesanan.delete);

  app.use("/api/pemesanan", router);
};
