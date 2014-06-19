/**
 * Created by Takawo on 14/06/17.
 */
var express = require('express');
var router = express.Router();
var model = require('../models/WordBook');

/* GET users listing. */
router.get('/', function(req, res) {
	model.find(function(err, wordbooks){
//		res.json(wordbooks);
		res.render('wordBookList',{title: 'Word Book List', wordbooks: wordbooks});
	});
});

module.exports = router;
