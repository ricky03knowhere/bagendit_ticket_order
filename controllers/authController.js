const {
  getDataByConds,
  createData,
} = require("../interfaces/RepositoryInterface");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const dotenv = require('dotenv')
const db = require("../models");
const { faker } = require("@faker-js/faker");
const { getRandomNumber } = require("../utils/getRandomInt");
const User = db.User;

exports.login = async (req, res) => {
  const { email, password } = req.body;
  let userData = await getDataByConds(User, { email: email }, res);

  if (!userData) {
    return res.status(400).send("email belum terdaftar!");
  }

  const passVerify = bcrypt.compareSync(password, userData.password);
  if (!passVerify) {
    return res.status(400).send("email atau password invalid!");
  }

  // Create JWT token
  const key = process.env.JWT_TOKEN || "secretToken";
  const token = jwt.sign(
    {
      id: userData.id,
      user_id: userData.user_id,
      email: userData.email,
      is_admin: userData.is_admin,
      photo: userData.photo,
    },
    key
  );

  return res.header("auth-token", token).send("Login success.");
};

exports.register = (req, res) => {
  let userData = {
    ...req.body,
    user_id: getRandomNumber(8).toString(),
    photo: faker.internet.avatar(),
  };
  createData(User, userData, res);

  // res.flush('notif', 'User data successfully registered...');
  return res.redirect("/api/user/");
};
