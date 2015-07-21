var http = require("http");
var url = require("url");

function start(route, handle){
	/*
	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;
		//console.log("Request for " + pathname + " received.");
		
		//route(pathname, handle, response);
		
//		response.writeHead(200, {"Content-Type": "text/plain"});
//		var content = route(pathname, handle);
//	    response.write(content);
//	    response.end();
		
		var postData = "";
	    var pathname = url.parse(request.url).pathname;
	    console.log("Request for " + pathname + " received.");

	    request.setEncoding("utf8");

	    request.addListener("data", function(postDataChunk) {
	      postData += postDataChunk;
	      console.log("Received POST data chunk '"+
	      postDataChunk + "'.");
	    });

	    request.addListener("end", function() {
	      route(pathname, handle, response, postData);
	    });

	}
	*/
	
	//Í¼Æ¬ÉÏ´«
	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;
	    console.log("Request for " + pathname + " received.");
	    route(pathname, handle, response, request);
	}
	
	http.createServer(onRequest).listen(8888);
	
	console.log("Server has started.");
}

exports.start = start;
