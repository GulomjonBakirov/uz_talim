const { newModel } = require("../models/yangilik");
exports.get = (req, res) => {
  console.log("ss")
  const type = req.query.type||'science'
  const page = req.query.page || 1;
  const per = 6;
  newModel
    .find({type})
    .skip((page - 1) * per)
    .limit(6)
    .then((e) => {
     newModel.find({type}).then((l) => {
        res.render("./pages/talimyangi", {
          user: req.user,
          news: e,
          page: page,
          length: l.length,
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
  const type = req.query.type || "science";
  const id = req.params.id;

  newModel.findOne({ type,id }).then((e) => {
   console.log(e)
    res.render("./pages/new", {
      user: req.user,
      newe: e,
    });
  }).catch(err=>{
    res.render("./pages/error", {
      message: err.message,
      error: err,
    });
  });
};
