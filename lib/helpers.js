var express = require('express');
const hbs = require('hbs');

//get current year
hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear()
});

//convert text to uppercase
hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
});