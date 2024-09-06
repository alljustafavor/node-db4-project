const db = require('../data/db-config.js');

const get_recipes = async () => {
  return db('recipes')
    .select('recipe_id', 'recipe_name');
};

const get_recipe = async (recipeId) => {
  const recipe = await db('recipes')
    .where('recipe_id', recipeId)
    .first();

  if (!recipe) {
    return null;
  }

  const ingredients = await db('recipe_ingredients as ri')
    .join('ingredients as i', 'ri.ingredient_id', 'i.ingredient_id')
    .where('ri.recipe_id', recipeId)
    .select('i.ingredient_name', 'ri.quantity', 'ri.step_number');

  const steps = await db('steps')
    .join('recipe_ingredients as ri', 'steps.ingredient_id', 'ri.ingredient_id')
    .where('ri.recipe_id', recipeId)
    .select('steps.step_instructions', 'ri.step_number')
    .orderBy('ri.step_number');

  return {
    ...recipe,
    ingredients,
    steps
  };
};

const create_recipe = async (recipeData) => {
};

const delete_recipe = async (recipeId) => {
};

module.exports = {
  get_recipes,
  get_recipe,
  create_recipe,
  delete_recipe
};
