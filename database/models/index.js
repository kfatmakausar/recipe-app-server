// Here, we can prepare to register our models, set up associations between tables, and generate a barrel file for the models;

const Bookmark = require("./bookmark");
const Review = require("./review");
const User = require("./user");

//The User bookmarks a recipe based on recipeId

User.hasMany(Review); //User will have a reviews array
Review.belongsTo(User); //Review will have a userId as foreign key
User.hasMany(Bookmark);
Bookmark.belongsTo(User);

module.exports = {
  Bookmark,
  Review,
  User,
};
