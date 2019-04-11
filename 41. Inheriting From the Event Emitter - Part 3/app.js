
var Greetr = require('./greeter.js');

var greeter1 = new Greetr();

greeter1.on('greet', function(data) {
    console.log('someone greed! ' + data);
});

greeter1.greet('Tony');