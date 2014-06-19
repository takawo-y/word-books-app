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

/** ObjectId検索 **/
router.get('/:id', function(req, res) {
	var objectId = ObjectID.createFromHexString(req.params.id);
	model.findById(objectId, function(err, wordbook){
		res.json(wordbook);
//		res.render('wordBookList',{title: 'Word Book List', wordbooks: wordbooks});
	});
});

module.exports = router;
