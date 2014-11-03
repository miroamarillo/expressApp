var express 	= require('express'),
	//This is needed to parse the body of the request
	bodyParser 	= require('body-parser'),
	app 		= express();


app.get('/:nameOfDog', function(req, res){
	//Request params
	//params is an object from the request
	//the parameters "nameOfDog" will be available
	req.params.nameOfDog;
	//Where ATTR is what goes after the parameter
	//ie: :nameOfDog?name=Fryda
	req.query.ATTR;
	// body ATTR
	req.body.ATTR;
	//param method
	req.param('ATTR'); //it will search in this order: params, body, query
	//route method or object
	req.route;
	//request to original Url
	req.originalUrl;
	// If cookies middleware is used
	req.cookies.ATTR;
	req.get(); // any header name
	//Objects specific for special headers
	req.accepts('text/html'); //application/json or text/plain
})

app.listen(3080, function(){
		console.log("Listening on port 3080");
});