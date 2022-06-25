const { index, order } = require("../controllers/TransactionController");
const { authValidation } = require("../middleware/authValidation");

const router = require("express").Router();

// router.get("/", index);
router.get("/order", authValidation, order);
module.exports = {
  routes: router,
};
