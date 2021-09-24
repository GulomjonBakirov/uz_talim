const jwt = require("jsonwebtoken");
require("dotenv").config();
exports.generate = (user, cb) => {
  try {
    const token = jwt.sign(
      {
        user,
      },
      process.env.JWTSECRET || "secretkey",
      { expiresIn: "100d" }
    );
    cb(null, token);
  } catch (er) {
    cb(er);
  }
};
exports.verify = (token, cb) => {
  try {
    const decoded = jwt.verify(token, process.env.JWTSECRET || "secret");
    cb(null, decoded);
  } catch (error) {
    cb(error);
  }
};
