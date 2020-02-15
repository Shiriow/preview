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
      desc: "Deals ranged, INT-based damage to one enemy with the user's weapon. Reduces their elemental defense for a set number of turns.",
      stats: ["INT, Arms"],
      dep: { },
      maxLevel: 8,
      coords: { x: 0, y: 2 }
    },
    binaryFire: {
      name_en: "Binary Fire",
      name_jp: "炎の連星術",
      desc: "Deals ranged fire damage to all enemies.",
      //  Replaces the element of the next skill with fire. [For three turns, enemies will take more damage from fire attacks./ Slightly increases the power of Zodiac attack skills until the next turn.
      stats: ["INT, Head"],
      dep: { pulseStar: 3 },
      maxLevel: 8,
      coords: { x: 1, y: 1 }
    },
    binaryIce: {
      name_en: "Binary Ice",
      name_jp: "氷の連星術",
      desc: "Deals ranged ice damage to all enemies.",
      stats: ["INT, Head"],
      dep: { pulseStar: 3 },
      maxLevel: 8,
      coords: { x: 1, y: 2 }
    },
    binaryVolt: {
      name_en: "Binary Volt",
      name_jp: "雷の連星術",
      desc: "Deals ranged volt damage to all enemies.",
      stats: ["INT, Head"],
      dep: { pulseStar: 3 },
      maxLevel: 8,
      coords: { x: 1, y: 3 }
    },
    meteorRain: {
      name_en: "Meteor Rain",
      name_jp: "メテオ",
      desc: "Deals 5-10 instances of ranged random elemental damage to random targets.",
      stats: ["INT, Head"],
      dep: { binaryFire: 3, binaryIce: 3, binaryVolt: 3 },
      maxLevel: 10,
      coords: { x: 2, y: 2.5 }
    },
    refractionNova: {
      //name_en: "Distortion Nova",
      //name_en: "Refraction Spark",
      name_en: "Refraction Nova",
      name_jp: "雷の先見術",
      desc: "On the third turn after using this skill, ranged almighty damage is dealt to one target. During this time, for each time the target's weakness is hit, this skills damage is increased up to 10 stacks. Multi-hit attacks will trigger multiple stacks.",
      stats: ["INT, Head"],
      dep: { meteorRain: 4 },
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
      stats: ["INT, Head"],
      dep: { guidingStar: 3 },
      maxLevel: 6,
      coords: { x: 3, y: 1.5 }
    },
    umbralIce: {
      name_en: "Umbral Ice",
      name_jp: "氷の星術",
      desc: "Requires Astral Fire. Deals ranged ice damage to one target. Recovers some TP and removes Astral Fire after use.",
      stats: ["INT, Head"],
      dep: { astralFire: 3 },
      maxLevel: 6,
      coords: { x: 4, y: 1 }
    },
    solsticeVolt: {
      name_en: "Solstice Volt",
      name_jp: "雷の星術",
      desc: "Requires Astral Fire. Deals ranged volt damage to one target. Removes Astral Fire after use.",
      //, and ignores resistances
      stats: ["INT, Head"],
      dep: { astralFire: 3 },
      maxLevel: 10,
      coords: { x: 4, y: 2 }
    },
    singularity: {
      name_en: "Singularity",
      name_jp: "特異点定理",
      desc: "Increases damage dealt when hitting weaknesses. In addition, the previous skill's element is now added into your attacks.",
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
      stats: ["STR"],
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
      coords: { x: 5, y: 3.5 }
    },
    fluxAbsorption: {
      name_en: "Flux Absorption",
      name_jp: "炎の先見術",
      desc: "Absorb one instance of elemental damage against all party members.",
      stats: [],
      dep: { aspectedVeil: 4 },
      maxLevel: 6,
      coords: { x: 5, y: 4.5 }
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


};
