exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("recipes")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("recipes").insert([
        { recipe_name: "Bread" },
        { recipe_name: "Chili" },
        { recipe_name: "Bechamel" },
      ]);
    });
};
