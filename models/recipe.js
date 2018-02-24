// Recipe model
module.exports = function(sequelize, DataTypes) {
  // Creates a "Recipe" model that matches up with DB
  var Recipe = sequelize.define("recipe", {
    // the routeName gets saved as a string
    title: DataTypes.STRING,
    // the name of the recipe (a string)
    category: DataTypes.STRING,
    // the category (a string for now, possible switch later)
    author: DataTypes.STRING,
    // the author (a string)
    URL: DataTypes.STRING,
    // and links (a string)
    description: DataTypes.STRING,
    // description (a string)
    ingredients: DataTypes.JSON,
    // ingredients (maybe more appropriate to use .JSON?  store ingredients as a JSON object?)
    directions: DataTypes.TEXT,
    // directions (a text for additional space)
    comments: DataTypes.TEXT,
    // comments (a text for additional space)
    preparation_time: DataTypes.INTEGER,
    // prep time (integer)
    servings: DataTypes.INTEGER,
    //  servings (integer)
    difficulty: DataTypes.STRING,
    // favorite?
    favorite: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false}
  }, {
    timestamps: false
  });
  return Recipe;
}

