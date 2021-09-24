const mongoose = require("mongoose");
const { userModel } = require("./models/user");
require("dotenv").config();
const mb = () =>
  mongoose
    .connect(process.env.MONGODBHOST || "mongodb://localhost:27017/uztalim", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("mongodb connection is successfull");
      userModel
        .deleteMany({})
        .then((users) => {
          userModel
            .create({
              login: "Super",
              password: "12345",
              type: "superAdmin",
            })
            .then((user) => {
              console.log(user);
            })
            .catch((err) => {});
          userModel
            .create({
              login: "admin",
              password: "123456",
              type: "admin",
            })
            .then((user) => {
              console.log(user);
            })
            .catch((err) => {
              console.log(err);
            });
          userModel
            .create({
              login: "user",
              password: "1234567",
              type: "user",
            })
            .then((user) => {
              console.log(user);
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
          process.exit(1);
        });
    })
    .catch((err) => {
      console.log(err);
    });

module.exports = mb;
