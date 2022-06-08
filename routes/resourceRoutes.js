const tiket = require("../controllers/TiketController");
const jenisPembayaran = require("../controllers/JenisPembayaranController");
const objekWisata = require("../controllers/ObjWisataController");

const router = require("express").Router();

// Tiket
router.get("/tiket", tiket.index);
// Jenis pembayaran
router.get("/jenisPembayaran", jenisPembayaran.index);
// Objek wisata
router.get("/objekWisata", objekWisata.index);

module.exports = {
  routes: router,
};
