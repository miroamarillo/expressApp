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

app.listen(3080, function(){
		console.log("Listening on port 3080");
});