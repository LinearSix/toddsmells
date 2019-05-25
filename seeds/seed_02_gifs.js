exports.seed = (knex) => {
    return knex('gifs').del()
      .then(() => {
          return knex('gifs').insert([
            {
              "gif_date": `2019-05-25`,
              "gif_name": `Apu Song and Dance`,
              "gif_path": `apu_rhyme_with_me`,
              "gif_desc": `Apu sings and dances on a chair with a cane coaxing the Simpsons to join in`,
            }
          ]);
    });
}