const router = require("express").Router();
const { admin } = require("../controllers/HomeController");
const { authValidation } = require("../middleware/authValidation");

router.get("/dashboard",authValidation, admin);
module.exports = {
  routes: router,
};
