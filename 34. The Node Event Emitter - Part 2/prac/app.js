var emitter = require('events');
var eventsConfig = require('./config.js').events;

var Emtr = new emitter();

Emtr.on (eventsConfig.GREET, function(){
    console.log('hello');
});

Emtr.on (eventsConfig.GREET, function(){
    console.log('good');
});

Emtr.emit ('greet');
