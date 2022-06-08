const { index } = require("../controllers/TransactionController");

const router = require("express").Router();

router.get("/", index);

module.exports = {
  routes: router,
};
