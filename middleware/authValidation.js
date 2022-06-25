const jwt = require("jsonwebtoken");

exports.authValidation = (req, res, next) => {
  const token = req.cookies.jwt
  if (!token) {
    return res.status(401).send("Access denied!");
  }

  try {
    const key = process.env.JWT_TOKEN || "secretToken";
    const verification = jwt.verify(token, key);
    req.user = verification;
    return next();
  } catch (err) {
    console.log(err);
    return res.status(400).send("Invalid token!");
  }
};