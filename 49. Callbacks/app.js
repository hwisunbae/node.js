// callback;
// a function passed to some other function,
// which we assume will be invoked at some point

function greet(callback) {
    console.log('hello!');
    var data = {
        name : 'johne doe'
    };
    callback(data);
}

greet(function(data) {
    console.log('The callback was invoked!');
    console.log(data);
});

// greet(function(data) {
//     console.log('a different callback was invoked!');
//     console.log(data.name);
// });