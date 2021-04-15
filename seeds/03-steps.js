
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {recipe_id: 1, ingredient_id: 5, instruction: 'Chop onion', quantity: '1 onion'},
        {recipe_id: 1, ingredient_id: 4, instruction: 'Brown ground beef in skillet', quantity: '2 lbs'},
        {recipe_id: 1, ingredient_id: 2, instruction: 'Pour diced tomatoes into slow cooker', quantity: '2 cans'},
        {recipe_id: 1, ingredient_id: 7, instruction: 'Dice green bell pepper', quantity: '1 pepper'},
        {recipe_id: 1, ingredient_id: 3, instruction: 'Pour kidney beans into slow cooker', quantity: '2 cans'},
        {recipe_id: 1, ingredient_id: 6, instruction: 'Mix with chili seasoning', quantity: '2 tbsp'},
        {recipe_id: 1, ingredient_id: 1, instruction: 'Pour tomato sauce into slow cooker', quantity: '2 cans'},
        {recipe_id: 2, ingredient_id: 8, instruction: 'Place bread on plate', quantity: '2 slices'},
        {recipe_id: 2, ingredient_id: 9, instruction: 'Spread peanut butter on one slice of bread', quantity: '2 tbsp'},
        {recipe_id: 2, ingredient_id: 10, instruction: 'Spread jelly on the other slice of bread', quantity: '2 tbsp'},
      ]);
    });
};
