var express 	= require('express'),
	//This is needed to parse the body of the request
	//bodyParser 	= require('body-parser'),
	app 		= express();


app.get('/', function(req, res){
	//format method. can get an object.
	res.format({

		'application/json': function(){
		    res.send({ message: 'hey' });
		}
	});

});

app.listen(3080, function(){
		console.log("Listening on port 3080");
});