var socket = io();

socket.on ('connect' , function () {
  console.log('We connected to the server');
  socket.emit ('createMessage', {from: 'Frank', text: 'Hey!' },
  function(result) {
    console.log('Got it!', result)
  }

);

})

socket.on ('disconnect' , function(socket) {
  console.log('Disconnected from the server');
})

socket.on ('newMessage', function (message) {
  console.log('new Message:', message);
  var li = $('<li></li>');
  li.text(`${message.from}:${message.text}`)
  $('#messages').append(li);

});

$('#chat-form').on ('submit', function(e) {
  e.preventDefault();
  socket.emit ('createMessage', {from:'me', text: $('#message').val()},
   function (result) {console.log('Response:', result)}
  )
  $('#message').val('')

});
