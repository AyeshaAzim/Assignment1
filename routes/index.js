var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Home',
    userName: 'Ayesha' });
});

/* GET About me page. */
router.get('/about', function(req, res, next) {
  res.render('about', {
     title: 'About',
     userName: 'Ayesha' });
});

/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', {
     title: 'Projects',
     userName: 'Ayesha' });
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('services', {
     title: 'Services',
     userName: 'Ayesha' });
});

/* GET Contact me page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', {
     title: 'Contact me',
     userName: 'Ayesha' });
});

module.exports = router;
