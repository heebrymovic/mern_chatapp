const Mongoose = require('mongoose');

const MessageSchema = new Mongoose.Schema(
	{
		conversationId: {
			type: String,
			required: true
		},
		receiverId: {
			type: Mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true
		},
		senderId: {
			type: Mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true
		},
		message: {
			type: String,
			required: true
		}
	},
	{ timestamps: true }
);

const Message = Mongoose.model('Message', MessageSchema);

module.exports = Message;
