let skills = {

  Ronin: {
    peerless: {
      name_en: "Peerless",
      desc: "For 3 turns, stance duration will not decrease, and stances cannot be removed. ", //In addition, the user gains the effect of both stances.
      stats: [],
      unique: true,
      type: "Boost",
      dep: {},
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    issen: {
      name_en: "Issen",
      desc: "Deals ranged cut damage to all enemies. Attempts to inflict instant death. Chance of instant death is increased against targets at low HP.",
      stats: ["STR", "LUC", "Arms"],
      unique: true,
      type: "Break",
      dep: { peerless: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    upperStance: {
      name_en: "Upper Stance",
      desc: "Increases damage done/taken when Upper Stance is active.", //At max, Upper Stance has a chance to automatically activate at the start of a battle.
      stats: [],
      dep: {},
      maxLevel: 8,
      coords: { x: 0, y: 2 }
    },
    airBlade: {
      name_en: "Air Blade",//
      desc: "Deals ranged cut damage to one target. \nAssumes Upper Stance at the end of the turn.", //50% chance to critical hit in Clear Stance and 
      stats: ["STR", "Arms", "Katana"],
      dep: { upperStance: 1 },
      maxLevel: 6,
      coords: { x: 1, y: 1 }
    },
    ripperBlast: {
      name_en: "Ripper Blast",  //Whirlwind
      desc: "Deals melee cut damage to one target, with splash damage to the adjacent enemies. \nAssumes Upper Stance at the end of the turn.",
      // desc: "Deals melee cut damage to one target and increases the user's row attack for a set number of turns. Assumes Upper Stance after use.",
      stats: ["STR", "Arms", "Katana"],
      dep: { upperStance: 1 },
      maxLevel: 6,
      coords: { x: 1, y: 2 }
    },
    dyingLotus: {
      name_en: "Dying Lotus",  //   ?Delayed Strike   Downburst  Slipstream
      desc: "Deals melee cut damage to one target, and attack again 2 turns later. \nAssumes Upper Stance on the follow-up.", //after use and again  2 turns later
      // desc: "Deals melee cut damage to one target, and attack again 2 turns later. Assumes Upper Stance after use.",
      stats: ["STR", "Arms", "Katana"],
      dep: { upperStance: 1 },
      maxLevel: 6,
      coords: { x: 1, y: 3 }
    },
    clearStance: {
      name_en: "Clear Stance",
      desc: "Increases defense and accuracy when Clear Stance is active. At max, Clear Stance has a chance to automatically activate at the start of a battle.", //-[Ronin skills' infliction rate]
      stats: [],
      dep: {},
      maxLevel: 8,
      coords: { x: 0, y: 5 }
    },
    armStrike: {
      name_en: "Arm Strike",  //Assume again if inflicts Arm Bind?
      desc: "Deals melee stab damage to one target. Attempts to inflict arm bind. \nAssumes Clear Stance after use.", //50% chance to critical hit in Upper Stance and a
      stats: ["STR", "LUC", "Arms", "Katana"],
      dep: { clearStance: 1 },
      maxLevel: 6,
      coords: { x: 1, y: 4 }
    },
    bloodyBlade: {
      name_en: "Bloody Blade", //
      // desc: "Deals melee stab damage to one target and decreases their Defense for a set number of turns. Assumes Clear Stance after use.",
      desc: "Deals melee cut damage to one target and increases the user's row attack for a set number of turns. \nAssumes Clear Stance after use.",
      stats: ["STR", "Arms", "Katana"],
      dep: { clearStance: 1 },
      maxLevel: 6,
      coords: { x: 1, y: 5 }
    },
    flowingPath: {
      name_en: "Flowing Path",   //Clear or -2T?,   Breath Wing   Drain Slice Serene Heart
      desc: "Deals melee cut damage to one target. Restores HP to the user based on the amount of damage dealt.\nAssumes Clear Stance after use.", //\n2 turns later, restore HP.    and on the follow-up
      // desc: "Deals melee cut damage to one target. Restores HP to the user based on the amount of damage dealt. 50% chance to critical hit in Upper Stance and assumes Clear Stance after use.",
      // desc: "Deals melee cut damage to one target and restores HP to the user's row based on their Max HP. 50% chance to critical hit in Upper Stance and assumes Clear Stance after use.",
      stats: ["STR", "Arms", "Katana"],
      dep: { clearStance: 1 },
      maxLevel: 6,
      coords: { x: 1, y: 6 }
    },
    soaringTempest: {
      name_en: "Soaring Tempest",
      desc: "Requires Upper Stance. Deals melee cut damage to one target and when a party member on the user's row is attacked, counterattack with melee damage. \nAssumes Clear Stance for 3 turns after use.",
      stats: ["STR", "Arms", "Katana"],
      dep: { airBlade: 1, dyingLotus: 1, ripperBlast: 1 },
      maxLevel: 8,
      coords: { x: 2, y: 1 }
    },
    mirrorMoon: {
      name_en: "Mirror Moon",//Heat Haze
      desc: "Requires Clear Stance. On this turn, when the user is attacked with physical damage, there is a chance they will nullify the damage and counterattack the source. \nAssumes Upper Stance for 3 turns after use.",
      //\n|\nRequires any stance. Deals ranged cut damage to one target. Increases the user's defense and accuracy until the end of next turn.\nAssumes Upper Stance for X turns after use. \n[If an attack was nulled the counter attack damage will be increased.] 
      stats: ["STR", "Arms", "Katana"],
      dep: { armStrike: 1, flowingPath: 1, bloodyBlade: 1 },
      maxLevel: 8,
      coords: { x: 2, y: 6 }
    },
    moonShadow: {
      name_en: "Moon Shadow",
      desc: "Requires any stance. Deals melee cut+almighty damage to one target.",// | Ignore cut resistance)
      stats: ["STR", "Arms", "Katana"],
      dep: {},
      maxLevel: 8,
      coords: { x: 2, y: 2.5 }
    },
    spiritBreath: {
      name_en: "Spirit Breath", //Spirit Breath   Heat Haze   Fading Flourish  Dying Lotus  Crimson Lotus  Flowing Path/
      desc: "Requires any stance. Deals melee cut damage to one target. Restores HP to the user and allies adjacent to the user.",
      //\n|\nRequires any stance. Restores HP to the user and allies adjacent to the user. Increases the user's attack, defense and accuracy until the end of next turn. 
      // desc: "Requires any stance. Deals ranged cut+ice damage to one target. Increases the user's defense and accuracy until the end of next turn. ",
      stats: ["STR", "Arms", "Katana"],
      dep: {},
      maxLevel: 8,
      coords: { x: 2, y: 4.5 }
    },
    helmSplitter: {
      name_en: "Helm Splitter",
      //(+almighty)
      desc: "Requires any stance. Deals melee cut damage to one target. Low accuracy. \nReduces stance duration by 2 after use. ",
      stats: ["STR", "Arms", "Katana"],
      dep: { moonShadow: 3 },
      maxLevel: 10,
      coords: { x: 3, y: 1.5 }
    },
    flameGrater: {
      name_en: "Flame Grater",
      desc: "Requires any stance. Deals melee cut+fire damage to one row and reduces their Ailment and Bind Resistance for a set number of turns. \nReduces stance duration by 2 after use. ",
      stats: ["STR", "Arms", "Katana"],
      dep: { moonShadow: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 2.5 }
    },
    lightningStab: {
      name_en: "Lightning Stab",
      desc: "Requires any stance. Deals melee stab+volt damage to one target and reduces the targets attack for that turn. \nReduces stance duration by 2 after use.",
      stats: ["STR", "Arms", "Katana"],
      dep: { spiritBreath: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 4.5 }
    },
    frigidSlash: {
      name_en: "Frigid Slash",
      desc: "Requires any stance. Deals melee cut+ice damage to one target. Attempts to inflict sleep. \nReduces stance duration by 2 after use. ",
      stats: ["STR", "LUC", "Arms", "Katana"],
      dep: { spiritBreath: 3 },
      maxLevel: 10,
      coords: { x: 3, y: 5.5 }
    },
    swallowStrike: {
      name_en: "Swallow Strike",
      desc: "Requires any stance. Deals multiple instances of melee cut damage to one target. \nRemoves stance after use.",//\nVeteran and Master skills cannot be used again for 3 turns.
      stats: ["STR", "Arms", "Katana"],
      dep: { helmSplitter: 3 },
      maxLevel: 8,
      coords: { x: 4, y: 1.5 }
    },
    petalScatter: {
      name_en: "Petal Scatter",
      desc: "Requires any stance. Deals ranged cut damage to all targets. Deals less damage based on the number of targets. \nRemoves stance after use.",
      stats: ["STR", "Arms", "Katana"],
      dep: { flameGrater: 3 },
      maxLevel: 6,
      coords: { x: 4, y: 2.5 }
    },
    earthBreaker: {
      name_en: "Earth Breaker",//Mirror Moon
      desc: "Requires any stance. Deals melee cut attack to one target with splash damage and a chance of stunning. \nRemoves stance after use.",
      //\n|\nRequires any stance. On this turn, when the user is attacked with physical damage, there is a chance they will nullify the damage and counterattack the source. \nIf an attack was nulled the counter attack damage will be increased. \nVeteran and Master skills cannot be used again for 3 turns.
      stats: ["STR", "LUC", "Arms", "Katana"],
      dep: { mirrorMoon: 3 },
      maxLevel: 6,
      coords: { x: 4, y: 4.5 }
    },
    bluntingStab: {
      name_en: "Blunting Stab",
      desc: "Requires any stance. Deals melee stab damage to one target. Attempts to inflict petrify. \nRemoves stance after use.",
      stats: ["STR", "LUC", "Arms", "Katana"],
      dep: { hazeSlash: 3 },
      maxLevel: 8,
      coords: { x: 4, y: 5.5 }
    },
    risingSpirit: {
      name_en: "Rising Spirit", //Serene Heart
      desc: "Requires Lv 4 Upper and Clear Stance. \nAt the end of the turn, if a stance is active, restores TP to the user.",
      stats: [],
      dep: {},
      maxLevel: 8,
      coords: { x: 0, y: 3.5 }
    },
    duel: {
      name_en: "Duel",
      desc: "Increases damage when attacking enemies that the user attacked last turn.",
      stats: [],
      dep: { swallowStrike: 1, petalScatter: 1 },
      maxLevel: 6,
      coords: { x: 5, y: 2 }
    },
    bladeGrasp: {
      name_en: "Blade Grasp", //Dragon Force  Rising Spirit/
      desc: "Provides a chance to nullify physical attacks against the user's row.",
      stats: [],
      dep: { bluntingStab: 1, earthBreaker: 1 },
      maxLevel: 6,
      coords: { x: 5, y: 5 }
    },
    // blossomDance: {
    //   name_en: "Blossom Dance",
    //   //Rising Spirit Peerless Combo
    //   //At the end of the turn, if a stance is active, restores TP to the user.
    //   desc: "Requires any stance. Activates Swallow Strike, Petal Scatter, Blunting Stab and Earth Breaker all at once. Applies a multiplier-based reduction to each skill's damage. Removes stance after use, and disables skills on the next turn.",
    //   stats: [],
    //   dep: { swallowStrike: 1, petalScatter: 1, bluntingStab: 1, earthBreaker: 1 },
    //   maxLevel: 6,
    //   coords: { x: 5, y: 3.5 }
    // },
    mine: {
      name_en: "Mine",
      desc: "Occasionally gains more items when using Mine points.",
      stats: [],
      unique: true,
      dep: {},
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    }
  },


};
