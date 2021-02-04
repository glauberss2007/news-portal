//console.log('Creating a nodjs news portal')
var http = require('http');

var server = http.createServer(function(req,res){
	res.end("<html><body>News portal</body></html>");
});

server.listen(3000);



