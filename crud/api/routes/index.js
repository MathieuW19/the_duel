const express = require('express');
const router = express();

/*const router = express.Router();*/

/*socket io*/
const http = require('http');
const server = http.createServer(router);
const { Server } = require("socket.io");
const io = new Server(server);

/* GET home page. */
router.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
  /*res.status(200).json({ message: "Welcome to Todo List API" });*/
  /*res.send('<h1>Hello World</h1>');*/
});

io.on('connection', (socket) => {
  console.log("User connecté");
  socket.on('disconnect', () => {
    console.log('User déconnecté');
  });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});

module.exports = router;
