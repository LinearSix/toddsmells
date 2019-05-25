exports.seed = (knex) => {
    return knex('gif_tags').del()
      .then(() => {
          return knex('gif_tags ').insert([
            {
              "gif_tags_gif": 1,
              "gif_tags_tag": 1
            }
          ]);
    });
}