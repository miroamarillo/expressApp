var express 	= require('express'),
	//This is needed to parse the body of the request
	//bodyParser 	= require('body-parser'),
	app 		= express();


app.get('/', function(req, res){
	//format method. can get an object.
	res.format({
		// text: function(){
		// 	res.send('text response');
		// },
		// html: function(){
		// 	res.render('index.jade');
		// },
		//This only works if the previous are not present. Bug??
		json: function(){
		    res.send({ message: 'hey' });
		}
	});

});

app.listen(3080, function(){
		console.log("Listening on port 3080");
});