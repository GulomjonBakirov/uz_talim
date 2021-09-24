const { articleModel } = require("../models/maqola");
exports.get = (req, res) => {
  const page = req.query.page || 1;
  const per = 6;
  articleModel
    .find({})
    .skip((page - 1) * per)
    .limit(6)
    .then((e) => {
      articleModel.countDocuments().then((l) => {
        res.render("./pages/maqolalar", {
          user: req.user,
          articles: e,
          page: page,
          length: l,
        });
      });
    })
    .catch((err) => {
      res.render("./pages/error", {
        message: err.message,
        error: err,
      });
    });
};

exports.getType = (req, res) => {
  const id = req.params.id;
  console.log(id);
  articleModel.findById(id).then((e) => {
    res.render("./pages/maqola", {
      user: req.user,
      article: e,
    });
  });
};
