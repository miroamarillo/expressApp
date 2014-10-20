var express 	= require('express'),
	app 		= express();

app
	.get('/', function(req, res){
		res.send('Hello Express');
	})
	.listen(3080, function(){
		console.log("Listening on port 3080");
})