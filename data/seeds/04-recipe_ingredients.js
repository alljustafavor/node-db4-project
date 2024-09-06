/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('recipe_ingredients').insert([
    { recipe_id: 1, ingredient_id: 1, quantity: 1, step_number: 1 },
    { recipe_id: 1, ingredient_id: 2, quantity: 1, step_number: 2 },
    { recipe_id: 1, ingredient_id: 3, quantity: 1, step_number: 3 },
    { recipe_id: 1, ingredient_id: 4, quantity: 1, step_number: 4 },

    { recipe_id: 2, ingredient_id: 5, quantity: 1, step_number: 1 }, 
    { recipe_id: 2, ingredient_id: 6, quantity: 1, step_number: 2 },
    { recipe_id: 2, ingredient_id: 1, quantity: 1, step_number: 3 },

    { recipe_id: 3, ingredient_id: 3, quantity: 1, step_number: 1 },
    { recipe_id: 3, ingredient_id: 2, quantity: 1, step_number: 2 },
    { recipe_id: 3, ingredient_id: 7, quantity: 1, step_number: 3 }
  ]);
};

