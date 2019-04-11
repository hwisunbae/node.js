var fs = require('fs');
var zlib = require('zlib'); //gzip file

var readable = fs.createReadStream(__dirname + '/greet.txt');
var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

var compressed = fs.createWriteStream(__dirname + '/greet.txt.gz');
var gzip = zlib.createGzip(); //transform & duplex

readable.pipe(writable);

readable.pipe(gzip).pipe(compressed); 
// method called changing ;
// a method returns an object so we can keep calling more methods.
