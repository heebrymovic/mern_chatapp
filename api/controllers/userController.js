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
