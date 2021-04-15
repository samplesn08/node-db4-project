
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_name: "Mom's chili"},
        {recipe_name: 'PB&J'}
      ]);
    });
};
