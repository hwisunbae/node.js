function Greetr() {
	this.greeting = 'hello';
	this.greet = function () {
	console.log(this.greeting);
	}
}

module.exports = Greetr;

