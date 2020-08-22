const express = require('express');
const routes = express.Router();

const havestDataValidationMiddleware = require('../middlewares/HavestDataValidationMiddleware');

const havestController = require('../controllers/HavestController');

routes.get('/havest', havestDataValidationMiddleware.index, havestController.index);
routes.get('/havest/:id', havestDataValidationMiddleware.show, havestController.show);
routes.post('/havest', havestDataValidationMiddleware.store, havestController.store);
routes.put('/havest/:id', havestDataValidationMiddleware.update, havestController.update);
routes.delete('/havest/:id', havestDataValidationMiddleware.destroy, havestController.destroy);

module.exports = routes;