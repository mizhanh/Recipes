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
            favorite: req.body.favorite
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
          listIngredients.push(dbRecipe[i].ingredients[j]);
        }
      }
      res.json(listIngredients);
    });
  });

  // Add sequelize code to create a new recipe
  app.post("/api/new", function(req, res) {
    // debugger;
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
  app.put("/api/change", function(req, res) {
    db.recipe.update(
      {favorite: true,
      },
      {where: {id: req.body.id}

    }).then(function(dbRecipe){
      res.json(dbRecipe);
    })

  });




};