const { verify } = require("./token");
const { userModel } = require("../models/user");
exports.auth = (req, res, next) => {
  if (!req.cookies["token"]) {
    return res.redirect("/");
  }
  const token = req.cookies["token"];
  verify(token, (err, decoded) => {
    if (err) throw new Error(err);
    userModel
      .findById(decoded.user.id)
      .then((user) => {
        if (!user) {
          return res.redirect("/");
        }
        req.user = {
          id:user._id,
          type:user.type,
          login:user.login
        };

        next();
      })
      .catch((err) => {
        return res.redirect("/");
      });
  });
};
