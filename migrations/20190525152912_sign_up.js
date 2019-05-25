exports.up = function(knex) {
    return knex.schema.createTable('sign_up', (table) => {
        table.increments('sign_up_id').primary();
        table.date('sign_up_date');
        table.string('sign_up_name').notNullable().defaultTo('');
        table.string('sign_up_username').notNullable().defaultTo('');
        table.string('sign_up_password').notNullable().defaultTo('');
        table.string('sign_up_preference').notNullable().defaultTo('');
        table.string('sign_up_phone').notNullable().defaultTo('');
        table.string('sign_up_email').notNullable().defaultTo('');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('sign_up');
};
