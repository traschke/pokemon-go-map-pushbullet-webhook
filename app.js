var express = require('express');
var path = require('path');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var winston = require('winston');

var config = require('./config.json');

var logger = require('./modules/logger');
var pokemon = require('./routes/pokemon');

var app = express();

//app.use(morgan('combined', {stream: logger.stream}));
app.use(bodyParser.json());

app.use('/pokemon', pokemon);

// Start server ****************************
app.listen(config.port, function(err) {
  if (err !== undefined) {
      winston.error('Error on startup', err);
  }
  else {
      winston.info('Listening on port %d', config.port)
  }
});
