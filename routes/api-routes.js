// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
// var Recipe = require("../models/recipe.js");
// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the recipes
  app.get("/api/all/", function(req, res) {
    db.Recipe.findAll({})
    .then(function(dbRecipe) {
      res.json(dbRecipe);
    });
  });


  app.post("/api/new", function(req, res) {
  	var recipe = req.body;
  	console.log(recipe);
  	// db.Recipe.create(recipe)
  	db.Recipe.create({
  		title: recipe.title,
  		category: recipe.category,
  		author: recipe.author,
  		URL: recipe.URL,
  		description: recipe.description,
  		ingredients: recipe.ingredients,
  		directions: recipe.directions,
  		comments: recipe.comments,
  		preparation_time: recipe.preparation_time,
  		servings: recipe.servings,
  		difficulty: recipe.difficulty
  	})
  	.then(function(dbRecipe) {
  		res.json(dbRecipe);
  	});
  });
};