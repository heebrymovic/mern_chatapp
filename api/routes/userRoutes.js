const express = require('express');

const Router = express.Router();

const { getFriends } = require('../controllers/userController');

Router.get('/friends', getFriends);

module.exports = Router;
