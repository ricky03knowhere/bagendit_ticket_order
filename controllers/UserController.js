const {
  getSomeDataByConds,
  getDataById,
  updateData,
  deleteData,
} = require("../interfaces/RepositoryInterface");
const db = require("../models");
const User = db.User;

// Retrieve all user from the database.
exports.findAll = async (req, res) => {
  const users = await getSomeDataByConds(User, {}, res);
  return res.send(users);
};

// Find a single User with an id
exports.findOne = async (req, res) => {
  const id = req.params.id;
  const user = await getDataById(User, id, res);
  return res.send(user);
};

// Update a user by Id
exports.update = (req, res) => {
  const id = req.params.id;
  let newData = { id, dataValues: req.body };
  updateData(User, newData, res);
  // res.flush('notif', 'Your profile successfully updated...');
  return res.redirect("/api/user/" + id);
};

// Delete a user by Id
exports.delete = (req, res) => {
  const id = req.params.id;
  deleteData(User, id, res);
  // res.flush('notif', 'User data successfully deleted...');
  return res.redirect("/api/user/");
};
