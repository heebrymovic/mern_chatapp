const express = require('express');

const { connectDB, app } = require('./connectDB');
const { authRoutes } = require('./routes');

connectDB();

app.use(express.json());

app.use('/api/auth', authRoutes);
