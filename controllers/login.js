const { generate,verify } = require("../utils/token");
const { userModel } = require("../models/user");
exports.post = (req, res) => {
  if (!req.body.login) {
    return res.json({ message: "loginni kiriting", status: "xato" });
  }
  if (!req.body.password) {
    return res.json({ message: "parolni kiriting", status: "xato" });
  }

  userModel
    .findOne({ login: req.body.login })
    .then((val) => {
      if (!val) {
        throw new Error();
      }

      val.comparePassword(req.body.password, (err, is) => {
        if (!is || err) {
          return res.json({ message: "login yoki parol xato", status: "xato" });
        }
        generate(
          {
            id: val._id,
            login: val.login,
            type: val.type,
          },
          (err, token) => {
            console.log("object");
            if (err)
              return res.json({
                status: "err",
                message: "tushunib bolmaydigan xatolik yuz berdi",
              });
            res.cookie("token", token, { maxAge: 1000 * 60 * 60 * 24 });
            return res.send({
              status: "OK",
              message: "Muvaffaqiyatli",
            });
          }
        );
      });
    })
    .catch((err) => {
      return res.json({ message: "login yoki parol xato", status: "xato" });
    });
};

exports.get = (req, res) => {
  if (!req.cookies["token"]) {
    return res.render("./pages/login.ejs");
  }
  const token = req.cookies["token"];
  verify(token, (err, decoded) => {
    if (err) return res.render("./pages/login.ejs");
    userModel
      .findById(decoded.user.id)
      .then((user) => {
        if (!user) {
          return res.render("./pages/login.ejs");
        }
       return res.redirect("/darslik")
      })
      .catch((err) => {
        return res.render("./pages/login.ejs");
      });
  });
};
