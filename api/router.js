const express = require('express');
const helpers = require('./model');

const router = express.Router();

router.get('/recipes', (req, res, next) => {
  helpers.get_recipes()
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch(next); 
});

router.get('/recipes/:id', (req, res, next) => {
  helpers.get_recipe(req.params.id)
    .then(recipe => {
      res.status(200).json(recipe);
    })
    .catch(next);
});

router.post('/recipes', (req, res, next) => {
  helpers.create_recipe(req.body)
    .then(recipe => {
      res.status(201).json(recipe);
    })
    .catch(next);
});

router.delete('/recipes/:id', (req, res, next) => {
  helpers.delete_recipe(req.params.id)
    .then(count => {
      if (count > 0) {
        res.status(204).end();
      } else {
        res.status(404).json({ message: 'Record not found' });
      }
    })
    .catch(next);
});

module.exports = router;
