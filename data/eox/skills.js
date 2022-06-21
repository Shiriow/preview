let skills = {
  Harbinger: {
    infiniteMiasma: {
      name_en: "*Endless Miasma",
      desc: "For 3 turns, Miasma Armor's and enemy debuff's duration will not decrease.",
      
      unique: true,
      type: "Boost",
      stats: [],
      dep: {},
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    miasmaTorrent: {
      name_en: "Miasma Torrent",
      desc: "This turn, greatly reduces all enemies' attack, defense, evasion, action speed, and bind/ailment resistance.",
      unique: true,
      type: "Break",
      stats: [],
      dep: { infiniteMiasma: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    miasmaArmor: {
      name_en: "Miasma Armor", 
      desc: "Puts the user in the Miasma Armor state for 3 turns. Increases action speed when Miasma Armor is active. At the start of battle, has a chance to automatically put the user in the Miasma Armor state.",
      stats: [],
      dep: {},
      maxLevel: 6,
      coords: { x: 0, y: 1.5 }
    },
    endlessShroud: {
      name_en: "Endless Shroud",
      desc: "When the user uses a debuff skill, there's a chance to cast Miasma Armor automatically.",
      stats: [],
      dep: { miasmaArmor: 2 },
      maxLevel: 8,
      coords: { x: 1, y: 2 }
    },
    spiritAbsorb: {
      name_en: "Spirit Absorb",
      desc: "When the user uses a debuff skill, restores HP to the user. This restoration can heal beyond maximum HP. Overhealed HP will disappear at the end of the turn.", 
      stats: [],
      dep: { endlessShroud: 1 },
      maxLevel: 8,
      coords: { x: 2, y: 2 }
    },
    blackShroud: {
      name_en: "Black Shroud",
      desc: "During Miasma Armor, increases defense. \nSkills which remove Miasma Armor will instead reduce its duration by a set number of turns. If Miasma Armor's duration reaches 0 or less, it is removed.",   
      stats: [],
      dep: { miasmaArmor: 2 },
      maxLevel: 8,
      coords: { x: 1, y: 1 }
    },
    atonement: {
      name_en: "Atonement",
      desc: "Requires Miasma Armor. Removes Miasma Armor to restore HP to all party members and attempt to remove their ailments.",
      stats: ["WIS", "Head"],
      dep: { blackShroud: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 1 }
    },
    soulTransfer: {
      name_en: "Soul Transfer",
      desc: "Requires Miasma Armor. Removes Miasma Armor to attempt to revive all party members.",
      stats: ["WIS", "Head"],
      dep: { atonement: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 0.5 }
    },
    deathsAsylum: {
      name_en: "Death's Asylum",
      desc: "Provides a chance to nullify debuffs and ailments on the user as they are inflicted.",
      stats: [],
      dep: { atonement: 3 },
      maxLevel: 6,
      coords: { x: 3, y: 1.5 }
    },
    spectralSeep: {
      name_en: "Spectral Seep",  
      desc: "Gives a chance to nullify physical attacks on party members in the opposite row as the user.", 
      stats: [],
      dep: { soulTransfer: 3 },
      maxLevel: 8,
      coords: { x: 4, y: 0.5 }
    },
    soulFixation: {
      name_en: "Soul Fixation",
      desc: "Requires Miasma Armor. Removes Miasma Armor to attempt to nullify instant death, stun and debuffs against all party members, up to a set number of times.",  
      stats: ["Head"],
      dep: { deathsAsylum: 3 },
      maxLevel: 6,
      coords: { x: 4, y: 1.5 }
    },
    judgment: {
      name_en: "Judgment",  
      desc: "If Miasma Armor is active, the user has a chance to extend the de/buffs of an enemy by 1 turn every time they are attacked.",  
      stats: [],
      dep: { spectralSeep: 3, soulFixation: 3 },
      maxLevel: 8,
      coords: { x: 5, y: 1 }
    },
    erodingReap: {
      name_en: "Eroding Reap", 
      desc: "Deals melee cut damage to one row and decreases their defense for a set number of turns.",
      stats: ["STR", "Arms", "Scythe"],
      dep: {},
      maxLevel: 10,
      coords: { x: 0, y: 2.75 }
    },
    stiflingReap: {
      name_en: "Stifling Reap", 
      desc: "Deals melee cut damage to one row and decreases their attack for a set number of turns.", 
      stats: ["STR", "Arms", "Scythe"],
      dep: {},
      maxLevel: 8,
      coords: { x: 0, y: 3.75 }
    },
    slowingReap: {
      name_en: "Slowing Reap",
      desc: "Deals melee cut damage to one row and decreases their evasion and action speed for a set number of turns.",
      stats: ["STR", "Arms", "Scythe"],
      dep: { erodingReap: 2, stiflingReap: 2 },
      maxLevel: 6,
      coords: { x: 1, y: 3.25 }
    },
    maskingReap: {
      name_en: "Masking Reap",
      desc: "Deals melee cut damage to one row and decreases their accuracy for a set number of turns.",
      stats: ["STR", "Arms", "Scythe"],
      dep: { slowingReap: 3 },
      maxLevel: 8,
      coords: { x: 2, y: 3.25 }
    },
    ephemeralReap: {
      name_en: "Ephemeral Reap",
      desc: "Deals multiple instances of melee cut(/ice) damage to one target. Number of hits increases based on the number of debuffs on the target.",   
      stats: ["STR", "Arms", "Scythe"],
      dep: { maskingReap: 1 },
      maxLevel: 8,
      coords: { x: 3, y: 2.75 }
    },
    reversalDecay: {
      name_en: "Reversal Decay",
      desc: "Dispel an enemy's debuffs, and deal cut damage to all enemies. \nAttempts to inflict instant death. If the target is asleep, the damage and instant death chance rises.",
      
      
      stats: ["STR", "LUC", "Arms", "Scythe"],
      dep: { ephemeralReap: 2 },
      maxLevel: 8,
      coords: { x: 3, y: 3.75 }
    },
    harrowingScythe: {
      name_en: "Harrowing Scythe",
      desc: "Requires Miasma Armor. Removes Miasma Armor to deal melee cut damage to one enemy.  \nExtend the duration of buffs and debuffs that target has.",  
      
      stats: ["STR", "Arms", "Scythe"],
      dep: { ephemeralReap: 3, reversalDecay: 1 },
      maxLevel: 8,
      coords: { x: 4, y: 3.25 }
    },
    paralyzingMiasma: {
      name_en: "Paralyzing Miasma", 
      desc: "If Miasma Armor is active, attempts to inflict paralysis to a row. Lowers the targets' Paralysis resistance and ailment recovery for 3 turns.",
      stats: ["LUC", "Head", "Scythe"],
      dep: {},
      maxLevel: 8,
      coords: { x: 0, y: 5 }
    },
    toxicMiasma: {
      name_en: "Toxic Miasma",
      desc: "If Miasma Armor is active, attempts to inflict poison to a row. Lowers the targets' Poison resistance and ailment recovery for 3 turns.", 
      stats: ["LUC", "Head", "Scythe"],
      dep: { paralyzingMiasma: 3 },
      maxLevel: 8,
      coords: { x: 1, y: 5 }
    },
    darknessMiasma: {
      name_en: "Darkness Miasma",
      desc: "If Miasma Armor is active, attempts to inflict blind to a row. Lowers the targets' Blind resistance and ailment recovery for 3 turns. ",
      stats: ["LUC", "Head", "Scythe"],
      dep: { toxicMiasma: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 5 }
    },
    chaosMiasma: {
      name_en: "Chaos Miasma",
      desc: "If Miasma Armor is active, attempts to inflict panic to a row. Lowers the targets' Panic resistance and ailment recovery for a set amount of turns.",
      stats: ["LUC", "Head", "Scythe"],
      dep: { darknessMiasma: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 5 }
    },
    frigidReap: {
      name_en: "Frigid Reap",
      desc: "Deals melee cut+ice damage to one row. Hits twice on enemies that have ailments.", 
      stats: ["STR", "Arms", "Scythe"],
      dep: { chaosMiasma: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 6 }
    },
    soulRend: {
      name_en: "Soul Rend",
      desc: "Only effective on enemies with both an Ailment and Debuff applied. Removes one debuff and deals ranged cut damage to target enemy.",
      stats: ["STR", "Arms", "Scythe"],
      dep: { frigidReap: 2 },
      maxLevel: 8,
      coords: { x: 3, y: 6 }
    },
    take: {
      name_en: "Take",
      desc: "Occasionally gains more items when using Take points.",
      stats: [],
      unique: true,
      dep: {},
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    }
  },



};
