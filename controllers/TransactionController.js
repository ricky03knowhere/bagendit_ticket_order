const db = require("../models");
const Loket = db.Loket;
const Tiket = db.Tiket;

// exports.index = async (req, res) => {

// };

exports.order = async (req, res) => {
  const lokets = await Loket.findAll({
    include: {
      model: Tiket,
    },
    order: [["id", "ASC"]],
  });

  //  console.log(req.user);
  return res.render("pages/order", {
    title: "Order",
    layout: "layouts/index",
    lokets: JSON.stringify(lokets),
    user: req.user,
    alertNotif: req.flash("alertNotif"),
  });
};
