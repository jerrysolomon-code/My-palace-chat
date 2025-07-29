const socket = io();
let username = 'Jerry' + Math.floor(Math.random() * 1000);
socket.on('connect', () => {  
const form = document.getElementById( 'form');
const input = document.getElementById('input');
const messages = document.getElementById('messages');
form.addEventListener( 'submit', (e)=> {
  e.preventDefault(); if (input.value) {
    socket.emit('chat message', {
      user: username,
      text: input.value
    });
    input.value = '';  
  }
});
socket.on('chat message', (msg) => {
  const item = document.createElement('li');
  item.textContent = `${msg.user}: ${msg.text}`;
  messages.appendChild(item);
  window.scrollTo(0, document.body.scrollHeight);
});
});