
//=======================================================================================================
// The code in submit-recipe.js handles what happens when the user clicks the "Submit Your Recipe" button.
//=======================================================================================================
  var ingredientList = [];

//------------------------------------------------------------
// Ingredient inputs 
//------------------------------------------------------------

// When user clicks Add ingredient button
$("#submit-ingredient").on("click", function(event) {
    event.preventDefault();
    var newIngredient = $("#ingredient").val().trim();
    ingredientList.push(newIngredient);
    $("#ingredientsContainer").append('<br />').append(newIngredient);

    $("#ingredient").val("");
});

//-------------------------------------------------------------
// Recipe inputs
//-------------------------------------------------------------
// When user clicks Submit Your Recipe button
$("#submit-recipe").on("click", function(event) {
    event.preventDefault();

  // Make a recipe object
  var newRecipe = {
    title: $("#title").val().trim(),
    category: $("#category option:selected").text(),
    author: $("#author").val().trim(),
    URL: $("#link").val().trim(),
    description: $("#link-description").val().trim(),
    ingredient: ingredientList,
    directions: $("#directions").val().trim(),
    comments: $("#comments").val().trim(),
    preparation_time: $("#preparation_time").val().trim(),
    servings: $("#servings").val().trim(),
    difficulty: $("input[name='difficulty']:checked").val()
  };

  // To check if newRecipe object work 
    console.log(newRecipe);

  // Send an AJAX POST-request with jQuery
  $.post("/api/new", newRecipe)
    // On success, run the following code
    .then(function(data) {
      // Log the data we found
      console.log(data);
    });

  // Empty each input box by replacing the value with an empty string
  $("#title").val("");
  $("#category").val("");
  $("#author").val("");
  $("#link").val("");
  $("#link-description").val("");
  $("#ingredientsContainer").val("");
  $("#directions").val("");
  $("#comments").val("");
  $("#preparation_time").val("");
  $("#servings").val("");
});










