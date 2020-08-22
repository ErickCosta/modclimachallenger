const express = require('express');
const routes = express.Router();

const defaultDataValidationMiddleware = require('../middlewares/DefaultDataValidationMiddleware');

const defaultController = require('../controllers/DefaultController');

routes.get('/', defaultDataValidationMiddleware.main, defaultController.main);

module.exports = routes;