exports.isAdmin = (req, res, next) => {
  if (req.user.type == "user") {
    return res.redirect("/");
  }
  next();
};
