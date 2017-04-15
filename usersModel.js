const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const UserSchema = mongoose.Schema({
	username: {
		type: String,
		unique: true,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	firstName: {type: String, default: ""},
	lastName: {type: String, default: ""},
	
	Category: {
        type: Array
	},
	Location: {
		type: String
	},
	Email: {
		type: String
	},
	Phone: {
		type: Number
	},
	Bio: {
		type: String
	}
});

UserSchema.methods.apiRepr = function() {
	return {
		username: this.username || '',
		firstName: this.firstName || '',
		lastName: this.lastName || '',
		Category: this.Category || '',
		Location: thid.Location || '',
		Email: this.Email || '',
		Phone: this.Phone || '',
        Bio: this.Bio || ''
	};
}

UserSchema.methods.validatePassword = function(password) {
	return bcrypt.compare(password, this.password)
}

UserSchema.statics.hashPassword = function(password) {
	return bcrypt.hash(password, 10)
}

const User = mongoose.model('userdata', UserSchema);

module.exports = {User};