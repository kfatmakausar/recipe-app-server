const Sequelize = require("sequelize");
const db = require("../db");

const Review = db.define("review", {
  recipeId: { type: Sequelize.STRING, allowNull: false },
  description: { type: Sequelize.TEXT, defaultValue: "", allowNull: false },
});

module.exports = Review;
