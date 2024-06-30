const { customError } = require('../utils');
const User = require('../models/UserModel');

const jwt = require('jsonwebtoken');

const verifyUser = async (req, res, next) => {
	const accessToken = req.cookies?.accessToken;

	if (!accessToken) return customError(res, 401, 'Authorization Failed. You need to log in first');

	try {
		const decoded = jwt.verify(accessToken, process.env.JWT_SECRET);

		if (!decoded) return customError(res, 401, 'Cannot Verify Authorization');

		const validUser = await User.findById(decoded._id);

		if (!validUser) return customError(res, 400, 'Invalid User');
		req.userId = decoded._id;

		next();
	} catch (err) {
		customError(res, 500, err.message);
	}
};

module.exports = verifyUser;
