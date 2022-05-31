const { index, detail } = require("../controllers/HistoryController");

const router = require("express").Router();

// History Pemesanans
router.get("/", index);
// History Pemesanans Detail
router.get("/:id", detail);

module.exports = {
  routes: router,
};
