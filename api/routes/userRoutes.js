const express = require('express');

const Router = express.Router();

const { getFriends, getCurrentUser } = require('../controllers/userController');

Router.get('/friends', getFriends);
Router.get('/getCurrentUser', getCurrentUser);

module.exports = Router;
