const Sequelize = require("sequelize");
const db = require("../db");

const Review = db.define("review", {
  userName: { type: Sequelize.STRING, allowNull: false },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "https://via.placeholder.com/480x240?text=Placeholder",
  },
  description: { type: Sequelize.TEXT, defaultValue: "", allowNull: false },
});

module.exports = Review;