
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
    $("#My_Recipe_" + i).append('<h2 style="font-size:30px; color:#4CAE4C; font-weight:bold; margin-top:0px;">' + data[i].title + '</h2>');
    $("#My_Recipe_" + i).append('<img src="' + data[i].URL + '" style="width:200px; height:200px;"/>');
    $("#My_Recipe_" + i).append('<p style="font-size:16px">Category: ' + data[i].category + '</p>');
    $("#My_Recipe_" + i).append('<p style="font-size:16px">Author: ' + data[i].author + '</p>');
    
    $("#My_Recipe_" + i).append('<p style="font-size:16px">Description: ' + data[i].description + '</p>');
    $("#My_Recipe_" + i).append('<p style="font-size:16px">Ingredients: ' + data[i].ingredients + '</p>');
    $("#My_Recipe_" + i).append('<p style="font-size:16px">Directions: ' + data[i].directions + '</p>');
    $("#My_Recipe_" + i).append('<p style="font-size:16px">Comment: ' + data[i].comment + '</p>');
    $("#My_Recipe_" + i).append('<p style="font-size:16px">Preparation Time: ' + data[i].preparation_time + '</p>');
    $("#My_Recipe_" + i).append('<p style="font-size:16px">Servings: ' + data[i].servings + '</p>');
    $("#My_Recipe_" + i).append('<p style="font-size:16px">Difficulty: ' + data[i].difficulty + '</p>');
    $("#My_Recipe_" + i).append('<p style="font-size:16px">Favorite: ' + data[i].favorite + '</p');
  }
});

})

