const express = require('express')
const aboutController = require('../controllers/about')
const Router = express.Router()
Router.route('/').get(aboutController.get)
exports.aboutrouter = Router