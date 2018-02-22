
$(function(){

$.get("/api/all/favorite", function(data) {
  // For each recipe that our server sends us back
  for (var i = 0; i < data.length; i++) {
    // Create a parent div to hold recipes data
    var myRecipes = $("<div>");
    // Add a class to this div: 'well'
    myRecipes.addClass("well");
  //   // Add an id to the well to mark which well it is
    myRecipes.attr("id", "My_Recipe_" + i);
  //   // Append the well to the well section
    $("#show-submit-recipe").append(myRecipes);

  //   // Now  we add our recipe data to the well we just placed on the page
    $("#My_Recipe_" + i).append("<h3>" + (i + 1) + ". " + data[i].title + "</h3>");
    $("#My_Recipe_" + i).append("<h5>Category: " + data[i].category + "</h5>");
    $("#My_Recipe_" + i).append("<h5>Author: " + data[i].author + "</h5>");
    $("#My_Recipe_" + i).append('<img src="' + data[i].URL + '">');
    $("#My_Recipe_" + i).append("<h5>Description: " + data[i].description + "</h5>");
    $("#My_Recipe_" + i).append("<h5>Ingredients: " + data[i].ingredients + "</h5>");
    $("#My_Recipe_" + i).append("<h5>Directions: " + data[i].directions + "</h5>");
    $("#My_Recipe_" + i).append("<h5>Comment: " + data[i].comment + "</h5>");
    $("#My_Recipe_" + i).append("<h5>Preparation Time: " + data[i].preparation_time + "</h5>");
    $("#My_Recipe_" + i).append("<h5>Servings: " + data[i].servings + "</h5>");
    $("#My_Recipe_" + i).append("<h5>Difficulty: " + data[i].difficulty + "</h5>");
    $("#My_Recipe_" + i).append("<h5>My Favorite: " + data[i].favorite + "</h5>");
  }
});

})

