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
      name_en: "Binding Force",
      desc: "Deals melee stab damage to one target. \nIf the target is attacked again after, follows up with another stab attack for a maximum of ? times. \nEach follow up has a chance of randomly binding.",
      stats: ["STR, Arms, Rapier"],
      dep: { strikeLink: 1 },
      maxLevel: 8,
      coords: { x: 1, y: 1 }
    },
    fortuneLink: {
      name_en: "Maelstrom's Eye",
      desc: "Deals melee stab damage to a random target. If the target is attacked again after, follows up with an AoE attack of the same element for a maximum of 9 times.",
      stats: ["STR, Arms, Rapier"],
      dep: { bindingForce: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 1 }
    },
    fullBreak: {
      name_en: "Full Break",
      desc: "Deals melee cut/stab damage to one target. If the target is attacked again after, follows up with another attack of the same element for a maximum of 6 times that decreases their attack, defense, evasion and action speed for 1 turn. Chance of follow-up decreases with each hit.",
      stats: ["STR, Arms, Rapier"],
      dep: { fortuneLink: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 1 }
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
      desc: "Deals melee stab damage to one target. Damage is based on the number of link follow-ups made on the previous turn and if the target has a Break skill debuff.",
      stats: ["STR, Arms, Rapier"],
      dep: { millionThrust: 2 },
      maxLevel: 6,
      coords: { x: 3, y: 2 }
    },
    icicleImpact: {
      name_en: "Icicle Impact",
      desc: "Deals ranged ice damage to one target.",
      stats: ["INT, Arms, Rapier"],
      dep: {},
      maxLevel: 6,
      coords: { x: 0, y: 3 }
    },
    icebrand: {
      name_en: "Icebrand",
      desc: "Deals melee stab+ice damage to one target. Has a chance to follow-up with Icicle Impact with added damage.",
      stats: ["STR, Arms, Rapier"],
      dep: { icicleImpact: 2 },
      maxLevel: 8,
      coords: { x: 1, y: 3 }
    },
    diamondFrost: {
      name_en: "Diamond Frost",
      desc: "Deals melee ice damage to all targets. Has a chance to follow-up with Icicle Crash to a random enemy. Deals full damage to backrow enemies.",
      stats: ["INT, Arms, Rapier"],
      dep: { icebrand: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 3 }
    },
    condensedSlash: {
      name_en: "Condensed Slash",
      desc: "Prepares Condensed Slash on the turn it's used. On the next turn, if the user uses an elemental skill, follows up with a melee STR-based Cut+Element attack on all enemies hit with an element by the user.",
      stats: ["STR, Head, Rapier"],
      dep: { diamondFrost: 2 },
      maxLevel: 8,
      coords: { x: 3, y: 3 }
    },
    bladeRecall: {
      name_en: "Blade Recall",
      desc: "Deals melee STR-based Cut damage to one enemy. If the user used an elemental attack on the last turn, also adds a ranged INT-based Element follow-up attack.",
      stats: ["STR, INT, Arms, Rapier"],
      dep: { diamondFrost: 2 },
      maxLevel: 8,
      coords: { x: 4, y: 3 }
    },
    vacuumSlice: {
      name_en: "Vacuum Slice",
      desc: "Deals melee cut damage to one target at the start of the turn. If a shield is equipped, increases speed for the user's row on the next turn.",
      stats: ["STR, Arms"],
      dep: {},
      maxLevel: 6,
      coords: { x: 0, y: 4 }
    },
    levinforce: {
      name_en: "Levinforce",
      desc: "Deals melee cut damage to one row. If a shield is equipped, increases accuracy for the user's row until the end of the next turn.",
      stats: ["STR, Arms"],
      dep: { vacuumSlice: 2 },
      maxLevel: 8,
      coords: { x: 1, y: 4 }
    },
    earthenFury: {
      name_en: "Earthen Fury",
      desc: "Reduces physical damage taken for all allies this turn. When the user takes damage, counterattack against that enemy.",
      stats: ["STR, Arms, Shield"],
      dep: { levinforce: 3 },
      maxLevel: 8,
      coords: { x: 2, y: 4 }
    },
    infernoHowl: {
      name_en: "Inferno Howl",
      desc: "Deals melee cut damage to one target, with splash damage to the adjacent enemies. If a shield is equipped, increases damage for the user's row for this turn.",
      stats: ["STR, Arms"],
      dep: { earthenFury: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 4 }
    },
    ripCurrent: {
      name_en: "Rip Current",
      desc: "Deals melee cut damage to one target with low accuracy. If a shield is equipped and the attack misses, deal melee cut damage to all enemies.",
      stats: ["STR, Arms"],
      dep: { infernoHowl: 2 },
      maxLevel: 6,
      coords: { x: 4, y: 4 }
    },
    vanguard: {
      name_en: "Vanguard",
      desc: "For 5 turns, increases the user's attack, defense and action speed (and aggro). Has a chance of being used at the start of battle after level 6. (one ally's)",
      stats: ["Head"],
      dep: {},
      maxLevel: 8,
      coords: { x: 0, y: 5 }
    },
    blitzkrieg: {
      name_en: "Saboteur",
      desc: "After the user attacks this turn, all further attacks against enemies attacked by the user will have increased damage and accuracy.",
      stats: [],
      dep: { vanguard: 2 },
      maxLevel: 8,
      coords: { x: 1, y: 5 }
    },
    initiative: {
      name_en: "Initiative",
      desc: "When attacking before any enemies act, increases damage and accuracy.",
      stats: [],
      dep: { blitzkrieg: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 5 }
    },
    vita: {
      name_en: "Vita",
      desc: "Restores one party member's HP. Also removes a set amount of binds.",
      stats: ["WIS, Head, Rapier"],
      dep: { vanguard: 2 },
      maxLevel: 6,
      coords: { x: 1, y: 6 }
    },
    sylphScreen: {
      name_en: "Gale Force",
      desc: "Each time the user attacks or uses an attack skill, their defense increases for that turn.",
      stats: [],
      dep: { vita: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 6 }
    },
    spiritSword: {
      name_en: "Power Seal / Mana Ward",
      desc: "When the user hits a target with a single-target attack, that target's damage is reduced for the rest of the turn.\n\nReduces elemental damage taken for all allies this turn. [And imbues their weapons with fire+ice+volt]",
      stats: ["STR"],
      dep: { sylphScreen: 2 },
      maxLevel: 8,
      coords: { x: 3, y: 6 }
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
      name_en: "<Conversion>",
      desc: "Restores HP and TP to the user. \nEnds Force Boost but does not break the Force gauge.",
      stats: ["STR"],
      unique: true,
      type: "Break",
      dep: { ignition: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    sunrazeTrip: {
      name_en: "Sunraze Trip",
      desc: "Starter skill. Deals melee cut[+fire] damage to one target. Attempts to inflict leg bind. \nFor a set number of turns, imbue the user's attacks with fire and increase their fire resistance.",
      stats: ["STR", "LUC", "Arms", "Driveblade"],
      dep: {},
      maxLevel: 8,
      coords: { x: 0, y: 1 }
    },
    galeOnslaught: {
      name_en: "Gale Onslaught",
      desc: "Starter skill. Deals melee cut[+volt] damage to one target. \nFor a set number of turns, imbue the user's attacks with volt and increase their volt resistance.",
      stats: ["STR", "Arms", "Driveblade"],
      dep: {},
      maxLevel: 8,
      coords: { x: 0, y: 2 }
    },
    busterBeat: {
      name_en: "Buster Beat",
      desc: "Starter skill. Deals ranged cut[+ice] damage to one target. \nFor a set number of turns, imbue the user's attacks with ice and increase their ice resistance.",
      stats: ["STR", "Arms", "Driveblade"],
      dep: {},
      maxLevel: 6,
      coords: { x: 0, y: 3 }
    },
    bloodrake: {
      name_en: "Bloodrake",
      desc: "Starter and Combo skill. Deals melee cut damage to one target. \nRestores HP to the user based on the amount of damage dealt. \nReduces overheat duration by 1 turn. \nCan only be used if an Starter skill was used on the previous turn.",
      stats: ["STR", "Arms", "Driveblade"],
      dep: { naturalDrive: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 1 }
    },
    impulseBreak: {
      name_en: "?Impulse Break",
      desc: "Combo skill. Deals melee cut damage to one target. \nRestores Force to the user.",
      stats: ["STR", "Arms", "Driveblade"],
      dep: { bloodrake: 2 },
      maxLevel: 8,
      coords: { x: 3, y: 1 }
    },
    burstStrike: {
      name_en: "Burst Strike",
      desc: "Starter skill. Cancels Blaze Cartridge, Hail Cartridge, or Bolt Cartridge on the user. \n( Deals melee damage of the canceled Cartridge's element to one enemy. ) | ( Deals melee fire+ice+volt damage to one enemy. )",
      stats: ["STR", "Arms", "Driveblade"],
      dep: { impulseBreak: 2 },
      maxLevel: 8,
      coords: { x: 4, y: 0.5 }
    },
    chaosCartridge: {
      name_en: "???",
      desc: "Starter skill. ",
      stats: [],
      dep: { impulseBreak: 2 },
      maxLevel: 8,
      coords: { x: 4, y: 1.5 }
    },
    doubleDown: {
      name_en: "Double Down",
      desc: "Final skill. Deals melee cut damage to one target. Until the end of the next turn, increases the user's attack. Can only be used if an Starter skill or Combo skill was used on the previous turn.",
      stats: ["STR", "Arms", "Driveblade"],
      dep: { burstStrike: 2, chaosCartridge: 2 },
      maxLevel: 8,
      coords: { x: 5, y: 1 }
    },
    naturalDrive: {
      name_en: "Natural Drive",
      desc: "Deals melee weapon damage to one target, and places the user in the overheat state for ? turns. Cannot be used while overheated. \nThe TP cost is reduced based on the amount of TP used before this skill was cast. \nThe user will take 2x more damage until the skill activates.",
      stats: ["STR", "Arms", "Driveblade"],
      dep: { sunrazeTrip: 3, galeOnslaught: 3, busterBeat: 3 },
      maxLevel: 6,
      coords: { x: 1, y: 2 }
    },
    heatSink: {
      name_en: "<Heat Sink>",
      desc: "Reduces overheat duration by a set number of turns. Each cast multiplies Natural Drive damage by ?%.There is a maximum of ? increases. Damage increases are reset upon the user's death.",
      stats: ["Head", "Driveblade"],
      dep: { naturalDrive: 3 },
      maxLevel: 8,
      coords: { x: 2, y: 3 }
    },
    overdrive: {
      name_en: "Overdrive",
      desc: "Can only be used during Force Boost and outside of Overheat. Deals melee cut damage to all enemies. \nEnds Force Boost after cast.",
      stats: [],
      dep: { heatSink: 3 },
      maxLevel: 6,
      coords: { x: 3, y: 3 }
    },
    wideEffect: {
      name_en: "Wide Effect",
      desc: "Single-target skills have a chance to affect neighboring enemies. The chance is rolled for each enemy individually if there are two enemies next to the target, rather than once for both.",
      stats: [],
      dep: { overdrive: 3 },
      maxLevel: 8,
      coords: { x: 4, y: 3 }
    },
    finisher: {
      name_en: "Finisher",
      desc: "When the user kills an enemy, their TP is restored.",
      stats: [],
      dep: { wideEffect: 4 },
      maxLevel: 8,
      coords: { x: 5, y: 3 }
    },
    roughDivide: {
      name_en: "Rough Divide",
      desc: "Starter skill. Reduces physical damage to the user's row for one turn. \nIf Rough Divide is activated by enemy damage, the user will use their equipped weapon to counterattack the source of the damage. ",
      stats: ["STR", "Arms", "Driveblade"],
      dep: {},
      maxLevel: 8,
      coords: { x: 0, y: 5 }
    },
    bulwarkDrive: {
      name_en: "?Bulwark Drive",
      desc: "Increases the party's defence until the end of the next turn. Places the user in the overheat state for 5 turns.\n / \nReduces all damage to all party members for one turn, and deals melee cut damage to one target at the end of the turn. Damage is based on the number of times damage is reduced. If no damage reduction took place, the attack will not happen. Places the user in the overheat state for 5 turns.\n / \nReduces all damage to all party members and sets their defensive values to the user's for one turn.",
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
      name_en: "Overheat Shield",
      desc: "While overheated, increases the user's defense.",
      stats: [],
      dep: { bulwarkDrive: 2, rearGuard: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 4 }
    },
    thermalCell: {
      name_en: "Cooling Cell",
      desc: "Starter skill. Restores one ally's HP, and reduces all physical damage directed at them for one turn.",
      stats: ["STR", "Arms", "Driveblade"],
      dep: { bulwarkDrive: 2, rearGuard: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 5 }
    },
    solidBarrel: {
      name_en: "<Solid Barrel>",
      desc: "Combo skill. Deals melee cut damage to one target and, for that turn, increases the user's chance of being targeted. \nPreserves the effect of last turn's Rough Divide. \nReduces overheat duration by 1 turn.",
      stats: ["STR", "Arms", "Driveblade"],
      dep: { bulwarkDrive: 2, rearGuard: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 6 }
    },
    keenFlurry: {
      name_en: "Keen Flurry",
      desc: "Final skill. Attempts to nullify physical attacks directed at the user's row for one turn. Each time an attack is nullified, the chance of it triggering again on that ally is reduced.",
      stats: ["Arms", "Driveblade"],
      dep: { thermalCell: 2, solidBarrel: 2, overheatShield: 2 },
      maxLevel: 6,
      coords: { x: 3, y: 4.5 }
    },
    sentinelShell: {
      name_en: "Sentinel Shell",
      desc: "Final skill. Reduces all damage to all party members and sets their defensive values to the user's for one turn.",
      stats: ["Arms", "Driveblade"],
      dep: { thermalCell: 2, solidBarrel: 2, overheatShield: 2 },
      maxLevel: 8,
      coords: { x: 3, y: 5.5 }
    },
    zeroSum: {
      name_en: "Zero Sum",
      desc: "Cancels Blaze Cartridge, Hail Cartridge, or Bolt Cartridge on the user. \n\n[Until the end of the turn, all party members will absorb damage of the canceled Cartridge's element.] \n\n[Until the end of the turn, the user will absorb damage of the canceled Cartridge's element and cover the entire party. Increase damage taken by 3x for the turn.]",
      stats: ["STR", "Arms", "Driveblade"],
      dep: { keenFlurry: 2 },
      maxLevel: 6,
      coords: { x: 4, y: 4.5 }
    },
    ampedDischarge: {
      name_en: "Amped Discharge",
      desc: "Increases the damage of Drive skills after activating Rough Divide, Keen Flurry or Sentinel Shell.",
      stats: [],
      dep: { sentinelShell: 2 },
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
