var express 	= require('express'),
	//This is needed to parse the body of the request
	bodyParser 	= require('body-parser'),
	app 		= express();

//CRUD - The Verbs!!
//POST - Create
//GET - Read
//PUT - Update
//DELETE - Delete

//let's create a function to log the updates to the array

function log(req, res, next){
	console.log(names);
	next();
}

var names = [];

app
	.use(bodyParser.urlencoded())
	//This will mach ALL the requests
	.all('/', function(req, res, next){
		//Notice that this logs to the termina (server) not to the browser!
		console.log('Message coming from ALL');
		//This function will let the process cascade to the next methods
		next();
	})
	//Notice How I pass the log function to the get request
	.get('/', log, function(req, res){
		res.render('index.jade', {
			title: "Hello Express & Jade and more stuff",
			names: names
		});
	})
	.post('/', function(req, res){
		//push the new value to the array
		names.push(req.body.name);
		//redirect to the home page
		res.redirect('/');
	})
	.listen(3080, function(){
		console.log("Listening on port 3080");
})