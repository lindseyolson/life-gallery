// requires
var express = require ('express');
var app = express();
var path = require ('path');

// globals
var port = process.env.PORT || 1616;

// uses
app.use (express.static('public'));

// server
app.listen (port, function(){
  console.log('server listening:', port);
});

// base url
app.get ('/', function(req, res){
  res.sendFile  (path.resolve('public/views/index.html'));
});
