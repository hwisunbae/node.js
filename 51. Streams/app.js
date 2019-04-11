// chunk : a piece of data being sent through a stream
// abstract class ( base class ) : a type of consturctor you never work directly with, but inherit from

/* 
writable and readable
browser -> request  -> web server ; readable
web server -> response  -> browser ; writable 
*/

var fs = require('fs');
var readable = fs.createReadStream(__dirname + '/greet.txt', {encoding: 'utf8', highWaterMark : 1024*4});
var writable = fs.createWriteStream(__dirname + '/greetcopy.txt', {encoding: 'utf8', highWaterMark : 1024*4});

readable.on('data', function(chunk) {
    console.log(chunk);
    writable.write(chunk);
});

