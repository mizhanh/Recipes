
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
  $.get("/api/all/ingredients", function(data) {
    console.log(data);
    // Call our renderRecipes function to add our recipes to the page
    renderRecipes(data);
  });
  $("#recipe-ingredients").val("");
});

//===============================================================================
// Recipes search based on category
//===============================================================================

// // When user hits the category-search-btn
$("#search-btn").on("click", function() {
  // Save the category they typed into the category-search input
  var categorySearched = $("#recipe-category").val().trim();
  // Make an AJAX get request to our api
  $.get("/api/category/" + categorySearched, function(data) {
    // Log the data to the console
    console.log(data);
    // Call our renderRecipes function to add our recipes to the page
    renderRecipes(data);
  });
   $("#recipe-category").val("");
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

      $("#stats").append(div);
    }

  }
}