const express = require("express");
const {get,post} = require("../controllers/login");
const Router = express.Router();
Router.route("/").post(post).get(get);
exports.loginrouter = Router;
