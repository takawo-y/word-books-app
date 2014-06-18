/**
 * Created with JetBrains WebStorm.
 * User: 9004027600
 * Date: 14/06/18
 * Time: 10:41
 * To change this template use File | Settings | File Templates.
 */
var mongoose = require("mongoose");

// DB Connect
var uriString = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL ||
		"mongodb://localhost/test";
var conn = mongoose.createConnection(uriString);
conn.on('error', console.error.bind(console, 'Connection Error!!'));

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

////登録時の初期値設定
//wbSchema.pre('save', function(next){
//	var today = new Date();
//	var todayString = today.getFullYear()+"-"+(today.getMonth()+1)+"-"+today.getDate();
//	if(this.isNew){
//		this.regist_date = todayString;
//	}
//	this.update_date = todayString;
//	next();
//});
//
///** 単語帳一覧全件取得 **/
//exports.findAll = function(req, res){
//	console.log("Getting Wordbooks List!!");
//
//	model.find({}).exec(function(err, docs) {
//		if(!err) {
//			console.log('Success: Getting Wordbooks List');
//			console.log("num of item => " + docs.length);
//			res.json(docs);
//		} else {
//			res.send({error: "An error has occurred"});
//		}
//	});
//}

module.exports = mongoose.model('wbModel', wbSchema);
