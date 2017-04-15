const {login} = require('passport-http');
const express = require('express');
const session = require('express-session');
const jsonParser = require('body-parser').json();
const passport = require('passport');

const {User} = require('./usersModel');

const router = express.Router();

router.use(jsonParser);

router.post('/', (req, res) => {
	if (!req.body) {
		return res.status(400).json({message: 'Nothing in body'});
	}
	if (!('username' in req.body)) {
		return res.status(422).json({message: 'Missing field: username'});
	}
	let {username, password, firstName, lastName, Email, Phone, Bio} = req.body;

	if (typeof username !== 'string') {
		return res.status(422).json({message: 'Invalid username'});
	}
	if (!('password' in req.body)) {
		return res.status(422).json({message: 'Missing field: password'});
	}
	if (!('Category' in req.body)) {
		return res.status(422).json({message: 'Missing field: category'});
	}
	if (!('Location' in req.body)) {
		return res.status(422).json({message: 'Missing field: location'});
	}
	if (!('Email' in req.body)) {
		return res.status(422).json({message: 'Missing field: email'});
	}
	if (!('Phone' in req.body)) {
		return res.status(422).json ({message: 'Missing field: phone number'});
	}
	if (!('Bio' in req.body)) {
		return res.status(422).json({message: 'Missing field: Bio'});
	}

	return User
		.find({username})
		.count()
		.exec()
		.then(count => {
			if (count > 0) {
				return res.status(422).json({message: 'Username is already taken'});
			}
			return User.hashPassword(password)
		})
		.then(hash => {
			return User
				.create({
					username: username,
					password: hash,
					firstName: firstName,
					lastName: lastName,
					Category: Category,
					Location: Location,
					Email: Email,
					Phone: Phone,
					Bio: Bio
				})
			})
		.then(user => {
			return res.status(201).json(user.apiRepr());
		})
		.catch(err => {
			return res.status(500).json({message:'Internal server error' + err})
		});
});

router.post('/login', function (req, res) {
	var username = req.body.username;
	var password = req.body.password;
	console.log(username, password);
	User.findOne({username: username}, function (err, user) {
		console.log(user);
		if(err) {
			console.log(err);
			return res.status(500).send();
		}
		if(!user) {
			return res.status(404).send('No user found');
		}
		if(!user.validatePassword(password)){
			return res.status(500).send('Incorrect password');
		}
		req.session.userID = user._id;
		return res.status(200).send(user.apiRepr());
	})
    });

router.delete('/logout', function (req, res) {
	req.session.destroy();
	req.send("Successful logout");
});

module.exports = router;
