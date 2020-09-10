const express = require("express");

const recipe = require("./recipe-helper");

const router = express.Router();

router.get("/", (req, res) => {
  recipe
    .getRecipes()
    .then((rez) => {
      res.status(200).json(rez);
    })
    .catch((err) => {
      console.log(err);
    });
});
router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  recipe
    .getInstructions(id)
    .then((rez) => {
      res.status(200).json(rez);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/:id/ingredients", (req, res) => {
  const id = Number(req.params.id);
  recipe.getShoppingList(id).then((rez) => {
    res.status(200).json(rez);
  });
});

module.exports = router;
