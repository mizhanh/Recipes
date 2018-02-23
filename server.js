// Dependencies
var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;
var passport = require('passport');
var session = require('express-session');
var bodyParser = require("body-parser");
var cookieParser = require('cookie-parser');
var morgan = require('morgan');
var flash = require('connect-flash');
var methodOverride = require("method-override");
var db = require("./models");
var env = require('dotenv').load();

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
app.use(session({
	secret: 'ilovepandas', 
	resave: true, 
	saveUninitialized: true
})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistant login sessions
app.use(flash());

//Models
var models = require("./models");

// Routes
// ============================================================
require("./routes/html-routes.js")(app, passport);
require("./routes/api-routes.js")(app, passport);
require("./routes/auth.js")(app, passport);
//load passport strategies
require('./config/passport/passport.js')(passport, models.user);

db.sequelize.sync().then(function(){
	app.listen(PORT, function(err) {
  		if (!err)
  			console.log("App now listening at localhost:" + PORT);
  		else console.log(err)
	});
}).catch(function(err) {
	console.log(err, "Something went wrong with the Database Update.")
});