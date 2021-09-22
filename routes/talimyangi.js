const express = require('express')
const talimyangiController = require('../controllers/talimyangi')
const Router = express.Router()
Router.route('/').get(talimyangiController.get)
Router.route('/:id').get(talimyangiController.getType)
exports.talimrouter = Router