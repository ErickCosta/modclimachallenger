const express = require('express');
const routes = express.Router();
const fieldDataValidationMiddleware = require('../middlewares/FieldDataValidationMiddleware');
const fieldController = require('../controllers/FieldController');

routes.get('/field', fieldDataValidationMiddleware.index, fieldController.index);
routes.get('/field/:id', fieldDataValidationMiddleware.show, fieldController.show);
routes.post('/field', fieldDataValidationMiddleware.store, fieldController.store);
routes.put('/field/:id', fieldDataValidationMiddleware.update, fieldController.update);
routes.delete('/field/:id', fieldDataValidationMiddleware.destroy, fieldController.destroy);

module.exports = routes;