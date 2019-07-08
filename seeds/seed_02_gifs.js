exports.seed = (knex) => {
    return knex('gifs').del()
      .then(() => {
          return knex('gifs').insert([
            {
              "gif_date": `2019-01-01`,
              "gif_name": `Apu Song and Dance`,
              "gif_path": `apu_rhyme_with_me.gif`,
              "gif_quote": `Oh won't you rhyme with me!`,
              "gif_desc": `Apu sings and dances on a chair with a cane coaxing the Simpsons to join in.`,
            },
            {
              "gif_date": `2019-01-01`,
              "gif_name": `Whip It Smithers`,
              "gif_path": `smithers_whip.gif`,
              "gif_quote": `Licorice Whip!`,
              "gif_desc": `Smithers undulates his hips while holding a giant licorice whip.`,
            },
            {
              "gif_date": `2019-01-01`,
              "gif_name": `Squishy Sugar High`,
              "gif_path": `bart_squishy.gif`,
              "gif_quote": `Grblk!`,
              "gif_desc": `Bart trips out on the ultimate squishy.`,
            },
            {
              "gif_date": null,
              "gif_name": `Troy Sleeps`,
              "gif_path": `troy_sleeps.gif`,
              "gif_quote": `Zzz... >poke< >poke<`,
              "gif_desc": `Troy McClure Sleeps Through Simpsons Outtakes.`,
            },
            {
              "gif_date": null,
              "gif_name": `Marge Shocks`,
              "gif_path": `marge_shocks_bart_and_lisa.gif`,
              "gif_quote": `Bzzzt! Bzzzt!`,
              "gif_desc": `Marge delivers electric shocks to Bart and Lisa.`,
            },
            {
              "gif_date": null,
              "gif_name": `Wiggum Shoots TV`,
              "gif_path": `wiggum_shoots_tv.gif`,
              "gif_quote": `Blam! Blam!`,
              "gif_desc": `Chief Wiggum shoots the TV as Johnny Carson makes fun of him.`,
            },
          ]);
    });
}