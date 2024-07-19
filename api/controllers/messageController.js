const Message = require('../models/messageModel');
const Conversation = require('../models/conversationModel');

const { customError, customMessage } = require('../utils');

exports.createConversation = async (req, res) => {
	const { receiverId } = req.body;

	const senderId = req.userId;

	if (!receiverId) return customError(res, 400, 'Request Body required a receiverId');

	if (senderId === receiverId) return customError(res, 403, 'You cannot start a conversation with yourself');

	try {
		let conversation = await Conversation.findOne({ participants: { $all: [receiverId, senderId] } });

		let dataMessage = 'Conversation Queried successfully';

		if (!conversation) {
			conversation = await Conversation.create({ participants: [senderId, receiverId] });
			let dataMessage = 'Conversation created successfully';
		}

		const newConversation = await conversation.populate('messages');

		customMessage(res, dataMessage, { conversation: newConversation });
	} catch (err) {
		customError(res, 500, err.message);
	}
};

exports.sendMessage = async (req, res) => {
	const { message, receiverId, conversationId } = req.body;

	const senderId = req.userId;

	if (!message || !receiverId || !conversationId) return customError(res, 400, 'Request Body Data Not Complete');

	if (senderId === receiverId) return customError(res, 403, 'You cannot send message to yourself');

	try {
		let conversation = await Conversation.findOne({ participants: { $all: [receiverId, senderId] } });

		const messageData = { senderId, receiverId, conversationId, message };

		const createMessage = await new Message(messageData);

		const newMessage = await createMessage.save();

		await conversation.updateOne({ $push: { messages: newMessage._id } });

		customMessage(res, 'Message sent successfully', { message: newMessage });
	} catch (err) {
		customError(res, 500, err.message);
	}
};

/*exports.sendMessage = async (req, res) => {
	const { message, receiverId } = req.body;

	const senderId = req.userId;

	if (!message) return customError(res, 400, 'Request Body Data Not Complete');

	if (senderId === receiverId) return customError(res, 403, 'You cannot send message to yourself');

	try {
		let conversation = await Conversation.findOne({ participants: { $all: [receiverId, senderId] } });

		if (!conversation) {
			conversation = await Conversation.create({ participants: [senderId, receiverId] });
		}

		const messageData = { senderId, receiverId, conversationId: conversation._id, message };

		const createMessage = await new Message(messageData);

		const newMessage = await createMessage.save();

		await conversation.updateOne({ $push: { messages: newMessage._id } });

		customMessage(res, 'Message sent successfully', { message: newMessage });
	} catch (err) {
		customError(res, 500, err.message);
	}
};
*/

exports.getMessages = async (req, res) => {
	const conversationId = req.params.conversationId;
	if (!conversationId) return customError(res, 400, 'conversationId required in the Request Params');

	try {
		const conversation = await Conversation.findById(conversationId);

		if (!conversation) return customError(res, 400, 'Invalid conversationId');

		const conversationMessages = await conversation.populate('messages');

		customMessage(res, 'Messages queried successfully', { conversation: conversationMessages });
	} catch (err) {
		customError(res, 500, err.message);
	}
};
