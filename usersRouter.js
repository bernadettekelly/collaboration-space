const {login} = require('passport-http');
const express = require('express');
const session = require('express-session');
const jsonParser = require('body-parser').json();
const passport = require('passport');

const {User} = require('./usersModel');

const router = express.Router();

router.use(jsonParser);

router.get('/', (req, res) => {
	User
	.find({Category: req.query.category, Location: req.query.location})
	.exec()
	.then(user => {
		res.status(200).json(user);
	})
	.catch(err => {
		console.log(err);
		res.status(500).json({error: 'something went wrong'});
	});
});

router.post('/', (req, res) => {
	if (!req.body) {
		return res.status(400).json({message: 'Nothing in body'});
	}
	if (!('username' in req.body)) {
		return res.status(422).json({message: 'Missing field: username'});
	}
	
	let {username, password, firstName, lastName, Category, Location, Email, Phone, Bio} = req.body;

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
	console.log(req.body);
	User.findOne({username: username}, function (err, user) {
		if(err) {
			console.log(err);
			return res.status(500).json({message:'Internal server error' + err});
		}
		if(!user) {
			return res.status(404).send('No user found');
		}
		if(!user.validatePassword(password)){
			return res.status(500).send('Incorrect password');
		}
		req.session.userID = user._id;
		return res.status(200).send(user.apiRepr());
	});
});

router.put('/id/:id', (req, res) => {
	const requiredFields = ['firstName', 'lastName', 'Category', 'Location', 'Email', 'Phone', 'Bio'];
	for (let i=0; i<requiredFields.length; i++) {
		const field = requiredFields[i];
		if(!(field in re.body)) {
			const message = `Missing \`${field}\` in request body`
			console.error(message);
			return res.status(400).send(message);
		}
	}

	console.log(`Updating profile with id \`${req.params.id}\``);
	User
	.findByIdAndUpdate(req.params.id, {$set: {
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		Category: req.body.Category,
		Location: req.body.Location,
		Email: req.body.Email,
		Phone: req.body.Phone,
		Bio: req.body.Bio
	}})

	.then(User =>
		User.findById(req.params.id)
			.exec()
			.then(User => res.status(201).json(User.apiRepr()))
		 )
	.catch(err => res.status(500).json({message: 'Internal server error'}));
});


router.delete('/logout', function (req, res) {
	req.session.destroy();
	res.status(204).send("Successful logout");
});

module.exports = router;
