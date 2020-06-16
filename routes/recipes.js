// Route to handle removing a recipe
router.delete("/:id", async (req, res, next) => {
    const { id } = req.params;
    // get an id for a recipe to delete
    try {
      // pass the id to the database to find recipe to be deleted
      // database would either respond succcess or fail
      const recipe = await Recipe.findByPk(id);
      // invoke the .destroy() method on the returned recipe
      await recipe.destroy();
      // send a success message to the client
      res.sendStatus(204);
    } catch (err) {
      next(err);
    }
  });
  
  module.exports = router;