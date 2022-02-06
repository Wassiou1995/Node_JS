var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.write('<h1>acceuil<h1>'); //write a response
  res.end(); //end the response
});

// respond with "about" when a GET request is made to the homepage
app.get('/about', function(req, res) {
  res.write('<h1>about<h1>'); //write a response
  res.end(); //end the response
});

// respond with "contact us page" when a GET request is made to the homepage
app.get('/contact', function(req, res) {
  res.write('<h1>contact us page<h1>'); //write a response
  res.end(); //end the response
});


module.exports = app;



