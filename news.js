//console.log('Creating a nodjs news portal')

//Importing lib
var http = require('http');

//Creating server
var server = http.createServer(function(req,res){

	//Redirect diferent routes based on url req
	var category = req.url;
	if(category == '/tecnology'){
		res.end("<html><body>Tecnology News</body></html>");
	}else if(category == '/fashion'){
		res.end("<html><body>Fashion News</body></html>");
	}else if(category == '/beauty'){
		res.end("<html><body>Beauty News</body></html>");
	}else {
		res.end('<html><body>General News</body></html>');
	}
	
//	res.end("<html><body>News portal</body></html>");
});

//Start listen on port
server.listen(3000);




