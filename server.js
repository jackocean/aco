var http = require("http");
var url = require("url");

function start(route, handle){
	function onRequest(request, response) {
		debugger
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " received.");
		
		response.writeHead(200, {"Content-Type": "text/plain"});
		var content = route(pathname, handle)
	    response.write(content);
	    response.end();
	}
	
	http.createServer(onRequest).listen(8888);
	
	console.log("Server has started.");
}

exports.start = start;
