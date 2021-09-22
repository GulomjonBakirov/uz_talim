const express = require('express')
const darslikController = require('../controllers/home')
const Router = express.Router()
Router.route('/').get(darslikController.get)
Router.route('/:id').get(darslikController.getType)
exports.darslikrouter = Router