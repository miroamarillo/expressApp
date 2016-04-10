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
	.use(bodyParser.urlencoded({extended: true}))
	//Custom middleware can also be created.  Notice that when created
	//and then applied with use, it will be used by every method because
	//it is not linked to an specific route like the all method. That
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
	//Params method
	//The params 'name' that I'm using here matches the parameter used
	//in the get method below.  It can be anythng!!
	//Because the process goes from top to bottom, this method has
	//to above the method that is going to use the parameter.
	//It gives the posibility to pass another parameter that can be named
	//however I want.  In this case, I will call it value and the
	//parameter 'value' matches the token 'name' that I want to work with,
	.param('name', function(req, res, next, value){
		req.value = value[0].toUpperCase() + value.substring(1);
		next();
		//Param can be useful to grab info fro login for example
		Users.findOne({username: name}, function(err, user){
			req.user = user;
			next();
		})
	})
	//Nootice the diference between this one and the one below.
	.get('/name/:name', function(req, res){
		res.send('Your name is ' + req.value);
	})
	//Explanation of route parameters and how to use them
	//The parameter comes after the colons
	//to test check: http://localhost:3080/name/Jack
	//Don't use this one combined with the param objec.  It won't work.
	// .get('/name/:name', function(req, res){
	// 	res.send('Your name is ' + req.params.name);
	// })


	//Implement on your own this two methods
	//app.put
	//app.delete


	//Using routes
	.get('/route', function(req, res){
		res.send('This is a route');
	})
	//built-in middleware
	//This built-in middleware is used mainly for static files like
	//images, css, etc.
	//example of how to use express.static built-in middleware
	//to test check: http://localhost:3080/file.txt
	.use(express.static('./public'))

	.listen(3080, function(){
		console.log("Listening on port 3080");
})