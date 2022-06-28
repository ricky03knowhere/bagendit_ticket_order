const {
  getDataByConds,
  createData,
} = require("../interfaces/RepositoryInterface");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const dotenv = require('dotenv')
const db = require("../models");
const { faker } = require("@faker-js/faker");
const { getRandomNumber } = require("../utils/getRandomDataVal");
const User = db.User;

exports.login = async (req, res) => {
  const { email, password } = req.body;
  let userData = await getDataByConds(
    User,
    {
      email: email,
    },
    res
  );

  if (!userData) {
    req.flash("alertNotif", "email belum terdaftar!");
    return res.redirect("/");
  }

  const passVerify = bcrypt.compareSync(password, userData.password);
  if (!passVerify) {
    req.flash("alertNotif", "email atau password invalid!");
    return res.redirect("/");
  }

  // Create JWT token
  const key = process.env.JWT_TOKEN || "secretToken";
  const token = jwt.sign(
    {
      id: userData.id,
      user_id: userData.user_id,
      no_telp: userData.no_telp,
      alamat: userData.alamat,
      email: userData.email,
      nama_lengkap: userData.nama_lengkap,
      is_admin: userData.is_admin,
      photo: userData.photo,
    },
    key
  );

  res.cookie("jwt", token, { httpOnly: true });

  if (userData.is_admin) {
    return res.redirect("/api/home/dashboard");
  } else {
    return res.header("auth-token", token).redirect("/api/transaction/order");
  }
};

exports.register = (req, res) => {
  let userData = {
    ...req.body,
    password: bcrypt.hashSync(req.body.password, 10),
    user_id: getRandomNumber(8).toString(),
    photo: faker.internet.avatar(),
  };
  createData(User, userData, res);

  // res.flush('notif', 'User data successfully registered...');
  return res.redirect("/api/auth/login");
};

exports.logout = (req, res) => {
  res.cookie("jwt", "");
  req.flash("notif", "Anda telah logout");
  res.redirect("/");
};
