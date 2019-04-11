function hello() {
	this.greet = "hello";
	this.greeting = function () {
		console.log(this.greet);
	}
}

module.exports = hello;
