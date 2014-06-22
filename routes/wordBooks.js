/**
 * Created by Takawo on 14/06/17.
 */
var express = require('express');
var router = express.Router();
var ObjectID = require('mongodb').ObjectID
var model = require('../models/WordBook');

/** 単語帳全件検索 **/
router.get('/', function(req, res) {
	model.find(function(err, wordbooks){
//		res.json(wordbooks);
		res.render('wordBookList',{title: 'Word Book List', wordbooks: wordbooks});
	});
});

/** 登録画面 **/
router.get('/new', function(req, res){
 res.render('wordBookRegist', {title: 'Word Book Add'});
});

/** ObjectId検索 **/
//router.get('/:id', function(req, res) {
//	var objectId = ObjectID.createFromHexString(req.params.id);
//	model.findById(objectId, function(err, wordbook){
//		res.json(wordbook);
////		res.render('wordBookList',{title: 'Word Book List', wordbooks: wordbooks});
//	});
//});

/** 登録 **/
router.post('/', function(req, res){
	model.create({
		word_book_name: req.body.word_book_name,
	 	biko: req.body.biko
	},function(err, result){
		if(!err){
		 model.find(function(err, wordbooks){
//		res.json(wordbooks);
			res.render('wordBookList',{title: 'Word Book List', msg: '登録が完了しました', wordbooks: wordbooks});
		 });
		}else{
			res.send({'error': 'An error has occurred - ' + err});
		}
 	});
});


module.exports = router;
