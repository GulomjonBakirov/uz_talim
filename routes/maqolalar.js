const express = require('express')
const maqolaController = require('../controllers/maqolalar')
const Router = express.Router()
Router.route('/').get(maqolaController.get)
Router.route('/:id').get(maqolaController.getType)
exports.maqolarouter = Router