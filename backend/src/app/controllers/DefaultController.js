const socketIo = require('../socket/index');

module.exports = {

    async main(req, res){
        console.log('Default controller (main)');
        socketIo.update({"message": "Welcome to the ModClima!"});
        return res.json({'message': 'Welcome to the ModClima!'});
    }
}
