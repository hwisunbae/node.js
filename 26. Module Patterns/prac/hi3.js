var hello = function() {
	this.greet = "hello";
	this.greeting = function(){
		console.log(this.greet);
	}
}

module.exports = new hello();
