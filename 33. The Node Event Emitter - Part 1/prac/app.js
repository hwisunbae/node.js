var emitter = require('./emitter.js');

var Emtr = new emitter ();

Emtr.on ('greet', function () {
    console.log('greeting');
});

Emtr.on ('greet', function () {
    console.log('greeto');
});

Emtr.emit ('greet');
