var express = require("express");
var router = express.Router();
const { Bookmark, Review, User } = require("../database/models");

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

router.post("/", async (req, res, next) => {
  if (req.user) {
    try {
      const bookmarkObj = { recipeId: req.body.recipeId, userId: req.user.id };
      const newBookmark = await Bookmark.create(bookmarkObj);
      res.status(200).json(newBookmark);
    } catch (err) {
      next(err);
    }
  } else {
    res.redirect("/");
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const bookmark = await Bookmark.findByPk(req.params.id);
    res.status(200).json(bookmark);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
