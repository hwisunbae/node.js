var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type' : 'text/html'});
	var html = fs.readFileSync(__dirname + '/index.html', 'utf8');
	var message = 'hello world...';
	html = html.replace('{Message}', message);
	/* dynamic template */
	res.end(html);
}).listen(1337, '127.0.0.1');

// template ;
// text designed to be the basis for final text or content after being processed.
