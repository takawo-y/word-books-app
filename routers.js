/**
 * Created with JetBrains WebStorm.
 * User: 9004027600
 * Date: 14/06/18
 * Time: 13:56
 * To change this template use File | Settings | File Templates.
 */

var routes = require('./routes/index');
var wordBooks = require('./routes/wordBooks');
var cards = require('./routes/cards');


module.exports = function(app){
	app.use('/', routes);
	app.use('/wordbooks', wordBooks);
	app.use('/wordbooks/:id', wordBooks);
 	app.use('/cards/:id', cards);

}

