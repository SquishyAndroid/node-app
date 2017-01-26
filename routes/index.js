var express = require('express');
const fs = require('fs');
var router = express.Router();

// Create server log files
router.use((req, res, next) => {
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

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('home.hbs', {
    userName: 'Brad',
    pageTitle: 'Home',
    welcomeMessage: 'Welcome to my website!',
  })
});

/* GET about page. */
router.get('/about', function (req, res, next) {
  res.render('about.hbs', {
    userName: 'Brad',
    pageTitle: 'About',
  });
});

/* GET contact page. */
router.get('/contact', function (req, res, next) {
  res.render('contact.hbs', {
    userName: 'Brad',
    pageTitle: 'Contact',
  });
});

module.exports = router