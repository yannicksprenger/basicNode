var mongoose = require('mongoose');
var juan_schema = new mongoose.Schema({
	nombre: {
		type: String,
		required: true
	},
	correo: {
		type: String,
		unique: true,
		required: true
	},
	telefono:{
		type: String,
		unique: true,
		required: true
	},
	// notas:{
	// 	type:String,
	// 	unique:true,
	// 	required:true
	// } 
});

var user_mongoose = mongoose.model('juan_prueba', juan_schema, 'juan_prueba');
module.exports = user_mongoose;