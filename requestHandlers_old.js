var exec = require("child_process").exec;
var querystring = require("querystring");
var fs = require("fs");

function start(response) {
    console.log("Request handler 'start' was called.");
//    function sleep(milliSeconds) {
//	    var startTime = new Date().getTime();
//	    while (new Date().getTime() < startTime + milliSeconds);
//	}
//    
//    sleep(10000);
//  
//    return "Hello Start";
    
//    exec("find /",{ timeout: 10000, maxBuffer: 20000*1024 }, function (error, stdout, stderr) {
//    	      response.writeHead(200, {"Content-Type": "text/plain"});
//    	      response.write(stdout||'empty5');
//    	      response.end();
//    });
    
//    exec("ls -lah", function (error, stdout, stderr) {
//	    response.writeHead(200, {"Content-Type": "text/plain"});
//	    response.write(stdout);
//	    response.end();
//	});
    
    //文字表单
//    var body = '<html>'+
//    '<head>'+
//    '<meta http-equiv="Content-Type" content="text/html; '+
//    'charset=UTF-8" />'+
//    '</head>'+
//    '<body>'+
//    '<form action="/upload" method="post">'+
//    '<textarea name="text" rows="20" cols="60"></textarea>'+
//    '<input type="submit" value="Submit text" />'+
//    '</form>'+
//    '</body>'+
//    '</html>';
//
//    response.writeHead(200, {"Content-Type": "text/html"});
//    response.write(body);
//    response.end();
 
    //提交图片表单
    var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" method="post" enctype="multipart/form-data">'+
    '<input type="file" name="upload">'+
    '<input type="submit" value="Upload file" />'+
    '</form>'+
    '</body>'+
    '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();

}

function upload(response, postData) {
    console.log("Request handler 'upload' was called.");
    
    response.writeHead(200, {"Content-Type": "text/plain"});
    //response.write("Hello Upload");
    //response.write("You've sent: " + postData);
    
    response.write("You've sent the text: "+ querystring.parse(postData).text);

    response.end();

    //return "Hello Upload";
}

function show(response, postData) {
    console.log("Request handler 'show' was called.");
    fs.readFile("/tmp/test.jpg", "binary", function(error, file) {
        if(error) {
	        response.writeHead(500, {"Content-Type": "text/plain"});
	        response.write(error + "\n");
	        response.end();
	    } else {
	        response.writeHead(200, {"Content-Type": "image/png"});
	        response.write(file, "binary");
	        response.end();
	    }
	});
}


exports.start = start;
exports.upload = upload;
exports.show = show;