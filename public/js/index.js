var socket = io();

socket.on ('connect' , function () {
  console.log('We connected to the server');

  socket.emit ('createMessage', {
    from:'jhon@example.org',
    text: 'Hey'
  });
})

socket.on ('disconnect' , function(socket) {
  console.log('Disconnected from the server');
})

socket.on ('newMessage', function (message) {
  console.log('new Message emitted ', message);
});
