var express = require("express");
var router = express.Router();
const { Bookmark, Review, User } = require("../database/models");

// /api/bookmarks
router.get("/", async (req, res, next) => {
  if (req.user) {
    try {
      const bookmarks = await Bookmark.findAll({
        where: { userId: req.user.id },
      });
      res.status(200).json(bookmarks);
    } catch (err) {
      next(err);
    }
  } else {
    res.redirect("/");
  }
});

//Router to get a single bookmark
// /api/bookmarks/id
router.get("/:id", async (req, res, next) => {
  if (req.user) {
    try {
      const bookmark = await Bookmark.findByPk(req.params.id);
      res.status(200).json(bookmark);
    } catch (err) {
      next(err);
    }
  }
});

// /api/bookmarks
router.post("/", async (req, res, next) => {
  console.log(req);
  console.log(req.body);
  console.log(req.params);
  if (req.user) {
    try {
      const bookmarkObj = {
        recipeId: req.body.recipeId,
        userId: req.user.id,
      };
      const newBookmark = await Bookmark.create(bookmarkObj);
      res.status(200).json(newBookmark);
    } catch (err) {
      next(err);
    }
  } else {
    res.redirect("/");
  }
});

module.exports = router;
