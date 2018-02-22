module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    // Giving the User model a name of type STRING
    email: DataTypes.STRING,
    pwd: DataTypes.STRING
  });

  // User.associate = function(models) {
  //   // Associating User with Recipes
  //   User.hasMany(models.Recipe, {
  //     onDelete: "cascade"
  //   });
  // };

  return User;
};