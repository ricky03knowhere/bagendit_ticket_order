const { login, register } = require("../controllers/authController");

const router = require("express").Router();

// Login
router.post("/login", login);
// Register
router.post("/register", register);

module.exports = {
  routes: router,
};
