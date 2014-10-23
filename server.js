var express 	= require('express'),
	//This is needed to parse the body of the request
	bodyParser 	= require('body-parser'),
	app 		= express();



var names = [];

app.use(bodyParser.urlencoded());
	//Introducing the route method.
app
	.route('/')
		//the route method can receive the methods below
		// .all()
		// .get()
		// .post()
		// .put()
		// .delete()
		.all(function(req, res, next){
			console.log('Message coming from ALL');
			next();
		})
		.get(function(req, res, next){
			res.render('index.jade', {
				title: "Hello Express & Jade and more stuff",
				names: names
			});
		})
		.post(function(req, res){
			names.push(req.body.name);
			res.redirect('/');
		});

app.listen(3080, function(){
		console.log("Listening on port 3080");
});