/**
 * Created by Takawo on 14/06/17.
 */
var express = require('express');
var router = express.Router();
var wbModel = require('../models/wordBookModel.js');

//単語帳一覧全件検索
router.get('/', function(req, res){
//	wbModel.find({}).exec(function(err, docs) {
	wbModel.find(function(err, docs) {
		if(!err) {
			console.log('Success: Getting Wordbooks List');
			console.log("num of item => " + docs.length);
			res.render('wordBookList', {title :'全件検索', wordbooks: docs});
		} else {
			res.send({error: "An error has occurred"});
		}
	});
//	wbModel.findAll(function(err, rows){
//		res.render('wordBookList', {title :'全件検索', wordbooks: rows});
//	});
//	res.render('wordBook', { title: '全件検索' });
});

router.get('/:id', function(req, res){
 res.render('wordBook', { title: "idは"+req.params.id });
});

module.exports = router;