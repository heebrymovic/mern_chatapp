const express = require('express');

const Router = express.Router();

const { sendMessage, getMessages, createConversation } = require('../controllers/messageController');

Router.post('/sendMessage', sendMessage);
Router.post('/createConversation', createConversation);
Router.get('/:conversationId', getMessages);

module.exports = Router;
