exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("ingredients").insert([
        { ingredient_name: "Flour" },
        { ingredient_name: "Sugar" },
        { ingredient_name: "Eggs" },
        { ingredient_name: "Milk" },
        { ingredient_name: "Salt" },
        { ingredient_name: "Pepper" },
        { ingredient_name: "Cheese" },
        { ingredient_name: "Onion" },
        { ingredient_name: "Garlic" },
        { ingredient_name: "Oil" },
        { ingredient_name: "Butter" },
        { ingredient_name: "Chicken" },
        { ingredient_name: "Ground Beef" },
        { ingredient_name: "Tomato" },
        { ingredient_name: "Water" },
      ]);
    });
};
