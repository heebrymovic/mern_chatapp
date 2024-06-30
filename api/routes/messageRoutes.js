const express = require('express');

const Router = express.Router();

const { sendMessage, getMessages } = require('../controllers/messageController');

Router.post('/create', sendMessage);
Router.get('/:conversationId', getMessages);

module.exports = Router;
