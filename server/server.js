const path = require('path')
const http = require('http')
const socketIO = require('socket.io')
const express = require('express')

port = process.env.PORT || 3000
const pathName = path.join (__dirname, '../public')

const app = express();
const server = http.createServer(app);
var io = socketIO(server)
app.use (express.static (pathName));

io.on ('connect', (socket) => {
  console.log('Client Connected');
  socket.emit ('newMessage', {
      from: 'Admin',
      text:'Welcome to the chat!',
      createdAt: new Date().getTime()
    }
  );
  socket.broadcast.emit('newMessage', {
      from: 'Admin',
      text: 'New user joined the chat',
      createdAt: new Date().getTime()
  })

  socket.on ('createMessage', (message) => {

  });

  // socket.emit('newMessage', {
  //   from:'sim@example.com',
  //   text: 'What is going on there?',
  //   createdAt: new Date().getTime()
  // });

  socket.on ('disconnect', socket => {
    console.log('Client disconnected');
  });

});




server.listen (port, () => {
  console.log(`Server listen on port ${port}`);
})
