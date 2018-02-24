
$(function(){

//===============================================================================
// Recipes search based on ingredients
//===============================================================================

//When user hits the search-btn
$("#ingredient-search-btn").on("click", function(event) {
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

//===============================================================================
// Recipes search based on author
//===============================================================================

// // When user hits the category-search-btn
$("#author-search-btn").on("click", function() {
  // Save the category they typed into the category-search input
  var authorSearched = $("#recipe-author").val().trim();
  // Make an AJAX get request to our api
  $.get("/api/all/author/" + authorSearched, function(data) {
    // Log the data to the console
    console.log(data);
    // Call our renderRecipes function to add our recipes to the page
    renderRecipes(data);
  });

   $("#recipe-author").val("");
});


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
      
      div.append('<h2 style="font-size:30px; color:#4CAE4C; font-weight:bold">' + data[i].title + '</h2>');
      div.append('<img src="' + data[i].URL + '" style="width:200px; height:200px; margin-bottom:20px;"/>');
      div.append('<p style="font-size:16px">' + '<span style="font-weight:bold; margin-right:5px;">Category: </span>' + data[i].category + '</p>');
      div.append('<p style="font-size:16px">' + '<span style="font-weight:bold; margin-right:5px;">Author: </span>' + data[i].author + '</p>');
      div.append('<p style="font-size:16px">' + '<span style="font-weight:bold; margin-right:5px;">Description: </span>' + data[i].description + '</p>');
      div.append('<p style="font-size:16px">' + '<span style="font-weight:bold; margin-right:5px;">Ingredients: </span></p>');
        
        for (var j = 0; j < data[i].ingredients.length; j++) {
          div.append('<p style="font-size:16px; margin-left: 25px;">' + data[i].ingredients[j] + '</p>');
          }

      div.append('<p style="font-size:16px">' + '<span style="font-weight:bold; margin-right:5px;">Directions: </span>' + data[i].directions + '</p>');
      div.append('<p style="font-size:16px">' + '<span style="font-weight:bold; margin-right:5px;">Comments: </span>' + data[i].comments + '</p>');
      div.append('<p style="font-size:16px">' + '<span style="font-weight:bold; margin-right:5px;">Preparation Time: </span>' + data[i].preparation_time + '</p>');
      div.append('<p style="font-size:16px">' + '<span style="font-weight:bold; margin-right:5px;">Servings: </span>' + data[i].servings + '</p>');
      div.append('<p style="font-size:16px">' + '<span style="font-weight:bold; margin-right:5px;">Difficulty: </span>' + data[i].difficulty + '</p>');
      div.append('<p style="font-size:16px">' + '<span style="font-weight:bold; margin-right:5px;">Favorite: </span>' + data[i].favorite + '</p');

      if (data[i].favorite !== true) {
          div.append("<button style='background-color:#5cb85c; color:#fff; padding:6px 12px; font-size:14px; text-line:center; border-radius:8px; font-weight:400; border:2px solid #4CAE4C;' class='addFav' data-id='" + data[i].id + "'>Add My Favorite</button>");
        };

      div.append("<hr>");

      $("#stats").append(div);
    }

    // Add recipe from browser to favorite list of recipes
    $(".addFav").click(function(){
        var id = $(this).attr("data-id");
         $.ajax({
            method: "POST",
            url: "/favorite/" + id,
          }).then(console.log("posted: ", id)); 
    });

    function getRecipe(){
      $.get("/api/all/", function(data){
        var recipe = data;
        console.log(recipe);
      });
    }
     
  }
}


