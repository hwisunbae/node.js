function Greetr() {
	this.greeting = 'HELLO WORLD!!';
	this.greet = function() {
	console.log(this.greeting);
	}
}
module.exports = new Greetr();
