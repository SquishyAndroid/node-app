const express = require('express');
var path = require('path');
const hbs = require('hbs');
const helpers = require('./lib/helpers.js');

var index = require('./routes/index');
var app = express()

// view engine setup
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(__dirname + '/views/partials');

//use index for routes
app.use("/", index);

//run server
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
