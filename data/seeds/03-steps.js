/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('steps').insert([
    { step_instructions: 'Cook beef patty', ingredient_id: 1 },
    { step_instructions: 'Add lettuce', ingredient_id: 2 },
    { step_instructions: 'Add tomato slice', ingredient_id: 3 },
    { step_instructions: 'Toast buns', ingredient_id: 4 },

    { step_instructions: 'Boil pasta', ingredient_id: 5 },
    { step_instructions: 'Cook tomato sauce', ingredient_id: 6 },
    { step_instructions: 'Add beef to the sauce', ingredient_id: 1 },

    { step_instructions: 'Chop tomatoes', ingredient_id: 3 },
    { step_instructions: 'Add lettuce', ingredient_id: 2 },
    { step_instructions: 'Drizzle olive oil', ingredient_id: 7 }
  ]);
};
