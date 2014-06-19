/**
 * Created with JetBrains WebStorm.
 * User: 9004027600
 * Date: 14/06/18
 * Time: 10:41
 * To change this template use File | Settings | File Templates.
 */
var mongoose = require("mongoose");

var wbSchema = new mongoose.Schema({
	"word_book_id" : Number,
	"work_book_name" : String,
	"regist_date" : String,
	"update_date" : String,
	"front_card" : String,
	"back_card" : String,
	"results" : [
		{
			"date" : String,
			"result" : Boolean
		}
	]
});

module.exports = mongoose.model('word_book', wbSchema);