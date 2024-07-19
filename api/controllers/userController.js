const { customError, customMessage } = require('../utils');
const User = require('../models/UserModel');

exports.getFriends = async (req, res) => {
	const userId = req.userId;

	try {
		const users = await User.find({ _id: { $ne: userId } }).select('-password');

		customMessage(res, 'Users successfully Queried', { users });
	} catch (err) {
		customError(res, 500, err.message);
	}
};

exports.getCurrentUser = async (req, res) => {
	const userId = req.userId;

	userRequest(res, userId);
};

exports.getUser = async (req, res) => {
	const userId = req.params.userId;

	userRequest(res, userId);
};

async function userRequest(res, userId) {
	try {
		const users = await User.findById(userId).select('-password');

		customMessage(res, 'User successfully Queried', { users });
	} catch (err) {
		customError(res, 500, err.message);
	}
}
