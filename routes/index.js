var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Ankit Portfolio' });
});

/* GET home page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'My Projects' });
});
/* GET home page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'My Services' });
});
/* GET home page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Abut ME' });
});
/* GET home page. */
router.get('/header', function(req, res, next) {
  res.render('header',{ title: '' });
});
/* GET home page. */
router.get('/footer', function(req, res, next) {
  res.render('footer',{ title: '' });
});
/* GET home page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Page' });
});
module.exports = router;
