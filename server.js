/**
 * Created by ELatA on 2014/4/10.
 */
var http = require('http');
var path = require('path');
var express = require('express');
var socketio = require('socket.io');

var app = express();
app.use(express.static(path.join(__dirname, 'public')));

var server = http.createServer(app);
var io = socketio.listen(server);

server.listen(80);



io.sockets.on('connection', function (socket) {
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
        console.log(data);
    });
});