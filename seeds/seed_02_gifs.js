exports.seed = (knex) => {
    return knex('gifs').del()
      .then(() => {
          return knex('gifs').insert([
            {
              "gif_date": null,
              "gif_name": `fdsfasdfa`,
              "gif_path": `homer_pork_rinds.gif`,
              "gif_quote": `fdsafsad`,
              "gif_desc": `fdsafsad`
              },
              {
              "gif_date": null,
              "gif_name": `fdsafs`,
              "gif_path": `maggie_caffeine.gif`,
              "gif_quote": `fdsf`,
              "gif_desc": `sfdsafsafs`
              },
              {
              "gif_date": null,
              "gif_name": `Baron Von Chickenpants`,
              "gif_path": `baron_von_chickenpants.gif`,
              "gif_quote": `Look at me, Lis'. I'm Baron Von Chickenpants!`,
              "gif_desc": `Bart wears an uncooked chicken as pants to try and entertain Lisa`
              },
              {
              "gif_date": null,
              "gif_name": `Sax-ah-mah-phone`,
              "gif_path": `saxamaphone.gif`,
              "gif_quote": `Sax-ah-mah-phone!`,
              "gif_desc": `Homer tries playing Lisa's sax by speaking through it.`
              },
              {
              "gif_date": null,
              "gif_name": `Slow Down Tubby`,
              "gif_path": `slow_down_tubby.gif`,
              "gif_quote": `Slow down, tubby. You're not on the moon yet!`,
              "gif_desc": `An obese child is shamed for eating like he lives in the moon's gravity.`
              },
              {
              "gif_date": null,
              "gif_name": `Blinky 1-2-3`,
              "gif_path": `blinky_123.gif`,
              "gif_quote": `1-2-3!`,
              "gif_desc": `A reporter counts three eyes on a mutant fish.`
              },
              {
              "gif_date": null,
              "gif_name": `Wrong Button`,
              "gif_path": `wrong_button.gif`,
              "gif_quote": `Whoops! Wrong button!`,
              "gif_desc": `Bart is briefly shackled to a chair by Mr. Burns`
              },
              {
              "gif_date": null,
              "gif_name": `Nelson Cigarette`,
              "gif_path": `nelson_cigarette.gif`,
              "gif_quote": `Hey, no smoking in the pit area. Fine!`,
              "gif_desc": `Nelson puts out a cigarette on his tongue.`
              },
              {
              "gif_date": null,
              "gif_name": `fdsa`,
              "gif_path": `krusty_withholds_punch.gif`,
              "gif_quote": `asdfas`,
              "gif_desc": `fdsa`
              },
              {
              "gif_date": null,
              "gif_name": `fdsafas`,
              "gif_path": `lance_murdock_autograph.gif`,
              "gif_quote": `fdsfas`,
              "gif_desc": `fdsafsa`
              },
              // {
              // "gif_date": `2019-7-16`,
              // "gif_name": `Lisa Auto-Fire`,
              // "gif_path": `lisa_autofire.gif`,
              // "gif_quote": `Help! It's stuck on auto-fire!`,
              // "gif_desc": `Lisa wheels out of control with a fully automatic rifle.`
              // },
              // {
              // "gif_date": `2019-7-15`,
              // "gif_name": `Burns Excellent Film`,
              // "gif_path": `burns_excellent_film.gif`,
              // "gif_quote": `Excellent.`,
              // "gif_desc": `Burns delivers his trademark catchphrase in his self-aggrandizing film.`
              // },
              // {
              // "gif_date": `2019-7-14`,
              // "gif_name": `Krusty Plane Loop`,
              // "gif_path": `krusty_plane_loop.gif`,
              // "gif_quote": `I think Krusty's gonna be aaall right.`,
              // "gif_desc": `Krusty loops his private plane before crashing into a mountain.`
              // },
              // {
              // "gif_date": `2019-7-13`,
              // "gif_name": `Barney's Head in the Door`,
              // "gif_path": `barney_door.gif`,
              // "gif_quote": `Ow! Ow! Ow!`,
              // "gif_desc": `Homer slams Barney's head in a car door to keep him from drunk driving`
              // },
              // {
              // "gif_date": `2019-7-12`,
              // "gif_name": `Robot Strangles Principal Skinner`,
              // "gif_path": `robot_strangles_skinner.gif`,
              // "gif_quote": `Children, help! He's killing me!`,
              // "gif_desc": `A robot in its default setting tries to kill Principal Skinner`
              // },
              // {
              // "gif_date": `2019-7-11`,
              // "gif_name": `Jebediah Laughs`,
              // "gif_path": `jebediah_laughs.gif`,
              // "gif_quote": `Ah-ha-ha-haaa!`,
              // "gif_desc": `Jebediah Springfield laughs maniacally at buffalo-ing Springfield.`
              // },
              // {
              // "gif_date": `2019-7-10`,
              // "gif_name": `Wiggum Shoots TV`,
              // "gif_path": `wiggum_shoots_tv.gif`,
              // "gif_quote": `Blam! Blam!`,
              // "gif_desc": `Chief Wiggum shoots the TV as Johnny Carson makes fun of him.`
              // },
              // {
              // "gif_date": `2019-1-1`,
              // "gif_name": `Marge Shocks`,
              // "gif_path": `marge_shocks_bart_and_lisa.gif`,
              // "gif_quote": `Bzzzt! Bzzzt!`,
              // "gif_desc": `Marge delivers electric shocks to Bart and Lisa.`
              // },
              // {
              // "gif_date": `2019-1-1`,
              // "gif_name": `Troy Sleeps`,
              // "gif_path": `troy_sleeps.gif`,
              // "gif_quote": `Zzz... >poke< >poke<`,
              // "gif_desc": `Troy McClure Sleeps Through Simpsons Outtakes.`
              // },
              // {
              // "gif_date": `2019-1-1`,
              // "gif_name": `Apu Song and Dance`,
              // "gif_path": `apu_rhyme_with_me.gif`,
              // "gif_quote": `Oh won't you rhyme with me!`,
              // "gif_desc": `Apu sings and dances on a chair with a cane coaxing the Simpsons to join in.`
              // },
              // {
              // "gif_date": `2019-1-1`,
              // "gif_name": `Squishy Sugar High`,
              // "gif_path": `bart_squishy.gif`,
              // "gif_quote": `Grblk!`,
              // "gif_desc": `Bart trips out on the ultimate squishy.`
              // },
              // {
              // "gif_date": `2019-1-1`,
              // "gif_name": `Whip It Smithers`,
              // "gif_path": `smithers_whip.gif`,
              // "gif_quote": `Licorice Whip!`,
              // "gif_desc": `Smithers undulates his hips while holding a giant licorice whip.`
              // },
              
          ]);
    });
}