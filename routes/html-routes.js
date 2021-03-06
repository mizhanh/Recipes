// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app, passport) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads index.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/my-recipes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/my-recipes.html"));
  });

  // blog route loads blog.html
  app.get("/submit-recipe", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/submit-recipe.html"));
  });
};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {
    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();
    // if they aren't redirect them to the home page
    res.redirect('/');
    // res.status('401').send({error:'Invalid Token'});
}
