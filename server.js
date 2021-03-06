const express = require('express');
const app = express();
const mongoose = require('mongoose');
const {DATABASE_URL, PORT} = require('./config');
const session = require('express-session');
const usersRouter = require('./usersRouter');

mongoose.Promise = global.Promise;
const morgan = require('morgan');
const bodyParser = require('body-parser');
var MongoStore = require('connect-mongo')(session);

var sess = {
  store: new MongoStore({ url: DATABASE_URL }),
  secret: '12345abcde',
  name: "CollabSpc",
  resave: false,
  saveUninitialized: true,
  cookie: { 
    path: '/',
    maxAge: 30 * 60 * 1000 //minutes * seconds * miliseconds
  } 
};

app.use(session(sess));
app.use(bodyParser.json());
app.use(morgan('common'));
app.use(express.static('build'));
app.use('/users', usersRouter);

let server;
console.log(DATABASE_URL, PORT);

function runServer(databaseURL=DATABASE_URL, port=PORT) {
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

function closeServer() {
	return mongoose.disconnect().then(() => {
		return new Promise((resolve, reject) => {
			console.log('Closing server');
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