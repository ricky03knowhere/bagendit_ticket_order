const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const expressEjsLayouts = require("express-ejs-layouts");
const app = express();

const db = require("./models");

// Session utilities
const session = require("express-session");
const cookie = require("cookie-parser");
const flash = require("connect-flash");
const {
  pemesananRoutes,
  historyRoutes,
  homeRoutes,
  userRoutes,
  authRoutes,
  transactionRoutes,
  resourceRoutes,
} = require("./routes");

// db.sequelize.sync();
app.set("view engine", "ejs");
app.set("layout", "layouts/main-layouts");

// <<--- Third-praty middleware Start --->>
app.use(express.static("public"));
app.use(expressEjsLayouts);
app.use(
  session({
    resave: true,
    secret: "secret",
    saveUninitialized: true,
    cookie: {
      maxAge: 6000,
    },
  })
);

app.use(cookie("secret"));
app.use(flash());

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));
// <<--- Third-praty middleware End --->>

// <<--- Buit-in middleware Start --->>
// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(
  express.urlencoded({
    extended: true,
  })
);
// <<--- Buit-in middleware End --->>

app.use(express.static("public"));
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.render("pages/login", {
    title: "Login Page",
    layout: "layouts/auth",
    alertNotif: req.flash("alertNotif"),
  });
});

app.use("/api/home", homeRoutes.routes);
app.use("/api/user", userRoutes.routes);
app.use("/api/auth", authRoutes.routes);
app.use("/api/pemesanan/history", historyRoutes.routes);
app.use("/api/pemesanan", pemesananRoutes.routes);
app.use("/api/transaction", transactionRoutes.routes);

app.use("/api/resource", resourceRoutes.routes);

// set port, listen for requests
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
