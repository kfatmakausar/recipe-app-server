const Sequelize = require("sequelize");
const db = require("../db");

const Bookmark = db.define("bookmark", {
  recipeId: { type: Sequelize.STRING, allowNull: false },
});

module.exports = Bookmark;
