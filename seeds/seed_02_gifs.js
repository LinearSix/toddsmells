exports.seed = (knex) => {
    return knex('gifs').del()
      .then(() => {
          return knex('gifs').insert([
            {
            "gif_date": null,
            "gif_name": `Bullies Oh No`,
            "gif_path": `bullies_oh_no.gif`,
            "gif_quote": `Oh no!`,
            "gif_desc": `Kearney, Dolph, and Jimbo sarcastically feign terror.`
            },
            {
            "gif_date": null,
            "gif_name": `Barney Mouse Rat Syringe`,
            "gif_path": `barney_mouse_rat_syringe.gif`,
            "gif_quote": `Fine-Mouse-Fine-Rat-Syringe-Fine.`,
            "gif_desc": `Barney thanks a bottling line worker for his efforts.`
            },
            {
            "gif_date": null,
            "gif_name": `Wiggum Breathes`,
            "gif_path": `wiggum_breathe.gif`,
            "gif_quote": `Listen to me breathe! Waahh! >Snort!< Waahh!`,
            "gif_desc": `A young Wiggum is cured of athsma after an accidental dose on antibiotics.`
            },
            {
            "gif_date": `2019-7-16`,
            "gif_name": `Lisa Auto-Fire`,
            "gif_path": `lisa_autofire.gif`,
            "gif_quote": `Help! It's stuck on auto-fire!`,
            "gif_desc": `Lisa wheels out of control with a fully automatic rifle.`
            },
            {
            "gif_date": `2019-7-15`,
            "gif_name": `Burns Excellent Film`,
            "gif_path": `burns_excellent_film.gif`,
            "gif_quote": `Excellent.`,
            "gif_desc": `Burns delivers his trademark catchphrase in his self-aggrandizing film.`
            },
            {
            "gif_date": `2019-7-14`,
            "gif_name": `Krusty Plane Loop`,
            "gif_path": `krusty_plane_loop.gif`,
            "gif_quote": `I think Krusty's gonna be aaall right.`,
            "gif_desc": `Krusty loops his private plane before crashing into a mountain.`
            },
            {
            "gif_date": `2019-7-13`,
            "gif_name": `Barney's Head in the Door`,
            "gif_path": `barney_door.gif`,
            "gif_quote": `Ow! Ow! Ow!`,
            "gif_desc": `Homer slams Barney's head in a car door to keep him from drunk driving`
            },
            {
            "gif_date": `2019-7-12`,
            "gif_name": `Robot Strangles Principal Skinner`,
            "gif_path": `robot_strangles_skinner.gif`,
            "gif_quote": `Children, help! He's killing me!`,
            "gif_desc": `A robot in its default setting tries to kill Principal Skinner`
            },
            {
            "gif_date": `2019-7-11`,
            "gif_name": `Jebediah Laughs`,
            "gif_path": `jebediah_laughs.gif`,
            "gif_quote": `Ah-ha-ha-haaa!`,
            "gif_desc": `Jebediah Springfield laughs maniacally at buffalo-ing Springfield.`
            },
            {
            "gif_date": `2019-7-10`,
            "gif_name": `Wiggum Shoots TV`,
            "gif_path": `wiggum_shoots_tv.gif`,
            "gif_quote": `Blam! Blam!`,
            "gif_desc": `Chief Wiggum shoots the TV as Johnny Carson makes fun of him.`
            },
            {
            "gif_date": `2019-1-1`,
            "gif_name": `Whip It Smithers`,
            "gif_path": `smithers_whip.gif`,
            "gif_quote": `Licorice Whip!`,
            "gif_desc": `Smithers undulates his hips while holding a giant licorice whip.`
            },
            {
            "gif_date": `2019-1-1`,
            "gif_name": `Troy Sleeps`,
            "gif_path": `troy_sleeps.gif`,
            "gif_quote": `Zzz... >poke< >poke<`,
            "gif_desc": `Troy McClure Sleeps Through Simpsons Outtakes.`
            },
            {
            "gif_date": `2019-1-1`,
            "gif_name": `Apu Song and Dance`,
            "gif_path": `apu_rhyme_with_me.gif`,
            "gif_quote": `Oh won't you rhyme with me!`,
            "gif_desc": `Apu sings and dances on a chair with a cane coaxing the Simpsons to join in.`
            },
            {
            "gif_date": `2019-1-1`,
            "gif_name": `Marge Shocks`,
            "gif_path": `marge_shocks_bart_and_lisa.gif`,
            "gif_quote": `Bzzzt! Bzzzt!`,
            "gif_desc": `Marge delivers electric shocks to Bart and Lisa.`
            },
            {
            "gif_date": `2019-1-1`,
            "gif_name": `Squishy Sugar High`,
            "gif_path": `bart_squishy.gif`,
            "gif_quote": `Grblk!`,
            "gif_desc": `Bart trips out on the ultimate squishy.`
            },
          ]);
    });
}