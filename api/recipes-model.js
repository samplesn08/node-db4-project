const db = require('../db-config');

module.exports = {
    getRecipeById(id){
        return db('recipes as r')
            .join('steps as s', 'r.recipe_id', 's.recipe_id')
            .join('ingredients as i', 's.ingredient_id', 'i.ingredient_id')
            .select('r.recipe_name', 'i.ingredient_name', 's.quantity', 's.instruction')
            .where('r.recipe_id', id)
    }
}