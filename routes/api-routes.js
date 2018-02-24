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
module.exports = function(app, passport) {

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


   // GET route for searching recipes by author
  app.get("/api/all/author/:author", function(req, res) {
    if (req.params.author) {
        db.recipe.findAll({
          where: {
            author: req.params.author
      }
    }).then(function(dbRecipe) {
      res.json(dbRecipe);
      });
    }
  });



  // Get all favorite recipes
  app.get("/api/all/favorite", isLoggedIn, function(req, res) {
    var thisUser = req.user.email;
    db.favorite.findAll({
        where: {
          email: thisUser
        }
    }).then(function(dbFavorite) {
      var favArray = [];
      for (var i = 0; i < dbFavorite.length; i++) {
          console.log("dbFavorite: ", dbFavorite[i].dataValues.recipeId);
          favArray.push(dbFavorite[i].dataValues.recipeId);
        }
      db.recipe.findAll({
        where: {
          id: favArray
        }
      }).then(function(dbRecipe) {
        res.json(dbRecipe);
        });
      })
      // res.json(dbRecipe);
    }
  );
    



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
  app.post("/favorite/:id/", isLoggedIn, function(req, res) {
    var newFavorite = {
      email: req.user.email,
      recipeId: req.params.id
    };
    console.log("email: ", newFavorite.email, " recipeId: ", newFavorite.recipeId);
    db.favorite.create(newFavorite).then(function(dbFavorite){
      res.json(dbFavorite);
    })
  
  });

    // Add sequelize code to create a new user
  app.post("/api/new/user", function(req, res) {
    debugger;
    var user = req.body;
    console.log(user);
    db.user.create(req.body)
    .then(function(dbUser) {
      res.json(dbUser);
    })
  });

  // route middleware to make sure a user is logged in
  function isLoggedIn(req, res, next) {
    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();
    // if they aren't redirect them to the home page
    // res.redirect('/');
      res.send(500,'showAlert') 
  }
};