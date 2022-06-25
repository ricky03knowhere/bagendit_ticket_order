const { login, register } = require("../controllers/authController");

const router = require("express").Router();

// Login page
router.get("/login", (req, res) =>
  res.render("pages/login", {
    title: "Login Page",
    layout: "layouts/auth",
    alertNotif: req.flash('alertNotif')
  })
);
// Register page
router.get("/register", (req, res) =>
  res.render("pages/register", {
    title: "Register Page",
    layout: "layouts/auth",
  })
);

// Login
router.post("/login", login);
// Register
router.post("/register", register);

module.exports = {
  routes: router,
};
