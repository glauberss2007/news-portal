
var express = require('express');
var msg = require('./mod_test');


var app = express();

// using ejs lib to dynamic html use thrught ejs file
app.set('view engine', 'ejs');

// dinamic html view
app.get('/', function(req,res){
	res.render("home/index");
});

app.get('/form_add_news', function(req, res){
	res.render('admin/form_add_news');
});

app.get('/news', function(req, res){
	res.render('news/news');
});

app.listen(3000, function(){
	//info showing on console
	console.log(msg());
});