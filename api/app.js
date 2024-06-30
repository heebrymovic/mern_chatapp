const express = require('express');
const cookieParser = require('cookie-parser');

const { connectDB, app } = require('./connectDB');
const { authRoutes, messageRoutes } = require('./routes');
const verifyUser = require('./middleware/verifyUser');

connectDB();

app.use(cookieParser());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/messages', verifyUser, messageRoutes);
