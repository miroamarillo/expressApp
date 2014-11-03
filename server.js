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
var router = express.Router({
	//Default optins.  Can be removed.
	caseSensitive: false,
	strict: true
});

router
	.use(function(req, res, next){
		console.log('router specific middleware');
		next();
	})
	.get('/', function(req, res){
		res.send('router home route');
	})
	.route('/test')
		.get(function(req, res){
			res.send('router test route');
		});

app.use('/', router);

app.listen(3080, function(){
		console.log("Listening on port 3080");
});