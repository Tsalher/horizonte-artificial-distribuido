var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(8080, function() {
    console.log('Servidor corriendo en http://138.4.94.48:80');
});
    io.on('connection', function(socket) {

         socket.on('ClientEvent', function(data) {
              
            io.sockets.emit('ClientEvent', data);

            });
  });
	
app.use(express.static('cliente'));
