var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;
var passport = require('passport');
var flash = require('connect-flash');

var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require("body-parser");
var session = require('express-session');
var methodOverride = require("method-override");

var db = require("./models");

// require('.config/passport')(passport);

// Sets up the Express app 
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));

//Override with POST having ? method=DELETE
app.use(methodOverride("_method"));

// Static directory
app.use(express.static("public"));

// Required for passport
app.use(session({secret: 'ilovepandas' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// Routes
// ============================================================
require("./routes/html-routes.js")(app, passport);
require("./routes/api-routes.js")(app, passport);

db.sequelize.sync().then(function(){
	app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
	});
});