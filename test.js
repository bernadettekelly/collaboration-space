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
	var seedData = [];
	for (let i=1; i<=10; i++) {
		seedData.push({
			name: {
				firstName: faker.name.firstName(),
				lastName: faker.name.lastName()
			},
			Category: faker.lorem.word(),
			Location: faker.lorem.word(),
			Email: faker.internet.email(),
			Phone: faker.phone.PhoneNumberFormat(),
			Bio: faker.lorem.text()
		});
	}
	return profile.insertMany(seedData);
}

describe('profile API resource', function() {
	const testUser = {
		firstName: faker.name.firstName(),
		lastName: faker.name.lastName(),
		username: faker.internet.userName(),
		password: faker.internet.password(),
		Category: faker.lorem.word(),
		Location: faker.lorem.word(),
		Email: faker.internet.email(),
		Phone: faker.phone.phoneNumber(),
		Bio: faker.lorem.text()
	};

	before(function() {
		return runServer();
	});
	
	after(function() {
		return closeServer();
	});

	describe('POST users/ endpoint', function() {
		it('should throw error if there is no username', function() {
			return chai.request(app)
			.post('/users')
			.send()
			.then(res => {console.log(res)})
			.catch(err => {
				let res = err.response;
				res.should.have.a.status(422);
				res.should.be.json;
				res.body.should.be.a('object');
				res.body.should.include.keys('message');
				res.body.message.should.be.an('string');
			});
		});

		it('should throw error if the username is not an string', function() {
			return chai.request(app)
			.post('/users')
			.send({username: 123})
			.then(res => {console.log(res)})
			.catch(err => {
				let res = err.response;
				res.should.have.a.status(422);
				res.should.be.json;
				res.body.should.be.a('object');
				res.body.should.include.keys('message');
				res.body.message.should.be.an('string');
			});
		});

		it('should add a new user', function() {
			return chai.request(app)
			.post('/users')
			.send(testUser)
			.then(function(res) {
				res.should.have.a.status(201);
				res.should.be.json;
				res.body.should.be.a('object');
				res.body.should.include.keys('id', 'username', 'name', 'Category', 'Location', 'Email', 'Phone', 'Bio');
				res.body.id.should.not.be.null;
				res.body.name.should.equal(`${testUser.firstName} ${testUser.lastName}`);
				res.body.Category.should.be.an('array');
				res.body.Location.should.equal(testUser.Location);
				res.body.Email.should.equal(testUser.Email);
				res.body.Phone.should.equal(testUser.Phone);
				res.body.Bio.should.equal(testUser.Bio);
			});
    });
	});

	describe('POST endpoint', function() {
		it('should log in user', function() {
			let credentials = {}; 
			return User.findOne().exec().then(function(user) {
				credentials.username = testUser.username;
				credentials.password = testUser.password;
        return chai.request(app)
    		.post('/users/login')
    		.send(credentials)
      })
    	.then(function(res) {
    		res.should.have.a.status(200);
    		res.should.be.json;
    		res.body.should.be.a('object');
    		res.body.should.include.keys('id', 'name', 'Category', 'Location', 'Email', 'Phone', 'Bio');
    	});
		});
	});

//	describe('GET endpoint', function() {
//		it ('should return profiles with right fields', function() {
//			return chai.request(app)
//			.get('/users')
//			.then(function(res) {
//				res.should.have.a.status(200);
//				res.should.be.json;
//				res.body.should.be.a('array');
//				res.body.should.have.length.of.at.least(1);
//				res.body.forEach(function(user) {
//        	user.should.be.a('object');
//        	user.should.include.keys('_id', 'name', 'Category', 'Location', 'Email', 'Phone', 'Bio');
//        })
//      })      
//		});
//	});

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
 //   	     	res.should.have.status(201);
 //   	     	res.should.be.json;
 //   	     	res.body.should.be.a('object');
 //   	     	res.body.name.should.equal(
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
 //        });
//	});
//
//	describe('DELETE enpoint', function() {
//		it('should logout users', function() {
//		    return chai.request(app).delete(`/users/${user.session}`);
//			.post('/logout')
 //  		.send(newUser.username)
 //  		.then(function(res) {
//			})
 //        	.then(res => {
 //        		 console.log("successful logout")
 //        		 res.should.have.status(201);
 //        	 })
 //        	 .catch(err => {console.log(err)});
//		});
//	});
});
