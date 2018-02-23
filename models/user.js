

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("user", {
    // Giving the User model a name of type STRING
    email: DataTypes.STRING,
    pwd: DataTypes.STRING
  });
  return User;
};