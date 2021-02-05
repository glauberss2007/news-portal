
var app = require('./config/server')
// modeling commomjs use example
var msg = require('./mod_test');

var newsRoute = require('./app/routes/news');
newsRoute(app);

var homeRoutes = require('./app/routes/home')(app);

var form_add_newsRoute = require('./app/routes/form_add_news')(app);

app.listen(3000, function(){
	//info showing on console
	console.log(msg());
});