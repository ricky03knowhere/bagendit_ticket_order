const router = require("express").Router();
const user = require("../controllers/UserController");
const { authValidation } = require("../middleware/authValidation");

// Retrieve all Users
router.get("/", authValidation, user.findAll);
// Retrieve single User with id
// router.get("/:id", authValidation, user.findOne);
// Update User with id
router.put("/:id", authValidation, user.update);
// Delete User with id
router.delete("/:id", authValidation, user.delete);

router.get("/profile", authValidation, (req, res) =>
  res.render("pages/profile", {
    title: "Profil",
    user: req.user,
    layout: "layouts/index",
  })
);

module.exports = {
  routes: router,
};
