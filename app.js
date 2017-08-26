var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors=require('cors');

var index = require('./routes/index');
var users = require('./routes/users');
var customers=require('./routes/Customers');
var bodyMeas=require('./routes/bodyMeas');
var item=require('./routes/Item');
var itemType=require('./routes/ItemType');
var itemAttribute=require('./routes/ItemAttribute');
var attribute=require('./routes/Attribute');
var attributeValue=require('./routes/AttributeValue');
var bodyMeasurement=require('./routes/BodyMeasurement');
var order=require('./routes/Order');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/Customers', customers);
app.use('/bodyMeas', bodyMeas);
app.use('/item', item);
app.use('/itemType', itemType);
app.use('/itemAttribute', itemAttribute);
app.use('/Attribute', attribute);
app.use('/AttributeValue', attributeValue);
app.use('/BodyMeasurement', bodyMeasurement);
app.use('/Order', order);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
