var createError = require('http-errors');
var express = require('express');
var path = require('path');
const cors = require('cors')
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
const PORT = 3000;
var connectDB = require('./db/db')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

connectDB()

var app = express();

var corsOptions = {
  origin: "http://localhost:3000"
}

const Role = require('./models/role.model')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors(corsOptions))
// app.use(logger('dev'));
app.use(express.json()); // parse requests of content-type - application/json
app.use(express.urlencoded({ extended: true })); // parse requests of content-type - application/x-www-form-urlencoded
// app.use(cookieParser());
app.use('/public',express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// app.use('/api/v1', require('./controllers/apiv1.js'));
// app.use('/api/v2', require("./controllers/apiv2.js"));
// app.use('/api', usersRouter);

require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
  // error handler
  app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`)
})

module.exports = app;
