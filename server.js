var express 	= require('express'),
	//This is needed to parse the body of the request
	bodyParser 	= require('body-parser'),
	app 		= express();


//Introducing the Router Object
//The Router object can get all of the previous methods
// - use
// - param
// - verbs (get, post, put, delete) and the all method
// - route

//Creating the Router Object
// var router = express.Router({
// 	//Default optins.  Can be removed.
// 	caseSensitive: false,
// 	strict: true
// });

// router
// 	.use(function(req, res, next){
// 		console.log('router specific middleware');
// 		next();
// 	})
// 	.get('/', function(req, res){
// 		res.send('router home route');
// 	})
// 	.route('/test')
// 		.get(function(req, res){
// 			res.send('router test route');
// 		});

// app.use('/', router);

//API versions example

// var APIv1 = express.Router(),
// 	APIv2 = express.Router();

// APIv1.get('/names', function(req, res){
// 	res.send('first from API 1');
// });

// APIv2.get('/names', function(req, res){
// 	res.send('first from API 2');
// });

//All this config goes into the api files.

var APIv1 	= require('./api1'),
	APIv2 	= require('./api2');

//Now tell express what to use

app
	.use('/api/v1', APIv1)
	.use('/api/v2', APIv2);

app.listen(3080, function(){
		console.log("Listening on port 3080");
});