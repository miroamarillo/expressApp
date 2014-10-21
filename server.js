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
	//This is what is called a third party middleware
	.use(bodyParser.urlencoded())
	//Custom middleware can also be created.  Notice that when created
	//and then applied with use, it will be used by every method. That
	//will be the diference between use and all
	//This is an example of a custom made middleware
	.use(function(req, res, next){
		console.log("This will log in every request");
		next();
	})
	//This will mach ALL the requests
	.all('/', function(req, res, next){
		//Notice that this logs to the termina (server) not to the browser!
		console.log('Message coming from ALL');
		//This function will let the process cascade to the next methods
		next();
	})
	//The functions bellow can also be called route functions
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

	//app.put
	//app.delete
	//Implement on your own this two methods

	//built-in middleware
	//This built-in middleware is used mainly for static files like
	//images, css, etc.
	use(express.static('./public'))

	.listen(3080, function(){
		console.log("Listening on port 3080");
})