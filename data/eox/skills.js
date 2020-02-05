let skills = {
  Zodiac: {
    astrologersAxis: {
      name_en: "Astrologer's Axis",
      name_jp: "占星時軸",
      desc: "For 3 turns, Zodiac attack skills will have increased power, and restore half of their TP cost to the user.",
      stats: [],
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    astralSign: {
      name_en: "Astrosign",
      name_jp: "アストロサイン",
      desc: "Deals ranged fire+ice+volt damage to all enemies. On this turn, all allies' TP cost will be reduced to 0.",
      stats: ["INT"],
      unique: true,
      type: "Break",
      dep: { astrologersAxis: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
  /*astralSign: {
      name_en: "Conversion",
      name_jp: "アストロサイン",
      desc: "Restores TP to the user. This can restore TP over maximum TP. The overhealed TP will disappear at the end of battle, or when the user dies.",
      stats: [],
      unique: true,
      type: "Break",
      dep: { astrologersAxis: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }*/
    },
    pulseStar: {
      name_en: "Pulse Star",
      name_jp: "エーテルシュート",
      desc: "Deals ranged, INT-based damage to one enemy with the user's weapon.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 1.5 }
    },
    alignment: {
      name_en: "Alignment",
      name_jp: "炎の先見術",
      desc: "If the skill used on this turn is of a different element from the last one used, it gains the element of the last one used and has its damage increased.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 2.5 }
    },
    binaryFire: {
      name_en: "Binary Fire",
      name_jp: "炎の連星術",
      desc: "Deals ranged fire damage to all enemies. For three turns, enemies will take more damage from fire attacks. This debuff can make them weak to that attribute.",
      stats: ["INT"],
      dep: { pulseStar: 1, alignment:1 },
      maxLevel: 8,
      coords: { x: 1, y: 1 }
    },
    binaryIce: {
      name_en: "Binary Ice",
      name_jp: "氷の連星術",
      desc: "Deals ranged ice damage to all enemies. For three turns, enemies will take more damage from ice attacks. This debuff can make them weak to that attribute.",
      stats: ["INT"],
      dep: { pulseStar: 1, alignment:1 },
      maxLevel: 8,
      coords: { x: 1, y: 2 }
    },
    binaryVolt: {
      name_en: "Binary Volt",
      name_jp: "雷の連星術",
      desc: "Deals ranged volt damage to all enemies. For three turns, enemies will take more damage from volt attacks. This debuff can make them weak to that attribute.",
      stats: ["INT"],
      dep: { pulseStar: 1, alignment:1 },
      maxLevel: 8,
      coords: { x: 1, y: 3 }
    },
    meteorRain: {
      name_en: "Meteor Rain",
      name_jp: "メテオ",
      desc: "Deals 5-10 instances of ranged random elemental damage to random targets.",
      stats: ["INT"],
      dep: { binaryFire: 3, binaryIce: 3, binaryVolt: 3 },
      maxLevel: 10,
      coords: { x: 2, y: 2.5 }
    },
    distortionNova: {
      //name_en: "Distortion Nova",
      //name_en: "Refraction Spark",
      name_en: "Refraction Nova",
      name_jp: "雷の先見術",
      desc: "On the third turn after using this skill, ranged bash damage is dealt to one target. During this time, for each time the target's weakness is hit, this skills damage is increased up to 10 stacks. Multi-hit attacks will trigger multiple stacks.",
      stats: [],
      dep: { meteorRain: 2 },
      maxLevel: 10,
      coords: { x: 3, y: 2.5 }
    },
    guidingStar: {
      name_en: "Guiding Star",
      name_jp: "ＴＰブースト",
      desc: "Increases maximum TP. Increases attack when Astral Fire is active.",
      stats: [],
      dep: { binaryFire: 3, binaryIce: 3, binaryVolt: 3 },
      maxLevel: 6,
      coords: { x: 2, y: 1.5 }
    },
    astralFire: {
      name_en: "Astral Fire",
      name_jp: "炎の星術",
      desc: "Deals ranged fire damage to one target. Applies the Astral Fire stance on the user, increasing damage for a set number of turns. This skill cannot be used again for 3 turns.",
      //[On the next turn, if the user uses an elemental skill, follows up with a ranged Int-based Cut+Element attack on all enemies hit with an element by the user.]
      stats: ["INT"],
      dep: { guidingStar:1 },
      maxLevel: 6,
      coords: { x: 3, y: 1.5 }
    },
    umbralIce: {
      name_en: "Umbral Ice",
      name_jp: "氷の星術",
      desc: "Requires Astral Fire. Deals ranged ice damage to one target. Recovers some TP and removes Astral Fire after use.",
      stats: ["INT"],
      dep: { astralFire: 2 },
      maxLevel: 6,
      coords: { x: 4, y: 1 }
    },
    solsticeVolt: {
      name_en: "Solstice Volt",
      name_jp: "雷の星術",
      desc: "Requires Astral Fire. Deals ranged volt damage to one target. Removes Astral Fire after use.",
      //, and ignores resistances
      stats: ["INT"],
      dep: { astralFire: 2 },
      maxLevel: 10,
      coords: { x: 4, y: 2 }
    },
    singularity: {
      name_en: "Singularity",
      name_jp: "特異点定理",
      desc: "Increases damage dealt when hitting weaknesses.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 4 }
    },
    cosmicGleam: {
      name_en: "Cosmic Gleam",
      name_jp: "エーテルの輝き",
      desc: "For a set number of turns, increases elemental attack and defense for one row.",
      stats: [],
      dep: { singularity: 3 },
      maxLevel: 8,
      coords: { x: 1, y: 4 }
    },
    asteroidBelt: {
      name_en: "Asteroid Belt",
       //Spacial Distortion
      name_jp: "アンチエーテル",
      desc: "Provides a chance to nullify elemental attacks against the user's row.",
      stats: [],
      dep: { cosmicGleam: 3 },
      maxLevel: 8,
      coords: { x: 2, y: 4 }
    },
    nebulaResurgence: {
      name_en: "Nebula Resurgence",
      name_jp: "多段式エーテル",
      desc: "When the user hits an enemy's weakness, their Force gauge is increased.",
      stats: [],
      dep: { asteroidBelt: 4 },
      maxLevel: 8,
      coords: { x: 3, y: 4 }
    },
    aspectedVeil: {
      name_en: "Aspected Veil",
      name_jp: "氷の先見術",
      //desc: "For a set number of turns, imbue an ally's weapon with fire/ice/volt and have them counterattack whenever the row they're in is attacked by an enemy.",
      desc: "For a set number of turns, imbue an ally's weapon with fire/ice/volt and have them automatically counterattack enemies who attacks them.",
      stats: [],
      dep: { nebulaResurgence: 4 },
      maxLevel: 8,
      coords: { x: 4, y: 4 }
    },
    prophecy: {
      name_en: "Prophecy",
      name_jp: "氷の先見術",
      desc: "Prevents elemental attacks from one enemy. If an attack is prevented, increases the user's attack until the end of the next turn.",
      stats: [],
      dep: { aspectedVeil: 4 },
      maxLevel: 6,
      coords: { x: 5, y: 4 }
    },
    celestialReturn: {
      name_en: "Celestial Return",
      name_jp: "リターンエーテル",
      desc: "Restores TP to the user when hitting a weakness.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 5 }
    },
    aetherLeak: {
      name_en: "Aether Leak",
      //name_en: "Planar Crack/Fracture/Rift/Breach/Tear/Rend",
      name_jp: "エーテル圧縮",
      desc: "For a set amount of turns, when using TP, a percentage of the used TP will be restored to one random party member.",
      stats: [],
      dep: { celestialReturn : 2 },
      maxLevel: 6,
      coords: { x: 1, y: 6 }
    },
    autoLeak: {
      name_en: "Auto-Leak",
      name_jp: "エーテルマスター",
      desc: "If Aether Leak is learned, there is a chance to automatically cast it at the start of battle. Cannot activate if another ally activated it first.",
      stats: [],
      dep: { aetherLeak: 3 },
      maxLevel: 6,
      coords: { x: 2, y: 6 }
    },
    darkMatter: {
      name_en: "Dark Matter",
      name_jp: "ダークエーテル",
      desc: "Reduce TP usage for one row this turn, while increasing Zodiac skill damage until the end of the next turn.",
      //desc: "Reduce TP usage for one row this turn, while increasing the users damage until the end of the next turn.",
      // [. The user absorbs some of it, recovering their own.]
      stats: [],
      dep: { celestialReturn: 2 },
      maxLevel: 6,
      coords: { x: 1, y: 5 }
    },
    stellarFlow: {
      name_en: "Stellar Flow",
      name_jp: "レストアエーテル",
      desc: "Increases attack based on the number of TP spent on the previous turn. Does not activate if TP spent last turn is too low.",
      stats: [],
      dep: { darkMatter: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 5 }
    },
    pulsarFeedback: {
      name_en: "Pulsar Feedback",
      name_jp: "ＴＰカット",
      desc: "Provides a chance to refund the user's TP usage.",
      stats: [],
      dep: { stellarFlow : 2 },
      maxLevel: 6,
      coords: { x: 3, y: 5 }
    },
    mine: {
      name_en: "Mine",
      name_jp: "採掘",
      desc: "Occasionally gains more items when using Mine points.",
      stats: [],
      unique: true,
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    }
  },
  Survivalist: {
    illusionStep: {
      name_en: "Illusion Step",
      name_jp: "夢幻陣形",
      desc: "For 3 turns, increases all party members' action speed and evasion.",
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
        stats: ["STR"],
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
    //   stats: ["STR"],
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
      stats: ["STR"],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 1.5 }
    },
    flankShot: {
      name_en: "Foot Pierce",
      name_jp: "フランクショット",
      desc: "Deals ranged stab damage to one row. Attempts to inflict leg bind. If sucessful, or if the enemy is already inflicted with leg bind, the user will attack again.",
      stats: ["STR"],
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
      stats: ["STR"],
      dep: { flameArrow: 3 },
      maxLevel: 8,
      coords: { x: 1, y: 2 }
    },
    dropShot: {
      name_en: "Drop Shot",
      name_jp: "ドロップショット",
      desc: "Deals ranged stab damage to one target. Damage increases if the target is in the back row.",
      stats: ["STR"],
      dep: { multiShot: 3 },
      maxLevel: 8,
      coords: { x: 2, y: 2 }
    },
    disablingShot: {
      name_en: "Disabling Shot",
      name_jp: "エイミングフット",
      desc: "When the user attacks with a bow skill, attempts to inflict stun.",
      //[/Deals ranged stab damage to one target. Attempts to inflict stun and leg bind.]
      stats: [],
      dep: { finishingArrow: 1 },
      maxLevel: 8,
      coords: { x: 3, y: 1 }
    },
    sagittariusShot: {
      name_en: "Sagittarius Shot",
      name_jp: "サジタリウスの矢",
      desc: "On the third turn after using this skill, ranged stab damage is dealt to one target at the start of that turn. Attempts to inflict stun. Ineffective if the user dies before the skill activates.",
      stats: ["STR"],
      dep: { dropShot: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 2 }
    },
    naturesCloak: {
      name_en: "Nature's Cloak",
      name_jp: "トリックステップ",
      desc: "Increases evasion.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 3 }
    },
    chainThrust: {
      name_en: "Chain Thrust",
      name_jp: "チェインダンス",
      desc: "Deals ranged stab damage to one target and, for that turn, increases the user's evasion and chance of being targeted.",
      stats: [],
      dep: { naturesCloak: 2  },
      maxLevel: 8,
      coords: { x: 1, y: 3 }
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
    blindArrow: {
      name_en: "Blind Arrow",
      name_jp: "ブラインドアロー",
      desc: "Deals ranged stab damage to one target. Attempts to inflict blind.",
      stats: ["STR", "LUC"],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 4 }
    },
    sereneBreeze: {
      name_en: "Serene Breeze",
      name_jp: "抑制攻撃ブースト",
      desc: "Places a buff on an ally that allows them to dodge the next incoming physical attack. When an attack is dodged, the buff is removed.",
      stats: [],
      dep: { blindArrow: 2 },
      maxLevel: 8,
      coords: { x: 1, y: 4 }
    },
    blurredVeil: {
      name_en: "Blurred Veil",
      name_jp: "忍法　猿飛",
      desc: "This turn, the selected row has a high chance of evading physical attacks. Each time they evade an attack, the evasion boost is reduced.",
      stats: [],
      dep: { sereneBreeze:2 },
      maxLevel: 8,
      coords: { x: 2, y: 4 }
    },
    sylphid: {
      name_en: "*Sylphid",
      name_jp: "素早さブースト",
      desc: "When an attack is dodged, the user will counter-attack the source of the attack. Has a chance of triggering multiple times.",
      stats: [],
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
      stats: ["STR"],
      dep: { sylphid: 3, rayOfLight: 3  },
      maxLevel: 8,
      coords: { x: 4, y: 3.5 }
    },
    eyeForAnEye: {
      name_en: "Nature's Wrath",
      name_jp: "自然の恩恵",
      desc: "Deals ranged stab damage to one target. Damage is increased depending on the number of evades the user has made since they last used this skill.",
      stats: [],
      dep: { hazyShot: 3 },
      maxLevel: 8,
      coords: { x: 5, y: 3.5 }
    },
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
      stats: [],
      dep: { resuscitate: 3 },
      maxLevel: 4,
      coords: { x: 2, y: 6 }
    },
    scapegoat: {
      name_en: "Scapegoat",
      name_jp: "スケープゴート",
      desc: "Selected ally will cover all party members a set number of times this turn. Ineffective if that ally has leg bind.",
      stats: [],
      dep: { efficiency: 2, stalker: 2 },
      maxLevel: 8,
      coords: { x: 3, y: 5.5 }
    },
    swapStep: {
      name_en: "Swap Step",
      name_jp: "アザーズステップ",
      desc: "Selected ally has a chance to act first this turn.",
      stats: [],
      dep: { scapegoat: 2 },
      maxLevel: 8,
      coords: { x: 4, y: 5.5 }
    },
    naturalInstinct: {
      name_en: "Natural Instinct",
      name_jp: "野生の勘",
      desc: "Occasionally gains more items when using any gathering points.",
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
      desc: "For 3 turns, increases the user's evasion and chance of being targeted.",
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
      stats: ["LUC"],
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
      stats: ["STR", "LUC"],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 1 }
    },
    ninpoNeedles: {
      name_en: "Ninpo: Needles",
      name_jp: "忍法　撒菱",
      desc: "This turn, when the selected row is attacked, counterattack with ranged stab damage and attempt to inflict sleep.",
      stats: ["STR", "LUC"],
      dep: { ninpoScorpio: 3 },
      maxLevel: 6,
      coords: { x: 1, y: 1 }
    },
    shadowBind: {
      name_en: "Shadow Bind",
      name_jp: "影縫",
      desc: "Deals melee cut damage to one target. Attempts to inflict leg bind.",
      stats: ["STR", "LUC"],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 2 }
    },
    boneCrusher: {
      name_en: "Bone Crusher/???",
      name_jp: "骨砕き",
      desc: "Deals melee bash damage to one target. Reduces their physical defense.",
      stats: ["STR"],
      dep: { shadowBind: 3 },
      maxLevel: 8,
      coords: { x: 1, y: 2 }
    },
    ninpoShock: {
      name_en: "Ninpo: Shock",
      name_jp: "忍法　驚忍",
      desc: "Attempts to inflict panic on one enemy.",
      stats: ["LUC"],
      dep: { ninpoNeedles: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 1 }
    },
    foxDrop: {
      name_en: "Fox Drop",
      name_jp: "飯綱",
      desc: "Deals melee cut damage to one target. Attempts to inflict petrify.",
      stats: ["STR", "LUC"],
      dep: { ninpoShock:2 },
      maxLevel: 8,
      coords: { x: 3, y: 1 }
    },
    quietus: {
      //name_en: "Illusionary Swap",
      //name_jp: "抑制攻撃ブースト",
      //desc: "Targets a Mirage. That Mirage will take damage for the selected row for one turn, with a multiplier applied to the damage they take from redirected hits.",
      //name_en: "Coup de Grace/Guillotine",
      name_en: "Quietus",
      name_jp: "抑制攻撃ブースト",
      desc: "Deals melee cut damage to one target with a chance to instantly kill it.  Chance is increased if the enemy has an ailment.",
      stats: [],
      dep: { foxDrop: 2, schadenfreude: 2 },
      maxLevel: 6,
      coords: { x: 4, y: 1.5 }
    },
    hawkStrike: {
      name_en: "Hawk Strike",
      name_jp: "鷹乃羽",
      desc: "Deals multiple instances of melee cut damage to random targets.",
      stats: ["STR"],
      dep: { boneCrusher: 3 },
      maxLevel: 8,
      coords: { x: 2, y: 2 }
    },
    schadenfreude: {
      name_en: "Schadenfreude",
      name_jp: "幸災楽禍",
      desc: "Deals melee cut damage to one target. Always hits. If target has an ailment, increases the user's Force.",
      stats: ["STR"],
      dep: { hawkStrike: 2 },
      maxLevel: 8,
      coords: { x: 3, y: 2 }
    },
    fallingBloom: {
      name_en: "Falling Bloom",
      name_jp: "意趣返し",
      desc: "Deals melee cut+almighty damage to one target. Low accuracy.",
      stats: ["STR"],
      dep: { windCurtain: 2  },
      maxLevel: 8,
      coords: { x: 5, y: 1.5 }
    },
    ninpoClone: {
      name_en: "Ninpo: Clone",
      name_jp: "忍法　分身",
      desc: "Consumes a percentage of the user's HP and TP to create a clone in an empty slot. Force Boost and Force Break are unusable while a clone is active.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 1, y: 6 }
    },
    drawingSlice: {
      name_en: "Drawing Slice",
      name_jp: "多元抜刀",
      desc: "Deals multiple instances of melee damage to random targets. All clones will disappear after use.",
      stats: ["STR"],
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
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 4 }
    },
    selfDestruct: {
      name_en: "Self-Destruct",
      name_jp: "肉弾",
      //desc: "Destroys a Mirage. Deals ranged fire damage to all enemies.",
      desc: "Instantly kill an ally/mirage. Deals ranged fire damage to all enemies.",
      stats: ["STR"],
      dep: { ninpoMirage:2 },
      maxLevel: 4,
      coords: { x: 1, y: 4 }
    },
    lure: {
      name_en: "Lure",
      name_jp: "忍法　猿飛",
      //desc: "Targets a Mirage. This turn, every time the Mirage dodges an attack, members in the same row will individually counter with an attack using their equipped weapon.",
      desc: "This turn, every time the selected ally/mirage dodges an attack, members in the same row will individually counter with an attack using their equipped weapon.",
      stats: [],
      dep: { selfDestruct: 3 },
      maxLevel: 8,
      coords: { x: 2, y: 4 }
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
    ninpoFlight: {
      name_en: "Ninpo: Flight",
      name_jp: "潜伏",
      desc: "This turn, the user has a high chance of evading physical attacks.",
      stats: [],
      dep: {  },
      maxLevel: 8,
      coords: { x: 0, y: 3 }
    },
    acrobatics: {
      name_en: "Acrobatics",
      name_jp: "軽業",
      desc: "When the user evades an attack, their TP is restored.",
      stats: [],
      dep: { ninpoFlight: 2 },
      maxLevel: 8,
      coords: { x: 1, y: 3 }
    },
    eyeForAnEye: {
      name_en: "Eye for an Eye",
      name_jp: "忍法　猿飛",
      desc: "If the user evaded an attack on the previous turn, increases chance of inflicting ailments",
      stats: [],
      dep: { acrobatics: 3 },
      maxLevel: 8,
      coords: { x: 2, y: 3 }
    },
    deepBreath: {
      name_en: "Deep Breath",
      name_jp: "忍法　雲隠",
      //desc: "Requires a Mirage. Deals melee cut damage to one row. For a set number of turns, reduces their accuracy.",
      desc: "When the user evades an attack, [their HP is restored. / reduce the attackers accuracy. / inflict ?.]",
      stats: [],
      dep: { eyeForAnEye: 2 },
      maxLevel: 8,
      coords: { x: 3, y: 3 }
    },
    ninpoMastery: {
      name_en: "Ninpo Mastery",
      name_jp: "忍びの心得",
      desc: "Increases attack. At max level, melee attacks will hit for full damage and can always reach the enemy back row, even when the user is in the back.",
      stats: [],
      dep: { },
      maxLevel: 4,
      coords: { x: 2, y: 0 }
    },
    ninpoMirror: {
      name_en: "Ninpo: Mirror",
      name_jp: "忍法　水鏡",
      desc: "Attempts to inflict the ailments and binds present on one enemy to all enemies.",
      stats: ["LUC"],
      dep: { },
      maxLevel: 6,
      coords: { x: 3, y: 0 }
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
