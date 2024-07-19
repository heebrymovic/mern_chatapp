const express = require('express');

const Router = express.Router();

const { getFriends, getCurrentUser, getUser } = require('../controllers/userController');

Router.get('/friends', getFriends);
Router.get('/getCurrentUser', getCurrentUser);
Router.get('/getUser/:userId', getUser);

module.exports = Router;
