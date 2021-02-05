
var express = require('express');
var app = express();

// using ejs lib to dynamic html use thrught ejs file
app.set('view engine', 'ejs');

// dinamic html view
app.get('/', function(req,res){
	res.send("<html><body>News Portal</body></html>");
});

app.get('/technology', function(req, res){
	res.render('section/technology');
});

app.listen(3000, function(){
	//info showing on console
	console.log("Server running on express");
});