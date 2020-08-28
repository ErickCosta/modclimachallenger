// Make connection
const socketio = require('socket.io-client')('http://localhost:3333/');

socketio.emit('join');
socketio.on("changed", function(msg) {
    console.log('message:', msg);
});
console.log('Arquivo de conexão!!!');


