const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

var app = express()

//set up views
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
  var now = new Date().toString();
  var log = `${now}: ${req.method} ${req.url}`;

  fs.appendFile('server.log', log + '\n', (err) => {
    if (err) {
      console.log('Unable to append to server.log');
    }
  });
  console.log(log);
  next();
});

// app.use((req, res, next) => {
//   res.render('maintenance.hbs');
// });

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear()
});

hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

/* GET home page. */
app.get('/', function (req, res, next) {
  res.render('home.hbs', {
    userName: 'Brad',
    pageTitle: 'Home Page',
    welcomeMessage: 'Welcome to my website!',
  })
});

/* GET about page. */
app.get('/about', function (req, res, next) {
  res.render('about.hbs', {
    userName: 'Brad',
    pageTitle: 'About Page',
  });
});
