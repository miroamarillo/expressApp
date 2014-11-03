var express 	= require('express'),
	//This is needed to parse the body of the request
	bodyParser 	= require('body-parser'),
	app 		= express();


app.get('/:nameOfDog', function(req, res){
	//status method
	res.status(200); //This only sends one header
	res.get(header, value); // for several values
	res.get(header);
	//If working with cookies
	res.cookie(name, value);
	//to clear a cookie
	res.clearCookie(name);

	//to redirect
	res.redirect(status, path); //the status is optional
	//to send
	res.send(satus, text);
	//to send a json object
	res.json(status, object);
	//to send jsonp (json with padding)
	res.jsonp(status, object); // callback ({})


})

app.listen(3080, function(){
		console.log("Listening on port 3080");
});