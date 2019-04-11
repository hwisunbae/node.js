var express = require('express');
var app = express();

var port = process.env.PORT || 3000;
// environment variables; 
// global varibles specific to the environment our code is living in 

app.get('/', function(req,res) {
    res.send('<html><head></head><body><h1>hello world! </h1></body></html>')
});
// http method;
// spcifies the type of action the request wishes to make

app.get('/person/:id', function(req,res) {
    res.send('<html><head></head><body><h1>Perosn: ' + req.params.id + '</h1></body></html>')
});

app.get('/api', function(req, res){
    res.json({firstname: 'john', lastname: 'doe'});
})

app.listen(port);
