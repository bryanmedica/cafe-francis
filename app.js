var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var security = require('./security.json')

var app = express();
var multer = require('multer');


app.set('views', path.join(__dirname, 'views'));

// view engine setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));

var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null,  __dirname + '/public/images/');
  },
  filename: function(req, file, cb) {
    cb(null, "suggestion.jpg");
  }
});

var upload = multer({
  storage : storage
});
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('error');
});

app.get('/', function(req, res, next) {
  res.sendFile(__dirname + "/views/index.html");
});

app.get('/menu', function(req, res, next) {
  res.sendFile(__dirname + "/views/menu.html");
});

app.get('/import', function(req, res, next) {
  res.sendFile(__dirname + "/views/import.html");
});

app.post('/password', upload.none(), function(req, res) {
  console.log(req.body.password);
  res.redirect("/import");
});

app.post('/import', upload.single('photo'), function(req, res) {
  res.redirect("/menu");
});

module.exports = app;
