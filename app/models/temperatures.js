var mongoose = require('mongoose');

module.exports = mongoose.model('Temperatures', {
	temperature : {type : String, default: ''},
	date : {type : Date, default: Date.now}
});