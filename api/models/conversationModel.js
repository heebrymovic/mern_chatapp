const Mongoose = require('mongoose');

const ConversationSchema = new Mongoose.Schema(
	{
		participants: [
			{
				type: Mongoose.Schema.Types.ObjectId,
				ref: 'User'
			}
		],
		messages: [
			{
				type: Mongoose.Schema.Types.ObjectId,
				ref: 'Message',
				default: []
			}
		]
	},
	{ timestamps: true }
);

const Conversation = Mongoose.model('Conversation', ConversationSchema);

module.exports = Conversation;
