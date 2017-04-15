const chai = require('chai');
const chaiHttp = require('chai-http');
const faker = require('faker');
const mongoose = require('mongoose');
const should = chai.should();
const {DATABASE_URL} = require('./config');
const {User} = require('./usersModel');
const {closeServer, runServer, app} = require('./server');

chai.use(chaiHttp);

function tearDownDB() {
	return new Promise((resolve, reject) => {
		console.warn('Deleting database');
		mongoose.connection.dropDatabase()
		.then(result => resolve(result))
		.catch(err => reject(err))
	});
}

function profileData() {
	console.info('seeding review post data');
	console.seedData = [];
	for (let i=1; i<=10; i++) {
		seedData.push({
			name: {
				firstName: faker.name.firstName(),
				lastName: faker.name.lastName()
			},
			Category: faker.lorem.word(),
			Location: faker.lorem.word(),
			Email: faker.internet.email(),
			Phone: faker.phone.PhoneNumber(),
			Bio: faker.lorem.text()
	});
}
	return profile.insertMany(seedData);
}
describe('profile API resource', function() {
	before(function() {
		return runServer();
	});
	after(function() {
		return closeServer();
	});

	describe('POST endpoint', function() {
		it('should add a new user', function() {
			const newUser = {
				firstName: faker.name.firstName(),
				lastName: faker.name.lastName(),
				Category: faker.lorem.word(),
				Location: faker.lorem.word(),
				Email: faker.internet.email(),
				Phone: faker.phone.PhoneNumber(),
				Bio: faker.lorem.text()
			};
			return chai.request(app)
			.post('/users')
			.send(newUser)
			.then(function(res) {
				res.should.have.a.status(201);
				res.should.be.json;
				res.body.should.be.a('object');
				res.body.should.include.keys(
					'id', 'name', 'Category', 'Location', 'Email', 'Phone', 'Bio');
					res.body.id.should.not.be.null;
					res.body.name.should.equal(
						`${newUser.firstName} ${newUser.lastName}`);
					res.body.Category.should.equal(newUser.Category);
					res.body.Location.should.equal(newUser.Location);
					res.body.Email.should.equal(newUser.Email);
					res.body.Phone.should.equal(newUser.Phone);
					res.body.Bio.should.equal(newUser.Bio);
					})
			.catch(err => {console.log(err)});
                });
		});
	});

//	describe('GET endpoint,' function() {
//		it ('should return profiles with right fields', function() {
//			return chai.request(app)
//			.get('/profile')
//			.then(function(res) {
//				res.should.have.a.status(200);
//				res.should.be.json;
//				res.body.profile.should.be.a('array');
//				res.body.profile.should.have.length.of.at.least(1);
//				res.body.profile.forEach(function(profile) {
//                	profile.should.be.a('object');
//                	profile.should.include.keys('_id', 'name', 'Category', 'Location', 'Email', 'Phone', 'Bio');
//                })
//            .catch(err => {console.log(err)});
//            });
//		});
//	});
//
//	describe('PUT endpoint', function() {
//		it('should update fields you send over', function() {
//			const updateProfile = {
//				firstName: 'Annie',
//				lastName: 'Williams',
//				Category: 'Vocalist',
//				Location: 'Manhattan',
//				Email: 'annie@gmail.com',
//				Phone: '111-111-1111',
//				Bio: 'Example bio'
//			};
//			console.log(updateProfile);
//
//			return User
//			.findOne()
//			.exec()
//			.then(post => {
//				updateProfile.id = profile.id
//				return chai.request(app)
//				.put(`/profile/${profile.id}`)
//				.send(updateProfile);
//			})
//			.then(res => {
//				console.log("successful update");
//    	     	res.should.have.status(201);
//    	     	res.should.be.json;
//    	     	res.body.should.be.a('object');
//    	     	res.body.name.should.equal(
//				`${updateprofile.firstName} ${updateProfile.lastName}`);
//				res.body.Category.should.equal(updateUser.Category);
//				res.body.Location.should.equal(updateUser.Location);
//				res.body.Email.should.equal(updateUser.Email);
//				res.body.Phone.should.equal(updateUser.Phone);
//				res.body.Bio.should.equal(updateUser.Bio);
//				return profile.findById(res.body.id)exec();
//			})
//			then(post => {
//				user.firstname.should.equal(updateProfile.firstName);
//				user.lastName.should.equal(updateProfile.lastName);
//				user.body.Category.should.equal(updateUser.Category);
//				user.body.Location.should.equal(updateUser.Location);
//				user.body.Email.should.equal(updateUser.Email);
//				user.body.Phone.should.equal(updateUser.Phone);
//				user.body.Bio.should.equal(updateUser.Bio);
//			})
//			.catch(err => {console.log(err)});
//         });
//	});
//
//	describe('DELETE enpoint', function() {
//		it('should logout users', function() {
//			const currentUser = {
//				firstName: faker.name.firstName(),
//				lastName: faker.name.lastName(),
//				Category: faker.lorem.word(),
//				Location: faker.lorem.word(),
//				Email: faker.internet.email(),
//				Phone: faker.phone.PhoneNumber(),
//				Bio: faker.lorem.text()
//			};
//			return chai.request(app).delete(`/users/${user.session}`);
//          	.then(user => {
//          		user.firstname.should.be.null;
//				user.lastName.should.be.null;
//				user.body.Category.should.be.null;
//				user.body.Location.should.be.null;
//				user.body.Email.should.be.null;
//				user.body.Phone.should.be.null;
//				user.body.Bio.should.be.null;
//          	})
//          	.catch(err => {console.log(err)});
//		});
//	});
//	
//
//