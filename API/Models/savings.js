var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var savings_s = new Schema({
balance:{
	type:String,
	required:false
}
});
module.exports = mongoose.model('savings_s', savings_s);