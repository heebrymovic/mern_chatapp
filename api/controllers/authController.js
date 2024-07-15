const User = require('../models/UserModel');

const bcrypt = require('bcrypt');

const { hashPassword, customError, customMessage, generateTokenAndSetCookie } = require('../utils');

exports.register = async (req, res) => {
	const { fullname, username, password, confirmPassword, gender } = req.body;

	if (!fullname || !username || !password || !confirmPassword || !gender)
		return customError(res, 400, 'Request Body Data Not Complete');

	if (password !== confirmPassword) return customError(res, 400, 'Password does not match');

	try {
		const validUser = await User.findOne({ username: { $regex: new RegExp(username, 'i') } });

		if (validUser) return customError(res, 403, 'Username already exist');

		req.body.password = await hashPassword(password.toLowerCase());

		const userGender = gender.toLowerCase() == 'male' ? 'boy' : 'girl';

		req.body.profilePicture = `https://avatar.iran.liara.run/public/${userGender}?username=${username}`;

		req.body.gender = gender.toLowerCase();

		const createUser = await new User(req.body);

		const newUser = await createUser.save();

		const { password: userPassword, ...user } = newUser._doc;

		customMessage(res, 'Registration Successfull', { user });
	} catch (err) {
		customError(res, 500, err.message);
	}
};

exports.login = async (req, res) => {
	const { username, password } = req.body;

	if (!username || !password) return customError(res, 400, 'Request Body Data Not Complete');

	try {
		const validUser = await User.findOne({ username: { $regex: new RegExp(username, 'i') } });

		if (!validUser) return customError(res, 401, 'User not found');

		const validPassword = await bcrypt.compare(password.toLowerCase(), validUser.password);

		if (!validPassword) return customError(res, 401, 'Invalid Credentials');

		const { password: userPassword, ...user } = validUser._doc;

		generateTokenAndSetCookie(res, user._id);

		customMessage(res, 'Login Successfull', { user });
	} catch (err) {
		customError(res, 500, err.message);
	}
};

exports.logout = (req, res) => {
	try {
		res.clearCookie('accessToken').status(200).json({ message: 'Logout Successfull' });
	} catch (err) {
		customError(res, 500, err.message);
	}
};
