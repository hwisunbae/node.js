var Eventemitter = require('events');
var util = require('util');

function Greetr() {
    Eventemitter.call(this); 
    //dont need to use new keyword
    //super constructor 
    //is equivalent to Eventemitter.apply(this);
    this.greeting = 'hello world!';
}

util.inherits(Greetr, Eventemitter);

Greetr.prototype.greet = function(data) {
    console.log(this.greeting + ":" + data);
    this.emit('greet', data);
}

var greeter1 = new Greetr();

greeter1.on('greet', function(data) {
    console.log('someone greed! ' + data);
});

greeter1.greet('Tony');