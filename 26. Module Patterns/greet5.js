var greeting = 'hello world!!!!!';

function greet() {
	console.log(greeting);
}

//revealing module pattern *****
module.exports = {
	greet : greet
}
