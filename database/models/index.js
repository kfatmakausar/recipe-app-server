// Here, we can prepare to register our models, set up associations between tables, and generate a barrel file for the models;

const Recipe = require("./recipe");
const Review = require("./review");

Recipe.hasMany(Review);

Review.belongsTo(Recipe);

module.exports = {
    Recipe,
    Review,
}
