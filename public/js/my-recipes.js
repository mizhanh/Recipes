
$(function(){

$.get("/api/all", function(data) {
  // For each book that our server sends us back
  for (var i = 0; i < data.length; i++) {
    // Create a parent div to hold book data
    var myRecipes = $("<div>");
    // Add a class to this div: 'well'
    myRecipes.addClass("well");
  //   // Add an id to the well to mark which well it is
    myRecipes.attr("id", "My_Recipe_" + i);
  //   // Append the well to the well section
    $("#show-submit-recipe").append(myRecipes);

  //   // Now  we add our book data to the well we just placed on the page
    $("#My_Recipe_" + i).append("<h3>" + (i + 1) + ". " + data[i].title + "</h>");
    $("#My_Recipe_" + i).append("<h4>Author: " + data[i].author + "</h4>");
    $("#My_Recipe_" + i).append("<h3>URL: " + data[i].URL + "</h4>");
    $("#My_Recipe_" + i).append("<h4>Description: " + data[i].description + "</h4>");
    $("#My_Recipe_" + i).append("<h4>Ingredients: " + data[i].ingredients + "</h4>");
    $("#My_Recipe_" + i).append("<h4>Directions: " + data[i].directions + "</h4>");
    $("#My_Recipe_" + i).append("<h4>Comment: " + data[i].comment + "</h4>");
    $("#My_Recipe_" + i).append("<h4>Preparation Time: " + data[i].preparation_time + "</h4>");
    $("#My_Recipe_" + i).append("<h4>Servings: " + data[i].servings + "</h4>");
    $("#My_Recipe_" + i).append("<h4>Difficulty: " + data[i].difficulty + "</h4>");
  }
});

})

