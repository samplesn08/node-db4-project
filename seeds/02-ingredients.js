
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, ingredient_name: 'tomato sauce'},
        {id: 2, ingredient_name: 'diced tomatoes'},
        {id: 3, ingredient_name: 'kidney beans'},
        {id: 4, ingredient_name: 'ground beef'},
        {id: 5, ingredient_name: 'onion'},
        {id: 6, ingredient_name: 'chili seasoning'},
        {id: 7, ingredient_name: 'diced green pepper'},
      ]);
    });
};
