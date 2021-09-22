const express = require('express')
const profilController = require('../controllers/profilim')
const Router = express.Router()
Router.route('/').get(profilController.get).put(profilController.put)
exports.profilrouter = Router