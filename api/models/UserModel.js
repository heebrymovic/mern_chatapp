const Mongoose = require('mongoose');

const UserSchema = new Mongoose.Schema(
	{
		fullname: {
			type: String,
			required: true
		},
		username: {
			type: String,
			required: true,
			unique: true
		},
		password: {
			type: String,
			required: true,
			minLength: 6
		},
		profilePicture: {
			type: String,
			default: ''
		},
		gender: {
			type: String,
			required: true,
			enum: ['male', 'female']
		}
	},
	{ timestamps: true }
);

const User = Mongoose.model('user', UserSchema);

module.exports = User;
