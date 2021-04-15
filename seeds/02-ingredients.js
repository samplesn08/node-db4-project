
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient_name: 'tomato sauce'},
        {ingredient_name: 'diced tomatoes'},
        {ingredient_name: 'kidney beans'},
        {ingredient_name: 'ground beef'},
        {ingredient_name: 'onion'},
        {ingredient_name: 'chili seasoning'},
        {ingredient_name: 'diced green pepper'},
      ]);
    });
};
