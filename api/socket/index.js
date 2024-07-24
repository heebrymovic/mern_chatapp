const express = require('express');

const app = express();

const server = require('http').createServer(app);

const io = require('socket.io')(server, {
	cors: {
		origin: ['http://localhost:3000']
	}
});

const onlineUsers = {};

const getUserSocketId = (userId) => onlineUsers[userId];

io.on('connection', (socket) => {
	console.log('A client connected');

	const userId = socket.handshake.query.userId;

	onlineUsers[userId] = socket.id;

	io.emit('onlineUsers', Object.keys(onlineUsers));

	socket.on('isTyping', (data) => {
		const socketId = getUserSocketId(data.receiverId);

		io.to(socketId).emit('isTyping', data);
	});

	socket.on('stopTyping', (data) => {
		const socketId = getUserSocketId(data.receiverId);

		io.to(socketId).emit('stopTyping', data);
	});

	socket.on('disconnect', () => {
		console.log('A client disconnected', socket.id);

		delete onlineUsers[userId];
	});
});

module.exports = {
	getUserSocketId,
	server,
	io,
	app
};
