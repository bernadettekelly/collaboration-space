const express = require('express');
const router = express.Router();
const {User} = require('./usersModel');

router.get('/', (req, res) => {
	User
	.find()
	.exec()
	.then(posts => {
		res.status(200).json({User: firstName, lastName, Category, Location, Email, Phone, Bio});
	})
	.catch(err => {
		console.log(err);
		res.status(500).json({error: 'something went wrong'});
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

	module.exports = router;