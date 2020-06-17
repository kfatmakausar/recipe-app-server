const { Recipe, Review, User } = require("../database/models");


const seedDatabase = async () => {
  await Promise.all([
    Recipe.create({
      title: "Pizza",
      readyInMinutes: "30",
      servings: "4",
      sourceURL: "https://www.simplyrecipes.com/recipes/homemade_pizza/",
      //userId: 1
    }),
    Recipe.create({
        title: "Bagels",
        readyInMinutes: "60",
        servings: "4",
        sourceURL: "https://sallysbakingaddiction.com/homemade-bagels/",
        //userId: 1
    }),
    Recipe.create({
        title: "Alfredo Pasta",
        readyInMinutes: "45",
        servings: "4",
        sourceURL: "https://www.thekitchn.com/how-to-make-chicken-alfredo-pasta-249767",
        //userId: 1
    }),
    Review.create({
      userName: "kfatmakausar",
      description: "Delicious pizza! Amazing recipe, must try!",
      recipeId: 1,
     // userId: 1
    }),
    Review.create({
        userName: "alextho",
        description: "Burnt pizza! Wrong oven time given!!",
        recipeId: 1,
      //  userId: 1
    }),
    Review.create({
        userName: "arslan",
        description: "Yummy bagels!!",
        recipeId: 2,
      //  userId: 1
    }),
    User.create({
      email: "kfatmakausar@gmail.com",
      password: "abc123",
      salt: "abc123",
      googleId: "kfatmakausar",
    })
  ]);
};

module.exports = seedDatabase;
