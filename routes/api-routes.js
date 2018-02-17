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
    db.recipe.findAll({})
    .then(function(dbRecipe) {
      res.json(dbRecipe);
    });
  });

  // GET route for getting all of the recipes
  app.get("/api/all/category/:category", function(req, res) {
    db.recipe.findAll({
      where: {
        category: req.params.category
      }
    })
    .then(function(dbRecipe) {
      res.json(dbRecipe);
    });
  });

  // GET route for getting all of the recipes
  app.get("/api/all/ingredients", function(req, res) {
    db.recipe.findAll({})
    .then(function(dbRecipe) {
      var listIngredients = [];
      for (var i = 0; i < dbRecipe.length; i++) {
        for (var j = 0; j < dbRecipe[i].ingredients.length; j++) {
          listIngredients.push(dbRecipe[i].ingredients[j]);
        }
      }
      res.json(listIngredients);
    });
  });

  app.post("/api/new", function(req, res) {
    debugger;
  	var recipe = req.body;
  	console.log(recipe);
  	db.recipe.create(req.body)
  	.then(function(dbRecipe) {
  		res.json(dbRecipe);
  	});
  });
};