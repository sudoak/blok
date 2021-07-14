const express = require('express');
const logger = require('morgan');
const compression = require('compression');
const createError = require('http-errors');
const cors = require('cors');

const recordRouter = require('./record/recordRoute');

const app = express();

require('./config/db.config');

app.enable('trust proxy');
app.use(cors());
app.use(compression());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1/', recordRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('error');
});

module.exports = app;
