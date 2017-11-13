const PORT = 3000;

var http = require("http");
var fs = require("fs");
// var url = require("url");
// var mine = require("./mine").types;
// var path = require("path");

var server = http.createServer(function (request, response) {
    var url = request.url;
    var file = url.substring(1);
    fs.readFile(file, function (err, data) {
        if (err) {
            response.writeHeader(500, {
                'Content-type': 'text/html'
            });
            console.log("服务器出错了");
            response.write(file);
            response.end();
        }else {
            if (file.indexOf("css")!=-1)
            {
                response.writeHeader(200,{
                    'Content-Type': 'text/css'
                });
            }else{
                response.writeHeader(200,{
                    'Content-Type': 'text/html'
                });
            }
            response.write(data);
            response.end();
        }

    });
        
    });

server.listen(PORT);
console.log("Server runing at port: " + PORT + ".");