// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
// var Recipe = require("../models/recipe.js");
// Requiring our Todo model
var db = require("../models");
var ing = require('ingredientparser');

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

  // GET route for searching recipes by category
  app.get("/api/all/category/:category", function(req, res) {
    if (req.params.category) {
        db.recipe.findAll({
          where: {
            category: req.params.category
      }
    }).then(function(dbRecipe) {
      res.json(dbRecipe);
      });
    }
  });

  // Get all favorite recipes
  app.get("/api/all/favorite", function(req, res) {
      db.recipe.findAll({
          where: {
            favorite: "1"
      }
    }).then(function(dbRecipe) {
      res.json(dbRecipe);
      })
    
  });


  // GET route for getting ingredients from all recipes
  app.get("/api/all/ingredients", function(req, res) {
    db.recipe.findAll({})
    .then(function(dbRecipe) {
      var listIngredients = [];
      for (var i = 0; i < dbRecipe.length; i++) {
        for (var j = 0; j < dbRecipe[i].ingredients.length; j++) {
          var thisIngredient = dbRecipe[i].ingredients[j];
          var parsedIngredient = ing.parse(thisIngredient);
          listIngredients.push(parsedIngredient.name);
        }
      }
      res.json(listIngredients);
    });
  });

  app.get("/api/all/ingredients/:ingredient?", function(req, res) {
    db.recipe.findAll({})
    .then(function(dbRecipe) {
      var searchIngredients = [];
      for (var i = 0; i < dbRecipe.length; i++) {
        for (var j = 0; j < dbRecipe[i].ingredients.length; j++) {
          var thisIngredient = dbRecipe[i].ingredients[j];
          var parsedIngredient = ing.parse(thisIngredient);
          if (req.params.ingredient == parsedIngredient.name ){
            searchIngredients.push(dbRecipe[i]);
          }
        }
      }
      res.json(searchIngredients);
    });
  });

  // Add sequelize code to create a new recipe
  app.post("/api/new", function(req, res) {
    debugger;
  	var recipe = req.body;
  	console.log(recipe);
  	db.recipe.create(req.body)
  	.then(function(dbRecipe) {
  		res.json(dbRecipe);
  	})
  });



  // Add sequelize code to delete a recipe
  app.post("/api/delete", function(req, res){
    db.recipe.destroy({
      where: {
        id: req.body.id
      }
    }).then(function(dbRecipe){
      res.end();
    })

  });

  // PUT route for updating favorite checkbox
  app.put("/api/all/:id", function(req, res) {
    db.recipe.update(
      {favorite: "1"},
      {where: {id: req.params.id}
    }).then(function(dbRecipe){
      res.json(dbRecipe);
    })
  
  });

    // Add sequelize code to create a new recipe
  app.post("/api/new/user", function(req, res) {
    debugger;
    var user = req.body;
    console.log(user);
    db.user.create(req.body)
    .then(function(dbUser) {
      res.json(dbUser);
    })
  });




};