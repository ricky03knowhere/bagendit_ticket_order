const router = require("express").Router();
const { index } = require("../controllers/HomeController");
const { authValidation } = require("../middleware/authValidation");

// Create new User
router.get("/", authValidation, index);
module.exports = {
  routes: router,
};
