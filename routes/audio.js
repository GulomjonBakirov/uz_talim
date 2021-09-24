const express = require('express')
const audioController = require('../controllers/audio')
const Router = express.Router()
Router.route('/').get(audioController.get)
exports.audiorouter = Router