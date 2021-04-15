
exports.up = function(knex) {
  return knex.schema.createTable('recipes', tbl => {
      tbl.increments('recipe_id');
      tbl.string('recipe_name').unique().notNullable();
  })
  .createTable('ingredients', tbl => {
      tbl.increments('ingredient_id');
      tbl.string('ingredient_name').notNullable();
  })
  .createTable('steps', tbl => {
      tbl.increments('step_id');
      tbl.string('instruction').notNullable();
      tbl.integer('recipe_id').unsigned().notNullable().references('recipe_id').inTable('recipes');
      tbl.integer('ingredient_id').unsigned().notNullable().references('ingredient_id').inTable('ingredients');
      tbl.string('quantity')
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};
