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
		type: String
	},
	Bio: {
		type: String
	}
});

UserSchema.methods.apiRepr = function() {
	return {
		id: this._id || '',
		username: this.username || '',
		name: `${this.firstName} ${this.lastName}` || '',
		Category: this.Category || '',
		Location: this.Location || '',
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

const User = mongoose.model('user', UserSchema);

module.exports = {User};