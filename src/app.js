const express = require('express');
const logger = require('morgan');
const compression = require('compression');
const createError = require('http-errors');
const cors = require('cors');
const swaggerUI = require('swagger-ui-express');

const docs = require('./docs');
const recordRouter = require('./record/recordRoute');
const errorMiddleware = require('./middleware/errorMiddleware');

const app = express();

require('./config/db.config');

app.enable('trust proxy');
app.use(cors());
app.use(compression());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1/', recordRouter);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(docs));

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

app.use(errorMiddleware);

module.exports = app;
