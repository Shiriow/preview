let skills = {

  Protectorv2: {
    shieldProtect: {
      name_en: "Tempered Will",
      desc: "For 3 turns, pauses the duration of all buffs on the party and prevents enemies from dispelling buffs. Increases aggro chance.",
      stats: [],
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    perfectDefense: {
      name_en: "Perfect Defense",
      desc: "This turn, completely negates all damaging attacks against the party.",
      stats: [],
      unique: true,
      type: "Break",
      dep: { shieldProtect: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    shieldOath: {
      name_en: "Shield Oath",
      desc: "Apply a buff on the user that decreases damage taken of their row. (Decreases user's attack?)",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 1 }
    },
    swordbreaker: {
      name_en: "Swordbreaker",
      desc: "Provides a chance to lower damage dealt to your row.",
      stats: [],
      dep: { shieldOath: 2 },
      maxLevel: 8,
      coords: { x: 1, y: 1 }
    },
    counterOath: {
      name_en: "Counter Oath",
      desc: "Apply a buff on the user that gives them a chance of countering attacks made against their row. Increases the user's chance of being targeted for a set number of turns.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 2 }
    },
    swordOath: {
      name_en: "Sword Oath",
      desc: "Apply a buff on the user that increases damage done of their row.(Decreases user's defense?)",
      stats: [],
      dep: { counterOath: 2 },
      maxLevel: 8,
      coords: { x: 1, y: 2 }
    },
    bullCharge: {
      name_en: "Intervention",
      desc: "Raises damage done and lowers damage taken for one ally until the end of the next turn.",
      stats: [],
      dep: { swordOath: 2, swordbreaker: 2 },
      maxLevel: 10,
      coords: { x: 2, y: 1.5 }
    },
    fireCircle: {
      name_en: "Fire Circle",
      desc: "Reduces all Fire damage to the party, and increases all Fire damage to enemies for one turn.",
      stats: [],
      dep: { bullCharge: 2 },
      maxLevel: 6,
      coords: { x: 3, y: 0.5 }
    },
    iceCircle: {
      name_en: "Ice Circle",
      desc: "Reduces all Ice damage to the party, and increases all Ice damage to enemies for one turn.",
      stats: [],
      dep: { bullCharge: 2 },
      maxLevel: 6,
      coords: { x: 3, y: 1.5 }
    },
    voltCircle: {
      name_en: "Volt Circle",
      desc: "Reduces all Volt damage to the party, and increases all Volt damage to enemies for one turn.",
      stats: [],
      dep: { bullCharge: 2 },
      maxLevel: 6,
      coords: { x: 3, y: 2.5 }
    },
    lightTincture: {
      name_en: "Light Tincture",
      desc: "Nullifies damage to the user/target for one turn. Each time Light Tincture activates, the chance if it activating again on that turn is reduced.",
      stats: [],
      dep: { fireCircle: 2, iceCircle: 2, voltCircle: 2 },
      maxLevel: 6,
      coords: { x: 4, y: 1.5 }
    },
    healingWall: {
      //name_en: "Healing Wall",
      //desc: "When the user defends, restores HP to allies on the user's row.",
      name_en: "Energy Oath",
      desc: "Apply a buff on the user that reduces the cost of their row's skills.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 3 }
    },
    clemency: {
      name_en: "Clemency",
      desc: "Restores HP for one ally. Restore HP for the user's row for half the power.",
      stats: ["WIS"],
      dep: { healingWall: 2  },
      maxLevel: 6,
      coords: { x: 1, y: 3 }
    },
    regenOath: {
      name_en: "Regen Oath",
      desc: "Apply a buff on the user that restores their row's HP.",
      stats: [],
      dep: { clemency:2 },
      maxLevel: 6,
      coords: { x: 2, y: 3 }
    },
    shieldSmite: {
      name_en: "Shield Smite",
      desc: "Deals melee bash damage to one target. Attempts to inflict arm bind. Damage is based on the user's shield's DEF.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 4 }
    },
    // shieldSiphon: {
    //   name_en: "Shield Siphon",
    //   desc: "Deals melee bash damage to one target. Doubles damage when lower health than your target and drains HP. Damage is based on the user's shield's DEF.",
    //   stats: ["STR"],
    //   dep: {  },
    //   maxLevel: 6,
    //   coords: { x: 0, y: 5 }
    // },
    shieldRush: {
      name_en: "*Shield Rush",
      desc: "Deals melee bash damage to all enemies, and reduces their physical attack for a set number of turns. Damage is based on the user's shield's DEF.",
      stats: ["STR"],
      dep: { shieldSmite: 3 },
      maxLevel: 8,
      coords: { x: 1, y: 4 }
    },
    // shieldBreak: {
    //   name_en: "Shield Break",
    //   desc: "Deals melee bash damage to one target. Damages user. Damage is based on the user's shield's DEF.",
    //   stats: ["STR"],
    //   dep: { shieldRush: 3 },
    //   maxLevel: 8,
    //   coords: { x: 2, y: 5 }
    // },
    shieldTaboo: {
      name_en: "Shield Taboo",
      desc: "Deals melee bash damage to one target. Increases the duration of the user's buffs. Damage is based on the user's shield's DEF.",
      stats: ["STR"],
      dep: { shieldRush: 3 },
      maxLevel: 6,
      coords: { x: 2, y: 4 }
    },
    shieldFlare: {
      name_en: "Shield Flare",
      desc: "Until the end of the next turn, when the user is attacked, they will counterattack with ranged fire damage. Damage is based on the user's shield's DEF.",
      stats: ["STR"],
      dep: { shieldTaboo: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 4 }
    },
    firelight: {
      name_en: "Firelight/Blazing Aura",
      desc: "At the end of the turn, deals ranged fire damage to the target of \"Shield\" skills, to any enemies that activated Light Tincture, or whenever the user uses an Oath.",
      stats: [],
      dep: { shieldFlare: 2 },
      maxLevel: 6,
      coords: { x: 4, y: 4 }
    },
    lastBastion: {
      name_en: "Last Bastion",
      desc: "Requires 3 buffs. Removes all of them and, in exchange, the user will attack an enemy dealing melee bash damage and reducing the target's damage until the end of the turn.",
      stats: [],
      dep: { lightTincture: 2, firelight: 2 },
      maxLevel: 6,
      coords: { x: 5, y: 2.75 }
    },
    cellDivide: {
      name_en: "Cell Divide",
      desc: "Covers one ally until the end of the next turn.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 5 }
    },
    aegis: {
      name_en: "Aegis",
      desc: "There is a chance for the user to survive fatal damage at 1 HP. Can activate once per battle at most.",
      stats: [],
      dep: { cellDivide: 2 },
      maxLevel: 8,
      coords: { x: 1, y: 5 }
    },
    cover: {
      name_en: "Cover",
      desc: "When an ally is attacked, the user has a chance of automatically covering them.",
      stats: [],
      dep: { aegis: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 5 }
    },
    autoguard: {
      name_en: "Autoguard",
      desc: "When the user is attacked, there is a chance to automatically reduce the damage.",
      stats: [],
      dep: { cover: 2 },
      maxLevel: 10,
      coords: { x: 3, y: 5 }
    },
    provoke: {
      name_en: "Provoke/???",
      desc: "Increases the user's defense and chance of being targeted for a set number of turns.",
      stats: [],
      dep: { cellDivide: 2 },
      maxLevel: 8,
      coords: { x: 1, y: 6 }
    },
    preProvoke: {
      name_en: "Pre-Provoke",
      desc: "If Provoke is learned, there is a chance to automatically cast it at the start of battle. Cannot activate if another ally activated it first.",
      stats: [],
      dep: { provoke: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 6 }
    },
    wideOath: {
      name_en: "Wide Oath",
      desc: "For one turn, the user's Oath buffs will affect the whole party.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 3, y: 6 }
    },
    autoOath: {
      name_en: "Oath Mastery/Force Shield/Healing Rythm",
      //desc: "Has a chance to apply a random Oath skill that the user knows at the start of battle. The chance to activate depends on the number of Oath skills the user knows.",
      desc: "Increases the speed of Oath skills, and reduces their TP costs based on a static amount and a percentage of the skill's TP cost. Increases their turn count by 1 at max. / Only usable while the user is in the Force Boost state. Extends the duration of their Force Boost by 1 turn, and reduces all damage they take for that turn. Each cast increases the TP cost by a certain amount. TP cost increases are reset upon the user's death.",
      stats: [],
      dep: { wideOath: 2 },
      maxLevel: 10,
      coords: { x: 4, y: 6 }
    },
    chop: {
      name_en: "Chop",
      desc: "Occasionally gains more items when using Chop points.",
      stats: [],
      unique: true,
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    }
  },
  Highlander: {
    heroBattle: {
      name_en: "Hero Battle",
      desc: "For 3 turns, spear skills will have increased power, and restore HP to all party members based on damage dealt. \nSpear skills that activate instant death will still restore HP based on the damage that would have been dealt.",
      stats: [],
      unique: true,
      type: "Boost",
      dep: {},
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    gaeBolg: {
      name_en: "Gae Bolg",
      desc: "Deals ranged stab damage to all enemies, and restores TP to the user based on damage dealt.",
      stats: ["STR", "Arm", "Spear"],
      unique: true,
      type: "Break",
      dep: { heroBattle: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    longThrust: {
      name_en: "Vorpal Thrust",
      //[, with line - piercing effects. /
      desc: "Deals ranged stab damage to one target. Restores HP to the user based on the amount of damage dealt.",
      stats: ["STR", "Arm", "Spear"],
      dep: {},
      maxLevel: 6,
      coords: { x: 0, y: 3.5 }
    },
    nascentFlash: {
      name_en: "Nascent Flash", //Spear Assist  Blood for Blood  Mercy Stroke   //overkiller
      // desc: "Deals melee stab damage to one target at the end of the turn. If an elemental attack was used by an ally beforehand, that element is added to the attack and its damage is increased. If more than one elemental attack was used, the most recent element applies.",
      desc: "Deals melee stab damage to one target. If it kills, heal the whole party.",
      stats: ["STR", "Arm", "Spear"],
      dep: { longThrust: 3 },
      maxLevel: 6,
      coords: { x: 1, y: 3.5 }
    },
    headPierce: {
      name_en: "Head Pierce",
      desc: "Deals melee stab damage to one target. Attempts to inflict head bind and instant death.",
      stats: ["STR", "LUC", "Arm", "Spear"],
      dep: { nascentFlash: 3 },
      maxLevel: 6,
      coords: { x: 2, y: 3.5 }
    },
    turningTide: {
      name_en: "Turning Tide",
      desc: "When the user defeats an enemy, restores HP to all party members.",
      stats: [],
      dep: { headPierce: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 3.5 }
    },
    blackSabbath: {
      name_en: "Black Sabbath",
      desc: "Deals ranged almighty damage to all enemies, and restores all party members' HP based on damage dealt.",
      stats: ["STR", "Arm", "Spear"],
      dep: { turningTide: 3 },
      maxLevel: 6,
      coords: { x: 4, y: 3.5 }
    },
    lifeSurge: {
      name_en: "Life Surge",
      desc: "If the user is in the front row and at full HP, their TP is restored at the end of the turn.",
      // name_en: "Focus/Limitless",
      // desc: "If the user's HP is full at the end of the turn, restore some TP.",
      stats: [],
      dep: { blackSabbath: 3, alliedBonds: 3 },
      maxLevel: 6,
      coords: { x: 5, y: 4.125 }
    },
    drainingThrust: {
      name_en: "Draining Thrust",
      desc: "Consumes the user's HP to deal melee stab damage to the enemy front row.",
      stats: ["STR", "Arm", "Spear"],
      dep: {},
      maxLevel: 6,
      coords: { x: 0, y: 2.25 }
    },
    delayedCharge: {
      name_en: "Delayed Charge",
      desc: "Consumes the user's HP to deal ranged stab damage to one target at the end of a set number of turns after. \nDamage is increased based on the number of turns passed before its activation. \nIneffective if the user dies before the skill activates.",
      stats: ["STR", "Arm", "Spear"],
      dep: { drainingThrust: 3 },
      maxLevel: 8,
      coords: { x: 1, y: 2.25 }
    },
    crossCharge: {
      name_en: "Cross Charge",
      desc: "Consumes the user's HP to deal melee stab damage to one target. \nIf currently charging for Delayed Charge, activates it and increases Cross Charge's damage.",
      stats: ["STR", "Arm", "Spear"],
      dep: { delayedCharge: 3 },
      maxLevel: 8,
      coords: { x: 2, y: 2.25 }
    },
    thousandSpears: {
      name_en: "Thousand Spears", // Spear Reversal/
      // desc: "Deals melee stab damage to one target, and restores the user's HP based on damage dealt. Damage is increased if the target has higher percentage of HP remaining than the user. / Deals melee stab damage to all enemies. For every 10% HP below 51% of user’s max HP, add 1 hit to both min and max number of hits.",
      desc: "Deals multiple instances of melee stab damage to the enemy's front row. Damage decreases the higher the user's current HP is.",
      stats: ["STR", "Arm", "Spear"],
      dep: { crossCharge: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 2.25 }
    },
    forceOffering: {
      name_en: "Force Offering",
      desc: "Consumes the user's HP to pause the duration of their Force Boost this turn and boost their attack until the end of the next turn. \nOnly usable once per Force Boost.",
      stats: ["Head"],
      dep: { thousandSpears: 3 },
      maxLevel: 6,
      coords: { x: 4, y: 2.25 }
    },
    bloodVeil: {
      name_en: "Blood Veil",
      desc: "When the user loses HP, increases defense until the end of the turn.",
      stats: [],
      dep: { drainingThrust: 3 },
      maxLevel: 8,
      coords: { x: 1, y: 1 }
    },
    bloodlust: {
      name_en: "Bloodlust",
      desc: "When the user loses HP, there is a chance that they will automatically attack with their weapon.",
      stats: [],
      dep: { bloodVeil: 3 },
      maxLevel: 10,
      coords: { x: 2, y: 1 }
    },
    fightingSpirit: {
      name_en: "Fighting Spirit",
      desc: "If the user lost HP on the previous turn, increases their attack this turn.",
      stats: [],
      dep: { thousandSpears: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 1 }
    },
    jawsOfDeath: {
      name_en: "Jaws of Death",
      desc: "When cast, the user will endure fatal damage once. \nIf the user endured a fatal hit through Jaws of Death, their damage on the next turn is increased depending on the damage endured.",
      stats: ["Head"],
      dep: { fightingSpirit: 3 },
      maxLevel: 6,
      coords: { x: 4, y: 1 }
    },
    legionBurst: {
      name_en: "*Legion Burst",
      desc: "Consumes the HP of all allies other than the user at the start of the turn. \nAt the end of the turn deal ranged stab damage to all enemies.",
      stats: ["STR", "Arm", "Spear"],
      dep: {},
      maxLevel: 8,
      coords: { x: 0, y: 4.75 }
    },
    legionCharge: {
      name_en: "*Legion Charge",  //ranged
      desc: "Consumes the HP of all allies other than the user at the start of the turn. \nAt the end of the turn deal ranged stab damage to one target.",
      stats: ["STR", "Arm", "Spear"],
      dep: { legionBurst: 3 },
      maxLevel: 10,
      coords: { x: 1, y: 4.75 }
    },
    deathsEdge: {
      name_en: "Misery Tear", //Death's Edge  Equilibrium  Burst  Split
      desc: "Deals melee stab damage to one enemy. Deals more damage the less HP the entire party has. \nBoth the party's current average precentage of HP remaining as well as the raw amount of HP missing are taken into account by this.",
      stats: ["STR", "Arm", "Spear"],
      dep: { legionCharge: 3 },
      maxLevel: 8,
      coords: { x: 2, y: 4.75 }
    },
    alliedBonds: {
      name_en: "Allied Bonds",
      desc: "If the user's skill consumed the HP of allies on the user's row, restores their TP at the end of the turn.",
      stats: [],
      dep: { deathsEdge: 3 },
      maxLevel: 6,
      coords: { x: 3, y: 4.75 }
    },
    spiritShield: {
      name_en: "*Spirit Shield",
      desc: "Consumes the user's HP to increase the elemental defense and maximum HP of one row for a set number of turns.", //[restore their HP at the end of each turn][
      stats: ["Head"],
      dep: { legionBurst: 3 },
      maxLevel: 6,
      coords: { x: 1, y: 6 }
    },
    bloodyOffense: {
      name_en: "*Bloody Offense",
      // desc: "Consumes one row of allies' HP to increase their attack and lower their defense, for a set number of turns.",
      // desc: "Targets the user and the row they're in. Consumes a percentage of affected party members' current HP at cast time. Increases attack and lowers defense for a set amount of turns.",
      desc: "Consumes the HP of all allies other than the user to increase a row's attack and decrease defence for a set number of turns.",
      stats: ["Head"],
      dep: { spiritShield: 3 },
      maxLevel: 10,
      coords: { x: 2, y: 6 }
    },
    bloodFortune: {
      name_en: "Blood Fortune",
      desc: "Consumes all party members' HP to increase their infliction rate of binds and ailments for a set number of turns.",
      stats: ["Head"],
      dep: { bloodyOffense: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 6 }
    },
    battleInstincts: {
      name_en: "Battle Instinct",
      desc: "At the start of battle, there is a chance to cast a buff on all party members that negates ailments once for 3 turns. \nCannot activate if another ally activated it first.",
      stats: [],
      dep: { bloodFortune: 3 },
      maxLevel: 6,
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
      name_en: "Full Charge",
      desc: "This turn, the user is fully immune to any hostile effects from enemies. Until the end of the next turn, increases the user's attack and action speed.",
      stats: [],
      unique: true,
      type: "Break",
      dep: { trinity: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    blazingLink: {
      name_en: "?Blazing Link",//Strike Link
      desc: "Deals melee fire damage to one target. If the target/an enemy is attacked again after, follows up with another attack of the same element for a maximum of 9 times. {Decreases the targets fire resistance for the turn.}",
      //Chance of follow-up decreases with each hit.  Replaces the element of the next skill with Fire.
      stats: ["STR, Rapier"],
      dep: {},
      maxLevel: 6,
      coords: { x: 0, y: 1 }
    },
    freezingLink: {
      name_en: "?Freezing Link",
      desc: "Deals melee ice damage to one target. If the target/an enemy is attacked again after, follows up with another attack of the same element for a maximum of 9 times. {Decreases the targets ice resistance for the turn.}",
      stats: ["STR, Rapier"],
      dep: {},
      maxLevel: 6,
      coords: { x: 0, y: 2 }
    },
    electricLink: {
      // name_en: "", //?Heal Link?, Aoe Link
      // desc: "Deals melee stab damage to one row. If the targets are attacked again after, follows up with another attack of the same element for a maximum of 9 times.",
      //desc: "Deals melee stab damage to one target. If the target is attacked again after, follows up with another stab attack for a maximum of ? times. Each follow up recovers the partys health. | Restores HP to the user's row. If the targets are attacked again after, follows up with another heal for a maximum of ? times.",
      name_en: "?Electric Link/Guard Point",
      desc: "Deals melee volt damage to one target. If the target/an enemy is attacked again after, follows up with another attack of the same element for a maximum of 9 times. / Major damage reduction + chance of nulling damage, leg binds user and removes it at end of turn. If an attack is blocked, increases the user's (row) attack until the end of the next turn.",
      // / Gives normal attacks a chance to add an extra INT-based ice attack. , {Decreases the targets volt resistance for the turn.}
      stats: ["STR, Rapier"],
      dep: {},
      maxLevel: 6,
      coords: { x: 0, y: 3 }
    },
    // improvedLink: {
    //   name_en: "???/Improved Link",
    //   desc: "For 3 turns, increases the number and chance of follow-ups that can be made from link skills used by the user. Each action may trigger at most 4 link follow-ups.",
    //   stats: [],
    //   dep: { blazingLink: 3, freezingLink: 3, electricLink: 3 },
    //   maxLevel: 4,
    //   coords: { x: 1, y: 2 }
    // },
    improvedLink: {
      // name_en: "Link Burst",
      // desc: "When an enemy is killed with a Link skill, the user will attack another enemy with melee damage of the same element multiple times.",
      name_en: "Splash Link",
      desc: "If the user hits an enemy's weakness with a Link skill, there is a chance that they will deal splash damage of the same element to adjacent enemies.",
      stats: [],
      dep: { blazingLink: 3, freezingLink: 3, electricLink: 3 },
      maxLevel: 8,
      coords: { x: 1, y: 1.5 }
    },
    linkSmash: {
      name_en: "Link Smash",
      desc: "Link follow-up attacks can deal critical hits. If an action triggered multiple follow-ups and one of them dealt a critical hit, all subsequent follow-ups triggered by that action will automatically deal critical hits as well.",
      stats: [],
      dep: { blazingLink: 3, freezingLink: 3, electricLink: 3 },
      maxLevel: 8,
      coords: { x: 1, y: 2.5 }
    },
    bindingForce: {
      // name_en: "Link Chaser",
      // desc: "Deals melee stab damage to one target. If the target is attacked again after, follows up with another stab attack for a maximum of ? times. Each follow up recovers the partys health. | Restores HP to the user's row. If the targets are attacked again after, follows up with another heal for a maximum of ? times.",
      name_en: "Binding Force",
      desc: "Deals melee stab damage to one target. If the target is attacked again after, follows up with another stab attack for a maximum of ? times. Each follow up has a chance of randomly binding.",
      stats: ["STR, Rapier"],
      dep: { improvedLink: 1, linkSmash: 1 },
      maxLevel: 8,
      coords: { x: 2, y: 2 }
    },
    linkMastery: {
      name_en: "Link Mastery",
      desc: "For each link follow-up made this turn, increases the damage of subsquent link follow-ups.",
      stats: [],
      dep: { bindingForce: 2 },
      maxLevel: 8,
      coords: { x: 3, y: 1.5 }
    },
    sylphScreen: {
      name_en: "Sylphscreen",
      desc: "Each time the user attacks or uses an attack skill, their defense increases for that turn.",
      stats: [],
      dep: { bindingForce: 2 },
      maxLevel: 8,
      coords: { x: 3, y: 2.5 }
    },
    linkEnd: {
      name_en: "Link Finale",
      desc: "Deals melee stab damage to one target. Damage is based on the number of link follow-ups made on the previous turn and if the target has a Break skill debuff.",
      // Casts Improved Link after use.
      stats: ["STR, Rapier"],
      dep: { linkMastery: 2 },
      maxLevel: 8,
      coords: { x: 4, y: 1.5 }
    },
    swiftStab: {
      name_en: "*Million Thrust",
      desc: "Deals multiple instances of melee stab damage to random targets next turn. Counts as a Link skill.",
      stats: ["STR, Rapier"],
      dep: { sylphScreen: 2 },
      maxLevel: 8,
      coords: { x: 4, y: 2.5 }
    },
    fullBreak: {
      name_en: "*Full Break",
      //desc: "Deals melee cut/stab damage to one target. Damage is increased if the target has a Break skill debuff. Multiple Break debuffs will not increase damage further. Removes one debuff after use.",
      desc: "Deals melee cut/stab damage to one target. If the target is attacked again after, follows up with another attack of the same element for a maximum of 6 times that decreases their attack, defense, evasion and action speed for 1 turn. Chance of follow-up decreases with each hit.",
      stats: ["STR, Sword, Rapier"],
      dep: { linkEnd: 3, swiftStab: 3 },
      maxLevel: 8,
      coords: { x: 5, y: 2 }
    },
    powerBreak: {
      name_en: "Icicle Impact", //Power Break   Crash
      //desc: "Deals melee cut/stab damage to one target. Decreases their attack for 3 turns.",
      desc: "Deals ranged ice damage to one target.",
      // desc: "Deals melee cut/stab damage to one target. If the target is attacked again after, follows up with another attack of the same element for a maximum of 6 times that decreases their attack for 1 turn. Chance of follow-up decreases with each hit.",
      stats: ["INT, Sword, Rapier"],
      dep: {},
      maxLevel: 6,
      coords: { x: 0, y: 4 }
    },
    guardBreak: {
      name_en: "Icebrand",//Guard Break, Spellblade
      //desc: "Deals melee cut/stab damage to one target. Decreases their defense for 3 turns.",
      // desc: "This turn, the user will chase all attacks from all allies. Only one chase will be made for each action and they decrease the enemy's defense for 1 turn.",
      desc: "Deals melee {ice?} damage to one target. Has a chance to follow-up with Icicle Impact with added damage.",   //unsure if ice or phys because of rng (condensed->icebrand->blade recall), although then diamond front can be useful on single targets, only "problem" then would be the extra chase from condensed (no chase from phys): cond->diamond->recall has less rng since diamond is ice, while icebrand would do more damage but have chance of not proccing condensed and following with recall
      stats: ["STR, Sword, Rapier"],
      dep: { powerBreak: 2 },
      maxLevel: 8,
      coords: { x: 1, y: 4 }
    },
    speedBreak: {
      name_en: "Diamond Frost",// Scatter, Speed Break,  Glaciate, Absolute Zero, Driving Frost, Biting Frost, Frigid Stone, Frigid Eruption, Twin Stillness, Thin Ice, Frost Blade, Icebrand, Glacier Bash, Hailstorm, Dreams Of Ice, Icicle Impact, Glass Dance, Avalanche, Permafrost
      desc: "Deals melee ice damage to all targets. Has a chance to follow-up with Icicle Crash to a random enemy. Deals full damage to backrow enemies.", //Drop Shot OR Buster Cannon for full backrow dmg
      stats: ["INT, Sword, Rapier"],
      dep: { guardBreak: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 4 }
    },
    singleDevote: {
      name_en: "Condensed Slash",  //Chain Link, Delayed Chase, Coruscant
      desc: "Prepares Condensed Slash on the turn it's used. On the next turn, if the user uses an elemental skill, follows up with a melee STR-based Cut+Element attack on all enemies hit with an element by the user.",
      stats: [],
      dep: { speedBreak: 2 },
      maxLevel: 8,
      coords: { x: 3, y: 4 }
    },
    bladeRecall: {
      name_en: "Blade Recall",  //Chain Link
      desc: "Deals melee STR-based Cut damage to one enemy. If the user used an elemental attack on the last turn, also adds a ranged INT-based Element follow-up attack.",
      stats: [],
      dep: { speedBreak: 2 },
      maxLevel: 8,
      coords: { x: 4, y: 4 }
    },
    sonicRaid: {
      name_en: "Vacuum Slice",  //*Sonic Raid
      desc: "Deals melee cut damage to one target at the start of the turn. Increases speed for the user's row for the next turn.",
      stats: ["STR, Sword"],
      dep: {},
      maxLevel: 6,
      coords: { x: 0, y: 5 }
    },
    doubleStrike: {
      name_en: "Levinforce",  //Focused Slice/Chaser
      desc: "Deals melee cut damage to one row. Increases accuracy (and evasion) for the user's row for this turn.",
      //until the end of the next
      // This turn, increase accuracy for the user's row and the user will chase all attacks from all allies.
      stats: ["STR, Sword"],
      dep: { sonicRaid: 2 },
      maxLevel: 8,
      coords: { x: 1, y: 5 }
    },
    spiralSlice: {
      name_en: "Earthen Fury",  //Riposte
      desc: "Deals melee cut damage to one target. Increases defense for the user's row for this turn.",
      stats: ["STR, Sword"],
      dep: { doubleStrike: 3 },
      maxLevel: 8,
      coords: { x: 2, y: 5 }
    },
    penetrate: {
      name_en: "Inferno Howl",  //Wild Strike, Conflag Strike
      desc: "Deals melee cut damage to one target, with splash damage to the adjacent enemies. Increases damage for the user's row for this turn.",
      stats: ["STR, Sword"],
      dep: { spiralSlice: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 5 }
    },
    swordTempest: {
      name_en: "Rip Current",  //*Sword Tempest
      desc: "Deals melee cut damage to one target with low accuracy. If it misses, deal melee cut damage to all enemies.",
      stats: ["STR, Sword"],
      dep: { penetrate: 2 },
      maxLevel: 8,
      coords: { x: 4, y: 5 }
    },
    vanguard: {
      name_en: "?Vanguard",
      desc: "For 5 turns, increases the user's attack, defense and action speed (and aggro). Has a chance of being used at the start of battle after level 6. (one ally's)",
      stats: [],
      dep: {},
      maxLevel: 10,
      coords: { x: 1, y: 6 }
    },
    // autoVanguard: {
    //   name_en: "???/Auto-Vanguard",
    //   desc: "If Auto-Vanguard is learned, there is a chance to automatically cast it at the start of battle. Cannot activate if another ally activated it first.",
    //   stats: [],
    //   dep: { vanguard: 1 },
    //   maxLevel: 8,
    //   coords: { x: 3, y: 0 }
    // },
    proficiency: {
      name_en: "Blitzkrieg",
      desc: "After the user attacks this turn, all further attacks against enemies attacked by the user will have increased damage and accuracy.",
      stats: [],
      dep: { vanguard: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 6 }
    },
    initiative: {
      name_en: "Initiative",
      desc: "When attacking before any enemies act, increases damage and accuracy.",
      stats: [],
      dep: { proficiency: 2 },
      maxLevel: 6,
      coords: { x: 3, y: 6 }
    },
    physDefUp: {
      name_en: "Spirit Sword",
      desc: "When the user hits a target with a single-target attack, that target's damage is reduced for the rest of the turn.",
      stats: ["STR"],
      dep: { singleDevote: 2 },
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
  Vampire: {
    immortalFlesh: {
      name_en: "Immortal Flesh",
      desc: "For 3 turns, the user will endure all fatal damage at 1 HP. Does not work on instant death.",
      stats: [],
      unique: true,
      type: "Boost",
      dep: {},
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    deathMarch: {
      name_en: "Death March",
      desc: "Revives all dead party members at 1 HP. Deals 2 + x instances of ranged almighty damage to one enemy, where x is the amount of party members revived. The damage is based only on the user's level, and does not scale with STR, INT, or weapon ATK/MAT.",
      stats: [],
      unique: true,
      type: "Break",
      dep: { immortalFlesh: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    bloodPact: {
      name_en: "Blood Pact",
      desc: "Places a buff on the user that makes them take damage in place of party members for a set amount of turns, and for a certain amount of times per turn. Every time the user takes damage for another party member, the chance of them taking damage again on that turn is reduced.",
      stats: [],
      dep: {},
      maxLevel: 8,
      coords: { x: 0, y: 1 }
    },
    bareFangs: {
      name_en: "Bare Fangs",
      desc: "This turn, whenever the user is attacked, counterattack with melee damage and restore their HP. Also increases the user's aggro for that turn.",
      stats: [],
      dep: { bloodPact: 3 },
      maxLevel: 8,
      coords: { x: 1, y: 1 }
    },
    crimsonShower: {
      name_en: "Crimson Shower",
      desc: "This turn, whenever the user is attacked, automatically restore their rows HP. Also increases the user's aggro for that turn.",
      stats: [],
      dep: { bareFangs: 3 },
      maxLevel: 8,
      coords: { x: 2, y: 1 }
    },
    unscathedBody: {
      name_en: "Miserable Fate",
      desc: "Covers the user's row for one turn.",
      stats: [],
      dep: { crimsonShower: 3 },
      maxLevel: 6,
      coords: { x: 3, y: 1 }
    },
    drainBite: {
      name_en: "Drain Bite",
      desc: "Deals melee stab damage to an enemy and restores the user's HP. This restoration can heal beyond maximum HP.",
      stats: [],
      dep: {},
      maxLevel: 8,
      coords: { x: 0, y: 2 }
    },
    iceVein: {
      name_en: "Stigmanizer", //Unscathed Body/Scarlet (Earth Break for feeding Vengeance Bash)
      desc: "Deals bash damage to one enemy with Splash effect, dealing 50% damage to its neighbors, and also deals bash damage to yourself.",
      stats: [],
      dep: { drainBite: 3 },
      maxLevel: 6,
      coords: { x: 1, y: 2 }
    },
    lifeSiphon: {
      name_en: "Frozen Abyss",
      desc: "Deals ranged ice damage to all enemies. Heals the user for 25% of the damage dealt.",
      stats: [],
      dep: { iceVein: 3 },
      maxLevel: 8,
      coords: { x: 2, y: 2 }
    },
    metamorphosis: {
      name_en: "Metamorphosis",
      desc: "The user is replaced by a substitute for the turn, if it is destroyed then the user returns to battle. If the substitute survives, then deal cut damage to one enemy at the end of the turn.",
      stats: [],
      dep: { lifeSiphon: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 2 }
    },
    vampiricSpirit: {
      name_en: "Under the Zenith",//Vampiric Spirit
      // at the end of the turn
      desc: "Grants the user a buff that increases their maximum HP, while also healing them.",
      stats: ["STR", "LUC"],
      dep: {},
      maxLevel: 6,
      coords: { x: 0, y: 3 }
    },
    sanguineTide: {
      name_en: "Sanguine Tide",
      desc: "Grants the user a buff that has a chance to nullify Ailments, Binds and Debuffs for a set number of turns and lose HP whenever they act. Also grants a buff to the rest of the party that restores HP at the end of their turn.",
      stats: ["STR"],
      dep: { vampiricSpirit: 3 },
      maxLevel: 8,
      coords: { x: 1, y: 3 }
    },
    umbralVeil: {
      name_en: "Umbral Veil",
      desc: "For a set number of turns, the allies on the user's row will have their chance of being targetted reduced. This skill is considered a debuff.",
      stats: ["STR"],
      dep: { sanguineTide: 3 },
      maxLevel: 6,
      coords: { x: 2, y: 3 }
    },
    feast: {
      name_en: "Feast",
      desc: "For a set number of turns, one ally ally will have increased attack, but lose HP every time they act. Also grants the user a buff that restores HP at the end of their turn.",
      stats: ["STR"],
      dep: { umbralVeil: 3 },
      maxLevel: 6,
      coords: { x: 3, y: 3 }
    },
    vitalityDrain: {
      name_en: "Vitality Drain",
      desc: "For a set number of turns, decreases an enemy's defense and increases the user's defense.",
      stats: [],
      dep: {},
      maxLevel: 8,
      coords: { x: 1, y: 4 }
    },
    vigorDrain: {
      name_en: "Vigor Drain",
      desc: "For a set number of turns, decreases an enemy's attack and increases the user's attack.",
      stats: [],
      dep: { vitalityDrain: 3 },
      maxLevel: 8,
      coords: { x: 2, y: 4 }
    },
    transfusion: {
      name_en: "Scarlet Transfusion",
      //Restores one party member's HP. Also removes a set amount of binds. / 
      desc: "Consumes the user's HP to heal their allies.",
      stats: [],
      dep: {},
      maxLevel: 6,
      coords: { x: 0, y: 5 }
    },
    phlebotomy: {
      name_en: "Silent Dusk",
      desc: "Consumes the user's TP to restore TP to the user's row.",
      stats: [],
      dep: { transfusion: 3 },
      maxLevel: 8,
      coords: { x: 1, y: 5 }
    },
    rebirthRitual: {
      //Unscathed Body
      name_en: "Quickening Thirst",
      desc: "If the user is in the front row and takes damage, their TP is restored.",
      stats: [],
      dep: { phlebotomy: 3 },
      maxLevel: 8,
      coords: { x: 2, y: 5 }
    },
    // rebirthRitual: {
    //   name_en: "???",
    //   desc: "Consumes the HP of the party to revive an ally with overhealed health.",
    //   stats: [],
    //   dep: { phlebotomy: 3 },
    //   maxLevel: 8,
    //   coords: { x: 2, y: 5 }
    // },
    riseFromTheDead: {
      name_en: "Rise from the Dead",
      desc: "At the end of the turn, the user has a chance of automatically reviving.",
      stats: ["WIS"],
      dep: { rebirthRitual: 3 },
      maxLevel: 6,
      coords: { x: 3, y: 5 }
    },
    briefImmortality: {
      name_en: "Imperishable Night", //Brief Immortality/
      desc: "For 3 turns, an ally will endure fatal damage once with a set amount of HP. This skill is considered a debuff.",
      stats: [],
      dep: { riseFromTheDead: 3 },
      maxLevel: 6,
      coords: { x: 4, y: 5 }
    },
    underTheZenith: {
      name_en: "Healing Rythm/Self-Regenerate",
      // Gives the user a chance to use Transfusion when damaged or when bound, at the end of the damage/bind source's turn.
      desc: "Passively restores the user's HP at the end of every turn when they have a buff. Restores 20% of the user's max HP at the end of a turn during Transform.",
      // At the end of the turn, if the user's HP is full, restores Force to all party members. might not work with royal veil? (two different people)
      stats: [],
      dep: { briefImmortality: 3 },
      maxLevel: 10,
      coords: { x: 5, y: 5 }
    },
    bloodyCatastrophe: {
      name_en: "?Bloody Catastrophe",
      desc: "Lowers all damage to the user for this turn. At the end of the turn, deals melee Cut damage to all enemies. Every time the user is damaged between the cast time and the attack, the damage is multiplied by 1.25x. The damage is capped at 3x the base damage. | After three turns deals bash damage against one foe with power depending on how many times you have taken damage. Has a -100 Speed modifier at all levels.",
      stats: [],
      dep: { metamorphosis: 3, unscathedBody: 3 },
      maxLevel: 8,
      coords: { x: 4, y: 1.5 }
    },
    vampiricGrace: {
      name_en: "Vampiric Grace",
      desc: "Gives a chance for the user to survive fatal damage at 1 HP if they have a buff on, in exchange for losing their oldest applied buff.",
      stats: ["STR"],
      dep: { feast: 3, vigorDrain: 3 },
      maxLevel: 8,
      coords: { x: 4, y: 3.5 }
    },
    crimsonOath: {
      name_en: "Forbidden Offering",
      desc: "Requires 3 buffs. Removes all of them and, in exchange, the user will attack an enemy dealing melee cut damage and reducing the target's damage until the end of the turn.",
      stats: [],
      dep: { bloodyCatastrophe: 3, vampiricGrace: 3 },
      maxLevel: 6,
      coords: { x: 5, y: 2.5 }
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
