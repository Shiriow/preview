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
      coords: { x: 0, y: 1.85 }
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
      name_en: "Twin Sparrow/???",
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
    trickStance: {
      name_en: "*Trick Stance",
      name_jp: "明星",
      desc: "For the next three turns, when you attack your allies on the same row will also attack.",
      stats: ["STR"],
      dep: { parryingBlade: 2 },
      maxLevel: 6,
      coords: { x: 1, y: 2.65 }
    },
    wickedTalons: {
      name_en: "*Wicked Talons",
      name_jp: "禍時",
      desc: "Normal attacks now recover TP.",
      stats: ["STR"],
      dep: { trickStance: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 2.65 }
    },
    peerlessDemon: {
      name_en: "Peerless Demon",
      name_jp: "介錯",
      desc: "Increases damage dealt based on the number of attacks.",
      stats: [],
      dep: { wickedTalons: 2 },
      maxLevel: 4,
      coords: { x: 3, y: 2.65 }
    },
    blitzCommand: {
      name_en: "Blitz Command",
      name_jp: "乱れ竜の陣",
      desc: "All allies other than the user will attack one target with their weapons.",
      stats: ["STR"],
      dep: { },
      maxLevel: 10,
      coords: { x: 0, y: 3.85 }
    },
    baitCommand: {
      name_en: "Bait Command/???",
      name_jp: "据え虎の陣",
      desc: "This turn, when the user is attacked, all allies other than the user will counterattack with their weapons. Does not activate against counterattacks.",
      stats: ["STR"],
      dep: { blitzCommand: 2 },
      maxLevel: 6,
      coords: { x: 1, y: 3.85 }
    },
    counterCommand: {
      name_en: "*Counter Command",
      name_jp: "斬月居合陣",
      desc: "This turn, when the selected ally is attacked, all front row allies will counterattack with their weapons. Does not activate against counterattacks.",
      stats: ["STR"],
      dep: { baitCommand: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 3.85 }
    },
    rushCommand: {
      name_en: "*Rush Command",
      name_jp: "報復射撃陣",
      desc: "Deals melee damage to one target with the user's weapon. Allies on your row will chase after.",
      stats: ["STR"],
      dep: { counterCommand: 3 },
      maxLevel: 6,
      coords: { x: 3, y: 3.85 }
    },
    chaseStance: {
      name_en: "*Chase Stance",
      name_jp: "刺客寄せ",
      desc: "For the next three turns you will chase attacks made by your allies on the same row.",
      stats: [],
      dep: { rushCommand: 3, peerlessDemon: 2 },
      maxLevel: 6,
      coords: { x: 4, y: 3.25 }
    },
    warriorMight: {
      name_en: "*?Warrior Might",
      name_jp: "一騎当千",
      desc: "This turn, the user will chase all attacks from all allies, but will lose HP for every chase. Links, chases and counterattacks cannot be chased. Only one chase will be made for each action. / Chases all attacks made by allies and enemies this turn. Deals melee, STR-based Cut damage to targets.",
      stats: ["STR"],
      dep: { chaseStance: 2 },
      maxLevel: 10,
      coords: { x: 5, y: 3.25 }
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
      //desc: "For a set number of turns, increases the users attack, defense and chance of being targeted.",
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
      name_en: "Tempered Will",
      name_jp: "大盾の守護",
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
    shieldSmite: {
      name_en: "Shield Smite",
      name_jp: "ＨＰブースト",
      desc: "Deals melee bash damage to one target. Attempts to inflict arm bind. Damage is based on the user's shield's DEF.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 0, y: 5 }
    },
    // shieldSiphon: {
    //   name_en: "Shield Siphon",
    //   name_jp: "物理防御ブースト",
    //   desc: "Deals melee bash damage to one target. Doubles damage when lower health than your target and drains HP. Damage is based on the user's shield's DEF.",
    //   stats: ["STR"],
    //   dep: {  },
    //   maxLevel: 6,
    //   coords: { x: 0, y: 5 }
    // },
    shieldRush: {
      name_en: "*Shield Rush",
      name_jp: "シールドラッシュ",
      desc: "Deals melee bash damage to all enemies, and reduces their physical attack for a set number of turns. Damage is based on the user's shield's DEF.",
      stats: ["STR"],
      dep: { shieldSmite: 3 },
      maxLevel: 8,
      coords: { x: 1, y: 5 }
    },
    // shieldBreak: {
    //   name_en: "Shield Break",
    //   name_jp: "属性防御ブースト",
    //   desc: "Deals melee bash damage to one target. Damages user. Damage is based on the user's shield's DEF.",
    //   stats: ["STR"],
    //   dep: { shieldRush: 3 },
    //   maxLevel: 8,
    //   coords: { x: 2, y: 5 }
    // },
    shieldTaboo: {
      name_en: "Shield Taboo",
      name_jp: "シールドスマイト",
      desc: "Deals melee bash damage to one target. Increases the duration of the user's buffs. Damage is based on the user's shield's DEF.",
      stats: ["STR"],
      dep: { shieldRush: 3 },
      maxLevel: 6,
      coords: { x: 2, y: 5 }
    },
    shieldFlare: {
      name_en: "Shield Flare",
      name_jp: "シールドフレア",
      desc: "Until the end of the next turn, when the user is attacked, they will counterattack with ranged fire damage. Damage is based on the user's shield's DEF.",
      stats: ["STR"],
      dep: { shieldTaboo: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 5 }
    },
    firelight: {
      name_en: "Firelight",
      name_jp: "ＨＰブースト",
      desc: "At the end of the turn, deals ranged fire damage to the target of \"Shield\" skills, to any enemies that activated Light Tincture, or whenever the user uses an Oath.",
      stats: [],
      dep: { shieldFlare: 2 },
      maxLevel: 6,
      coords: { x: 4, y: 5 }
    },
    lightTincture: {
      name_en: "Light Tincture",
      name_jp: "ＨＰブースト",
      desc: "Nullifies damage to the user/target for one turn. Each time Light Tincture activates, the chance if it activating again on that turn is reduced.",
      stats: [],
      dep: { fireCircle: 2, iceCircle: 2, voltCircle: 2 },
      maxLevel: 6,
      coords: { x: 4, y: 1.5 }
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
      name_en: "Oath Mastery",
      name_jp: "フリーズガード",
      //desc: "Has a chance to apply a random Oath skill that the user knows at the start of battle. The chance to activate depends on the number of Oath skills the user knows.",
      desc: "Increases the speed of Oath skills, and reduces their TP costs based on a static amount and a percentage of the skill's TP cost. Increases their turn count by 1 at max.",
      stats: [],
      dep: { wideOath: 2 },
      maxLevel: 10,
      coords: { x: 4, y: 6 }
    },
    hpUp: {
      name_en: "Last Bastion",
      name_jp: "ＨＰブースト",
      desc: "Requires 3 buffs. Removes all of them and, in exchange, the user will attack an enemy dealing melee bash damage and reducing the target's damage until the end of the turn.",
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
  Nightseeker: {
    killerStance: {
      name_en: "Killer Stance",
      desc: "For 3 turns, increases attack and ailment infliction chance for the user.",
      stats: [],
      unique: true,
      type: "Boost",
      dep: { },
      maxLevel: 0,
      coords: { x: 0, y: 0 }
    },
    disaster: {
      name_en: "Disaster",
      desc: "Deals melee cut damage to one target. If the target has an ailment, increases the ailment's duration.",
      stats: ["STR"],
      unique: true,
      type: "Break",
      dep: { killerStance: 0 },
      maxLevel: 0,
      coords: { x: 1, y: 0 }
    },
    curseThrow: {
      name_en: "?Abyssal Curse",
      //powder, Flask, Phial, Vial / Curse Bomb, Umbral Curse
      desc: "Umbral skill. Deals ranged bash damage to one target and increases Creeping Darkness's damage. Attempts to inflict curse.",
      stats: ["STR", "LUC"],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 2 }
    },
    sandThrow: {
      name_en: "Shadowflame",
      // Umbral Flare / Necrotic+ / +Sign / Noxious / Effluvium / Spark / Umbra / Smoke Bomb / Dark Haze / Shade / Obscurity / Paranoia / Nocturne / Oblivion / Abyssal / Nightmare
      //desc: "Attempt to inflict blind on one target. If the enemy is hit by a fire element, follow up with another fire attack.",
      desc: "Umbral skill. Attempt to inflict blind on one target. If the enemy is hit by fire damage, follow up with ranged fire damage that reduces their accuracy for 3 turns.",
      stats: ["STR", "LUC"],
      dep: { curseThrow: 3  },
      maxLevel: 8,
      coords: { x: 1, y: 1.25 }
    },
    nerveThrow: {
      name_en: "Shockgrasp",
      //, Nerve Bomb, Umbral Spark / Vacuum
      //desc: "Attempt to inflict paralysis on one target. If the enemy is hit by a volt element, follow up with another volt attack that purges all buffs from hit targets. Damage is doubled for each buff removed, up to 6x for three buffs.",
      //and the user's row has increased evasion for a set number of turns
      desc: "Umbral skill. Attempt to inflict paralysis on one target. If the enemy is hit by volt damage, follow up with ranged volt damage that attempts to instantly empty their remaining HP if that enemy is at 40% HP or below. If the HP emptying succeeds, restores a percentage of the HP emptied to the user.",
      stats: ["STR", "LUC"],
      dep: { sandThrow: 3 },
      maxLevel: 8,
      coords: { x: 2, y: 1.25 }
    },
    sleepThrow: {
      name_en: "Noxious Torpor",
      //Sleep Bomb
      //desc: "Deals ranged bash damage to one target. Attempts to inflict sleep. If at the end of the turn the enemy is still asleep, attempt to instantly kill it.",
      desc: "Umbral skill. Deals ranged bash damage to one target. Attempts to inflict sleep. If at the end of the turn the enemy is still asleep, recover Force.",
      stats: ["STR", "LUC"],
      dep: { nerveThrow: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 1.25 }
    },
    proficiency: {
      name_en: "Creeping Darkness",
      //Quickdraw, Shadow Remnant
      //Trance/Increases damage dealt to enemies with ailments. /
      desc: "Any enemies hit with Umbral skills (except Noxious Torpor) are hit again with a ranged stab attack at the end of the turn.",
      stats: [],
      dep: { sleepThrow: 3 },
      maxLevel: 8,
      coords: { x: 4, y: 0.75 }
    },
    speedUp: {
      //name_en: "Umbral Double",
      //desc: "Gives a chance for an extra follow-up attack on Umbral skills.",
      //Splash Palm?
      //If the user hits an enemy's weakness with a palm skill, there is a chance that they will deal splash damage of the same element to adjacent enemies.
      name_en: "Effluvium Burst",
      desc: "When an enemy is killed with a Umbral skill, the user will attack another enemy with the same element.",
      stats: [],
      dep: { sleepThrow: 3 },
      maxLevel: 8,
      coords: { x: 4, y: 1.75 }
    },
    venomThrow: {
      name_en: "Coldblooded Venom",
      //, Venom Bomb, Deep Freeze Umbral Venom
      //desc: "Attempt to inflict poison on one target. If the enemy is hit by a ice element, follow up with another ice attack.",
      desc: "Umbral skill. Attempt to inflict poison on one target. If the enemy is hit by ice damage, follow up with ranged ice damage that increases poison duration by one.",
      stats: ["STR", "LUC"],
      dep: { proficiency: 3, speedUp: 3 },
      maxLevel: 8,
      coords: { x: 5, y: 1.25 }
    },
    bladeFlurry: {
      name_en: "Masked Pain",
      //cleanse, Detox Bomb
      desc: "Umbral skill. Removes ailments and binds from one ally. Level up to increase number of binds and type of ailments removed.",
      stats: ["Arms"],
      dep: { curseThrow: 2 },
      maxLevel: 4,
      coords: { x: 1, y: 2.75 }
    },
    spreadThrow: {
      name_en: "Eventide",
      // Eventide / Nightfall
      desc: "Until the end of the next turn, increases Umbral skills' range to all targets, and improves their infliction rate.",
      stats: [],
      dep: { bladeFlurry: 2 },
      maxLevel: 6,
      coords: { x: 2, y: 2.75 }
    },
    foulMastery: {
      name_en: "Sadistic Ecstasy",
      //delight
      desc: "Increases attack every time the user inflicts an ailment. Bonus stacks up to 3 times, and is reset if the user dies.",
      stats: [],
      dep: { spreadThrow: 2 },
      maxLevel: 10,
      coords: { x: 3, y: 2.25 }
    },
    autoSpread: {
      name_en: "Impending Doom",
      //*Perseverance, Relentless Night, Seeping Darkness, Twilight Force, Dark Malady, Eventide, Ebon Fury, Scourge of Darkness, Blackout, Dusk to Dawn, Dark Descent, Relentless Pursuit
      desc: "Increases the chance of inflicting an ailment if the user failed to inflict one last turn.",
      stats: [],
      dep: { spreadThrow: 2 },
      maxLevel: 6,
      coords: { x: 3, y: 3.25 }
    },
    shadowBite: {
      name_en: "Dusk to Dawn",
      //(Increases ailment chance until the end of the next turn./
      desc: "Deals melee cut damage to one target and removes an ailment. Damage is increased if the target has an ailment. Casts Eventide after use.",
      stats: ["STR"],
      dep: { foulMastery: 2, autoSpread: 2 },
      maxLevel: 8,
      coords: { x: 4, y: 2.75 }
    },
    swiftEdge: {
      name_en: "Ebon Frenzy",
      desc: "Deals 3-5 instances of melee cut damage to one target. If the target has an ailment, maximum number of attacks is increased to 9 and increases Dusk to Dawn's damage until the end of the next turn.",
      stats: ["STR"],
      dep: { shadowBite: 3 },
      maxLevel: 8,
      coords: { x: 5, y: 2.75 }
    },
    shadowCloak: {
      name_en: "Shadow Cloak",
      desc: "Umbral skill. For 3 turns, negates one physical attack made against the user.",
      stats: [],
      dep: { },
      maxLevel: 4,
      coords: { x: 0, y: 4.75 }
    },
    decoySign: {
      name_en: "?Decoy Sign",
      desc: "For a set amount of turns, increases one ally's chance of being targeted and their evasion. Also increases their rows evasion.",
      stats: [],
      dep: { shadowCloak: 2 },
      maxLevel: 4,
      coords: { x: 1, y: 4.25 }
    },
    autoCloak: {
      name_en: "Auto-Cloak",
      desc: "If Shadow Cloak is learned, there is a chance to automatically cast it at the start of battle. Cannot activate if another ally activated it first.",
      stats: [],
      dep: { decoySign: 1 },
      maxLevel: 6,
      coords: { x: 2, y: 4.25 }
    },
    returnCloak: {
      name_en: "Shadow Remnant",
      //Return Cloak
      desc: "When Shadow Cloak negates an attack, there is a chance that Shadow Cloak will be automatically cast on the user.",
      stats: [],
      dep: { autoCloak: 3 },
      maxLevel: 8,
      coords: { x: 3, y: 4.25 }
    },
    followTrace: {
      name_en: "Blackest Night",
      //When Shadow Cloak negates an attack, there is a chance that the user will attack an enemy.",
      desc: "For a set number of turns, increases evasion for one row.",
      stats: [],
      dep: { returnCloak: 3 },
      maxLevel: 8,
      coords: { x: 4, y: 4.25 }
    },
    bidingSlice: {
      name_en: "*Biding Slice",
      desc: "Deals melee cut damage to one target. If the user is not damaged until the end of the turn, deals melee cut damage to the same target with splash damage.",
      stats: ["STR"],
      dep: { shadowCloak: 1 },
      maxLevel: 8,
      coords: { x: 1, y: 5.25 }
    },
    attackBait: {
      name_en: "Twilight Fury",
      //Attack Bait
      desc: "When the user or an adjacent ally is hit with an attack, the user will counter, with increased damage if they were the target. The chance of countering goes down with each successive counter.",
      stats: ["STR"],
      dep: { bidingSlice: 2 },
      maxLevel: 8,
      coords: { x: 2, y: 5.25 }
    },
    backstab: {
      name_en: "Backstab",
      desc: "Deals melee cut damage to one target. Attempts to inflict head bind. If the user has Shadow Cloak, add almighty element to the attack and increases damage.",
      stats: ["STR", "LUC"],
      dep: { attackBait: 2 },
      maxLevel: 8,
      coords: { x: 3, y: 5.25 }
    },
    assassinate: {
      name_en: "Assassinate",
      desc: "Deals melee cut damage to one target. If the user has Shadow Cloak, attempts to inflict instant death.",
      stats: ["STR"],
      dep: { backstab: 3 },
      maxLevel: 8,
      coords: { x: 4, y: 5.25 }
    },
    sneakAttack: {
      name_en: "*Sneak Attack",
      //Dagger Fetish
      desc: "For a set number of steps, increases the chance of preemptive attacks. Passively increases damage and TP while wielding daggers.",
      stats: [],
      dep: { },
      maxLevel: 6,
      coords: { x: 2, y: 0 }
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


};
