/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('recipes').insert([
    { recipe_name: 'burger' },
    { recipe_name: 'spaghetti' },
    { recipe_name: 'salad' }
  ]);
};

