let skills = {
  Landsknecht: {
    trinity: {
      name_en: "Trinity",
      desc: "For 3 turns, increases the user's attack, accuracy and action speed.",
      stats: [],
      unique: true,
      type: "Boost",
      dep: {},
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    fullCharge: {
      name_en: "Overcharge",
      desc: "This turn, the user is fully immune to any hostile effects from enemies. Until the end of the next turn, increases the user's attack and action speed.",
      stats: [],
      unique: true,
      type: "Break",
      dep: { trinity: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    strikeLink: {
      name_en: "Strike Link",
      desc: "Deals melee stab damage to one target. If the target/an enemy is attacked again after, follows up with another attack of the same element for a maximum of 9 times.",
      
      stats: ["STR, Arms, Rapier"],
      dep: {},
      maxLevel: 8,
      coords: { x: 0, y: 2 }
    },
    bindingForce: {
      name_en: "Haste Break", 
      desc: "Deals melee cut/stab damage to one target. If the target is attacked again after, follows up with another attack of the same element for a maximum of ? times that decreases their action speed and evasion for 1 turn. Chance of follow-up decreases with each hit.",
      stats: ["STR, Arms, Rapier"],
      dep: { strikeLink: 1 },
      maxLevel: 8,
      coords: { x: 1, y: 1 }
    },
    fortuneLink: {
      name_en: "Weapon Break",
      desc: "Deals melee cut/stab damage to one target. If the target is attacked again after, follows up with another attack of the same element for a maximum of ? times that decreases their physical attack for 1 turn. Chance of follow-up decreases with each hit.",
      stats: ["STR, Arms, Rapier"],
      dep: { bindingForce: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 1 }
    },
    linkSmash: {
      name_en: "Critical Surge",
      desc: "Link follow-up attacks can deal critical hits. If an action triggered multiple follow-ups and one of them dealt a critical hit, all subsequent follow-ups triggered by that action will automatically deal critical hits as well.",
      stats: [],
      dep: { strikeLink: 1 },
      maxLevel: 8,
      coords: { x: 1, y: 2 }
    },
    millionThrust: {
      name_en: "Million Thrust",
      desc: "Deals multiple instances of melee stab damage to random targets next turn. Counts as a Link skill.",
      stats: ["STR, Arms, Rapier"],
      dep: { linkSmash: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 2 }
    },
    linkFinale: {
      name_en: "Bitter End",
      desc: "Deals melee stab damage to one target. Damage is based on the number of link follow-ups made on the previous turn [and if the target has a Break skill debuff].",
      
      stats: ["STR, Arms, Rapier"],
      dep: { millionThrust: 2 },
      maxLevel: 6,
      coords: { x: 3, y: 2 }
    },
    infernoHowl: {
      name_en: "Ignis Ardere",
      desc: "For a set number of turns, imbue the party's attacks with fire and increase their fire resistance.",


      stats: ["Head", "Shield"],
      dep: {},
      maxLevel: 8,
      coords: { x: 0, y: 3 }
    },
    vacuumSlice: {
      name_en: "Glacies Claudere",  
      desc: "For a set number of turns, imbue the party's attacks with ice and increase their ice resistance.",
      
      stats: ["Head", "Shield"],
      dep: {},
      maxLevel: 6,
      coords: { x: 0, y: 4 }
    },
    levinforce: {
      name_en: "Tonitrus Canere",  
      desc: "For a set number of turns, imbue the party's attacks with volt and increase their volt resistance.",
      
      
      
      stats: ["Head", "Shield"],
      dep: {},
      maxLevel: 8,
      coords: { x: 0, y: 5 }
    },
    icicleImpact: {
      name_en: "Diamond Frost",
      desc: "Deals melee imbuable stab+ice damage to one target, with splash damage to the adjacent enemies.", 
      stats: ["INT, Arms, Rapier"],
      dep: { vacuumSlice: 2, levinforce: 2, infernoHowl: 2 },
      maxLevel: 6,
      coords: { x: 1, y: 4 }
    },
    icebrand: {
      name_en: "Spear Assist",
      desc: "Deals melee imbuable stab damage to one target at the end of the turn. The most recent elemental attack used by an ally this turn is added to the attack and its damage is increased.",  
      stats: ["STR, Arms, Rapier"],
      dep: { icicleImpact: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 4 }
    },
    diamondFrost: {
      name_en: "Levinforce",
      desc: "Deals melee imbuable stab+volt damage to one target at the start of the turn. ",
      stats: ["INT, Arms, Rapier"],
      dep: { icebrand: 2 },
      maxLevel: 8,
      coords: { x: 3, y: 4 }
    },
    condensedSlash: {
      name_en: "Inferno Howl",  
      desc: "2 turns later, deal ranged imbuable stab+fire damage to all enemies at the start of turn. Can be imbued.",
      stats: ["STR, Head, Rapier"],
      dep: { diamondFrost: 2 },
      maxLevel: 8,
      coords: { x: 4, y: 4 }
    },
    bladeRecall: {
      name_en: "Blade Recall",  
      desc: "Deals melee stab damage to one enemy. If the user used an elemental attack on the last turn, also adds a ranged follow-up attack of the same element.",
      stats: ["STR, INT, Arms, Rapier"],
      dep: { condensedSlash: 2 },
      maxLevel: 8,
      coords: { x: 5, y: 4 }
    },
    earthenFury: {
      name_en: "Rune Radiance",
      desc: "Removes elemental imbue from one ally, and deals ranged damage of the element of the removed imbue to all enemies.",
      
      stats: ["STR, Arms"],
      dep: { icicleImpact: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 3 }
    },
    ripCurrent: {
      name_en: "Infusion Sforzo",
      desc: "Can only be used if user has a buff. Deals melee weapon damage to one target. Reduces all de/buffs turn count by 1.",
      stats: ["STR, Arms"],
      dep: { earthenFury: 2 },
      maxLevel: 6,
      coords: { x: 3, y: 3 }
    },
    vanguard: {
      name_en: "?Vallation",
      desc: "For 5 turns, increases the user's attack, defense and action speed. [Has a chance of being used at the start of battle after level 6.] \n\nFor 5 turns, increases the user's defense and action speed. Increased attack on weakness hits.",
      stats: ["Head", "Shield"],
      dep: {},
      maxLevel: 8,
      coords: { x: 1, y: 5.5 }
    },
    blitzkrieg: {
      name_en: "Arcane Rune",
      desc: "Increases damage of attacks with two or more elements.",
      stats: [],
      dep: { vanguard: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 5 }
    },
    initiative: {
      name_en: "?Protraction",
      desc: "Restores TP when a buff is dispelled or runs out.\n\nRestores TP when a buff is applied, dispelled or runs out.",  
      stats: [],
      dep: { blitzkrieg: 2 },
      maxLevel: 8,
      coords: { x: 3, y: 5 }
    },
    fullBreak: {
      name_en: "?",
      desc: "?",
      stats: ["STR, Arms, Rapier"],
      dep: { initiative: 2 },
      maxLevel: 8,
      coords: { x: 4, y: 5 }
    },
    vita: {
      name_en: "Vita", 
      desc: "Restores one party member's HP. Also removes a set amount of binds.",
      
      stats: ["WIS", "Head", "Shield"],
      dep: { vanguard: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 6 }
    },
    sylphScreen: {
      name_en: "Exuviation",
      desc: "If the user has a buff, recover some HP at the end of the turn.",
      stats: [],
      dep: { vita: 2 },
      maxLevel: 6,
      coords: { x: 3, y: 6 }
    },
    spiritSword: {
      name_en: "Mana Ward",
      desc: "Cancels Ignis, Glacies or Tonitrus on the party. \nUntil the end of the turn, all party members will absorb damage of the canceled element.",
      stats: ["Head", "Shield"],
      dep: { sylphScreen: 2 },
      maxLevel: 8,
      coords: { x: 4, y: 6 }
    },
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
  Imperial: {
    ignition: {
      name_en: "Ignition",
      desc: "For 3 turns, the user's drive skills will not activate the overheat state.",
      stats: [],
      unique: true,
      type: "Boost",
      dep: {},
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    conversion: {
      name_en: "Conversion",
      desc: "Restores HP and TP to the user. \nEnds Force Boost but does not break the Force gauge.",//This can restore TP over maximum TP. The overhealed TP will disappear at the end of battle, or when the user dies.
      stats: ["STR"],
      unique: true,
      type: "Break",
      dep: { ignition: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    sunrazeTrip: {
      name_en: "Return Stroke",  //Sunraze Smash, Heavy Trip   Sunraze Trip
      desc: "Starter skill. Deals melee weapon damage to one target. \nFast. \nRecovers 15% Force on hit.",
      stats: ["STR", "LUC", "Arms", "Driveblade"],
      dep: {},
      maxLevel: 8,
      coords: { x: 0, y: 1 }
    },
    galeOnslaught: {
      name_en: "Spinning Slash", //Gale Onslaught
      desc: "Fusion skill. Deals melee cut damage to one target. \nReduces damage taken this turn. \nRecovers 25% Force on hit.\nReduces overheat duration by 2 turns. ",
      stats: ["STR", "Arms", "Driveblade"],
      dep: {},
      maxLevel: 8,
      coords: { x: 0, y: 2 }
    },
    busterBeat: {
      name_en: "Double Charge", //Buster Beat
      desc: "Deals 2 instances of melee cut damage to one target. \nReduces overheat duration by 3 turns.",
      stats: ["STR", "Arms", "Driveblade"],
      dep: {},
      maxLevel: 6,
      coords: { x: 0, y: 3 }
    },
    bloodrake: {
      name_en: "Element Discharge",//Bloodrake
      desc: "Fusion skill. Deals melee cut damage to one target, and places the user in the overheat state for 1 turn. Pauses Force Boost duration this turn.\nCannot be used while overheated. \nThe TP cost is reduced based on the amount of TP used before this skill was cast. \nThe user will take 2x more damage until the skill activates.",
      stats: ["STR", "Arms", "Driveblade"],
      dep: { naturalDrive: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 1 }
    },
    impulseBreak: {
      name_en: "Amped Discharge",//?Impulse Break
      desc: "Starter skill. Deals melee cut damage to one target, then deal multiple instances of imbuable damage. \nPlaces the user in the overheat state for 6 turns.\nCannot be used while overheated. \nThe TP cost is reduced based on the amount of TP used before this skill was cast. \nThe user will take 2x more damage until the skill activates.", //Starter and Combo skill. Deals melee cut damage to one target. \nRestores TP and Force to the user. \nReduces overheat duration by 1 turn. \nCan only be used if an Starter skill was used on the previous turn.\n\n
      stats: ["STR", "Arms", "Driveblade"],
      dep: { bloodrake: 2 },
      maxLevel: 8,
      coords: { x: 3, y: 1 }
    },
    burstStrike: {
      name_en: "SAED",  //!Smash/     Burst Strike
      desc: "Finisher skill. Deals melee cut damage to one front row target, then follow-up with imbuable damage on the same target and the back row. \nPlaces the user in the overheat state for 9 turns. \nCannot be used while overheated. \nThe TP cost is reduced based on the amount of TP used before this skill was cast. \nThe user will take 2x more damage until the skill activates.",
      stats: ["STR", "Arms", "Driveblade"],
      dep: { impulseBreak: 2 },
      maxLevel: 8,
      coords: { x: 4, y: 0.5 }
    },
    doubleDown: {
      name_en: "Thermal Aura",   //imbueable    Double Down
      desc: "Passively restores a percentage of the user's maximum HP plus a static amount while they are in the Force Boost state.", //\n\nGives a chance to reduce the TP cost of Drive skills on the first turn.
      stats: ["STR", "Arms", "Driveblade"],
      dep: { impulseBreak: 2 },
      maxLevel: 8,
      coords: { x: 4, y: 1.5 }
    },
    naturalDrive: {
      name_en: "Energy Blade", //Bloodrake
      desc: "Combo skill. Deals melee cut damage to one target. \nRestores HP to the user based on the amount of damage dealt. \nPlaces the user in the overheat state for 6 turns.",
      stats: ["STR", "Arms", "Driveblade"],
      dep: { sunrazeTrip: 3, galeOnslaught: 3, busterBeat: 3 },
      maxLevel: 6,
      coords: { x: 1, y: 2 }
    },
    chaosCartridge: {
      name_en: "Condensed Slash",  //Chaos Cartridge   Powder Mark
      desc: "Finisher skill. Deals melee cut damage to one target. \nIncreases attack for non-Drive Imperial skills for the next two turns. \nUsable only while overheated.",   //(Heavy Smash 1stack | delayed priority charge)
      //sunraze->powder->drive->powder->burst->powder
      //Can only be used during overheat. \nFor 3 turns, increase the user's stats. \nSet Overheat state to 9 turns.
      stats: [],
      dep: { naturalDrive: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 2 }
    },
    wideEffect: {
      name_en: "Wide Effect",
      desc: "Single-target skills have a chance to affect neighboring enemies. The chance is rolled for each enemy individually if there are two enemies next to the target, rather than once for both.",
      stats: [],
      dep: { chaosCartridge: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 2 }
    },
    heatSink: {
      name_en: "Heat Sink",
      // desc: "Reduces overheat duration by a set number of turns and increases the user's defense until the end of the next turn. Can only be used while overheated.",    Starter skill. Reduces overheat duration by a set number of turns and restores ??? to the user. \nCan only be used while overheated.\n\n
      desc: "Reduces overheat duration by a set number of turns. Each cast multiplies Natural Drive damage by ?%. There is a maximum of ? increases. Damage increases are reset upon the user's death.",
      stats: ["Head", "Driveblade"],
      dep: { naturalDrive: 3 },
      maxLevel: 8,
      coords: { x: 2, y: 3 }
    },
    overdrive: {
      name_en: "Overdrive",
      desc: "Can only be used during Force Boost and outside of Overheat. Deals melee cut damage to all enemies. \nEnds Force Boost after cast.",
      //desc: "When the user uses a skill, restore HP.", When an ally dies, restore HP and TP.
      //desc: For a set number of turns, increases the user's attack, defence, and accuracy. Places the user in the overheat state for 3 turns. / 
      stats: [],
      dep: { heatSink: 3 },
      maxLevel: 6,
      coords: { x: 3, y: 3 }
    },
    finisher: {
      name_en: "Finisher",
      desc: "When the user kills an enemy, their TP is restored.",
      stats: [],
      dep: { overdrive: 4 },
      maxLevel: 8,
      coords: { x: 4, y: 3 }
    },
    roughDivide: {
      name_en: "Rough Divide",
      desc: "Starter skill. Reduces physical damage to the user's row for one turn. \nIf Rough Divide is activated by enemy damage, the user will use their equipped weapon to counterattack the source of the damage and reduce Overheat by ? turns. ",
      stats: ["STR", "Arms", "Driveblade"],
      dep: {},
      maxLevel: 8,
      coords: { x: 0, y: 5 }
    },
    bulwarkDrive: {
      name_en: "Counter Morph",//Bulwark Drive
      desc: "Reduces physical damage done to all party members for one turn. If damage was mitigated, decrease damage taken next turn. Places the user in the overheat state for 5 turns.",
      stats: ["STR", "Arms", "Driveblade"],
      dep: { roughDivide: 2 },
      maxLevel: 8,
      coords: { x: 1, y: 4.5 }
    },
    rearGuard: {
      name_en: "Rear Guard",
      desc: "Starter skill. For a set number of turns, increases defense for one ally, but that ally will move last each turn. Reduces overheat duration by 1 turn.",
      stats: ["Head"],
      dep: { roughDivide: 2 },
      maxLevel: 6,
      coords: { x: 1, y: 5.5 }
    },
    overheatShield: {
      name_en: "Overheat Shield", //Overheat Guard    Barrier
      desc: "While overheated, increases the user's defense.",
      stats: [],
      dep: { bulwarkDrive: 2, rearGuard: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 4 }
    },
    thermalCell: {
      name_en: "Cooling Cell", //Thermal Cell, Aurora, Refraction, Anchor Chain, Searing Breeze, Cooling/Shining Cell,  Reflux Aura   Avenger
      desc: "Starter skill. Restores one ally's HP, and reduces all physical damage directed at them for one turn.",   //Passively restores a percentage of the user's maximum TP plus a static amount while they are in the Force Boost state. \n\n When an ally dies, restores HP and TP to the user.
      stats: ["STR", "Arms", "Driveblade"],
      dep: { bulwarkDrive: 2, rearGuard: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 5 }
    },
    avenger: {
      name_en: "Avenger/?",//Zero Sum
      desc: "When an ally dies, restores HP and TP to the user.",
      stats: ["STR", "Arms", "Driveblade"],
      dep: { bulwarkDrive: 2, rearGuard: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 6 }
    },
    keenFlurry: {
      name_en: "?Keen Flurry",
      desc: "Final skill. Attempts to nullify physical attacks directed at the (user's row | user's row allies) for one turn. Each time an attack is nullified, the chance of it triggering again on that ally is reduced.",
      stats: ["Arms", "Driveblade"],
      dep: { thermalCell: 2, avenger: 2, overheatShield: 2 },
      maxLevel: 6,
      coords: { x: 3, y: 4.5 }
    },
    sentinelShell: {
      name_en: "Sentinel Shell",
      desc: "Final skill. Reduces all damage to all party members and sets their defensive values to the user's for one turn.",
      stats: ["Arms", "Driveblade"],
      dep: { keenFlurry: 2 },
      maxLevel: 8,
      coords: { x: 4, y: 4.5 }
    },
    solidBarrel: {
      name_en: "?Solid Barrel",
      desc: "Combo skill. Deals melee cut damage to one target, [heal the user] and, for that turn, increases the user's chance of being targeted. \nPreserves the effect of last turn's Rough Divide or Cooling Cell. \nReduces overheat duration by X turns.",
      stats: ["STR", "Arms", "Driveblade"],
      dep: { thermalCell: 2, avenger: 2, overheatShield: 2 },
      maxLevel: 6,
      coords: { x: 3, y: 5.5 }
    },
    ampedDischarge: {
      //Amped Blade, Condensed/Compressed Heat, Heated Blade, Discharge
      name_en: "Guard Point", //Amped Discharge
      desc: "Increases the damage of Drive skills after activating Rough Divide, Keen Flurry or Sentinel Shell.",
      stats: [],
      dep: { solidBarrel: 2 },
      maxLevel: 8,
      coords: { x: 4, y: 5.5 }
    },
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
