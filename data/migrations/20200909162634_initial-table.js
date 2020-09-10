function foreignKey(tbl, refTable, name, refColumn) {
  return tbl
    .integer(name)
    .unsigned()
    .notNullable()
    .references(refColumn || "id")
    .inTable(refTable)
    .onDelete("RESTRICT")
    .onUpdate("CASCADE");
}

exports.up = function (knex) {
  return knex.schema
    .createTable("recipes", (table) => {
      table.increments();
      table.string("recipe_name").notNullable();
    })
    .createTable("ingredients", (table) => {
      table.increments();
      table.string("ingredient_name").notNullable().unique();
    })
    .createTable("steps", (table) => {
      table.increments();
      table.integer("recipe_step").notNullable();
      table.string("step_instruction").notNullable();
      table.float("quantity");

      table
        .integer("ingredient_id")
        .unsigned()
        .references("id")
        .inTable("ingredients")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      foreignKey(table, "recipes", "recipe_id");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("steps")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
