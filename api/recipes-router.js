const express = require('express');
const { getRecipeById } = require('./recipes-model');
const Recipes = require('./recipes-model');
const router = express.Router();

router.get('/:id', (req, res) => {
    const { id } = req.params;
    getRecipeById(id)
        .then(recipe => {
            res.status(200).json(recipe)
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
        })
})

module.exports = router;