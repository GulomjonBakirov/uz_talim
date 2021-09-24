const { userModel } = require("../models/user");
const { articleModel } = require("../models/maqola");
const { audioModel } = require("../models/audio");
const { newModel } = require("../models/yangilik");
const { lessonModel } = require("../models/darslik");

const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(path.resolve(), "public", req.dirnamefile));
  },
  filename: function (req, file, cb) {
    req.fileNameIs =
      file.fieldname + new Date() + path.extname(file.originalname);
    cb(null, req.fileNameIs);
  },
});
const storage2 = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log(path.join(path.resolve(), "public", req.dirnamefile1));
    console.log(path.join(path.resolve(), "public", req.dirnamefile2));
    if (file.fieldname == "image") {
      cb(null, path.join(path.resolve(), "public", req.dirnamefile1));
    } else {
      cb(null, path.join(path.resolve(), "public", req.dirnamefile2));
    }
  },
  filename: function (req, file, cb) {
    console.log(file);
    if (file.fieldname == "image") {
      req.fileNameIs1 =
        file.fieldname + new Date() + path.extname(file.originalname);
      cb(null, req.fileNameIs1);
    } else {
      req.fileNameIs2 =
        file.fieldname + new Date() + path.extname(file.originalname);
      cb(null, req.fileNameIs2);
    }
  },
});

const upload = multer({ storage }).single("image");
const upload1 = multer({ storage }).single("audio");
const upload2 = multer({ storage }).single("image");
const upload3 = multer({ storage: storage2 }).fields([
  {
    name: "image",
    maxCount: 1,
  },
  {
    name: "video",
    maxCount: 1,
  },
]);

exports.get = (req, res) => {
  res.render("./pages/boshqaruv", {
    user: req.user,
  });
};
exports.userget = (req, res) => {
  userModel
    .find({})
    .select("-password")
    .select("-__v")
    .then((users) => {
      return res.json({
        status: "OK",
        message: "Muvaffaqiyatli",
        data: users,
      });
    })
    .catch((err) => {
      return res.json({
        status: "err",
        message: err.message,
        error: err,
      });
    });
};
exports.userpost = (req, res) => {
  if (!req.body.login) {
    return res.json({ message: "loginni kiriting", status: "xato" });
  }
  if (!req.body.password) {
    return res.json({ message: "parolni kiriting", status: "xato" });
  }
  userModel
    .create({
      login: req.body.login,
      password: req.body.password,
    })
    .then((user) => {
      return res.json({ message: "Muvaffaqiyatli", status: "OK", data: user });
    })
    .catch((err) => {
      return res.json({ message: "ichki xato", status: "xato", error: err });
    });
};
exports.articleget = (req, res) => {
  articleModel
    .find({})
    .then((e) => {
      return res.json({
        status: "OK",
        message: "muvaffaqiyatli",
        data: e,
      });
    })
    .catch((err) => {
      return res.json({
        status: "err",
        message: "ichki xatolik",
        error: err,
      });
    });
};
exports.articlepost = (req, res) => {
  req.dirnamefile = "/images/articles";
  upload(req, res, (err) => {
    console.log(err);
    if (err)
      return res.json({
        status: "err",
        message: "fayl yuklashda xatolik yuz berdi",
        error: err,
      });
    articleModel
      .create({
        owner: req.user.id,
        title: req.body.title,
        content: req.body.content,
        image: req.dirnamefile + "/" + req.fileNameIs,
      })
      .then((file) => {
        return res.json({
          status: "OK",
          message: "muvaffaqiyatli",
          data: file,
        });
      })
      .catch((err) => {
        console.log(err);
        return res.json({
          status: "err",
          message: "ichki xatolik",
          error: err,
        });
      });
  });
};
exports.audioget = (req, res) => {
  audioModel
    .find({})
    .then((e) => {
      console.log(e);
      return res.json({
        status: "OK",
        message: "muvaffaqiyatli",
        data: e,
      });
    })
    .catch((err) => {
      return res.json({
        status: "err",
        message: "ichki xatolik",
        error: err,
      });
    });
};
exports.audiopost = (req, res) => {
  req.dirnamefile = "/audios";
  upload1(req, res, (err) => {
    if (err)
      return res.json({
        status: "err",
        message: "fayl yuklashda xatolik yuz berdi",
        error: err,
      });
    audioModel
      .create({
        owner: req.user.id,
        title: req.body.title,
        audio: req.dirnamefile + "/" + req.fileNameIs,
      })
      .then((file) => {
        return res.json({
          status: "OK",
          message: "muvaffaqiyatli",
          data: file,
        });
      })
      .catch((err) => {
        console.log(err);
        return res.json({
          status: "err",
          message: "ichki xatolik",
          error: err,
        });
      });
  });
};
exports.newget = (req, res) => {
  newModel
    .find({})
    .then((e) => {
      return res.json({
        status: "OK",
        message: "muvaffaqiyatli",
        data: e,
      });
    })
    .catch((err) => {
      return res.json({
        status: "err",
        message: "ichki xatolik",
        error: err,
      });
    });
};
exports.newpost = (req, res) => {
  req.dirnamefile = "/images/news";
  upload2(req, res, (err) => {
    if (err)
      return res.json({
        status: "err",
        message: "fayl yuklashda xatolik yuz berdi",
        error: err,
      });
    newModel
      .create({
        owner: req.user.id,
        title: req.body.title,
        content: req.body.content,
        type: req.body.type,
        image: req.dirnamefile + "/" + req.fileNameIs,
      })
      .then((file) => {
        return res.json({
          status: "OK",
          message: "muvaffaqiyatli",
          data: file,
        });
      })
      .catch((err) => {
        console.log(err);
        return res.json({
          status: "err",
          message: "ichki xatolik",
          error: err,
        });
      });
  });
};

exports.lessonget = (req, res) => {
  lessonModel
    .find({})
    .then((e) => {
      return res.json({
        status: "OK",
        message: "muvaffaqiyatli",
        data: e,
      });
    })
    .catch((err) => {
      return res.json({
        status: "err",
        message: "ichki xatolik",
        error: err,
      });
    });
};
exports.lessonpost = (req, res) => {
  req.dirnamefile1 = "/images/lessons";
  req.dirnamefile2 = "/videos";
  upload3(req, res, (err) => {
    if (err)
      return res.json({
        status: "err",
        message: "fayl yuklashda xatolik yuz berdi",
        error: err,
      });

    lessonModel
      .create({
        owner: req.user.id,
        title: req.body.title,
        content: req.body.content,
        type: +req.body.type,
        video: req.dirnamefile2 + "/" + req.fileNameIs2,
        image: req.dirnamefile1 + "/" + req.fileNameIs1,
      })
      .then((file) => {
        return res.json({
          status: "OK",
          message: "muvaffaqiyatli",
          data: file,
        });
      })
      .catch((err) => {
        console.log(err);
        return res.json({
          status: "err",
          message: "ichki xatolik",
          error: err,
        });
      });
  });
};
