exports.up = function(knex) {
    return knex.schema.createTable('sign_up', (table) => {
        table.increments('sign_up_id').primary();
        table.date('sign_up_date');
        table.string('sign_up_fname').notNullable().defaultTo('');
        table.string('sign_up_lname').notNullable().defaultTo('');
        table.string('sign_up_username').notNullable().defaultTo('');
        table.string('sign_up_password').notNullable().defaultTo('');
        table.integer('sign_up_preference');
        table.integer('sign_up_hour');
        table.string('sign_up_phone').notNullable().defaultTo('');
        table.string('sign_up_email').notNullable().defaultTo('');
        table.string('sign_up_bday').notNullable().defaultTo('1900-01-01');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('sign_up');
};
