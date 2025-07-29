const express = require('express');
const http = require('http');
const { server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new server(server);
app.use(express.static('public'));
io .on('connection', (socket) => {
  console.log('A user connected');

  socket.on('chat message', (msg) => {
    console.log('Message received: ' + msg);
    io.emit('chat message', msg);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});
server.listen(PORT, () => {
  console.log('Server running on port ${PORT} ');
});