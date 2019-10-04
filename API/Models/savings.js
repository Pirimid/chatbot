const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const savings_s = new Schema({
balance:{
	type:String,
	required:false
}
});
module.exports = mongoose.model('savings_s', savings_s);