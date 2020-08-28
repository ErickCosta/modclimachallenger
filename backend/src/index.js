const express = require('express');
const routes = require('./app/routes/index')

const app = express();
app.use(express.json());
app.use('/api', routes);
app.listen(3333, () => {
    console.log("Server started!");
});
