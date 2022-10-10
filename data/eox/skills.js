let skills = {

  "War Magus": {
    warEdgePower: {
      name_en: "Spellsword",
      
      desc: "For 3 turns, War Edge skills have additional effects and the user's speed is increased.",
      stats: [],
      unique: true,
      type: "Boost",
      dep: {},
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    fairyRobe: {
      name_en: "Fairy Robe",
      desc: "Removes ailments, binds and debuffs from all party members, and restores their HP. This turn, negates all binds, ailments, stun, instant death and debuffs against all party members.",
      stats: ["WIS", "Head"],
      unique: true,
      type: "Break",
      dep: { warEdgePower: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    warHealLine: {
      name_en: "!Blossom Sketch",
      desc: "Restores HP to one row at the start of the turn, then at the end of the turn. \nSpellsword: Dispel one debuff.",
      stats: ["WIS", "Head"],
      dep: {},
      maxLevel: 8,
      coords: { x: 0, y: 4 }
    },
    displace: {
      name_en: "!Displace",
      desc: "Removes ailments and binds from one ally, and attempts to inflict them on one enemy. \nSpellsword: Remove from their row allies afterwards.",
      stats: ["LUC", "Head"],
      dep: { warHealLine: 2 },
      maxLevel: 4,
      coords: { x: 1, y: 4.5 }
    },
    warRevive: {
      name_en: "War Revive",
      desc: "Revives one ally at the start of the turn, then attempts to revive them again at the end of the turn.\nSpellsword: Recover the row's HP if the second revive triggers.",
      stats: ["Head"],
      dep: { warHealLine: 2 },
      maxLevel: 10,
      coords: { x: 1, y: 3.5 }
    },
    artery: {
      name_en: "Artery",
      desc: "For a set number of turns, a row of party members will heal the party when they act, once per turn.\nSpellsword: Slightly increase party damage the turn cast.\nSpellsword: Increases the user's HP recovery this turn before cast, increasing Artery's healing.",
      
      stats: ["WIS", "Head"],
      dep: { warRevive: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 3.5 }
    },
    warResponse: {
      name_en: "War Response",
      desc: "For a set number of turns, automatically restores HP for all party members when the debuffed enemy acts, once per turn.\nSpellsword: Slightly decrease the targets defence the turn cast.",
      stats: ["WIS", "Head"],
      dep: { displace: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 4.5 }
    },
    pandemonium: {
      name_en: "!Pandemonium",
      desc: "Increases the targets attack and defense for 3 turns. \nSpellsword: Increased to 7 turns.",
      stats: ["Head"],
      dep: { artery: 2, warResponse: 2 },
      maxLevel: 6,
      coords: { x: 3, y: 3 }
    },
    barrier: {
      name_en: "Barrier",
      desc: "For one turn, there is a chance to nullify binds and ailments against all party members, up to a set number of times. \nSpellsword: Decrease damage taken.",
      stats: ["Arms"],
      dep: { artery: 2, warResponse: 2 },
      maxLevel: 10,
      coords: { x: 3, y: 4 }
    },
    drippingSlash: {
      name_en: "Viral Vector",
      desc: "Deals melee cut+almighty damage to one target. Attempts to inflict one of poison, paralyze, blind, sleep or curse.",
      stats: ["STR", "LUC", "Arms", "Sword"],
      dep: {},
      maxLevel: 8,
      coords: { x: 2, y: 0 }
    },
    strengthSlash: {
      name_en: "!Strength Blight",
      desc: "Deals melee cut+almighty damage to one target, decreasing their attack for 3 turns. \nSpellsword: Increased to 7 turns.\n\nSpellsword: Attempts to inflict leg bind.",
      stats: ["STR", "Arms", "Sword"],
      dep: {},
      maxLevel: 8,
      coords: { x: 0, y: 1 }
    },
    guardSlash: {
      name_en: "!Guard Blight",
      desc: "Deals melee cut+almighty damage to one target, decreasing their defense for 3 turns. \nSpellsword: Increased to 7 turns.\n\nDeals melee cut+almighty damage to one target, decreasing their physical/elemental defense for 3 turns.\nSpellsword: Attempts to inflict arm/head bind.",
      stats: ["STR", "Arms", "Sword"],
      dep: {},
      maxLevel: 10,
      coords: { x: 0, y: 2 }
    },
    headcut: {
      name_en: "!Thorn Chains",      
      desc: "Deals melee cut+almighty damage to one target, attempts to inflict head bind. \nSpellsword: Attempt to inflict again on their row.",
      stats: ["STR", "LUC", "Arms", "Sword"],
      dep: { guardSlash: 2, strengthSlash: 2 },
      maxLevel: 8,
      coords: { x: 1, y: 1.5 }
    },
    armcut: {
      name_en: "!Thorn Cuffs",      
      desc: "Deals melee cut+almighty damage to one target, attempts to inflict arm bind. \nSpellsword: Attempt to inflict again on their row.",
      stats: ["STR", "LUC", "Arms", "Sword"],
      dep: { headcut: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 1 }
    },
    legcut: {
      name_en: "!Thorn Shackles",      
      desc: "Deals melee cut+almighty damage to one target, attempts to inflict leg bind. \nSpellsword: Attempt to inflict again on their row.",
      stats: ["STR", "LUC", "Arms", "Sword"],
      dep: { headcut: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 2 }
    },
    ailingSlash: {
      name_en: "!Maledict Bristle",
      desc: "Deals melee cut+almighty damage to one target. \nSpellsword: Increase damage dealt.",
      stats: ["STR", "Arms", "Sword"],
      dep: { drippingSlash: 2, legcut: 2, armcut: 2 },
      maxLevel: 8,
      coords: { x: 3, y: 1.5 }
    },
    blindLaughter: {
      name_en: "?Blind Laughter",
      desc: "This turn, if the targetted enemy is afflicted with any ailments, binds, or stun, the user will perform a follow up attack.", 
      stats: ["STR", "Arms", "Sword"],
      dep: { drippingSlash: 2, legcut: 2, armcut: 2 },
      maxLevel: 8,
      coords: { x: 3, y: 0.5 }
    },
    scorpion: {
      name_en: "Demise Burst", 
      desc: "Deals melee cut+almighty damage to one target, removing one debuff. \nIf a debuff was removed, recover the user's row HP and overheal them.\nSpellsword: Increased recovery.", 
      stats: ["STR", "Arms", "Sword"],
      dep: { pandemonium: 2, ailingSlash: 2, blindLaughter: 2 },
      maxLevel: 8,
      coords: { x: 4, y: 1.5 }
    },
    bindCut: {
      name_en: "Aspir Gash",
      desc: "Deals melee cut+almighty damage to one target, recovering the user's Force.",
      stats: ["STR", "LUC", "Arms", "Sword"],
      dep: {},
      maxLevel: 6,
      coords: { x: 1, y: 6 }
    },
    rouse: {
      name_en: "Rouse",
      desc: "Increases the user's Force gain based on the number of enemies with binds.",
      stats: [],
      dep: { bindCut: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 6 }
    },
    leeches: {
      name_en: "!Hollow Scourge",
      desc: "Restores Force to the user's row allies. \nIncreased recovery during Spellsword.", 
      stats: ["WIS"],
      dep: { rouse: 2 },
      maxLevel: 8,
      coords: { x: 3, y: 6 }
    },
    curseCut: {
      name_en: "Nature's Will",
      
      desc: "When the user is dealt mortal damage, they will survive the hit once per Force Boost.", 
      stats: ["STR", "LUC", "Arms", "Sword"],
      dep: { spiritDrain: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 5 }
    },
    spiritDrain: {
      name_en: "Spirit Mirror",
      desc: "During Force Boost, recover the user's row TP.", 
      stats: ["WIS"],
      dep: { curseCut: 2, leeches: 2, barrier: 2 },
      maxLevel: 8,
      coords: { x: 4, y: 5 }
    },
    corpseAsh: {
      name_en: "Corpse Ash",
      
      desc: "Usable once per Force Boost. \nReduces an ally's damage taken this turn, and at max level, also pauses the duration of their Force Boost.", 
      stats: [],
      dep: { scorpion: 2, spiritDrain: 2 },
      maxLevel: 8,
      coords: { x: 5, y: 2.5 }
    },
    looseThread: {
      name_en: "Loose Thread",
      desc: "Usable once per Force Boost. \nQuickly cancel an ally's Force Boost, setting their Force to a specific amount.", 
      stats: ["STR", "LUC", "Arms", "Sword"],
      dep: { scorpion: 2, spiritDrain: 2 },
      maxLevel: 8,
      coords: { x: 5, y: 4 }
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
      maxLevel: 6,
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
      maxLevel: 6,
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
      desc: "Restores HP and TP to the user. \nEnds Force Boost but does not break the Force gauge.",
      stats: ["STR"],
      unique: true,
      type: "Break",
      dep: { ignition: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    sunrazeTrip: {
      name_en: "Return Stroke",  
      desc: "Starter skill. Deals melee weapon damage to one target. \nFast. \nRecovers 15% Force on hit.",
      stats: ["STR", "LUC", "Arms", "Driveblade"],
      dep: {},
      maxLevel: 8,
      coords: { x: 0, y: 1 }
    },
    galeOnslaught: {
      name_en: "Spinning Slash", 
      desc: "Fusion skill. Deals melee cut damage to one target. \nReduces damage taken this turn. \nRecovers 25% Force on hit.\nReduces overheat duration by 2 turns. ",
      stats: ["STR", "Arms", "Driveblade"],
      dep: {},
      maxLevel: 8,
      coords: { x: 0, y: 2 }
    },
    busterBeat: {
      name_en: "Double Charge", 
      desc: "Deals 2 instances of melee cut damage to one target. \nReduces overheat duration by 3 turns.",
      stats: ["STR", "Arms", "Driveblade"],
      dep: {},
      maxLevel: 6,
      coords: { x: 0, y: 3 }
    },
    bloodrake: {
      name_en: "Element Discharge",
      desc: "Fusion skill. Deals melee cut damage to one target, and places the user in the overheat state for 1 turn. Pauses Force Boost duration this turn.\nCannot be used while overheated. \nThe TP cost is reduced based on the amount of TP used before this skill was cast. \nThe user will take 2x more damage until the skill activates.",
      stats: ["STR", "Arms", "Driveblade"],
      dep: { naturalDrive: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 1 }
    },
    impulseBreak: {
      name_en: "Amped Discharge",
      desc: "Starter skill. Deals melee cut damage to one target, then deal multiple instances of imbuable damage. \nPlaces the user in the overheat state for 6 turns.\nCannot be used while overheated. \nThe TP cost is reduced based on the amount of TP used before this skill was cast. \nThe user will take 2x more damage until the skill activates.", 
      stats: ["STR", "Arms", "Driveblade"],
      dep: { bloodrake: 2 },
      maxLevel: 8,
      coords: { x: 3, y: 1 }
    },
    burstStrike: {
      name_en: "SAED",  
      desc: "Finisher skill. Deals melee cut damage to one front row target, then follow-up with imbuable damage on the same target and the back row. \nPlaces the user in the overheat state for 9 turns. \nCannot be used while overheated. \nThe TP cost is reduced based on the amount of TP used before this skill was cast. \nThe user will take 2x more damage until the skill activates.",
      stats: ["STR", "Arms", "Driveblade"],
      dep: { impulseBreak: 2 },
      maxLevel: 8,
      coords: { x: 4, y: 0.5 }
    },
    doubleDown: {
      name_en: "Thermal Aura",   
      desc: "Passively restores a percentage of the user's maximum HP plus a static amount while they are in the Force Boost state.", 
      stats: ["STR", "Arms", "Driveblade"],
      dep: { impulseBreak: 2 },
      maxLevel: 8,
      coords: { x: 4, y: 1.5 }
    },
    naturalDrive: {
      name_en: "Energy Blade", 
      desc: "Combo skill. Deals melee cut damage to one target. \nRestores HP to the user based on the amount of damage dealt. \nPlaces the user in the overheat state for 6 turns.",
      stats: ["STR", "Arms", "Driveblade"],
      dep: { sunrazeTrip: 3, galeOnslaught: 3, busterBeat: 3 },
      maxLevel: 6,
      coords: { x: 1, y: 2 }
    },
    chaosCartridge: {
      name_en: "Condensed Slash",  
      desc: "Finisher skill. Deals melee cut damage to one target. \nIncreases attack for non-Drive Imperial skills for the next two turns. \nUsable only while overheated.",   
      
      
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
      
      desc: "Reduces overheat duration by a set number of turns. Each cast multiplies Natural Drive damage by ?%. There is a maximum of ? increases. Damage increases are reset upon the user's death.",
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
      name_en: "Counter Morph",
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
    avenger: {
      name_en: "Avenger/?",
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
      
      name_en: "Guard Point", 
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
