var socketio = require('socket.io');

module.exports = {

    async startSocket(server){

        socketio = socketio(server);

        socketio.on('connection', (socket) => {
            socket.on("join", function(){
                console.log("New socket connected!");
            });
            
            socket.on("disconnect", function(){
                console.log("One socket disconnected");
            });
        });

        console.log('Socket started!')
    },

    async update(message){
        console.log("Socket emit changed message")
        socketio.emit('changed', message);
    }
}