let skills = {

  Shogun: {
    fullCombatForm: {
      name_en: "Full Combat Form",
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
