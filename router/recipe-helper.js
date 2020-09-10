const db = require("../data/db-config");

function getRecipes() {
  return db("recipes");
}

function getInstructions(recipe_id) {
  return db("steps").where({ recipe_id: recipe_id });
}

function getShoppingList(recipe_id) {
  return db("steps")
    .join("ingredients", "steps.ingredient_id", "=", "ingredients.id")
    .select("steps.quantity", "ingredients.ingredient_name")
    .where({ recipe_id });
}

module.exports = { getRecipes, getInstructions, getShoppingList };
