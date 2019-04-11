var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type' : 'application/json'});
    var obj = {
        firstname: 'john',
        lastname : 'doe'
    };
	res.end(JSON.stringify(obj)); //serialize
}).listen(1337, '127.0.0.1');

// serialize;
// translating an object into a format that cna be stored or transferred.
