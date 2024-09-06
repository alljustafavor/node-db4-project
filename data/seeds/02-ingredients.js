/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('ingredients').insert([
    { ingredient_name: 'beef' },
    { ingredient_name: 'lettuce' },
    { ingredient_name: 'tomato' },
    { ingredient_name: 'bun' },
    { ingredient_name: 'pasta' },
    { ingredient_name: 'tomato sauce' },
    { ingredient_name: 'olive oil' }
  ]);
};

