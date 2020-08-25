const express = require('express');
const routes = express.Router();

const farmDataValidationMiddleware = require('../middlewares/FarmDataValidationMiddleware');

const farmController = require('../controllers/FarmController');

routes.get('/farm', farmDataValidationMiddleware.index, farmController.index);
routes.get('/farm/:id', farmDataValidationMiddleware.show, farmController.show);
routes.post('/farm', farmDataValidationMiddleware.store, farmController.store);
routes.put('/farm/:id', farmDataValidationMiddleware.update, farmController.update);
routes.delete('/farm/:id', farmDataValidationMiddleware.destroy, farmController.destroy);

module.exports = routes;