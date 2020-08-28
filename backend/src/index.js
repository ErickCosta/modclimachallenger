const express = require('express');
const routes = require('./app/routes/index');
const app = express();


app.use(express.json());
app.use('/api', routes);
app.get('/', (req, res)=>{
    console.log('Main route');
    return res.json({'ok': 'ok'});
})

const server = app.listen(3333, () => {
    console.log("Server started!");
    const io = require('./app/socket').startSocket(server);
});




    