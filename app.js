const express = require('express');
const bodyParser = require('body-parser');
const compress = require('compression');

// define API V1 Routes
const apiV1Route = require('./routes/api_v1');

const app = express();
app.disable('x-powered-by');

app.use((err, req, res, next) => {
  return res.status(500).json({
    message: 'There is an error on the app!',
    error: 'APP_ERROR'
  });
});

app.use(bodyParser.json({ limit: '1mb' }));
app.use(bodyParser.urlencoded({ limit: '1mb', extended: true }));

app.use(compress());

app.use('/api/v1', apiV1Route);

app.use((req, res) => {
  res.status(404).json({
    error: 'PAGE_NOT_FOUND',
    message: 'Page not found',
    status: 404
  });
});

app.use((req, res, next) => {
  var err;
  err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: err
  });
});

module.exports = app;
