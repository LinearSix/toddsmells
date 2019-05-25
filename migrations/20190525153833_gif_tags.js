exports.up = function(knex) {
    return knex.schema.createTable('gif_tags', (table) => {
        table.integer('gif_tags_gif');
        table.foreign('gif_tags_gif').onDelete('CASCADE').references('gif_id').inTable('gifs');
        table.integer('gif_tags_tag');
        table.foreign('gif_tags_tag').onDelete('CASCADE').references('tag_id').inTable('tags');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('gif_tags');
};