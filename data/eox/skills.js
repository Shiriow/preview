let skills = {
  // Shogun: {
  //   fullCombatForm: {
  //     name_en: "Full Combat Form",
  //     name_jp: "力戦陣形",
  //     desc: "For 3 turns, increases maximum HP and attack for all party members.",
  //     stats: [],
  //     unique: true,
  //     type: "Boost",
  //     dep: { },
  //     maxLevel: 0,
  //     coords: { x: 0, y: 0 }
  //   },
  //   bodyDouble: {
  //     name_en: "Body Double",
  //     name_jp: "影武者",
  //     desc: "This turn, all party members will negate any hostile action once.",
  //     stats: [],
  //     unique: true,
  //     type: "Break",
  //     dep: { fullCombatForm: 0 },
  //     maxLevel: 0,
  //     coords: { x: 1, y: 0 }
  //   },
  //   parryingBlade: {
  //     name_en: "*Parrying Blade",
  //     name_jp: "払い弐刀",
  //     desc: "Increases physical defense and normal attacks may hit 2-4 times when two weapons are equipped. Enables sub-weapon when this skill is learned.",
  //     stats: [],
  //     dep: { },
  //     maxLevel: 6,
  //     coords: { x: 0, y: 1.75 }
  //   },
  //   trickStance: {
  //     name_en: "*Trick Stance",
  //     name_jp: "明星",
  //     desc: "For the next three turns, when you attack your allies on the same row will also attack.",
  //     stats: ["STR"],
  //     dep: { parryingBlade: 2 },
  //     maxLevel: 6,
  //     coords: { x: 1, y: 2.5 }
  //   },
  //   wickedTalons: {
  //     name_en: "*Wicked Talons",
  //     name_jp: "禍時",
  //     desc: "Normal attacks now recover TP.",
  //     stats: ["STR"],
  //     dep: { trickStance: 2 },
  //     maxLevel: 6,
  //     coords: { x: 2, y: 2.5 }
  //   },
  //   spiritFlow: {
  //     name_en: "Spirit Flow",
  //     name_jp: "谺流し",
  //     desc: "Deals melee damage to one target with the equipped katana at the start of turn. If two weapons are equipped, attacks again with the other weapon after the target acts.",
  //     stats: ["STR"],
  //     dep: { parryingBlade: 2 },
  //     maxLevel: 10,
  //     coords: { x: 1, y: 1 }
  //   },
  //   twinSparrow: {
  //     name_en: "Twin Sparrow",
  //     name_jp: "双燕",
  //     desc: "Deals melee damage to one target with the user's weapon. If two weapons are equipped, this skill will hit twice. First hit will be from the katana, while the second hit will be from the other weapon.",
  //     stats: ["STR"],
  //     dep: { spiritFlow: 3 },
  //     maxLevel: 10,
  //     coords: { x: 2, y: 0.5 }
  //   },
  //   hawkSlice: {
  //     name_en: "*Hawk Slice",
  //     name_jp: "無明の極",
  //     desc: "Deals melee damage to one target with the user's weapon. If a second weapon is equipped, attack adjacent enemies.",
  //     stats: [],
  //     dep: { spiritFlow: 3 },
  //     maxLevel: 6,
  //     coords: { x: 2, y: 1.5 }
  //   },
  //   fellingBird: {
  //     name_en: "Felling Bird",
  //     name_jp: "飛鳥落とし",
  //     desc: "Increases damage dealt based on the number of attacks.",
  //     stats: [],
  //     dep: { twinSparrow: 2, hawkSlice:2 },
  //     maxLevel: 10,
  //     coords: { x: 3, y: 1 }
  //   },
  //   fiveRingSword: {
  //     name_en: "Five-Ring Sword",
  //     name_jp: "五輪の剣",
  //     desc: "Deals multiple instances of melee damage to random targets with user's weapon. If two weapons are equipped, the maximum number of hits will double, and this attack will alternate between the katana and the other weapon.",
  //     stats: ["STR"],
  //     dep: { fellingBird: 2 },
  //     maxLevel: 10,
  //     coords: { x: 4, y: 1 }
  //   },
  //   blitzCommand: {
  //     name_en: "Blitz Command",
  //     name_jp: "乱れ竜の陣",
  //     desc: "All allies other than the user will attack one target with their weapons.",
  //     stats: ["STR"],
  //     dep: { },
  //     maxLevel: 10,
  //     coords: { x: 0, y: 3.75 }
  //   },
  //   baitCommand: {
  //     name_en: "Bait Command",
  //     name_jp: "据え虎の陣",
  //     desc: "This turn, when the user is attacked, all allies other than the user will counterattack with their weapons. Does not activate against counterattacks.",
  //     stats: ["STR"],
  //     dep: { blitzCommand: 2 },
  //     maxLevel: 6,
  //     coords: { x: 1, y: 3.75 }
  //   },
  //   counterCommand: {
  //     name_en: "*Counter Command",
  //     name_jp: "斬月居合陣",
  //     desc: "This turn, when the selected ally is attacked, all front row allies will counterattack with their weapons. Does not activate against counterattacks.",
  //     stats: ["STR"],
  //     dep: { baitCommand: 2 },
  //     maxLevel: 8,
  //     coords: { x: 2, y: 3.75 }
  //   },
  //   rushCommand: {
  //     name_en: "*Rush Command",
  //     name_jp: "報復射撃陣",
  //     desc: "Deals melee damage to one target with the user's weapon. Allies on your row will chase after.",
  //     stats: ["STR"],
  //     dep: { counterCommand: 3 },
  //     maxLevel: 6,
  //     coords: { x: 3, y: 3.75 }
  //   },
  //   chaseStance: {
  //     name_en: "*Chase Stance",
  //     name_jp: "刺客寄せ",
  //     desc: "For the next three turns you will chase attacks made by your allies on the same row.",
  //     stats: [],
  //     dep: { rushCommand: 3 },
  //     maxLevel: 6,
  //     coords: { x: 4, y: 3.75 }
  //   },
  //   warriorMight: {
  //     name_en: "Warrior Might",
  //     name_jp: "一騎当千",
  //     desc: "This turn, the user will chase all attacks from all allies, but will lose HP for every chase. Links, chases and counterattacks cannot be chased. Only one chase will be made for each action.",
  //     stats: ["STR"],
  //     dep: { chaseStance: 2 },
  //     maxLevel: 10,
  //     coords: { x: 5, y: 3.75 }
  //   },
  //   bloodyLance: {
  //     name_en: "Bloody Lance",
  //     name_jp: "血染めの朱槍",
  //     desc: "When the user kills an enemy or ally, their attack is increased. The effect is reset when the user dies.",
  //     stats: [],
  //     dep: { wickedTalons: 1 },
  //     maxLevel: 6,
  //     coords: { x: 3, y: 2.5 }
  //   },
  //   dissection: {
  //     name_en: "*Dissection",
  //     name_jp: "雷切",
  //     desc: "When the user kills an enemy, restores Force to all party members.",
  //     stats: ["STR"],
  //     dep: { bloodyLance: 2 },
  //     maxLevel: 6,
  //     coords: { x: 4, y: 2.5 }
  //   },
  //   mercyKill: {
  //     name_en: "Mercy Kill",
  //     name_jp: "介錯",
  //     desc: "When any enemy or ally is attacked, and their HP falls below a set percentage, there is a chance to inflict instant death to them.",
  //     stats: [],
  //     dep: { dissection: 2 },
  //     maxLevel: 4,
  //     coords: { x: 5, y: 2.5 }
  //   },
  //   moraleBoost: {
  //     name_en: "Morale Boost",
  //     name_jp: "士気回復",
  //     desc: "When the user is revived, restores HP to all allies.",
  //     stats: [],
  //     dep: { },
  //     maxLevel: 6,
  //     coords: { x: 1, y: 6 }
  //   },
  //   ritualSuicide: {
  //     name_en: "Ritual Suicide",
  //     name_jp: "切腹",
  //     desc: "Restores HP to all other allies with a chance to revive them, but the user dies. This self-inflicted death cannot be prevented via any means.",
  //     stats: ["WIS"],
  //     dep: { },
  //     maxLevel: 8,
  //     coords: { x: 2, y: 6 }
  //   },
  //   reincarnation: {
  //     name_en: "Reincarnation",
  //     name_jp: "仮死再生",
  //     desc: "On the turn when the user's HP reaches 0, there is a chance that they may revive at the end of that turn.",
  //     stats: [],
  //     dep: { ritualSuicide: 2 },
  //     maxLevel: 10,
  //     coords: { x: 3, y: 6 }
  //   },
  //   foreHonor: {
  //     name_en: "*Fore Honor",
  //     name_jp: "先陣の名誉",
  //     desc: "For a set number of turns, increases one ally's physical attack and action speed.",
  //     stats: [],
  //     dep: { },
  //     maxLevel: 6,
  //     coords: { x: 0, y: 5 }
  //   },
  //   // unifiedSpirit: {
  //   //   name_en: "*Unified Spirit",
  //   //   name_jp: "祟り打ち",
  //   //   desc: "For a set number of turns, imbues one row of allies' weapons with fire/ice/volt, and increases their elemental defense.",
  //   //   stats: [],
  //   //   dep: { foreHonor: 2 },
  //   //   maxLevel: 6,
  //   //   coords: { x: 1, y: 5 }
  //   // },
  //   fireSpirit: {
  //     name_en: "Blaze Spirit",
  //     name_jp: "祟り打ち",
  //     desc: "For a set number of turns, imbues one row of allies' weapons with fire, and increases their fire defense. / Select one ally and, for a set number of turns, everytime they attack, they'll attack again with their weapon. The ally's row is also imbued with volt.",
  //     stats: [],
  //     dep: { foreHonor: 2 },
  //     maxLevel: 4,
  //     coords: { x: 1, y: 5 }
  //   },
  //   iceSpirit: {
  //     name_en: "Hail Spirit",
  //     name_jp: "祟り打ち",
  //     desc: "For a set number of turns, imbues one row of allies' weapons with ice, and increases their ice defense. / Select one ally and, for a set number of turns, everytime they attack, they'll attack again with their weapon. The ally's row is also imbued with ice.",
  //     stats: [],
  //     dep: { fireSpirit: 2 },
  //     maxLevel: 4,
  //     coords: { x: 2, y: 5 }
  //   },
  //   voltSpirit: {
  //     name_en: "Bolt Spirit",
  //     name_jp: "祟り打ち",
  //     desc: "For a set number of turns, imbues one row of allies' weapons with volt, and increases their volt defense. / Select one ally and, for a set number of turns, everytime they attack, they'll attack again with their weapon. The ally's row is also imbued with volt.",
  //     stats: [],
  //     dep: { iceSpirit: 2 },
  //     maxLevel: 4,
  //     coords: { x: 3, y: 5 }
  //   },
  //   greatGeneral: {
  //     name_en: "*Great General",
  //     name_jp: "大武辺者",
  //     desc: "For a set number of turns, increases one ally's physical attack and chance of being targeted.",
  //     stats: [],
  //     dep: { voltSpirit: 2 },
  //     maxLevel: 8,
  //     coords: { x: 4, y: 5 }
  //   },
  //   take: {
  //     name_en: "Take",
  //     name_jp: "採取",
  //     desc: "Occasionally gains more items when using Take points.",
  //     stats: [],
  //     unique: true,
  //     dep: { },
  //     maxLevel: 1,
  //     coords: { x: 0, y: 6 }
  //   }
  // },
  Survivalist: {
    illusionStep: {
      name_en: "Illusion Step",
      name_jp: "夢幻陣形",
      desc: "For 3 turns, increases the user's evasion and chance of being targeted.",
      stats: [],
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    // illusionStep: {
    //   name_en: "Illusion Step",
    //   name_jp: "夢幻陣形",
    //   desc: "For 3 turns, increases the user's evasion and chance of being targeted. Adds an extra chaser attack to bow attacks and skills.",
    //   stats: [],
    //   unique: true,
    //   type: "Boost",
    //   dep: { },
    //   maxLevel: 0,
    //   coords: { x: 0, y: 0 }
    // },
    mirageArrow: {
        name_en: "Mirage Arrow",
        name_jp: "ミラージュアロー",
        desc: "Deals ranged stab damage to one target. Decreases their accuracy and make them act last for 3 turns.",
        stats: ["STR", "Arms"],
        unique: true,
        type: "Break",
        dep: { illusionStep: 0 },
        maxLevel: 0,
        coords: { x: 1, y: 0 }
      },
    // mirageArrow: {
    //   name_en: "Summer Rain",
    //   name_jp: "ミラージュアロー",
    //   desc: "Deals 16 instances of ranged stab damage to random targets. Can hit the same target 4 times at most. Decreases their accuracy and make them act last for 3 turns.",
    //   stats: ["STR", "Arms", "Bow"],
    //   unique: true,
    //   type: "Break",
    //   dep: { illusionStep: 0 },
    //   maxLevel: 0,
    //   coords: { x: 1, y: 0 }
    // },
    flameArrow: {
      name_en: "Flame Arrow",
      name_jp: "フレイムアロー",
      desc: "Deals ranged stab+fire damage to one target, with line-piercing effects.",
      stats: ["STR", "Arms", "Bow"],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 1.5 }
    },
    flankShot: {
      name_en: "Foot Pierce",
      name_jp: "フランクショット",
      desc: "Deals ranged stab damage to one row. Attempts to inflict leg bind. If sucessful, or if the enemy is already inflicted with leg bind, the user will attack that enemy again.",
      stats: ["STR", "Arms", "Bow"],
      dep: { flameArrow: 3 },
      maxLevel: 8,
      coords: { x: 1, y: 1 }
    },
    finishingArrow: {
      name_en: "Finishing Arrow",
      name_jp: "仕留めの一矢",
      desc: "When the user attacks a target whose HP is below a set threshold, the user follows up with their weapon. Does not activate for links, chases or counterattacks.",
      stats: ["STR"],
      dep: { flankShot: 3 },
      maxLevel: 8,
      coords: { x: 2, y: 1 }
    },
    multiShot: {
      name_en: "Multi-Shot",
      name_jp: "ダブルショット",
      desc: "Deals 2 instances of ranged stab damage to one enemy.",
      stats: ["STR", "Arms", "Bow"],
      dep: { flameArrow: 3 },
      maxLevel: 8,
      coords: { x: 1, y: 2 }
    },
    dropShot: {
      name_en: "Drop Shot",
      name_jp: "ドロップショット",
      desc: "Deals ranged stab damage to one target. Damage increases if the target is in the back row.",
      stats: ["STR", "Arms", "Bow"],
      dep: { multiShot: 3 },
      maxLevel: 8,
      coords: { x: 2, y: 2 }
    },
    disablingShot: {
      name_en: "Disabling Shot",
      name_jp: "エイミングフット",
      desc: "When the user attacks with a bow skill, attempts to inflict stun.",
      //[/Deals ranged stab damage to one target. Attempts to inflict stun and leg bind.]
      stats: ["LUC, Bow"],
      dep: { finishingArrow: 1 },
      maxLevel: 8,
      coords: { x: 3, y: 1 }
    },
    sagittariusShot: {
      name_en: "*Sagittarius Shot",
      name_jp: "サジタリウスの矢",
      desc: "At the beginning of the next turn, ranged stab damage is dealt to a random target. Attempts to inflict stun. Ineffective if the user dies before the skill activates.",
      stats: ["STR", "LUC", "Arms", "Bow"],
      dep: { dropShot: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 2 }
    },
    autoSagittarius: {
      name_en: "Auto-Sagittarius",
      name_jp: "自然の恩恵",
      // desc: "Deals ranged stab damage to one target. Damage is increased depending on the number of evades the user has made since they last used this skill.",
      desc: "If Sagittarius Shot is learned, there is a chance to automatically cast it at the start of battle. Cannot activate if another ally activated it first.",
      stats: ["STR", "Arms", "Bow"],
      dep: { sagittariusShot: 3 },
      maxLevel: 6,
      coords: { x: 4, y: 2 }
    },
    naturesCloak: {
      //Sylphscreen
      name_en: "Nature's Cloak",
      name_jp: "トリックステップ",
      // / Increases evasion whenever the user deals damage to an enemy.
      desc: "Increases evasion and damage taken from cut/stab/bash.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 3 }
    },
    chainThrust: {
      //Squall Volley
      name_en: "Chain Thrust",
      name_jp: "チェインダンス",
      desc: "Deals ranged stab damage to one target and, for that turn, increases the user's evasion and chance of being targeted.",
      stats: ["STR", "Arms", "Bow"],
      dep: { naturesCloak: 2  },
      maxLevel: 8,
      coords: { x: 1, y: 3 }
    },
    blindArrow: {
      name_en: "Blind Arrow",
      name_jp: "ブラインドアロー",
      desc: "Deals ranged stab damage to one target. Attempts to inflict blind.",
      stats: ["STR", "LUC", "Arms", "Bow"],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 4 }
    },
    sereneBreeze: {
      name_en: "Serene Breeze",
      name_jp: "抑制攻撃ブースト",
      desc: "Places a buff on an ally that allows them to dodge the next incoming physical attack. When an attack is dodged, the buff is removed.",
      stats: ["Legs"],
      dep: { blindArrow: 2 },
      maxLevel: 6,
      coords: { x: 1, y: 4 }
    },
    blurredVeil: {
      name_en: "Blurred Veil",
      name_jp: "忍法　猿飛",
      desc: "This turn, the selected row has a high chance of evading physical attacks. Each time they evade an attack, the evasion boost is reduced.",
      stats: ["Legs"],
      dep: { sereneBreeze:2 },
      maxLevel: 8,
      coords: { x: 2, y: 4 }
    },
    mistStep: {
      name_en: "Mist Step",
      name_jp: "整頓術",
      desc: "Increases Force whenever the user dodges an attack.",
      stats: [],
      dep: { chainThrust: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 3 }
    },
    sylphid: {
      name_en: "*Sylphid",
      name_jp: "素早さブースト",
      desc: "When an attack is dodged, the user will counter-attack the source of the attack. Has a chance of triggering multiple times.",
      stats: ["STR", "Arms", "Bow"],
      dep: { mistStep: 2 },
      maxLevel: 8,
      coords: { x: 3, y: 3 }
    },
    rayOfLight: {
      name_en: "Ray of Light",/*Shivelight, Komorebi*/
      name_jp: "奇襲",
      desc: "When the user dodges an attack, their chance to be targeted and defense increase. If the they fail to dodge an attack, Ray of Light's effects are reset.",
      stats: [],
      dep: { blurredVeil: 2 },
      maxLevel: 6,
      coords: { x: 3, y: 4 }
    },
    hazyShot: {
      name_en: "*Hazy Shot",
      name_jp: "朧矢",
      desc: "Deals ranged stab damage to one target. Always hits. Can only be used if the user evaded an attack on the previous turn.",
      stats: ["STR", "Arms", "Bow"],
      dep: { sylphid: 3, rayOfLight: 3  },
      maxLevel: 8,
      coords: { x: 4, y: 3.5 }
    },/*
    eyeForAnEye: {
      name_en: "Nature's Wrath",
      name_jp: "自然の恩恵",
      desc: "Deals ranged stab damage to one target. Damage is increased depending on the number of evades the user has made since they last used this skill.",
      stats: ["STR", "Arms", "Bow"],
      dep: { hazyShot: 3 },
      maxLevel: 8,
      coords: { x: 5, y: 3.5 }
    },*/
    riskPerception: {
      name_en: "Risk Perception",
      name_jp: "危機感知",
      desc: "There is a set chance that blindsides will be negated.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 1, y: 5 }
    },
    resuscitate: {
      name_en: "Resuscitate",
      name_jp: "簡易手当",
      desc: "Restores HP to one ally. Can only be used in the field. Higher levels allow this skill to revive the target as well.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 1, y: 6 }
    },
    stalker: {
      name_en: "Stalker",
      name_jp: "警戒歩行",
      desc: "For a set number of steps, reduces encounter rate.",
      stats: [],
      dep: { riskPerception: 1 },
      maxLevel: 6,
      coords: { x: 2, y: 5 }
    },
    efficiency: {
      name_en: "Efficiency",
      name_jp: "エフィシエント",
      desc: "For 5 turns, increases the HP restored by Medica and upgrades used by the user, and extends their range to one row.",
      stats: ["Head"],
      dep: { resuscitate: 3 },
      maxLevel: 4,
      coords: { x: 2, y: 6 }
    },
    scapegoat: {
      name_en: "Scapegoat",
      name_jp: "スケープゴート",
      desc: "Selected ally will cover all party members a set number of times this turn. Ineffective if that ally has leg bind.",
      stats: ["Legs"],
      dep: { efficiency: 2, stalker: 2 },
      maxLevel: 8,
      coords: { x: 3, y: 5.5 }
    },
    swapStep: {
      name_en: "Swap Step",
      name_jp: "アザーズステップ",
      desc: "Selected ally has a chance to act first this turn.",
      stats: ["Legs"],
      dep: { scapegoat: 2 },
      maxLevel: 8,
      coords: { x: 4, y: 5.5 }
    },
    naturalInstinct: {
      name_en: "Take",
      name_jp: "野生の勘",
      desc: "Occasionally gains more items when using Take points.",
      stats: [],
      unique: true,
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    }
  },

  Ninja: {
    insolence: {
      name_en: "Insolence",
      name_jp: "不忍",
      desc: "For 3 turns, increases all party members' action speed and evasion.",
      stats: [],
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    ninpoPoisonMist: {
      name_en: "Ninpo: Poison Mist",
      name_jp: "忍法　毒霧",
      desc: "Attempts to inflict poison on all enemies.",
      stats: ["LUC", "Head"],
      unique: true,
      type: "Break",
      dep: { insolence: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    ninpoScorpio: {
      name_en: "Ninpo: Scorpio",
      name_jp: "忍法　含針",
      desc: "Deals ranged stab damage to a set number of random targets. Can hit each target once at most. Attempts to inflict poison.",
      stats: ["STR", "LUC", "Head"],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 1 }
    },
    ninpoNeedles: {
      name_en: "Ninpo: Needles",
      name_jp: "忍法　撒菱",
      desc: "This turn, when the selected row is attacked, counterattack with ranged stab damage and attempt to inflict sleep.",
      stats: ["STR", "LUC", "Arms"],
      dep: { ninpoScorpio: 3 },
      maxLevel: 6,
      coords: { x: 1, y: 1 }
    },
    ninpoMirror: {
      name_en: "Ninpo: Mirror",
      name_jp: "忍法　水鏡",
      desc: "Attempts to inflict the ailments and binds present on one enemy to all enemies.",
      stats: ["LUC", "Head"],
      dep: { ninpoNeedles: 3 },
      maxLevel: 6,
      coords: { x: 2, y: 1 }
    },
    ninpoShock: {
      name_en: "Ninpo: Shock",
      name_jp: "忍法　驚忍",
      desc: "Attempts to inflict panic on one enemy.",
      stats: ["LUC", "Head"],
      dep: { ninpoMirror: 2 },
      maxLevel: 8,
      coords: { x: 3, y: 1 }
    },
    shadowBind: {
      name_en: "Shadow Bind",
      name_jp: "影縫",
      desc: "Deals melee cut damage to one target. Attempts to inflict leg bind.",
      stats: ["STR", "LUC", "Arms", "Knife"],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 2 }
    },
    hawkStrike: {
      name_en: "Hawk Strike",
      name_jp: "鷹乃羽",
      desc: "Deals multiple instances of melee cut damage to random targets.",
      stats: ["STR", "Arms", "Knife"],
      dep: { shadowBind: 3 },
      maxLevel: 8,
      coords: { x: 1, y: 2 }
    },
    schadenfreude: {
      name_en: "Schadenfreude",
      name_jp: "幸災楽禍",
      desc: "Deals melee cut damage to one target. Always hits. If target has an ailment, increases the user's Force.",
      stats: ["STR", "Arms", "Knife"],
      dep: { hawkStrike: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 2 }
    },
    foxDrop: {
      name_en: "Fox Drop",
      name_jp: "飯綱",
      desc: "Deals melee cut damage to one target. Attempts to inflict petrify.",
      stats: ["STR", "LUC", "Arms", "Knife"],
      dep: { schadenfreude:2 },
      maxLevel: 8,
      coords: { x: 3, y: 2 }
    },
    quietus: {
      //name_en: "Illusionary Swap",
      //name_jp: "抑制攻撃ブースト",
      //desc: "Targets a Mirage. That Mirage will take damage for the selected row for one turn, with a multiplier applied to the damage they take from redirected hits.",
      //name_en: "Coup de Grace/Guillotine",
      name_en: "Quietus",
      name_jp: "抑制攻撃ブースト",
      desc: "Deals melee cut damage to one target with a chance to instantly kill it.  Chance is increased if the enemy has an ailment.",
      stats: ["STR", "LUC", "Arms", "Knife"],
      dep: { foxDrop: 2, ninpoShock: 2 },
      maxLevel: 6,
      coords: { x: 4, y: 1.5 }
    },
    fallingBloom: {
      name_en: "Falling Bloom",
      name_jp: "意趣返し",
      desc: "Deals melee cut+almighty damage to one target. Low accuracy.",
      stats: ["STR", "Arms", "Knife"],
      dep: { quietus: 2  },
      maxLevel: 8,
      coords: { x: 5, y: 1.5 }
    },
    ninpoClone: {
      name_en: "Ninpo: Clone",
      name_jp: "忍法　分身",
      desc: "Consumes a percentage of the user's HP and TP to create a clone in an empty slot. Force Boost and Force Break are unusable while a clone is active.",
      stats: ["Head"],
      dep: { },
      maxLevel: 8,
      coords: { x: 1, y: 6 }
    },
    drawingSlice: {
      name_en: "Drawing Slice",
      name_jp: "多元抜刀",
      desc: "Deals multiple instances of melee damage to random targets. All clones will disappear after use.",
      stats: ["STR", "Arms", "Knife"],
      dep: { ninpoClone: 4 },
      maxLevel: 8,
      coords: { x: 2, y: 6 }
    },
    autoClone: {
      name_en: "Auto-Clone",
      name_jp: "首切",
      desc: "If Ninpo: Clone is learned, there is a chance to automatically cast it at the start of battle. Cannot activate if another ally activated it first.",
      stats: [],
      dep: { drawingSlice: 4 },
      maxLevel: 10,
      coords: { x: 3, y: 6 }
    },
    ninpoMirage: {
      name_en: "Ninpo: Mirage",
      name_jp: "忍法　陽炎",
      desc: "Creates a decoy of the user in an empty slot. The decoy has added evasion and chance to be targeted.",
      stats: ["Head"],
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 4 }
    },
    phantomKnives: {
      name_en: "Phantom Knives",
      name_jp: "忍びの心得",
      desc: "Deals melee cut damage to one row. For 3 turns, reduces the accuracy of one row of enemies.",
      stats: ["STR", "Arms", "Knife"],
      dep: { ninpoMirage: 2 },
      maxLevel: 8,
      coords: { x: 1, y: 4 }
    },
    selfDestruct: {
      name_en: "!!Self-Destruct",
      //Targets dead members?
      name_jp: "肉弾",
      //desc: "Destroys a Mirage. Deals ranged fire damage to all enemies.",
      desc: "Instantly kill an ally/mirage. Deals ranged fire damage to all enemies.",
      stats: ["STR", "Head", "Knife"],
      dep: { phantomKnives:2 },
      maxLevel: 8,
      coords: { x: 2, y: 4 }
    },
    lure: {
      name_en: "Lure",
      name_jp: "忍法　猿飛",
      //desc: "Targets a Mirage. This turn, every time the Mirage dodges an attack, members in the same row will individually counter with an attack using their equipped weapon.",
      desc: "This turn, every time the selected ally/mirage dodges an attack, members in the same row will individually counter with an attack using their equipped weapon.",
      stats: ["STR", "Head", "Knife"],
      dep: { selfDestruct: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 4 }
    },
    autoMirage: {
      name_en: "Auto-Mirage",
      name_jp: "先制陽炎",
      desc: "If Ninpo: Mirage is learned, there is a chance to automatically cast it at the start of battle. Cannot activate if another ally activated it first.",
      stats: [],
      dep: { ninpoMirage: 2 },
      maxLevel: 6,
      coords: { x: 1, y: 5 }
    },
    acrobatics: {
      //Force Energy
      name_en: "Acrobatics",
      name_jp: "軽業",
      desc: "When the user evades an attack, their TP is restored. At level 5, melee attacks will hit for full damage and can always reach the enemy back row, even when the user is in the back.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 3 }
    },
    ninpoFlight: {
      name_en: "Ninpo: Smoke",
      //name_en: "Ninpo: Flight/Smoke",
      name_jp: "潜伏",
      //desc: "This turn, the user has a high chance of evading physical attacks. Each time the user dodges an attack, their evasion and chance to be targeted are decreased.",
      desc: "Reduces the user's maximum HP to greatly increase their evasion and aggro for 3 turns.",
      stats: ["Legs"],
      dep: { acrobatics: 2  },
      maxLevel: 8,
      coords: { x: 1, y: 3 }
    },
    eyeForAnEye: {
      name_en: "Eye for an Eye",
      name_jp: "忍法　猿飛",
      desc: "If the user evaded an attack on the previous turn, increases chance of inflicting ailments",
      stats: [],
      dep: { ninpoFlight: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 3 }
    },
    reprisal: {
      name_en: "Reprisal",
      //name_en: "Deep Breath/???",
      name_jp: "骨砕き",
      //desc: "All clones will disappear and the user recovers HP and TP.",
      desc: "Deals melee cut damage to one target. Damage is increased depending on the number of evades the user has made since they last used this skill.",
      stats: ["STR", "Arms", "Knife"],
      dep: { eyeForAnEye: 2 },
      maxLevel: 8,
      coords: { x: 3, y: 3 }
    },
    shadowstrike: {
      name_en: "Shadowstrike",
      //name_en: "Deep Breath/Revenge Thrust",
      name_jp: "忍法　雲隠",
      //desc: "Requires a Mirage. Deals melee cut damage to one row. For a set number of turns, reduces their accuracy.",
      //[their HP is restored. / reduce the attackers accuracy. / inflict ?.]
      desc: "When an attack is evaded, the user has a chance to cast Phantom Knives.",
      stats: [],
      dep: { reprisal: 2, lure: 2 },
      maxLevel: 8,
      coords: { x: 4, y: 3.5 }
    },
    chop: {
      name_en: "Chop",
      name_jp: "伐採",
      desc: "Occasionally gains more items when using Chop points.",
      stats: [],
      unique: true,
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    }
  },

};
