const express = require('express');
const { json } = require('express');
const routes = express.Router();

const fieldController = require('../controllers/FieldController');
const farmController = require('../controllers/FarmController');
const havestController = require('../controllers/HavestController');
const millController = require('../controllers/MillController');

//Default
routes.get('/', (request, response) => {
    return response.json({'message': 'Welcome to the ModClima!'})
});

//Field
routes.get('/field', fieldController.index);
routes.get('/field/:id', fieldController.show);
routes.post('/field', fieldController.store);
routes.put('/field/:id', fieldController.update);
routes.delete('/field/:id', fieldController.destroy);

//Farm
routes.get('/farm', farmController.index);
routes.get('/farm/:id', farmController.show);
routes.post('/farm', farmController.store);
routes.put('/farm/:id', farmController.update);
routes.delete('/farm/:id', farmController.destroy);

//Havest
routes.get('/havest', havestController.index);
routes.get('/havest/:id', havestController.show);
routes.post('/havest', havestController.store);
routes.put('/havest/:id', havestController.update);
routes.delete('/havest/:id', havestController.destroy);

//Mill
routes.get('/mill', millController.index);
routes.get('/mill/:id', millController.show);
routes.post('/mill', millController.store);
routes.put('/mill/:id', millController.update);
routes.delete('/mill/:id', millController.destroy);

module.exports = routes