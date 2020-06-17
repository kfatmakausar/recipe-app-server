// Here, we can prepare to register our models, set up associations between tables, and generate a barrel file for the models;

const Recipe = require("./recipe");
const Review = require("./review");
const User = require("./user");

//The User has many Recipes saved
//User writes many reviews
//Review belongs to one and only one Recipe
User.hasMany(Recipe); //Users will have recipes array
Recipe.belongsToMany(User,{through: 'User_Recipes'}); //Recipes will have a userId as foreign key
User.hasMany(Review);   //User will have a reviews array
Review.belongsTo(User); //Review will have a userId as foreign key
Recipe.hasMany(Review); //Recipes will have reviews array
Review.belongsTo(Recipe);   //Review will have recipeId as foreign key

module.exports = {
    Recipe,
    Review,
    User,
};
