var eventConfig  = require('./config').events;
var Emitter = require('events');

var emtr = new Emitter();

emtr.on(eventConfig.GREET, function(){
	console.log('Somewhere, someones said hello.');
});

emtr.on(eventConfig.GREET, function() {
	console.log('A greeting occured!');
});

console.log('Hello!');
emtr.emit('greet');
