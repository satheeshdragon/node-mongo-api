const mongoose = require('mongoose');


const exerciseSchema = new mongoose.Schema({
	username:{
		type      : String,
		required  : true,
	},
	description:{
		type      : String,
		required  : true,
	},
	duration:{
		type      : String,
		required  : true,
	},
	date:{
		type      : String,
		required  : true,
	},
},{
	timestamps:true,
});

module.exports = Exercise = mongoose.model('Exercise',exerciseSchema);