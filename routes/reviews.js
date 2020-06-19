var express = require("express");
var router = express.Router();
const { Bookmark, Review, User } = require("../database/models");

//Route to get all Reviews
// /api/reviews
router.get("/", async (req, res, next) => {
  if (req.user) {
    try {
      const reviews = await Review.findAll({
        where: { userId: req.user.id },
      });
      res.status(200).json(reviews);
    } catch (err) {
      next(err);
    }
  } else {
    res.redirect("/");
  }
});

//Route to post a review
// /api/reviews
router.post("/", async (req, res, next) => {
  if (req.user) {
    try {
      const reviewObj = {
        recipeId: req.body.recipeId,
        description: req.body.description,
        userId: req.user.id,
      };
      const newReview = await Review.create(reviewObj);
      res.status(200).json(newReview);
    } catch (err) {
      next(err);
    }
  } else {
    res.redirect("/");
  }
});

//Route to get a single review
// /api/reviews/id
router.get("/:id", async (req, res, next) => {
  try {
    const review = await Review.findByPk(req.params.id);
    res.status(200).json(review);
  } catch (err) {
    next(err);
  }
});

module.exports = router;

// //Route to get All Reviews//
// router.get("/", async (req,res, next) => {
//     try{
//       const reviews = await Review.findAll({ include: Recipe});
//       console.log(reviews);
//       res.status(200).json(reviews);
//     }catch(err){
//       next(err);
//     }
//   });

// router.get("/:id", async (req, res,next) =>{
//   //Takes the Id
//   const{ id } = req.params;
//   //Query the database
//   try{
//     const review = await Review.findByPk(id, {include: Recipe});
//     //send back the review as a repsonse
//     res.status(200).json(review);
//   } catch(err){
//      // if error:
//     // handle error
//     next(err);
//   }
// });

// router.post("/", async (req, res,next) =>{
//   //Take the form data
//   const { userName, imageURL, description } = req.body;

//   //Create a new review entity//
//   const reviewObj = {
//     userName: userName, //sequelize magic methods
//     imageUrl: imageUrl,
//     description: description,
//   };
//   try {
//     const newReview = await Review.create(reviewObj);
//     res.status(201).send(newReview);
//   } catch(err){
//     next(err);
//   }
// });

// router.put("/:id", async (req,res,next) => {
//   const { id } = req.params;
//   const { userName, imageUrl, description} = req.body;

//   const updatedObj = {
//     userName: userName,
//     imageUrl: imageUrl,
//     description: description,
//   };
//   try{
//     const review = await Review.findByPk( id );
//     await review.set(updatedObj);
//     const updatedReview = await review.save();
//     res.status(201).send(updatedReview);
//   } catch (err) {
//     next(err);
//   }
// })

// router.delete("/:id", async(req, res, next) => {
//   const { id } = req.params;
//   try{
//     const review = await Review.findByPk(id);
//     await review.destroy();
//     res.sendStatus(204);
//   } catch(err) {
//     next(err);
//   }
// });
