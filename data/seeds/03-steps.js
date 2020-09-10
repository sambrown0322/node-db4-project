exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("steps")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("steps").insert([
        {
          step_instruction: "Melt Butter",
          recipe_id: 3,
          ingredient_id: 11,
          recipe_step: 1,
          quantity: 1,
        },
        {
          step_instruction: "Whisk in flour",
          recipe_id: 3,
          ingredient_id: 1,
          recipe_step: 2,
          quantity: 1,
        },
        {
          step_instruction: "Whisk in milk",
          recipe_id: 3,
          ingredient_id: 4,
          recipe_step: 3,
          quantity: 1.5,
        },
        {
          step_instruction: "Put flour in a bowl",
          recipe_id: 1,
          ingredient_id: 1,
          recipe_step: 1,
          quantity: 1,
        },
        {
          step_instruction: "Mix in water",
          recipe_id: 1,
          ingredient_id: 15,
          recipe_step: 2,
          quantity: 0.5,
        },
        {
          step_instruction: "Put in oven",
          recipe_id: 1,
          ingredient_id: null,
          recipe_step: 3,
          quantity: null,
        },
      ]);
    });
};
