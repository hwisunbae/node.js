'use strict';

var Eventemitter = require('events');

module.exports = class Greetr extends Eventemitter{
    constructor(){
        super(); 
        this.greeting = 'hello world!';
    }
    greet(data) {
        console.log(`${this.greeting}:  ${data}`);
        this.emit('greet', data);
    }
}
