var firstname = 'jane';

(function (lastname) {
	var firstname = 'john';
	console.log(firstname);
	console.log(lastname);
}('Doe'));
//var firstname = 'jane';
console.log(firstname);
