/**
 * Created by Takawo on 14/06/17.
 */
var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
 res.render('wordBook', { title: 'WordBooks' });
});
router.get('/:id', function(req, res){
 res.render('wordBook', { title: req.params.id });
});

module.exports = router;