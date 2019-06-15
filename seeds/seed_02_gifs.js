exports.seed = (knex) => {
    return knex('gifs').del()
      .then(() => {
          return knex('gifs').insert([
            {
              "gif_date": null,
              "gif_name": `Apu Song and Dance`,
              "gif_path": `apu_rhyme_with_me`,
              "gif_quote": `Oh won't you rhyme with me!`,
              "gif_desc": `Apu sings and dances on a chair with a cane coaxing the Simpsons to join in.`,
            },
            {
              "gif_date": null,
              "gif_name": `Whip It Smithers`,
              "gif_path": `smithers_whip`,
              "gif_quote": `Licorice Whip!`,
              "gif_desc": `Smithers undulates his hips while holding a giant licorice whip.`,
            },
            {
              "gif_date": null,
              "gif_name": `Cobra in Moe's Cash Register`,
              "gif_path": `moe_cobra`,
              "gif_quote": `Oh, I'm gonna be sick tonight!`,
              "gif_desc": `Smithers undulates his hips while holding a giant licorice whip.`,
            },
            {
              "gif_date": null,
              "gif_name": `Bart and Bob Falling`,
              "gif_path": `bart_bob_fall`,
              "gif_quote": `Ahhh!...gasp...Ahhh!`,
              "gif_desc": `Bart and Sideshow Bob fall off a dam`,
            },
            {
              "gif_date": null,
              "gif_name": `Ned Reads the Good Book`,
              "gif_path": `ned_good_book`,
              "gif_quote": `Even in my darkest hour, I can always turn to the good book.`,
              "gif_desc": `Ned leaves through pages of the bible`,
            }
          ]);
    });
}