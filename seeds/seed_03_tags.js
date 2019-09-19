exports.seed = (knex) => {
    return knex('tags').del()
      .then(() => {
          return knex('tags ').insert([
            {
              "tag_name": `Apu`,
            }
          ]);
    });
}