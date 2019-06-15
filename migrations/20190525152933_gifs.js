exports.up = function(knex) {
    return knex.schema.createTable('gifs', (table) => {
        table.increments('gif_id').primary();
        table.date('gif_date');
        table.string('gif_name').notNullable().defaultTo('');
        table.string('gif_path').notNullable().defaultTo('');
        table.text('gif_quote').notNullable().defaultTo('');
        table.text('gif_desc').notNullable().defaultTo('');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('gifs');
};
