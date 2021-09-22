const express = require("express");
require("dotenv").config();
const { boshqaruvrouter } = require("./routes/boshqaruv");
const { darslikrouter } = require("./routes/darslik");
const { audiorouter } = require("./routes/audio");
const { aboutrouter } = require("./routes/about");
const { maqolarouter } = require("./routes/maqolalar");
const { talimrouter } = require("./routes/talimyangi");
// const { fanrouter } = require("./routes/fanyangi");
const { loginrouter } = require("./routes/login");
const { profilrouter } = require("./routes/profilim");
const { auth } = require("./utils/auth");
const { isAdmin } = require("./utils/isAdmin");
const mb = require("./createSuperUser");
const app = express();
const ejs = require("ejs");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.resolve("public")));
app.set("view engine", "ejs");

/* mongoose
  .connect(process.env.MONGODBHOST || "mongodb://localhost:27017/uztalim", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("mongodb connection is successfull");
  })
  .catch((err) => {
    console.log(err);
  }); */
mb();

app.use("/", loginrouter);
app.use(auth);
app.use("/darslik", darslikrouter);
app.use("/audio", audiorouter);
app.use("/about", aboutrouter);
app.use("/maqolalar", maqolarouter);
app.use("/yangiliklar", talimrouter);
app.use("/profil", profilrouter);
app.use("/control", isAdmin, boshqaruvrouter);
app.all("*", (req, res) => {
  throw new Error("page not found");
});
app.use((err, req, res, next) => {
  if (err) {
    res.render("./pages/error.ejs", {
      err,
      message: err.message,
      user: req.user,
    });
  }
});
app.listen(process.env.PORT || 4000, (c) => {
  console.log("server is running on port ", process.env.PORT || 3000);
});
