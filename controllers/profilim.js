const { userModel } = require("../models/user");
exports.get = (req, res) => {
  res.render("./pages/profilim", {
    user: req.user,
  });
};
exports.put = (req, res) => {
  if (!req.body.login) {
    return res.json({ message: "loginni kiriting", status: "err" });
  }
  if (!req.body.password) {
    return res.json({ message: "parolni kiriting", status: "err" });
  }
  if (req.body.password.length < 8) {
    return res.json({
      message: "parolni uzunligi 8 ta belgidan kop bolishi kerak",
      status: "err",
    });
  }
  userModel
    .findByIdAndDelete(req.user.id, {
      ...req.body,
      type: req.user.type,
    })
    .then((user) => {
      userModel
        .create(req.body)
        .then((u) => {
          return res.json({ message: "Muvaffaqiyatli", status: "OK" });
        })
        .catch((err) => {
          return res.json({
            message: "Qandaydir xatolik yuz berdi",
            status: "err",
          });
        });
    })
    .catch((err) => {
      return res.json({
        message: "Qandaydir xatolik yuz berdi",
        status: "err",
      });
    });
};
