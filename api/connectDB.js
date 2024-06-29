const mongoose = require('mongoose');

const express = require('express');

const app = express();

const dotenv = require('dotenv');

dotenv.config();

const port = process.env.PORT || 7500;

const connectDB = async () => {
	await mongoose.connect(process.env.local_mongoose_url);

	console.log('Database connect successfully');

	const server = app.listen(port, () => {
		console.log(`Server is running on port ${port}`);
	});

	process.on('unhandledRejection', (err) => {
		console.log(`An error occurred: ${err.message}`);
		server.close(() => process.exit(1));
	});
};

module.exports = { connectDB, app };
