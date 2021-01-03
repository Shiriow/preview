let skills = {

  Shogun: {
    fullCombatForm: {
      name_en: "*Full Combat Form",
      desc: "For 3 turns, increases maximum HP and attack for all party members.",
      stats: [],
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    bodyDouble: {
      name_en: "Body Double",
      desc: "This turn, all party members will negate any hostile action once.",
      stats: [],
      unique: true,
      type: "Break",
      dep: { fullCombatForm: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    parryingBlade: {
      name_en: "*Parrying Blade",
      desc: "Increases physical defense and the user can attack with both weapons if two weapons are equipped. Damage of the second attack is based on this skill's level. Enables sub-weapon when this skill is learned.",
      //desc: "Increases physical defense and normal attacks may hit 2-4 times when two weapons are equipped. Enables sub-weapon when this skill is learned.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 1.85 }
    },
    hawkSlice: {
      name_en: "Hawk Slice",
      desc: "Deals melee damage to one target with the user's weapon. If a second weapon is equipped, attack adjacent enemies.",
      stats: [],
      dep: { parryingBlade: 3 },
      maxLevel: 8,
      coords: { x: 1, y: 1 }
    },
    fiveRingSword: {
      name_en: "Five-Ring Sword",
      desc: "Deals multiple instances of melee damage to random targets with user's weapon. If two weapons are equipped, the maximum number of hits will double, and this attack will alternate between the katana and the other weapon.",
      stats: ["STR"],
      dep: { hawkSlice: 2 },
      maxLevel: 10,
      coords: { x: 2, y: 1.5 }
    },
    gnashingFang: {
      name_en: "Gnashing Fang",
      //Same damage makes it semi-AoE, can "exploit" weakness on non-weak targets
      desc: "Deals melee damage to one target with the user's weapon. If that enemy is killed and a second weapon is equipped, attack all enemies for the same damage.",
      stats: [],
      dep: { hawkSlice: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 0.5 }
    },
    finalFlicker: {
      name_en: "Final Flicker",
      desc: "When the user kills an enemy, restores Force to all party members.",
      stats: ["STR"],
      dep: { gnashingFang: 2 },
      maxLevel: 6,
      coords: { x: 3, y: 0 }
    },
    soaringTempest: {
      name_en: "Soaring Tempest",
      desc: "Deals 3 instances of ranged weapon damage to all enemies with user's weapon. Damage decreases based on the number of enemies. Does 65% damage for 2 enemies, 45% for 3 enemies, and 35% for 4+ enemies. Recovers Force with each hit.",
      // bind cuts seem to work per hit, could be useful for force gain
      stats: ["STR"],
      dep: { finalFlicker: 3 },
      maxLevel: 8,
      coords: { x: 4, y: 0 }
    },
    bloodyLance: {
      name_en: "Bloody Lance",
      desc: "When the user kills an enemy or ally, their attack is increased. The effect is reset when the user dies.",
      stats: [],
      dep: { gnashingFang: 2 },
      maxLevel: 6,
      coords: { x: 3, y: 1 }
    },
    mercyKill: {
      name_en: "Mercy Kill",
      desc: "When any enemy or ally is attacked, and their HP falls below a set percentage, there is a chance to inflict instant death to them.",
      stats: [],
      dep: { finalFlicker: 2 },
      maxLevel: 8,
      coords: { x: 4, y: 1 }
    },
    savageClaw: {
      name_en: "Savage Claw",
      desc: "Normal attacks may hit 2-4 times.",
      // desc: "Normal attacks recover TP and may hit 2-4 times.",
      stats: ["STR"],
      dep: { parryingBlade: 2 },
      maxLevel: 8,
      coords: { x: 1, y: 2.65 }
    },
    soleFocus: {
      name_en: "Sole Focus", //Spirit Blade, Focus, Domain, Field, Firm Spirit, Single Devote, Sole Lone
      desc: "Increases damage when fewer elements are used in an attack.",
      stats: [],
      dep: { savageClaw: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 2.65 }
    },
    wickedTalons: {
      name_en: "Wicked Talons",
      desc: "Normal attacks recover TP.",
      stats: ["STR"],
      dep: { soleFocus: 2 },
      maxLevel: 4,
      coords: { x: 3, y: 2.65 }
    },
    blitzCommand: {
      name_en: "Blitz Command",
      desc: "All allies other than the user will attack one target with their weapons.",
      stats: ["STR"],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 3.85 }
    },
    galvanize: {
      name_en: "Galvanize", //Heal Command
      desc: "All allies other than the user will heal random party members a set number of times. Each party member can only be healed once per ally.",
      // desc: "Command an ally to heal random party members a set number of times. Each party member can be healed a maximum of 2 times.",
      stats: [],
      dep: { blitzCommand: 2 },
      maxLevel: 8,
      coords: { x: 1, y: 3.85 }
    },
    ambushStance: {
      name_en: "Ambush Stance", //*Counter Command
      desc: "This turn, when the selected ally is attacked, all front row allies will counterattack with their weapons. Does not activate against counterattacks.",
      stats: ["STR"],
      dep: { galvanize: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 3.85 }
    },
    rearDignity: {
      name_en: "Rear Dignity",  //Emergency Tactics
      desc: "Reduces damage done and taken to a row for one turn.",
      stats: [],
      dep: { ambushStance: 2 },
      maxLevel: 6,
      coords: { x: 3, y: 3.85 }
    },
    sanzuCross: {
      name_en: "Sanzu Cross",
      //desc: "This turn, the user will chase all attacks from all allies, but will lose HP for every chase. Links, chases and counterattacks cannot be chased. Only one chase will be made for each action.",
      desc: "This turn, the user will chase attacks from all allies and enemies. Links, chases and counterattacks cannot be chased. Only one chase will be made for each action.",
      stats: ["STR"],
      dep: { wickedTalons: 2, rearDignity: 2 },
      maxLevel: 10,
      coords: { x: 4, y: 3.25 }
    },
    blazeSpirit: {
      name_en: "Blaze Spirit",
      // desc: "For a set number of turns, imbues one row of allies' weapons with fire, and increases their fire defense.", Select one ally and, for a set number of turns, everytime they attack, they'll attack again with their weapon.
      desc: "For a set number of turns, imbue an ally's weapon with fire and have them automatically counterattack enemies who attacks them. The ally's row is also imbued with fire.",
      stats: [],
      dep: {  },
      maxLevel: 6,
      coords: { x: 0, y: 5 }
    },
    hailSpirit: {
      name_en: "Hail Spirit",
      desc: "For a set number of turns, imbue an ally's weapon with ice and have them automatically counterattack enemies who attacks them. The ally's row is also imbued with ice.",
      stats: [],
      dep: { blazeSpirit: 2 },
      maxLevel: 6,
      coords: { x: 1, y: 5 }
    },
    boltSpirit: {
      name_en: "Bolt Spirit",
      desc: "For a set number of turns, imbue an ally's weapon with volt and have them automatically counterattack enemies who attacks them. The ally's row is also imbued with volt.",
      stats: [],
      dep: { blazeSpirit: 2 },
      maxLevel: 6,
      coords: { x: 1, y: 6 }
    },
    greatGeneral: {
      name_en: "*Great General",
      //desc: "For a set number of turns, increases the user's attack, defense and chance of being targeted.",
      desc: "For a set number of turns, increases one ally's physical attack and chance of being targeted.",
      stats: [],
      dep: { hailSpirit: 2, boltSpirit: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 5.5 }
    },
    moraleBoost: {
      name_en: "Morale Boost",
      desc: "When the user is revived, restores HP to all allies.",
      stats: [],
      dep: { greatGeneral: 2 },
      maxLevel: 6,
      coords: { x: 3, y: 5 }
    },
    ritualSuicide: {
      name_en: "Ritual Suicide",
      desc: "Restores HP to all other allies with a chance to revive them, but the user dies. This self-inflicted death cannot be prevented via any means.",
      stats: ["WIS"],
      dep: { greatGeneral: 2 },
      maxLevel: 8,
      coords: { x: 3, y: 6 }
    },
    reincarnation: {
      name_en: "Reincarnation",
      desc: "On the turn when the user's HP reaches 0, there is a chance that they may revive at the end of that turn.",
      stats: [],
      dep: { ritualSuicide: 2, moraleBoost: 2 },
      maxLevel: 10,
      coords: { x: 4, y: 5.5 }
    },
    take: {
      name_en: "Take",
      desc: "Occasionally gains more items when using Take points.",
      stats: [],
      unique: true,
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    }
    // doubleAttack: {
    //   name_en: "Double Attack/???",
    //   desc: "Select an ally. The user and that ally will attack an enemy with their weapons. / Order an ally to chase all attacks.",
    //   stats: [],
    //   dep: {  },
    //   maxLevel: 8,
    //   coords: { x: 5, y: 5.5 }
    // },
    // guardCommand: {
    //   name_en: "Guard Command/Strike Chaser",
    //   desc: "Select an ally. Their rows defensive stats are replaced by the targets.",
    //   stats: [],
    //   dep: {  },
    //   maxLevel: 4,
    //   coords: { x: 5, y: 4.5 }
    // },
    // spiritFlow: {
    //   name_en: "Spirit Flow/???",
    //   desc: "Deals melee damage to one target with the equipped katana at the start of turn. If two weapons are equipped, attacks again with the other weapon after the target acts.",
    //   stats: ["STR"],
    //   dep: { parryingBlade: 2 },
    //   maxLevel: 10,
    //   coords: { x: 1, y: 1 }
    // },
    // baitCommand: {
    //   name_en: "delet",
    //   //Bait Command
    //   desc: "This turn, when the user is attacked, all allies other than the user will counterattack with their weapons. Does not activate against counterattacks.",
    //   stats: ["STR"],
    //   dep: { blitzCommand: 2 },
    //   maxLevel: 6,
    //   coords: { x: 1, y: 3.85 }
    // },
    // rushCommand: {
    //   name_en: "delet",
    //   //*Rush Command
    //   desc: "Deals melee damage to one target with the user's weapon. Allies on your row will chase after.",
    //   stats: ["STR"],
    //   dep: { counterCommand: 3 },
    //   maxLevel: 6,
    //   coords: { x: 3, y: 3.85 }
    // },
    // chaseStance: {
    //   name_en: "*Chase Stance",
    //   desc: "For the next three turns you will chase attacks made by your allies on the same row.",
    //   stats: [],
    //   dep: { counterCommand: 3, peerlessDemon: 2 },
    //   maxLevel: 6,
    //   coords: { x: 3, y: 3.25 }
    // },
    // trickStance: {
    //   name_en: "*Trick Stance",
    //   desc: "For the next three turns, when you attack your allies on the same row will also attack.",
    //   stats: ["STR"],
    //   dep: { counterCommand: 3, peerlessDemon: 2 },
    //   maxLevel: 6,
    //   coords: { x: 3, y: 3.25 }
    // },
    // foreHonor: {
    //   name_en: "*Fore Honor/delet?",
    //   desc: "For a set number of turns, increases one ally's physical attack and action speed.",
    //   stats: [],
    //   dep: { },
    //   maxLevel: 6,
    //   coords: { x: 0, y: 5 }
    // },
    // unifiedSpirit: {
    //   name_en: "*Unified Spirit",
    //   desc: "For a set number of turns, imbues one row of allies' weapons with fire/ice/volt, and increases their elemental defense.",
    //   stats: [],
    //   dep: { foreHonor: 2 },
    //   maxLevel: 6,
    //   coords: { x: 1, y: 5 }
    // },
  },
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
  Landsknecht: {
    trinity: {
      name_en: "Trinity",
      desc: "For 3 turns, increases the user's attack, accuracy and action speed.",
      stats: [],
      unique: true,
      type: "Boost",
      dep: { },
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
      name_en: "Blazing Link",//Strike Link
      desc: "Deals melee fire damage to one target. If the target is attacked again after, follows up with another attack of the same element for a maximum of 9 times. {Decreases the targets fire resistance for the turn.}",
      //Chance of follow-up decreases with each hit.  Replaces the element of the next skill with Fire.
      stats: ["STR, Rapier"],
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 1 }
    },
    freezingLink: {
      name_en: "Freezing Link",
      desc: "Deals melee ice damage to one target. If the target is attacked again after, follows up with another attack of the same element for a maximum of 9 times. {Decreases the targets ice resistance for the turn.}",
      stats: ["STR, Rapier"],
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 2 }
    },
    electricLink: {
      // name_en: "", //?Heal Link?, Aoe Link
      // desc: "Deals melee stab damage to one row. If the targets are attacked again after, follows up with another attack of the same element for a maximum of 9 times.",
      //desc: "Deals melee stab damage to one target. If the target is attacked again after, follows up with another stab attack for a maximum of ? times. Each follow up recovers the partys health. | Restores HP to the user's row. If the targets are attacked again after, follows up with another heal for a maximum of ? times.",
      name_en: "Electric Link",
      desc: "Deals melee volt damage to one target. If the target is attacked again after, follows up with another attack of the same element for a maximum of 9 times. {Decreases the targets volt resistance for the turn.}",
      // / Gives normal attacks a chance to add an extra INT-based ice attack.
      stats: ["STR, Rapier"],
      dep: { },
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
      name_en: "Glacial Finale",
      desc: "Deals melee ice damage to one target. Damage is based on the number of link follow-ups made on the previous turn and if the target has a Break skill debuff. Casts Improved Link after use.",
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
      dep: { linkEnd: 3, swiftStab:3 },
      maxLevel: 8,
      coords: { x: 5, y: 2 }
    },
    powerBreak: {
      name_en: "Icicle Crash", //Power Break
      //desc: "Deals melee cut/stab damage to one target. Decreases their attack for 3 turns.",
      desc: "Deals ranged ice damage to one target.",
      // desc: "Deals melee cut/stab damage to one target. If the target is attacked again after, follows up with another attack of the same element for a maximum of 6 times that decreases their attack for 1 turn. Chance of follow-up decreases with each hit.",
      stats: ["INT, Sword, Rapier"],
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 5 }
    },
    guardBreak: {
      name_en: "Spellblade",//Guard Break
      //desc: "Deals melee cut/stab damage to one target. Decreases their defense for 3 turns.",
      // desc: "This turn, the user will chase all attacks from all allies. Only one chase will be made for each action and they decrease the enemy's defense for 1 turn.",
      desc: "Deals melee ice damage to one target. Has a chance to follow-up with Icicle Crash with added damage.",
      stats: ["STR, Sword, Rapier"],
      dep: { powerBreak: 2 },
      maxLevel: 8,
      coords: { x: 1, y: 5 }
    },
    speedBreak: {
      name_en: "Glaciate",// Scatter Speed Break
      desc: "Deals melee ice damage to all targets. Has a chance to follow-up with Icicle Crash to a random enemy. Deals full damage to backrow enemies.", //Drop Shot
      stats: ["INT, Sword, Rapier"],
      dep: { guardBreak: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 5 }
    },
    singleDevote: {
      name_en: "Condensed Slash",  //Chain Link, Delayed Chase, Coruscant
      desc: "Prepares Condensed Slash on the turn it's used. On the next turn, if the user uses an elemental skill, follows up with a melee STR-based Cut+Element attack on all enemies hit with an element by the user.",
      stats: [],
      dep: { speedBreak: 2 },
      maxLevel: 8,
      coords: { x: 3, y: 5 }
    },
    bladeRecall: {
      name_en: "Blade Recall",  //Chain Link
      desc: "Deals melee STR-based Cut damage to one enemy. If the user used an elemental attack on the last turn, also adds a ranged INT-based Element follow-up attack.",
      stats: [],
      dep: { speedBreak: 2 },
      maxLevel: 8,
      coords: { x: 4, y: 5 }
    },
    sonicRaid: {
      name_en: "Vacuum Slice",  //*Sonic Raid
      desc: "Deals melee cut damage to one target at the start of the turn. Increases speed for the user's row for the next turn.",
      stats: ["STR, Sword"],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 4 }
    },
    doubleStrike: {
      name_en: "Levinforce",  //Focused Slice/Chaser
      desc: "Deals melee cut damage to one row. Increases accuracy for the user's row until the end of the next turn.",
      // This turn, increase accuracy for the user's row and the user will chase all attacks from all allies.
      stats: ["STR, Sword"],
      dep: { sonicRaid: 2 },
      maxLevel: 8,
      coords: { x: 1, y: 4 }
    },
    spiralSlice: {
      name_en: "Earthen Fury",  //Riposte
      desc: "Deals melee cut damage to one target. Increases defense for the user's row until the end of the next turn.",
      stats: ["STR, Sword"],
      dep: { doubleStrike: 3 },
      maxLevel: 8,
      coords: { x: 2, y: 4 }
    },
    penetrate: {
      name_en: "Inferno Howl",  //Wild Strike, Conflag Strike
      desc: "Deals melee cut damage to one target, with splash damage to the adjacent enemies. Increases damage for the user's row until the end of the next turn.",
      stats: ["STR, Sword"],
      dep: { spiralSlice: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 4 }
    },
    swordTempest: {
      name_en: "Rip Current",  //*Sword Tempest
      desc: "Deals melee cut damage to one target with low accuracy. If it misses, deal melee cut damage to all enemies.",
      stats: ["STR, Sword"],
      dep: { penetrate: 2 },
      maxLevel: 8,
      coords: { x: 4, y: 4 }
    },
    vanguard: {
      name_en: "?Vanguard",
      desc: "For 5 turns, increases the user's attack, defense and action speed (and aggro). Has a chance of being used at the start of battle after level 6. (one ally's)",
      stats: [],
      dep: { },
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
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    }
  },


};
