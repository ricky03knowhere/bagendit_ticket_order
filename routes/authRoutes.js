const { login, register, logout } = require("../controllers/authController");

const router = require("express").Router();

// Login page
router.get("/login", (req, res) => {
  const token = req.cookies.jwt;
  if (token) {
    if (req.user) {
      return res.redirect("/");
    } else {
      return res.redirect("/api/transaction/order");
    }
  } else {
    return res.render("pages/login", {
      title: "Login Page",
      layout: "layouts/auth",
      alertNotif: req.flash("alertNotif"),
      notif: req.flash("notif"),
    });
  }
});
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
// Logout
router.get("/logout", logout);

module.exports = {
  routes: router,
};
