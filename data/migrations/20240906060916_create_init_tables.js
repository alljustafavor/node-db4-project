/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl => {
      tbl.increments('recipe_id');
      tbl.string('recipe_name')
        .notNullable()
        .unique();
    })
    .createTable('ingredients', tbl => {
      tbl.increments('ingredient_id');
      tbl.string('ingredient_name')
        .notNullable()
        .unique();
    })
    .createTable('steps', tbl => {
      tbl.increments('step_id');
      tbl.string('step_instructions')
        .notNullable();
      tbl.integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('ingredient_id')
        .inTable('ingredients')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT');
    })
    .createTable('recipe_ingredients', tbl => { 
      tbl.increments('recipe_ingredients_id');
      tbl.integer('quantity')
        .notNullable();
      tbl.integer('step_number')
        .notNullable()
      tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('recipe_id')
        .inTable('recipes')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT');
      tbl.integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('ingredient_id')
        .inTable('ingredients')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT');
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('recipe_ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes'); 
};
