var greet = require('./greet1.js');
greet();

var greet2 = require('./greet2.js').greet;
greet2();

var greet3 = require('./greet3.js');
greet3.greet();
greet3.greeting = 'changed hello world';

var greet3b = require('./greet3.js');
greet3b.greet();

var Greet4 = require('./greet4.js');
var grtr = new Greet4();
grtr.greet();

var greet5 = require('./greet5.js');
greet5.greet();
