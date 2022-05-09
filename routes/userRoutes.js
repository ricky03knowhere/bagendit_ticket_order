module.exports = (app) => {
  const user = require("../controllers/UserController");
  var router = require("express").Router();

  // Create new User
  router.post("/", user.create);
  // Retrieve all Users
  router.get("/", user.findAll);
  // Retrieve single User with id
  router.get("/:id", user.findOne);
  // Update User with id
  router.put("/:id", user.update);
  // Delete User with id
  router.delete("/:id", user.delete);

  app.use("/api/user", router);
};
