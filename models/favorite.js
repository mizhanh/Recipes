// Favorites model
module.exports = function(sequelize, DataTypes) {
  var Favorite = sequelize.define("favorite", {
    // Giving the Favorite model a name of type STRING
    email: DataTypes.STRING,
    recipeId: DataTypes.INTEGER 
  });
  return Favorite;
};