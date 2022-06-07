const { login } = require("../controllers/authController");

const router = require("express").Router();

// Login
router.post("/", login);

module.exports = {
  routes: router,
};
