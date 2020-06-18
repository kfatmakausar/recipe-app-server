const { Bookmark, Review, User } = require("../database/models");

const seedDatabase = async () => {
  // await Promise.all([
  await User.create({
    email: "kfatmakausar@gmail.com",
    password: "abc123",
  });
  await Bookmark.create({
    recipeId: "215435",
    userId: 1,
  });
  await Review.create({
    description: "Delicious pizza! Amazing recipe, must try!",
    recipeId: "215435",
    userId: 1,
  });
  // ]);
};

module.exports = seedDatabase;
