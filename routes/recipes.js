// var express = require("express");
// var router = express.Router();
// const { Bookmark, Review, User } = require("../database/models");

// /* GET all recipes. */
// // /api/recipes
// router.get("/", async (req, res, next) => {
//   // try to get recipes object from database
//   console.log("GETRECIPE", req.user);
//   try {
//     // recipes will be the result of the Recipe.findAll promise
//     const bookmarks = await Recipe.findAll({ include: Review });
//     // if recipes is valid, it will be sent as a json response
//     //console.log(recipes);
//     res.status(200).json(recipes);
//   } catch (err) {
//     // if there is an error, it'll passed via the next parameter to the error handler middleware
//     next(err);
//   }
// });

// // Route to serve single recipe based on its id
// // /api/recipes/:id
// // /api/recipes/456 would respond with a recipe with id 456
// router.get("/:id", async (req, res, next) => {
//   // take the id from params
//   const { id } = req.params;
//   // query the database for a recipe with matching id
//   try {
//     // if successful:
//     const recipe = await Recipe.findByPk(id, { include: Review });

//     // send back the recipe as a response
//     res.status(200).json(recipe);
//   } catch (err) {
//     // if error:
//     // handle error
//     next(err);
//   }
// });

// // Route to get reviews associated with a recipe
// // /api/recipes/:id/reviews
// // /api/recipes/456/reviews
// router.get("/:id/reviews", async (req, res, next) => {
//   const { id } = req.params;
//   // find the recipe associated with the id
//   let foundRecipe;
//   try {
//     foundRecipe = await Recipe.findByPk(id);
//   } catch (err) {
//     next(err);
//   }

//   try {
//     const reviewsOfRecipe = await foundRecipe.getReviews();
//     res.status(200).json(reviewsOfRecipe);
//   } catch (err) {
//     next(err);
//   }

//   // find the reviews associated with the recipe
//   // send back an array of reviews
// });

// // // Route to handle adding a recipe
// // // /api/recipes/
// // router.post("/", async (req, res, next) => {
// //   // Take the form data from the request body
// //   const { title, readyInMinutes, servings, sourceUrl, image } = req.body;
// //   // Create a recipe object
// //   const recipeObj = {
// //     title: title,
// //     readyInMinutes: readyInMinutes,
// //     servings: servings,
// //     sourceURL: sourceURL,
// //     image: image,
// //   };
// //   try {
// //     // Create a new recipe on the database
// //     const newRecipe = await Recipe.create(recipeObj);
// //     // The database would return a recipe
// //     // send that recipe as a json to the client
// //     res.status(201).send(newRecipe);
// //   } catch (err) {
// //     next(err);
// //   }
// // });

// router.post("/", async (req, res, next) => {
//   try {
//     const recipe = await Recipe.findOrCreate({
//       where: {
//         title: req.body.title,
//         readyInMinutes: req.body.readyInMinutes,
//         servings: req.body.servings,
//         sourceURL: req.body.sourceURL,
//         image: req.body.image,
//       },
//     });
//     //console.log(currentUser);
//     // console.log(req.session);
//     // console.log(req.body);
//     const currentUser = await User.findByPk(req.user.id);
//     const addRecipeResponse = await currentUser.addRecipe(recipe[0]);
//     console.log(addRecipeResponse);
//     res.json(recipe[0]);
//   } catch (error) {
//     next(error);
//   }
// });

// // Route to handle editing a recipe
// // /api/recipes/:id
// // /api/recipes/456 would modify a recipe with id 456
// router.put("/:id", async (req, res, next) => {
//   // get the id from request params
//   const { id } = req.params;
//   // get form data from the request body
//   const { title, readyInMinutes, servings, sourceUrl, image } = req.body;
//   const updatedObj = {
//     title: title,
//     readyInMinutes: readyInMinutes,
//     servings: servings,
//     sourceUrl: sourceUrl,
//     image: image,
//   };
//   try {
//     // if successfull:
//     // Find a recipe with a matching id from the database
//     const recipe = await Recipe.findByPk(id, { include: Review });
//     // database would return a valid recipe object or an error
//     console.log(updatedObj);
//     // modify the recipe object with new form data
//     await recipe.set(updatedObj);
//     // save the new recipe object to the data
//     // database would return a new recipe object
//     const updatedRecipe = await recipe.save();
//     console.log(updatedRecipe);
//     // send the newRecipe as a response from the API
//     res.status(201).send(updatedRecipe);
//   } catch (err) {
//     // if error:
//     // handle the error
//     next(err);
//   }
// });

// // Route to handle removing a recipe
// router.delete("/:id", async (req, res, next) => {
//   const { id } = req.params;
//   // get an id for a recipe to delete
//   try {
//     // pass the id to the database to find recipe to be deleted
//     // database would either respond succcess or fail
//     const recipe = await Recipe.findByPk(id);
//     // invoke the .destroy() method on the returned recipe
//     await recipe.destroy();
//     // send a success message to the client
//     res.sendStatus(204);
//   } catch (err) {
//     next(err);
//   }
// });

// module.exports = router;
