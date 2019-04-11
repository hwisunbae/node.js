var fs = require('fs');

var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
console.log(greet);
//Sync is approaching to the file with a sync method
//useful to use when the file needs to be totally read and move onto the next line of code

var greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8', function(err, data) {
    console.log(data);
});
// error first callback : callbacks that an error object as their first param

console.log('done!');
//while callback function is completed, v8 moved on and was running its code
