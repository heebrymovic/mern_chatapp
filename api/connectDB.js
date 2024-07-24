const mongoose = require('mongoose');

const express = require('express');

/*
We will be using the app from the socket because that is where our server is running on
const app = express();
*/

const { server } = require('./socket');

const dotenv = require('dotenv');

dotenv.config();

const port = process.env.PORT || 7500;

const connectDB = async () => {
	await mongoose.connect(process.env.local_mongoose_url);

	console.log('Database connect successfully');

	const main = server.listen(port, () => {
		console.log(`Server is running on port ${port}`);
	});

	process.on('unhandledRejection', (err) => {
		console.log(`An error occurred: ${err.message}`);
		main.close(() => process.exit(1));
	});
};

module.exports = { connectDB };
