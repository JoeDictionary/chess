import express from 'express';
import socket from 'socket.io';
import path from 'path';

const PORT = 8080;

// App setup
const app = express();
// app.get('/', (req, res) => res.send('Hello, World!'));
const server = app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});

// Static files
app.use(express.static(path.resolve(__dirname, '../../public')));

// Socket setup
let io = socket(server);
io.on('connection', (socket) => {
	console.log('New socket connection:', socket.id);
	socket.on('test', message => {
		console.log(message.message)
	})
})

console.log("daaamn bretheren")