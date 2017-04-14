const express = require('express');
const app = express();
const mongoose = require('mongoose');
const {DATABASE_URL, PORT} = require('./config');
const usersRouter = require('./usersRouter');

mongoose.Promise = global.Promise;
const morgan = require('morgan');
const bodyParser = require('body-parser');
var MongoStore = require('connect-mongo')(session);
app.use(session(sess));
app.use(bodyParser.json());
app.use(morgan('common'));
app.use(express.static('public'));
app.use('/users', usersRouter);

let server;
console.log(DATABASE_URL, PORT);

funtion runServer(databaseURL=DATABASE_URL, port=PORT) {
	return new Promise((resolve, reject) => {
		console.log(databaseURL, port);
			mongoose.connect(databaseURL, (err) => {
				if (err) {
					return reject(err);
				}
				server = app.listen(port, () => {
					console.log(`Your app is listening on port ${port}`);
					resolve();
				})
				.on('error', err => {
					mongoose.disconnect();
					reject(err);
				});
			});
	});
}

function closeSever() {
	return mongoose.disconnect().then(() => {
		return new Promise((resolve, reject) => {
			console.log('Closing sever');
			server.close(err => {
				if (err) {
					return reject(err);
				}
				resolve();
			});
		});
	});
}
if (require.main === module) {
	runServer().catch(err => console.error(err));
}

module.exports = {app, runServer, closeServer}