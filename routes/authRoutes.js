const { login, register } = require("../controllers/authController");

const router = require("express").Router();

// Login page
router.get("/login", (req, res) => res.render("pages/login"));
// Register page
router.get("/register", register);

// Login
router.post("/login", login);
// Register
router.post("/register", register);

module.exports = {
  routes: router,
};
