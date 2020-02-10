var express = require('express');//getting express module
var socket = require('socket.io');
//App setup

var app = express();//invoking express app
var server = app.listen(4000,function(){
  console.log("listening to request on prt 4000");
});
var io = socket(server);//invoking sokcet and making it to work in server,so it will set up in backend

io.on('connection',function(socket){
    console.log("made socket connection"+" "+socket.id);

    socket.on('chat',function(data){
      io.sockets.emit('chat',data);//receiving data from client and sending it to all sockets(browsers or users)
    });

    socket.on('typing',function(data){
       socket.broadcast.emit("typing",data);
    });
});
//Static files

app.use(express.static('public'));//showing html,css pages in local host
