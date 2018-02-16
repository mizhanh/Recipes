
//==============================================================================
// Get all recipes from the db
//==============================================================================

$.get("/api/all", function(data) {
  // For each recipe  that our server sends us back
  for (var i = 0; i < data.length; i++) {
    // Create a parent div to hold recipe data
    var recipesSection = $("<div>");
    // Add a class to this div: 'recipes'
    recipesSection.addClass("recipes");
    // Add an id to the recipe to mark which recipe it is
    recipesSection.attr("id", "Recipe-" + i);
    // Append the recipe to the recipe section
    $("#recipe-section").append(recipesSection);

    // Now  we add our recipe data to the section we just placed on the page
    $("#Recipe-" + i).append("<h2>" + (i + 1) + ". " + data[i].title + "</h2>");
    $("#Recipe-" + i).append("<h3>Author: " + data[i].author + "</h4>");
    $("#Recipe-" + i).append("<h3>Description: " + data[i].description + "</h4>");
  }
});