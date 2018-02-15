// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the recipes
  app.get("/api/posts/", function(req, res) {
    db.Post.findAll({})
    .then(function(dbPost) {
      res.json(dbPost);
    });
  });
