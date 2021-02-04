
var express = require('express');
var app = express();

app.get('/', function(req,res){
	res.send("<html><body>News Portal</body></html>")
});

app.get('/tecnology', function(req,res){
	res.send("<html><body>Technology News</body></html>")
});

app.listen(3000, function(){
	//info showing on console
	console.log("Server running on express");
});