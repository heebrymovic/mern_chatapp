const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

const { connectDB, app } = require('./connectDB');
const { authRoutes, messageRoutes, userRoutes } = require('./routes');
const verifyUser = require('./middleware/verifyUser');

connectDB();

app.use(cookieParser());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/auth', authRoutes);
app.use('/api/messages', verifyUser, messageRoutes);
app.use('/api/user', verifyUser, userRoutes);
