let skills = {
  Shogun: {
    fullCombatForm: {
      name_en: "Full Combat Form",
      name_jp: "力戦陣形",
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
      name_jp: "影武者",
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
      name_jp: "払い弐刀",
      desc: "Increases physical defense and normal attacks may hit 2-4 times when two weapons are equipped. Enables sub-weapon when this skill is learned.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 1.75 }
    },
    trickStance: {
      name_en: "*Trick Stance",
      name_jp: "明星",
      desc: "For the next three turns, when you attack your allies on the same row will also attack.",
      stats: ["STR"],
      dep: { parryingBlade: 2 },
      maxLevel: 6,
      coords: { x: 1, y: 2.5 }
    },
    wickedTalons: {
      name_en: "*Wicked Talons",
      name_jp: "禍時",
      desc: "Normal attacks now recover TP.",
      stats: ["STR"],
      dep: { trickStance: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 2.5 }
    },
    peerlessDemon: {
      name_en: "Peerless Demon",
      name_jp: "介錯",
      desc: "Increases damage dealt based on the number of attacks.",
      stats: [],
      dep: { wickedTalons: 2 },
      maxLevel: 4,
      coords: { x: 3, y: 2.5 }
    },
    spiritFlow: {
      name_en: "Spirit Flow",
      name_jp: "谺流し",
      desc: "Deals melee damage to one target with the equipped katana at the start of turn. If two weapons are equipped, attacks again with the other weapon after the target acts.",
      stats: ["STR"],
      dep: { parryingBlade: 2 },
      maxLevel: 10,
      coords: { x: 1, y: 1 }
    },
    twinSparrow: {
      name_en: "Twin Sparrow",
      name_jp: "双燕",
      desc: "Deals melee damage to one target with the user's weapon. If two weapons are equipped, this skill will hit twice. First hit will be from the katana, while the second hit will be from the other weapon.",
      stats: ["STR"],
      dep: { spiritFlow: 3 },
      maxLevel: 10,
      coords: { x: 2, y: 0.5 }
    },
    fiveRingSword: {
      name_en: "Five-Ring Sword",
      name_jp: "五輪の剣",
      desc: "Deals multiple instances of melee damage to random targets with user's weapon. If two weapons are equipped, the maximum number of hits will double, and this attack will alternate between the katana and the other weapon.",
      stats: ["STR"],
      dep: { twinSparrow: 2 },
      maxLevel: 10,
      coords: { x: 3, y: 0.5 }
    },
    hawkSlice: {
      name_en: "Hawk Slice",
      name_jp: "無明の極",
      desc: "Deals melee damage to one target with the user's weapon. If a second weapon is equipped, attack adjacent enemies.",
      stats: [],
      dep: { spiritFlow: 3 },
      maxLevel: 6,
      coords: { x: 2, y: 1.5 }
    },
    fellingBird: {
      //Onslaught
      name_en: "Gnashing Fang",
      name_jp: "飛鳥落とし",
      desc: "Deals melee damage to one target with the user's weapon. If that enemy is killed and a second weapon is equipped, attack all enemies.",
      stats: [],
      dep: { hawkSlice: 2 },
      maxLevel: 10,
      coords: { x: 3, y: 1.5 }
    },
    dissection: {
      name_en: "*Dissection",
      name_jp: "雷切",
      desc: "When the user kills an enemy, restores Force to all party members.",
      stats: ["STR"],
      dep: { fellingBird: 2 },
      maxLevel: 6,
      coords: { x: 4, y: 1.5 }
    },
    bloodyLance: {
      name_en: "Bloody Lance",
      name_jp: "血染めの朱槍",
      desc: "When the user kills an enemy or ally, their attack is increased. The effect is reset when the user dies.",
      stats: [],
      dep: { dissection: 2 },
      maxLevel: 6,
      coords: { x: 5, y: 1 }
    },
    mercyKill: {
      name_en: "Mercy Kill",
      name_jp: "介錯",
      desc: "When any enemy or ally is attacked, and their HP falls below a set percentage, there is a chance to inflict instant death to them.",
      stats: [],
      dep: { dissection: 2 },
      maxLevel: 4,
      coords: { x: 5, y: 2 }
    },
    blitzCommand: {
      name_en: "Blitz Command",
      name_jp: "乱れ竜の陣",
      desc: "All allies other than the user will attack one target with their weapons.",
      stats: ["STR"],
      dep: { },
      maxLevel: 10,
      coords: { x: 0, y: 3.75 }
    },
    baitCommand: {
      name_en: "Bait Command",
      name_jp: "据え虎の陣",
      desc: "This turn, when the user is attacked, all allies other than the user will counterattack with their weapons. Does not activate against counterattacks.",
      stats: ["STR"],
      dep: { blitzCommand: 2 },
      maxLevel: 6,
      coords: { x: 1, y: 3.75 }
    },
    counterCommand: {
      name_en: "*Counter Command",
      name_jp: "斬月居合陣",
      desc: "This turn, when the selected ally is attacked, all front row allies will counterattack with their weapons. Does not activate against counterattacks.",
      stats: ["STR"],
      dep: { baitCommand: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 3.75 }
    },
    rushCommand: {
      name_en: "*Rush Command",
      name_jp: "報復射撃陣",
      desc: "Deals melee damage to one target with the user's weapon. Allies on your row will chase after.",
      stats: ["STR"],
      dep: { counterCommand: 3 },
      maxLevel: 6,
      coords: { x: 3, y: 3.75 }
    },
    chaseStance: {
      name_en: "*Chase Stance",
      name_jp: "刺客寄せ",
      desc: "For the next three turns you will chase attacks made by your allies on the same row.",
      stats: [],
      dep: { rushCommand: 3 },
      maxLevel: 6,
      coords: { x: 4, y: 3.75 }
    },
    warriorMight: {
      name_en: "Warrior Might",
      name_jp: "一騎当千",
      desc: "This turn, the user will chase all attacks from all allies, but will lose HP for every chase. Links, chases and counterattacks cannot be chased. Only one chase will be made for each action.",
      stats: ["STR"],
      dep: { chaseStance: 2 },
      maxLevel: 10,
      coords: { x: 5, y: 3.75 }
    },
    moraleBoost: {
      name_en: "Morale Boost",
      name_jp: "士気回復",
      desc: "When the user is revived, restores HP to all allies.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 1, y: 6 }
    },
    ritualSuicide: {
      name_en: "Ritual Suicide",
      name_jp: "切腹",
      desc: "Restores HP to all other allies with a chance to revive them, but the user dies. This self-inflicted death cannot be prevented via any means.",
      stats: ["WIS"],
      dep: { },
      maxLevel: 8,
      coords: { x: 2, y: 6 }
    },
    reincarnation: {
      name_en: "Reincarnation",
      name_jp: "仮死再生",
      desc: "On the turn when the user's HP reaches 0, there is a chance that they may revive at the end of that turn.",
      stats: [],
      dep: { ritualSuicide: 2 },
      maxLevel: 10,
      coords: { x: 3, y: 6 }
    },
    foreHonor: {
      name_en: "*Fore Honor",
      name_jp: "先陣の名誉",
      desc: "For a set number of turns, increases one ally's physical attack and action speed.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 5 }
    },
    // unifiedSpirit: {
    //   name_en: "*Unified Spirit",
    //   name_jp: "祟り打ち",
    //   desc: "For a set number of turns, imbues one row of allies' weapons with fire/ice/volt, and increases their elemental defense.",
    //   stats: [],
    //   dep: { foreHonor: 2 },
    //   maxLevel: 6,
    //   coords: { x: 1, y: 5 }
    // },
    fireSpirit: {
      name_en: "Blaze Spirit",
      name_jp: "祟り打ち",
      desc: "For a set number of turns, imbues one row of allies' weapons with fire, and increases their fire defense. / Select one ally and, for a set number of turns, everytime they attack, they'll attack again with their weapon. The ally's row is also imbued with volt.",
      stats: [],
      dep: { foreHonor: 2 },
      maxLevel: 4,
      coords: { x: 1, y: 5 }
    },
    iceSpirit: {
      name_en: "Hail Spirit",
      name_jp: "祟り打ち",
      desc: "For a set number of turns, imbues one row of allies' weapons with ice, and increases their ice defense. / Select one ally and, for a set number of turns, everytime they attack, they'll attack again with their weapon. The ally's row is also imbued with ice.",
      stats: [],
      dep: { fireSpirit: 2 },
      maxLevel: 4,
      coords: { x: 2, y: 5 }
    },
    voltSpirit: {
      name_en: "Bolt Spirit",
      name_jp: "祟り打ち",
      desc: "For a set number of turns, imbues one row of allies' weapons with volt, and increases their volt defense. / Select one ally and, for a set number of turns, everytime they attack, they'll attack again with their weapon. The ally's row is also imbued with volt.",
      stats: [],
      dep: { iceSpirit: 2 },
      maxLevel: 4,
      coords: { x: 3, y: 5 }
    },
    greatGeneral: {
      name_en: "*Great General",
      name_jp: "大武辺者",
      desc: "For a set number of turns, increases one ally's physical attack and chance of being targeted.",
      stats: [],
      dep: { voltSpirit: 2 },
      maxLevel: 8,
      coords: { x: 4, y: 5 }
    },
    take: {
      name_en: "Take",
      name_jp: "採取",
      desc: "Occasionally gains more items when using Take points.",
      stats: [],
      unique: true,
      dep: { },
      maxLevel: 1,
      coords: { x: 0, y: 6 }
    }
  },
  Protectorv2: {
    shieldProtect: {
      name_en: "???",
      name_jp: "大盾の守護",
      desc: "For 3 turns, ??? and increases aggro chance.",
      stats: [],
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    perfectDefense: {
      name_en: "Perfect Defense",
      name_jp: "完全防御",
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
      name_jp: "渾身ディフェンス",
      desc: "Apply a buff on the user that decreases damage taken of their row.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 1 }
    },
    swordbreaker: {
      name_en: "Swordbreaker",
      name_jp: "ファイアガード",
      desc: "Provides a chance to lower damage dealt to your row.",
      stats: [],
      dep: { shieldOath: 2 },
      maxLevel: 8,
      coords: { x: 1, y: 1 }
    },
    counterOath: {
      name_en: "Counter Oath",
      name_jp: "バッグガード",
      desc: "Apply a buff on the user that gives them a chance of countering attacks made against their row.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 2 }
    },
    swordOath: {
      name_en: "Sword Oath",
      name_jp: "ラインディバイド",
      desc: "Apply a buff on the user that increases damage done of their row.",
      stats: [],
      dep: { counterOath: 2 },
      maxLevel: 8,
      coords: { x: 1, y: 2 }
    },
    bullCharge: {
      name_en: "Intervention",
      name_jp: "フルガード",
      desc: "Raises damage done and lowers damage taken for one ally until the end of the next turn.",
      stats: [],
      dep: { swordOath: 2, swordbreaker: 2 },
      maxLevel: 10,
      coords: { x: 2, y: 1.5 }
    },
    fireCircle: {
      name_en: "Fire Circle",
      name_jp: "フロントガード",
      desc: "Reduces all Fire damage to the party, and increases all Fire damage to enemies for one turn.",
      stats: [],
      dep: { bullCharge: 2 },
      maxLevel: 6,
      coords: { x: 3, y: 0.5 }
    },
    iceCircle: {
      name_en: "Ice Circle",
      name_jp: "フロントガード",
      desc: "Reduces all Ice damage to the party, and increases all Ice damage to enemies for one turn.",
      stats: [],
      dep: { bullCharge: 2 },
      maxLevel: 6,
      coords: { x: 3, y: 1.5 }
    },
    voltCircle: {
      name_en: "Volt Circle",
      name_jp: "フロントガード",
      desc: "Reduces all Volt damage to the party, and increases all Volt damage to enemies for one turn.",
      stats: [],
      dep: { bullCharge: 2 },
      maxLevel: 6,
      coords: { x: 3, y: 2.5 }
    },
    healingWall: {
      name_en: "Healing Wall",
      name_jp: "ヒールウォール",
      desc: "When the user defends, restores HP to allies on the user's row.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 3 }
    },
    clemency: {
      name_en: "Clemency",
      name_jp: "ヒールガード",
      desc: "Restores HP for one ally. Restore HP for the user's row for half the power.",
      stats: ["WIS"],
      dep: { healingWall: 2  },
      maxLevel: 6,
      coords: { x: 1, y: 3 }
    },
    regenOath: {
      name_en: "Regen Oath",
      name_jp: "キープガード",
      desc: "Apply a buff on the user that restores their row's HP.",
      stats: [],
      dep: { clemency:2 },
      maxLevel: 6,
      coords: { x: 2, y: 3 }
    },
    cellDivide: {
      name_en: "Cell Divide",
      name_jp: "セルディバイド",
      desc: "Covers one ally until the end of the next turn.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 4 }
    },
    aegis: {
      name_en: "Aegis",
      name_jp: "決死の覚悟",
      desc: "There is a chance for the user to survive fatal damage at 1 HP. Can activate once per battle at most.",
      stats: [],
      dep: { cellDivide: 2 },
      maxLevel: 8,
      coords: { x: 1, y: 4 }
    },
    cover: {
      name_en: "Cover",
      name_jp: "リカバリーガード",
      desc: "When an ally is attacked, the user has a chance of automatically covering them.",
      stats: [],
      dep: { aegis: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 4 }
    },
    autoguard: {
      name_en: "Autoguard",
      name_jp: "オートガード",
      desc: "When the user is attacked, there is a chance to automatically reduce the damage.",
      stats: [],
      dep: { cover: 2 },
      maxLevel: 10,
      coords: { x: 3, y: 4 }
    },
    shieldSiphon: {
      name_en: "Shield Siphon",
      name_jp: "物理防御ブースト",
      desc: "Deals melee bash damage to one target. Doubles damage when lower health than your target and drains HP. Damage is based on the user's shield's DEF.",
      stats: ["STR"],
      dep: {  },
      maxLevel: 6,
      coords: { x: 0, y: 5 }
    },
    shieldRush: {
      name_en: "*Shield Rush",
      name_jp: "シールドラッシュ",
      desc: "Deals melee bash damage to all enemies, and reduces their physical attack for a set number of turns. Damage is based on the user's shield's DEF.",
      stats: ["STR"],
      dep: { shieldSiphon: 3 },
      maxLevel: 8,
      coords: { x: 1, y: 5 }
    },
    shieldBreak: {
      name_en: "Shield Break",
      name_jp: "属性防御ブースト",
      desc: "Deals melee bash damage to one target. Damages user. Damage is based on the user's shield's DEF.",
      stats: ["STR"],
      dep: { shieldRush: 3 },
      maxLevel: 8,
      coords: { x: 2, y: 5 }
    },
    shieldTaboo: {
      name_en: "Shield Taboo",
      name_jp: "シールドスマイト",
      desc: "Deals melee bash damage to one target. Increases the duration of the user's buffs. Damage is based on the user's shield's DEF.",
      stats: ["STR"],
      dep: { shieldBreak: 3 },
      maxLevel: 6,
      coords: { x: 3, y: 5 }
    },
    shieldFlare: {
      name_en: "*Shield Flare",
      name_jp: "シールドフレア",
      desc: "Until the end of the next turn, when the user is attacked, they will counterattack with ranged fire damage. Ignores resistances. Damage is based on the user's shield's DEF.",
      stats: ["STR"],
      dep: { shieldTaboo: 3 },
      maxLevel: 8,
      coords: { x: 4, y: 5 }
    },
    provoke: {
      name_en: "Provoke",
      name_jp: "挑発",
      desc: "Increases the user's defense and chance of being targeted for a set number of turns.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 1, y: 6 }
    },
    preProvoke: {
      name_en: "Pre-Provoke",
      name_jp: "先制挑発",
      desc: "If Provoke is learned, there is a chance to automatically cast it at the start of battle. Cannot activate if another ally activated it first.",
      stats: [],
      dep: { provoke: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 6 }
    },
    wideOath: {
      name_en: "Wide Oath",
      name_jp: "ショックガード",
      desc: "For one turn, the user's Oath buffs will affect the whole party.",
      stats: [],
      dep: { },
      maxLevel: 8,
      coords: { x: 3, y: 6 }
    },
    autoOath: {
      name_en: "Auto Oath",
      name_jp: "フリーズガード",
      desc: "Has a chance to apply a random Oath skill that the user knows at the start of battle. The chance to activate depends on the number of Oath skills the user knows.",
      stats: [],
      dep: { wideOath: 2 },
      maxLevel: 10,
      coords: { x: 4, y: 6 }
    },
    hpUp: {
      name_en: "???",
      name_jp: "ＨＰブースト",
      desc: "",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 5, y: 6 }
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
