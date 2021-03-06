const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');
const compression = require('compression');
const cors = require('cors');
const helmet = require('helmet');

const usersRouter = require('./routes/users');
const middle = require('./middleware/Token');


const app = express();

app.use(helmet());
app.use(compression());
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/users',usersRouter);
app.use('/middle', middle);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.sendStatus(err.status || 500);
});

module.exports = app;
