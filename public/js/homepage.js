
$(function(){

//===============================================================================
// Recipes search based on ingredients
//===============================================================================

//When user hits the search-btn
$("#search-btn").on("click", function(event) {
  event.preventDefault();
  // Save the ingredient they typed into the ingredients-search input
  var ingredientSearched = $("#recipe-ingredients").val().trim();
  // Make an AJAX get request to our api, including the user's recipes in the url
  $.get("/api/all/ingredients/" + ingredientSearched, function(data) {
    console.log(data);
    var recipeArray = [];
    for (var j = 0; j < data.length; j++) {
      recipeArray.push(data[j])
    }
    // Call our renderRecipes function to add our recipes to the page
    renderRecipes(recipeArray);
  });
  $("#recipe-ingredients").val("");
});

//===============================================================================
// Recipes search based on category
//===============================================================================

// // When user hits the category-search-btn
$("#search-btn").on("click", function() {
  // Save the category they typed into the category-search input
  var categorySearched = $("#recipe-category option:selected").text();
  // Make an AJAX get request to our api
  $.get("/api/all/category/" + categorySearched, function(data) {
    // Log the data to the console
    console.log(data);
    // Call our renderRecipes function to add our recipes to the page
    renderRecipes(data);
  });

   $("#recipe-category").val("");
});


})

//===================================================================================
// Get all recipes
//===================================================================================
$(function(){

  $("#view-all-btn").on("click", function() {

      $.get("/api/all/", function(data){
        console.log(data);
        renderRecipes(data);
       });
  });

})

//=================================================================================
// Data rendering function on the homepage
//==================================================================================


function renderRecipes(data) {
  if (data.length !== 0) {
    $("#stats").empty();
    $("#stats").show();
    
    for (var i = 0; i < data.length; i++) {
      
      var div = $("<div>");
      
      div.append("<h2>" + data[i].title + "</h2>");
      div.append("<p>Category: " + data[i].category + "</p>");
      div.append("<p>Author: " + data[i].author + "</p>");
      div.append("<p>URL: " + data[i].URL + "</p>");
      div.append("<p>Description: " + data[i].description + "</p>");
      div.append("<p>Ingredients: " + data[i].ingredients + "</p>");
      div.append("<p>Directions: " + data[i].directions + "</p>");
      div.append("<p>Comment: " + data[i].comment + "</p>");
      div.append("<p>Preparation Time: " + data[i].preparation_time + "</p>");
      div.append("<p>Servings: " + data[i].servings + "</p>");
      div.append("<p>Difficulty: " + data[i].difficulty + "</p>");
      div.append("<p>Favorite: " + data[i].favorite + "</p");

      if (data[i].favorite !== true) {
          div.append("<button class='addFav' data-id='" + data[i].id + "'>Add My Favorite</button>");
        };

      $("#stats").append(div);
    }

    // Add recipe from browser to favorite list of recipes
    $(".addFav").click(function(){
        var id = $(this).attr("data-id");
         $.ajax({
            method: "PUT",
            url: "/api/all/" + id,
          }).then(getRecipe); 
    });

    function getRecipe(){
      $.get("/api/all/", function(data){
        var recipe = data;
        console.log(recipe);
      });
    }
      


  }
}