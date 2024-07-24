const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');

const { connectDB } = require('./connectDB');
const { app } = require('./socket');
const { authRoutes, messageRoutes, userRoutes } = require('./routes');
const verifyUser = require('./middleware/verifyUser');

connectDB();

app.use(cookieParser());
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../client/dist')));

console.log(__dirname, 'dir');

app.use('/api/auth', authRoutes);
app.use('/api/messages', verifyUser, messageRoutes);
app.use('/api/user', verifyUser, userRoutes);

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../client', 'dist', 'index.html'));
});
