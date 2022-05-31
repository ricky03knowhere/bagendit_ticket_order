const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const db = require("./models");

// Session utilities
const session = require("express-session");
const cookie = require("cookie-parser");
const flash = require("connect-flash");
const { pemesananRoutes, historyRoutes } = require("./routes");

// db.sequelize.sync();

// <<--- Third-praty middleware Start --->>
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

// simple route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to ticket-order application.",
  });
});

app.use("/api/pemesanan/history", historyRoutes.routes);
app.use("/api/pemesanan", pemesananRoutes.routes);

// set port, listen for requests
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
