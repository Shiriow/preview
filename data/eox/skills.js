let skills = {
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
      coords: { x: 1, y: 1.5 }
    },
    flankShot: {
      name_en: "Flank Shot",
      name_jp: "フランクショット",
      desc: "Deals ranged stab damage to one row.",
      stats: ["STR"],
      dep: { flameArrow: 3 },
      maxLevel: 8,
      coords: { x: 2, y: 1 }
    },
    finishingArrow: {
      name_en: "Finishing Arrow",
      name_jp: "仕留めの一矢",
      desc: "When the user attacks a target whose HP is below a set threshold, the user follows up with their weapon. Does not activate for links, chases or counterattacks.",
      stats: ["STR"],
      dep: { flankShot: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 1 }
    },
    multiShot: {
      name_en: "Multi-Shot",
      name_jp: "ダブルショット",
      desc: "Deals 2 instances of ranged stab damage to one enemy.",
      stats: ["STR"],
      dep: { flameArrow: 3 },
      maxLevel: 8,
      coords: { x: 2, y: 2 }
    },
    dropShot: {
      name_en: "Drop Shot",
      name_jp: "ドロップショット",
      desc: "Deals ranged stab damage to one target. Damage increases if the target is in the back row.",
      stats: ["STR"],
      dep: { multiShot: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 2 }
    },
    disablingShot: {
      name_en: "Disabling Shot",
      name_jp: "エイミングフット",
      desc: "When the user attacks with a bow skill, attempts to inflict leg bind.",
      stats: [],
      dep: { finishingArrow: 1 },
      maxLevel: 8,
      coords: { x: 4, y: 1 }
    },
    sagittariusShot: {
      name_en: "Sagittarius Shot",
      name_jp: "サジタリウスの矢",
      desc: "On the third turn after using this skill, ranged stab damage is dealt to one target at the start of that turn. Attempts to inflict stun. Ineffective if the user dies before the skill activates.",
      stats: ["STR"],
      dep: { dropShot: 3 },
      maxLevel: 8,
      coords: { x: 4, y: 2 }
    },
    sleepArrow: {
      name_en: "Sleep Arrow",
      name_jp: "パワーショット",
      desc: "Deals ranged stab damage to one target. Attempts to inflict sleep.",
      stats: ["STR", "LUC"],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 2.5 }
    },
    blindArrow: {
      name_en: "Blind Arrow",
      name_jp: "ブラインドアロー",
      desc: "Deals ranged stab damage to one target. Attempts to inflict blind.",
      stats: ["STR", "LUC"],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 3.5 }
    },
    paralysisArrow: {
      name_en: "Paralysis Arrow",
      name_jp: "警戒斥候",
      desc: "Deals ranged stab damage to one target. Attempts to inflict paralysis.",
      stats: ["STR", "LUC"],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 4.5 }
    },
    chainThrust: {
      name_en: "Chain Thrust",
      name_jp: "チェインダンス",
      desc: "Deals ranged stab damage to one target and, for that turn, increases the user's evasion and chance of being targeted.",
      stats: [],
      dep: { blindArrow: 1, paralysisArrow: 1, sleepArrow: 1 },
      maxLevel: 8,
      coords: { x: 1, y: 3 }
    },
    mistStep: {
      name_en: "Mist Step",
      name_jp: "整頓術",
      desc: "Increases Force whenever the user dodges an attack.",
      stats: [],
      dep: { blindArrow: 1, paralysisArrow: 1, sleepArrow: 1 },
      maxLevel: 8,
      coords: { x: 1, y: 4 }
    },
    fanDance: {
      name_en: "Fan Dance",
      name_jp: "トリックステップ",
      desc: "Increase the users evasion for a set number of turns.",
      stats: [],
      dep: { chainThrust: 2, mistStep: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 3.5 }
    },
    sylphid: {
      name_en: "Sylphid",
      name_jp: "素早さブースト",
      desc: "When an attack is dodged, the user has a chance to counter-attack the source of the attack. Chance decreases by 40% per dodge.",
      stats: [],
      dep: { fanDance: 2 },
      maxLevel: 8,
      coords: { x: 3, y: 3 }
    },
    rayOfLight: {
      name_en: "Ray of Light",
      name_jp: "奇襲",
      desc: "When the user dodges an attack, their chance to be targeted and defense increase. If the they fail to dodge an attack, Ray of Light's effects are reset.",
      stats: [],
      dep: { fanDance: 2 },
      maxLevel: 6,
      coords: { x: 3, y: 4 }
    },
    eyeForAnEye: {
      name_en: "Eye for an Eye",
      name_jp: "自然の恩恵",
      desc: "If the user evaded an attack on the previous turn, increases chance of inflicting ailments",
      stats: [],
      dep: { sylphid: 3, rayOfLight: 3 },
      maxLevel: 8,
      coords: { x: 4, y: 3.5 }
    },
    hazyShot: {
      name_en: "Hazy Shot",
      name_jp: "朧矢",
      desc: "Deals ranged stab damage to one target. Always hits. Can only be used if the user evaded an attack on the previous turn.",
      stats: ["STR"],
      dep: { eyeForAnEye: 3, sagittariusShot:1 },
      maxLevel: 6,
      coords: { x: 5, y: 2.75 }
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
  Ronin: {
    peerless: {
      name_en: "Peerless",
      name_jp: "無双",
      desc: "For 3 turns, stance duration will not decrease, and stances cannot be removed. In addition, the user gains the effect of both stances.",
      stats: [],
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    issen: {
      name_en: "Issen",
      name_jp: "一閃",
      desc: "Deals ranged cut damage to all enemies. Attempts to inflict instant death. Chance of instant death is increased against targets at low HP.",
      stats: ["STR", "LUC"],
      unique: true,
      type: "Break",
      dep: { peerless: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    upperStance: {
      name_en: "Upper Stance",
      name_jp: "上段の構え",
	    desc: "Increases attack and evasion when Upper Stance is active. At the start of each battle, the user automatically assumes the stance with the highest skill level.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 2 }
    },
    airBlade: {
      name_en: "Air Blade",
      name_jp: "空刃",
      desc: "Deals ranged cut damage to one target. Assumes Upper Stance after use.",
      stats: ["STR"],
      dep: { upperStance: 1 },
      maxLevel: 6,
      coords: { x: 1, y: 1 }
    },
    bloodyBlade: {
      name_en: "Bloody Blade",
      name_jp: "逆袈裟",
      desc: "Deals melee cut damage to one target and increases the users row attack for a set number of turns. Assumes Upper Stance after use.",
      stats: ["STR"],
      dep: { upperStance: 1 },
      maxLevel: 6,
      coords: { x: 1, y: 2 }
    },
    delayedStrike: {
      name_en: "Delayed Strike",
      name_jp: "貫突",
      desc: "Deals melee cut damage to one target, and attack again 2 turns later. Assumes Upper Stance after use.",
      stats: ["STR"],
      dep: { upperStance: 1 },
      maxLevel: 6,
      coords: { x: 1, y: 3 }
    },
    moonShadow: {
      name_en: "Moon Shadow",
      name_jp: "鞘撃",
      desc: "Requires Upper Stance. Deals melee cut damage to one target. Assumes Clear Stance after use.",
      stats: ["STR"],
      dep: { airBlade: 2, delayedStrike: 2, bloodyBlade: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 1.5 }
    },
    helmSplitter: {
      name_en: "Helm Splitter",
      name_jp: "兜割り ",
      desc: "Requires Upper Stance. Deals melee cut+almighty damage to one target. Low accuracy. Assumes Clear Stance after use.",
      stats: ["STR"],
      dep: { moonShadow: 2  },
      maxLevel: 8,
      coords: { x: 3, y: 1.5 }
    },
    flameGrater: {
      name_en: "Flame Grater",
      name_jp: "卸し焔",
      desc: "Requires Upper Stance. Deals melee cut+fire damage to one target and when a party member on the user's row is attacked, counterattack with melee damage. Assumes Clear Stance after use.",
      stats: ["STR"],
      dep: { airBlade: 2, delayedStrike: 2, bloodyBlade: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 2.5 }
    },
    horizontalSlice: {
      name_en: "Horizontal Slice",
      name_jp: "横一文字",
      desc: "Requires Upper Stance. Deals melee cut damage to one row and reduces their Ailment and Bind Resistance for a set number of turns. Assumes Clear Stance after use.",
      stats: ["STR"],
      dep: { flameGrater: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 2.5 }
    },
    swallowStrike: {
      name_en: "Swallow Strike",
      name_jp: "ツバメがえし",
      desc: "Requires Upper Stance. Deals multiple instances of melee cut damage to one target. Assumes Clear Stance after use. Novice and Master skills cannot be used again for 3 turns.",
      stats: ["STR"],
      dep: { helmSplitter: 3 },
      maxLevel: 8,
      coords: { x: 4, y: 1.5 }
    },
    petalScatter: {
      name_en: "Petal Scatter",
      name_jp: "散華",
      desc: "Requires Upper Stance. Deals ranged cut damage to all targets. Deals less damage based on the number of targets. Assumes Clear Stance after use. Novice and Master skills cannot be used again for 3 turns.",
      stats: ["STR"],
      dep: { horizontalSlice: 3 },
      maxLevel: 8,
      coords: { x: 4, y: 2.5 }
    },
    clearStance: {
      name_en: "Clear Stance",
      name_jp: "青眼の構え",
  	  desc: "Increases defense and Ronin skills' infliction rate when Clear Stance is active. At the start of each battle, the user automatically assumes the stance with the highest skill level.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 5 }
    },
    armStrike: {
      name_en: "Arm Strike",
      name_jp: "小手討ち",
      desc: "Deals melee stab damage to one target. Attempts to inflict arm bind. Assumes Clear Stance after use.",
      stats: ["STR", "LUC"],
      dep: { clearStance: 1 },
      maxLevel: 6,
      coords: { x: 1, y: 4 }
    },
    armorPierce: {
      name_en: "Armor Pierce",
      name_jp: "居合の構え",
	    desc: "Deals melee stab damage to one target and decreases their Defense for a set number of turns. Assumes Clear Stance after use.",
      stats: [],
      dep: { clearStance: 1 },
      maxLevel: 6,
      coords: { x: 1, y: 5 }
    },
    drainSlice: {
      name_en: "Drain Slice",
      name_jp: "息吹",
      desc: "Deals melee cut damage to one target and restores HP to the users line based on their Max HP. Assumes Clear Stance after use.",
      stats: [],
      dep: { clearStance: 1 },
      maxLevel: 6,
      coords: { x: 1, y: 6 }
    },
    mirrorMoon: {
      name_en: "Mirror Moon",
      name_jp: "物理攻撃ブースト",
      desc: "Requires Clear Stance. On this turn, when the user is attacked with physical damage, there is a chance they will nullify the damage and counterattack the source. Assumes Upper Stance after use.",
      stats: [],
      dep: { armStrike: 2, armorPierce: 2, drainSlice: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 4.5 }
    },
    hazeSlash: {
      name_en: "Haze Slash",
      name_jp: "霞斬り",
      desc: "Requires Clear Stance. Deals melee cut damage to one target. Attempts to inflict sleep. Assumes Upper Stance after use.",
      stats: ["STR", "LUC"],
      dep: { mirrorMoon: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 4.5 }
    },
    lightningStab: {
      name_en: "Lightning Stab",
      name_jp: "雷耀突き",
      desc: "Requires Clear Stance. Deals melee stab+volt damage to one target and reduces the targets attack for that turn. Assumes Upper Stance after use.",
      stats: ["STR"],
      dep: { armStrike: 2, armorPierce: 2, drainSlice: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 5.5 }
    },
    frigidSlash: {
      name_en: "Frigid Slash",
      name_jp: "抜刀氷雪",
      desc: "Requires Clear Stance. Deals ranged cut+ice damage to one target. Increases the user's defense and accuracy until the end of next turn.  Assumes Upper Stance after use.",
      stats: ["STR"],
      dep: { lightningStab: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 5.5 }
    },
    bluntingStab: {
      name_en: "Blunting Stab",
      name_jp: "鈍通し",
      desc: "Requires Clear Stance. Deals melee stab damage to one target. Attempts to inflict petrify. Assumes Upper Stance after use. Novice and Master skills cannot be used again for 3 turns.",
      stats: ["STR", "LUC"],
      dep: { hazeSlash: 3 },
      maxLevel: 8,
      coords: { x: 4, y: 4.5 }
    },
    earthBreaker: {
      name_en: "Earth Breaker",
      name_jp: "免許皆伝",
      desc: "Requires Clear Stance. Deals melee cut attack to one target with splash damage and a chance of stunning. Assumes Upper Stance after use. Novice and Master skills cannot be used again for 3 turns.",
      stats: [],
      dep: { frigidSlash: 3 },
      maxLevel: 8,
      coords: { x: 4, y: 5.5 }
    },
    duel: {
      name_en: "Duel",
      name_jp: "果し合い",
      desc: "Increases damage when attacking enemies that the user attacked last turn.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 2, y: 0 }
    },
    risingSpirit: {
      name_en: "Rising Spirit",
      name_jp: "戦意高揚",
      desc: "At the end of the turn, if a stance is active, restores TP to the user.",
      stats: [],
      dep: { swallowStrike: 1, petalScatter: 1, bluntingStab: 1, earthBreaker: 1 },
      maxLevel: 6,
      coords: { x: 5, y: 3.5 }
    },
    speedUp: {
      name_en: "Speed Up",
      name_jp: "素早さブースト",
      desc: "Increases accuracy, evasion and action speed.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 3, y: 0 }
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
  "War Magus": {
    warEdgePower: {
      name_en: "War Edge Power",
      name_jp: "巫剣の力",
      desc: "For 3 turns, War Edge skills can activate additional effects even against targets without an ailment and the users speed is increased.",
      stats: [],
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    fairyRobe: {
      name_en: "Fairy Robe",
      name_jp: "大巫術：精霊衣",
      desc: "Removes ailments, binds and debuffs from all party members, and restores their HP. This turn, negates all binds, ailments, stun, instant death and debuffs against all party members.",
      stats: ["WIS"],
      unique: true,
      type: "Break",
      dep: { warEdgePower: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    warEdgeMastery: {
      name_en: "War Edge Mastery",
      name_jp: "巫剣マスタリー",
      desc: "User can dual-wield and use sword skills with staff. Increases maximum TP when a sword is equipped; increases damage when a staff is equipped on the top slot. Normal attacks may hit 2-4 times if two weapons are equipped.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 1.5 }
    },
    warHealLine: {
      name_en: "War Heal Line",
      name_jp: "巫術：再生帯",
      desc: "Restores HP to one row at the start of the turn, then at the end of the turn.",
      stats: ["WIS"],
      dep: { },
      maxLevel: 10,
      coords: { x: 1, y: 1.5 }
    },
    warRevive: {
      name_en: "War Revive",
      name_jp: "巫術：反魂",
      desc: "Revives one ally at the start of the turn, then attempts to revive them again at the end of the turn.",
      stats: [],
      dep: { warHealLine: 3 },
      maxLevel: 10,
      coords: { x: 2, y: 1.5 }
    },
    artery: {
      name_en: "Artery",
      name_jp: "巫術：脈動",
      desc: "For a set number of turns, automatically restores HP for all party members when they act, once per turn.",
      stats: ["WIS"],
      dep: { warRevive: 2 },
      maxLevel: 6,
      coords: { x: 3, y: 1 }
    },
    warResponse: {
      name_en: "War Response",
      name_jp: "巫術：呼応",
      desc: "For a set number of turns, automatically restores HP for all party members when the debuffed enemy acts, once per turn.",
      stats: ["WIS"],
      dep: { warRevive: 2 },
      maxLevel: 6,
      coords: { x: 3, y: 2 }
    },
    pandemonium: {
      name_en: "Pandemonium",
      name_jp: "ＨＰブースト",
      desc: "Increases the targets attack and defense for a set number of turns.",
      stats: [],
      dep: { artery: 2, warResponse: 2  },
      maxLevel: 6,
      coords: { x: 4, y: 1.5 }
    },
    barrier: {
      name_en: "Barrier",
      name_jp: "巫術：結界",
      desc: "For one turn, there is a chance to nullify binds and ailments against all party members, up to a set number of times.",
      stats: [],
      dep: { pandemonium: 2 },
      maxLevel: 10,
      coords: { x: 5, y: 1.5 }
    },
    drippingSlash: {
      name_en: "Dripping Slash",
      name_jp: "巫術：乱疫",
      desc: "Deals melee cut+almighty damage to one target. Attempts to inflict one of poison, paralyze, blind, sleep or curse.",
      stats: ["LUC"],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 3.5 }
    },
    strengthSlash: {
      name_en: "Strength Slash",
      name_jp: "巫剣：霊攻衰斬",
      desc: "Deals melee cut+almighty damage to one target. If the target has an ailment, decreases their attack for a set number of turns.",
      stats: ["STR"],
      dep: { drippingSlash: 1 },
      maxLevel: 6,
      coords: { x: 1, y: 3 }
    },
    guardSlash: {
      name_en: "Guard Slash",
      name_jp: "巫剣：霊防衰斬",
      desc: "Deals melee cut+almighty damage to one target. If the target has an ailment, decreases their defense for a set number of turns.",
      stats: ["STR"],
      dep: { drippingSlash: 1 },
      maxLevel: 6,
      coords: { x: 1, y: 4 }
    },
    headcut: {
      name_en: "Headcut",
      name_jp: "巫剣：霊封頭斬",
      desc: "Deals melee cut+almighty damage to one target. If the target has an ailment, attempts to inflict head bind.",
      stats: ["STR", "LUC"],
      dep: { strengthSlash: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 3 }
    },
    armcut: {
      name_en: "Armcut",
      name_jp: "巫剣：霊封腕斬",
      desc: "Deals melee cut+almighty damage to one target. If the target has an ailment, attempts to inflict arm bind.",
      stats: ["STR", "LUC"],
      dep: { guardSlash: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 4 }
    },
    legcut: {
      name_en: "Legcut",
      name_jp: "巫剣：霊封脚斬",
      desc: "Deals melee cut+almighty damage to one target. If the target has an ailment, attempts to inflict leg bind.",
      stats: ["STR", "LUC"],
      dep: { headcut: 2, armcut: 2 },
      maxLevel: 8,
      coords: { x: 3, y: 3.5 }
    },
    ailingSlash: {
      name_en: "Ailing Slash",
      name_jp: "巫剣：霊攻大斬",
      desc: "Deals melee cut+almighty damage to one target. If the target has an ailment, increases damage dealt.",
      stats: ["STR"],
      dep: { legcut: 3 },
      maxLevel: 8,
      coords: { x: 4, y: 3 }
    },
    scorpion: {
      name_en: "Scorpion",
      name_jp: "巫術：再生陣",
      desc: "Deals melee cut damage to one enemy, with double splash damage to adjacent enemies. If adjacent enemies have ailments, attempts to petrify the target.",
      stats: ["STR"],
      dep: { legcut: 3 },
      maxLevel: 8,
      coords: { x: 4, y: 4 }
    },
    blindLaughter: {
      name_en: "Blind Laughter",
      name_jp: "抑制防御ブースト",
      desc: "This turn, if an enemy is afflicted with any ailments, binds, or stun, the user will perform a follow up attack.",
      stats: [],
      dep: { ailingSlash: 2 },
      maxLevel: 8,
      coords: { x: 5, y: 3 }
    },
    looseThread: {
      name_en: "Loose Thread",
      name_jp: "巫術：再生",
      desc: "Deals melee cut damage to all enemies. Increases damage dealt and attempts to inflict instant death on enemy with binds.",
      stats: ["WIS"],
      dep: { scorpion: 2 },
      maxLevel: 8,
      coords: { x: 5, y: 4 }
    },
    leeches: {
      name_en: "Leech",
      name_jp: "吸命",
      desc: "When the user deals damage to an enemy with an ailment, restores HP to the user's row. Can only activate once per turn.",
      stats: ["WIS"],
      dep: { },
      maxLevel: 8,
      coords: { x: 1, y: 5.5 }
    },
    rouse: {
      name_en: "Rouse",
      name_jp: "奮起",
      desc: "Increases the user's Force gain based on the number of enemies with binds.",
      stats: [],
      dep: { leeches: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 5.5 }
    },
    bindCut: {
      name_en: "Bind Cut",
      name_jp: "物理攻撃ブースト",
      desc: "Deals melee cut+almighty damage to one target. If target is bound, increases the user's Force.",
      stats: [],
      dep: { rouse: 2 },
      maxLevel: 6,
      coords: { x: 3, y: 5.5 }
    },
    spiritDrain: {
      name_en: "Spirit Drain",
      name_jp: "吸気",
      desc: "When the user deals damage to an enemy with both an ailment and a bind, restores TP to the user's row. Can only activate once per turn.",
      stats: ["WIS"],
      dep: { bindCut: 2 },
      maxLevel: 8,
      coords: { x: 4, y: 5.5 }
    },
    curseCut: {
      name_en: "Curse Cut",
      name_jp: "発疫",
      desc: "Deals melee cut+almighty damage to one target and attempt to inflict curse. If sucessful, or if the target is already cursed, restores Force to the users row.",
      stats: ["LUC"],
      dep: { spiritDrain: 3 },
      maxLevel: 8,
      coords: { x: 5, y: 5.5 }
    },
    displace: {
      name_en: "Displace",
      name_jp: "巫術：転移",
      desc: "Removes ailments and binds from one ally, and attempts to inflict them on one enemy.",
      stats: ["LUC"],
      dep: { },
      maxLevel: 4,
      coords: { x: 0, y: 5 }
    },
    take: {
      name_en: "Take",
      name_jp: "採取",
      desc: "Occasionally gains more items when using Mine points.",
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
      name_en: "Bone Crusher",
      name_jp: "骨砕き",
      desc: "Deals melee bash damage to one target. Reduces their physical defense.",
      stats: ["STR"],
      dep: { shadowBind: 3 },
      maxLevel: 8,
      coords: { x: 1, y: 2 }
    },
    ninpoMastery: {
      name_en: "Ninpo Mastery",
      name_jp: "忍びの心得",
      desc: "Increases attack. At max level, melee attacks will hit for full damage and can always reach the enemy back row, even when the user is in the back.",
      stats: [],
      dep: { },
      maxLevel: 4,
      coords: { x: 1, y: 6 }
    },
    ninpoMirror: {
      name_en: "Ninpo: Mirror",
      name_jp: "忍法　水鏡",
      desc: "Attempts to inflict the ailments and binds present on one enemy to all enemies.",
      stats: ["LUC"],
      dep: { ninpoNeedles: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 1 }
    },
    ninpoShock: {
      name_en: "Ninpo: Shock",
      name_jp: "忍法　驚忍",
      desc: "Attempts to inflict panic on one enemy.",
      stats: ["LUC"],
      dep: { ninpoMirror: 2 },
      maxLevel: 8,
      coords: { x: 3, y: 1 }
    },
    foxDrop: {
      name_en: "Fox Drop",
      name_jp: "飯綱",
      desc: "Deals melee cut damage to one target. Attempts to inflict petrify.",
      stats: ["STR", "LUC"],
      dep: { ninpoShock: 2, schadenfreude: 2 },
      maxLevel: 8,
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
      dep: { foxDrop: 2  },
      maxLevel: 8,
      coords: { x: 5, y: 1.5 }
    },
    selfDestruct: {
      name_en: "Self-Destruct",
      name_jp: "肉弾",
      desc: "Once per battle, when the user is killed by an enemy attack, they will counterattack with ranged fire damage.",
      stats: ["STR"],
      dep: { },
      maxLevel: 4,
      coords: { x: 4, y: 6 }
    },
    ninpoClone: {
      name_en: "Ninpo: Clone",
      name_jp: "忍法　分身",
      desc: "Consumes a percentage of the user's HP and TP to create a clone in an empty slot. Force Boost and Force Break are unusable while a clone is active.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 2, y: 3.25 }
    },
    drawingSlice: {
      name_en: "Drawing Slice",
      name_jp: "多元抜刀",
      desc: "Deals multiple instances of melee damage to random targets. All clones will disappear after use.",
      stats: ["STR"],
      dep: { ninpoClone: 4 },
      maxLevel: 8,
      coords: { x: 3, y: 3.25 }
    },
    autoClone: {
      name_en: "Auto-Clone",
      name_jp: "首切",
      desc: "If Ninpo: Clone is learned, there is a chance to automatically cast it at the start of battle. Cannot activate if another ally activated it first.",
      stats: [],
      dep: { drawingSlice: 4 },
      maxLevel: 10,
      coords: { x: 4, y: 3.25 }
    },
    ninpoMirage: {
      name_en: "Ninpo: Mirage",
      name_jp: "忍法　陽炎",
      desc: "Creates a decoy of the user in an empty slot. The decoy has added evasion and chance to be targeted.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 2, y: 6 }
    },
    autoMirage: {
      name_en: "Auto-Mirage",
      name_jp: "先制陽炎",
      desc: "If Ninpo: Mirage is learned, there is a chance to automatically cast it at the start of battle. Cannot activate if another ally activated it first.",
      stats: [],
      dep: { ninpoMirage: 2 },
      maxLevel: 6,
      coords: { x: 3, y: 6 }
    },
    acrobatics: {
      name_en: "Acrobatics",
      name_jp: "軽業",
      desc: "When the user evades an attack, their TP is restored.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 4 }
    },
    concealment: {
      name_en: "Concealment",
      name_jp: "潜伏",
      desc: "Increases evasion.",
      stats: [],
      dep: { acrobatics: 2 },
      maxLevel: 8,
      coords: { x: 1, y: 4 }
    },
    windCurtain: {
      name_en: "Wind Curtain",
      name_jp: "抑制攻撃ブースト",
      desc: "Places a buff on an ally that allows them to dodge the next incoming physical attack. When an attack is dodged, the buff is removed.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 5 }
    },
    phantomKnives: {
      name_en: "Phantom Knives",
      name_jp: "忍法　雲隠",
      desc: "For a set number of turns, reduces the accuracy of one row of enemies.",
      stats: [],
      dep: { windCurtain: 2 },
      maxLevel: 8,
      coords: { x: 1, y: 5 }
    },
    ninpoFlight: {
      name_en: "*Ninpo: Flight",
      name_jp: "忍法　猿飛",
      desc: "This turn, the selected line has a high chance of evading physical attacks. Each time they evade an attack, the evasion boost is reduced.",
      stats: [],
      dep: { phantomKnives: 3, concealment: 3 },
      maxLevel: 8,
      coords: { x: 2, y: 4.5 }
    },
    lure: {
      name_en: "Lure",
      name_jp: "忍法　猿飛",
      desc: "This turn, every time the selected ally dodges an attack, members in the same row will individually counter with an attack using their equipped weapon.",
      stats: [],
      dep: { ninpoFlight: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 4.5 }
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
  }
};
