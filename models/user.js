var mongoose = require('mongoose');
var user_schema = new mongoose.Schema({
	email: {
		type: String,
		unique: true,
		required: true,
		trim: true
	},
	name: {
		type: String,
		unique: true,
		required: true,
		trim: true
	},
	password: {
		type: String,
		required: true
	},
	socket: {
		type: String
	},
	fight_room: {
		type: String
	},
	level: {
		type: Number,
		required: true
	},
	games_won: {
		type: Number,
		required: true
	},
	games_lost: {
		type: Number,
		required: true
	}
});

var user_mongoose = mongoose.model('users', user_schema, 'users');
module.exports = user_mongoose;