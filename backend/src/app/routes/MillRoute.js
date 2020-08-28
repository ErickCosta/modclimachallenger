const express = require('express');
const routes = express.Router();
const millDataValidationMiddleware = require('../middlewares/MillDataValidationMiddleware');
const millController = require('../controllers/MillController');

routes.get('/mill', millDataValidationMiddleware.index, millController.index);
routes.get('/mill/:id', millDataValidationMiddleware.show, millController.show);
routes.post('/mill', millDataValidationMiddleware.store, millController.store);
routes.put('/mill/:id', millDataValidationMiddleware.update, millController.update);
routes.delete('/mill/:id', millDataValidationMiddleware.destroy, millController.destroy);

module.exports = routes;