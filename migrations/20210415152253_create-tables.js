
exports.up = function(knex) {
  return knex.schema.createTable('recipes', tbl => {
      tbl.increments();
      tbl.string('recipe_name').unique().notNullable();
  })
  .createTable('ingredients', tbl => {
      tbl.increments();
      tbl.string('ingredient_name').notNullable();
  })
  .createTable('steps', tbl => {
      tbl.increments();
      tbl.string('instruction').notNullable();
      tbl.integer('recipe_id').unsigned().notNullable().references('id').inTable('recipes');
      tbl.integer('ingredient_id').unsigned().notNullable().references('id').inTable('ingredients');
      tbl.string('quantity')
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};
