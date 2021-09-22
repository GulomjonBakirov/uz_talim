const { lessonModel } = require("../models/darslik");
exports.get = (req, res) => {
  const type = req.query.type;
  if (!type) {
    lessonModel.find().then((e) => {
      lessonModel.find({}).then((eb) => {
        res.render("./pages/darslik", {
          user: req.user,
          lessons: eb,
          lessonsType: e,
        });
      });
    });
  }else{
    lessonModel.find({type}).then((e) => {
      lessonModel.find({}).then((eb) => {
        res.render("./pages/darslik", {
          user: req.user,
          lessons: eb,
          lessonsType: e,
        });
      });
    });
  }
};

exports.getType = (req, res) => {
  const id = req.params.id;
  console.log(id);
  lessonModel.findById(id).then((e) => {
    console.log(e);
    res.render("./pages/dars", {
      user: req.user,
      lesson: e,
    });
  });
};
