const { audioModel } = require("../models/audio");
exports.get = (req, res) => {
  audioModel
    .find({})
    .then((e) => {
      res.render("./pages/audio", {
        user: req.user,
        audios: e,
      });
    })
    .catch((err) => {
      res.render("./pages/error", {
        error: err.message,
      });
    });
};
