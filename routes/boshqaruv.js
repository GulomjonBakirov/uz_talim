const express = require('express')
const b = require('../controllers/boshqaruv')

const Router = express.Router()

Router.route('/').get(b.get)
Router.route("/users").get(b.userget).post(b.userpost)
Router.route("/articles").get(b.articleget).post(b.articlepost)
Router.route("/audios").get(b.audioget).post(b.audiopost)
Router.route("/news").get(b.newget).post(b.newpost)
Router.route("/lessons").get(b.lessonget).post(b.lessonpost)

exports.boshqaruvrouter = Router