let express = require('express');
let socket = require('socket.io');
const PORT = 4001

// App setup
let app = express();
let server = app.listen(PORT, () => {
	console.log(`listening on port ${PORT}`);
})
// Static file
app.use(express.static('../../public'))

// Socket setup
let io = socket(server)

io.on('connection', socket => {
	console.log(`made a socket connections`)
})