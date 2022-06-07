const { index, detail } = require("../controllers/HistoryController");
const { authValidation } = require("../middleware/authValidation");

const router = require("express").Router();

// History Pemesanans
router.get("/", authValidation, index);
// History Pemesanans Detail
router.get("/:id", authValidation, detail);

module.exports = {
  routes: router,
};
