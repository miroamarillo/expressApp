var express 	= require('express'),
	app 		= express();

app
	.get('/', function(req, res){
		res.render('index.jade', {
			title: "Hello Express & Jade and more stuff"
		});
	})
	.listen(3080, function(){
		console.log("Listening on port 3080");
})