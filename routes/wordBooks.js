/**
 * Created by Takawo on 14/06/17.
 */
var wbModel = require('../models/wordBookModel.js');


/** 単語帳一覧全件取得 **/
exports.findAll = function(req, res){
	console.log("Getting Wordbooks List!!");

	wbModel.find({}).exec(function(err, docs) {
		if(!err) {
			console.log('Success: Getting Wordbooks List');
			console.log("num of item => " + docs.length);
			res.json(docs);
		} else {
			res.send({error: "An error has occurred"});
		}
	});

}


exports.findById = function(req, res) {
	var id = req.params.id;
	console.log('Retrieving wine: ' + id);

	wbModel.findById(id, function(err, result) {
		if (err) {
			res.send({'error': 'An error has occurred'});
		} else {
			console.log('Success: ' + JSON.stringify(result));
			res.json(result);
		}
	});
};

