const express = require('express');
const routes = express.Router();

const logRequestMiddleware = require('../middlewares/LogRequestMiddleware');

const defaultRoute = require('../routes/DefaultRoute');
const fieldRoute = require('../routes/FieldRoute');
const farmRoute = require('../routes/FarmRoute');
const havestRoute = require('../routes/HavestRoute');
const millRoute = require('../routes/MillRoute')

routes.use(logRequestMiddleware.log);

routes.use(defaultRoute);
routes.use(fieldRoute);
routes.use(farmRoute);
routes.use(havestRoute);
routes.use(millRoute);

module.exports = routes