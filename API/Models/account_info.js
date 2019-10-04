const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const account_info = new Schema({
savings:{
	type:String,
	required:false
},
current:{
	type:String,
	required:false
}
});
module.exports = mongoose.model('account_info', account_info);