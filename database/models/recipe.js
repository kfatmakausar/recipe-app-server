const Sequelize = require("sequelize");
const db = require("../db");

const Recipe = db.define("recipe", {
  title: { type: Sequelize.STRING, allowNull: false },
  readyInMinutes: { type: Sequelize.STRING, allowNull: false },
  servings: { type: Sequelize.STRING, allowNull: false },
  sourceURL: { type: Sequelize.STRING, allowNull:false },
  image: {
    type: Sequelize.STRING,
    defaultValue: "https://via.placeholder.com/480x240?text=Placeholder",
  },
});

module.exports = Recipe;