let levels = {
  // Shogun: {
  //   fullCombatForm: {
  //     "Damage Dealt": ["15%"],
  //     "HP Increase": ["40%"]
  //   },
  //   parryingBlade: {
  //     "Damage Taken": ["95%", "93%", "90%", "87%", "84%", "80%"],
  //     "Chance": ["17%", "19%", "21%", "23%", "25%", "34%"]
  //   },
  //   spiritFlow: {
  //     "*TP": ["6", "6", "6", "6", "9", "9", "9", "9", "9", "14"],
  //     Accuracy: ["+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%"],
  //     "First Hit Damage": ["120%", "123%", "126%", "129%", "141%", "145%", "149%", "153%", "157%", "180%"],
  //     "Second Hit Damage": ["100%", "103%", "106%", "109%", "120%", "123%", "126%", "129%", "132%", "150%"]
  //   },
  //   dissection: {
  //     "Force Restore": ["+3%", "+4%", "+5%", "+6%", "+7%", "+10%"]
  //   },
  //   hawkSlice: {
  //   },
  //   chaseStance: {
  //   },
  //   moraleBoost: {
  //     "Healing Power": ["70%", "100%", "130%", "165%"]
  //   },
  //   twinSparrow: {
  //     "*TP": ["8", "8", "8", "8", "12", "12", "12", "12", "12", "18"],
  //     Speed: ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
  //     Accuracy: ["-5%", "-5%", "-5%", "-5%", "-5%", "-5%", "-5%", "-5%", "-5%", "-5%"],
  //     Damage: ["140%", "144%", "148%", "152%", "168%", "172%", "176%", "180%", "184%", "225%"]
  //   },
  //   blitzCommand: {
  //     TP: ["5", "5", "5", "5", "10", "10", "10", "10", "10", "16"],
  //     Speed: ["50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%"],
  //     Damage: ["75%", "78%", "81%", "84%", "93%", "96%", "99%", "102%", "105%", "120%"]
  //   },
  //   baitCommand: {
  //     TP: ["5", "5", "5", "5", "5", "10"],
  //     Speed: ["200%", "200%", "200%", "200%", "200%", "200%"],
  //     Damage: ["110%", "116%", "123%", "129%", "136%", "175%"]
  //   },
  //   counterCommand: {
  //     TP: ["7", "7", "7", "12", "12", "12", "12", "18"],
  //     Speed: ["200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%"],
  //     // Damage: ["100%", "110%", "120%", "133%", "141%", "149%", "157%", "180%"]
  //     Damage: ["100%", "105%", "110%", "125%", "130%", "135%", "140%", "165%"]
  //   },
  //   trickStance: {
  //   },
  //   wickedTalons: {
  //   },
  //   // unifiedSpirit: {
  //   //   TP: ["7", "7", "12", "12", "12", "16"],
  //   //   Speed: ["100%", "100%", "100%", "100%", "100%", "100%"],
  //   //   "Damage Taken": ["95%", "90%", "90%", "85%", "80%", "80%"],
  //   //   Duration: ["3", "3", "4", "4", "4", "5"]
  //   // },
  //   fireSpirit: {
  //     TP: ["7", "7", "7", "16"],
  //     Speed: ["100%", "100%", "100%", "100%"],
  //     "Damage Taken": ["85%", "80%", "75%", "60%"],
  //     Duration: ["3", "3", "3", "5"]
  //   },
  //   iceSpirit: {
  //     TP: ["7", "7", "7", "16"],
  //     Speed: ["100%", "100%", "100%", "100%"],
  //     "Damage Taken": ["85%", "80%", "75%", "60%"],
  //     Duration: ["3", "3", "3", "5"]
  //   },
  //   voltSpirit: {
  //     TP: ["7", "7", "7", "16"],
  //     Speed: ["100%", "100%", "100%", "100%"],
  //     "Damage Taken": ["85%", "80%", "75%", "60%"],
  //     Duration: ["3", "3", "3", "5"]
  //   },
  //   bloodyLance: {
  //     "Damage Dealt": ["+6%", "+8%", "+10%", "+12%", "+14%", "+20%"],
  //     "Stack Cap": ["9", "9", "9", "9", "9", "9"]
  //   },
  //   reincarnation: {
  //     Chance: ["8%", "10%", "13%", "15%", "20%", "25%", "30%", "35%", "40%", "50%"]
  //   },
  //   fellingBird: {
  //     "Damage Dealt": ["+4%", "+4%", "+4%", "+4%", "+7%", "+7%", "+7%", "+7%", "+7%", "+10%"],
  //     "Stack Cap": ["2", "3", "4", "5", "5", "6", "7", "8", "9", "9"]
  //   },
  //   ritualSuicide: {
  //     TP: ["15", "15", "15", "15", "15", "25"],
  //     Speed: ["40%", "40%", "40%", "40%", "40%", "40%"],
  //     "Healing Power": ["10%", "15%", "13%", "14%", "16%", "25%"],
  //     "Revive Chance": ["34%", "42%", "50%", "67%", "75%", "100%"]
  //   },
  //   fiveRingSword: {
  //     TP: ["15", "15", "15", "15", "22", "22", "22", "22", "22", "30"],
  //     Speed: ["70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%"],
  //     Accuracy: ["-7%", "-7%", "-7%", "-7%", "-7%", "-7%", "-7%", "-7%", "-7%", "-7%"],
  //     Damage: ["61%", "63%", "65%", "67%", "67%", "69%", "71%", "73%", "75%", "75%"],
  //     "Minimum Hits": ["2", "2", "2", "2", "3", "3", "3", "3", "3", "3"],
  //     "Maximum Hits": ["4", "4", "4", "4", "4", "4", "4", "4", "4", "5"]
  //   },
  //   rushCommand: {
  //   },
  //   warriorMight: {
  //     TP: ["10", "10", "10", "10", "15", "15", "15", "15", "15", "20"],
  //     "HP Cost": ["15%", "15%", "15%", "15%", "20%", "20%", "20%", "20%", "20%", "25%"],
  //     Damage: ["100%", "103%", "106%", "109%", "119%", "122%", "125%", "128%", "131%", "150%"]
  //   },
  //   mercyKill: {
  //     Threshold: ["5%", "7%", "9%", "15%"],
  //     Chance: ["25%", "30%", "35%", "60%"]
  //   },
  //   greatGeneral: {
  //     TP: ["10", "10", "16", "16", "16", "22"],
  //     Speed: ["150%", "150%", "150%", "150%", "150%", "150%"],
  //     "Damage Dealt": ["+30%", "+35%", "+40%", "+45%", "+50%", "+60%"],
  //     Aggro: ["+20%", "+22%", "+24%", "+26%", "+28%", "+40%"],
  //     Duration: ["5", "5", "4", "4", "4", "3"]
  //   },
  //   foreHonor: {
  //     TP: ["5", "5", "10", "10", "10", "17"],
  //     Speed: ["150%", "150%", "150%", "150%", "150%", "150%"],
  //     "Damage Dealt": ["+20%", "+22%", "+25%", "+27%", "+30%", "+40%"],
  //     "Speed Increase": ["x3.5", "x4.25", "x5", "x5.75", "x6.5", "x10"],
  //     Duration: ["3", "3", "4", "4", "4", "5"]
  //   }
  // },
  Survivalist: {
    illusionStep: {
      Evasion: ["+65%"],
      Aggro: ["+40%"]
    },
    mirageArrow: {
      Damage: ["500%", "1200%", "1800%"],
      Accuracy: ["-35%", "-35%", "-35%"]
    },
    // illusionStep: {
    //   Damage: ["100%", "200%", "300%"],
    //   Evasion: ["+65%", "+65%", "+65%"],
    //   Aggro: ["+40%", "+40%", "+40%"]
    // },
    // mirageArrow: {
    //   Damage: ["125%", "300%", "450%"],
    //   "Total Damage": ["500%", "1200%", "1800%"],
    //   Accuracy: ["-35%", "-35%", "-35%"]
    // },
    flameArrow: {
      TP: ["5", "5", "5", "9", "9", "9", "9", "13"],
      Speed: ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
      Accuracy: ["+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%"],
      Damage: ["240%", "250%", "260%", "300%", "310%", "320%", "330%", "400%"]
    },
    chainThrust: {
      TP: ["4", "4", "4", "8", "8", "8", "8", "14"],
      Speed: ["500%", "500%", "500%", "500%", "500%", "500%", "500%", "500%"],
      Damage: ["150%", "158%", "166%", "186%", "194%", "202%", "210%", "240%"],
      Evasion: ["+20%", "+20%", "+20%", "+27%", "+27%", "+27%", "+27%", "+35%"],
      Aggro: ["+25%", "+26.5%", "+28.5%", "+35%", "+37%", "+39%", "+41%", "+50%"]
    },
    blindArrow: {
      TP: ["4", "4", "4", "7", "7", "7", "7", "10"],
      Speed: ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
      Accuracy: ["+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%"],
      Damage: ["150%", "158%", "166%", "186%", "194%", "202%", "210%", "240%"],
      "Infliction Chance": ["40%", "40%", "40%", "50%", "50%", "50%", "50%", "65%"]
    },
    sereneBreeze: {
      TP: ["6", "6", "22", "18", "14", "19"],
      Speed: ["60%", "80%", "40%", "45%", "50%", "90%"],
      Duration: ["3", "3", "2", "2", "2", "3"],
      Range: ["Single", "Single", "Self Row", "Self Row", "Self Row", "Self Row"]
    },
    blurredVeil: {
      TP: ["6", "6", "6", "12", "12", "12", "12", "18"],
      Speed: ["500%", "500%", "500%", "500%", "500%", "500%", "500%", "500%"],
      Evasion: ["+50%", "+54%", "+58%", "+70%", "+74%", "+76%", "+80%", "+105%"],
      // "Evasion Per Dodge": ["-25%", "-25%", "-25%", "-30%", "-30%", "-30%", "-30%", "-35%"]
      "Evasion Per Dodge": ["-15%", "-15%", "-15%", "-20%", "-20%", "-20%", "-20%", "-25%"]
    },
    riskPerception: {
      Chance: ["35%", "41%", "47%", "53%", "59%", "75%"]
    },
    resuscitate: {
      TP: ["2", "2", "2", "2", "2", "3"],
      "Static Restore": ["50", "60", "70", "80", "90", "200"],
      "Revive HP": ["0", "0", "0", "1", "50", "150"]
    },
    mistStep: {
      "Force Restore": ["1%", "2%", "3%", "4%", "5%", "6%", "7%", "10%"]
    },
    flankShot: {
      TP: ["9", "9", "9", "13", "13", "13", "13", "18"],
      Speed: ["75%", "75%", "75%", "75%", "75%", "75%", "75%", "75%"],
      Accuracy: ["-5%", "-5%", "-5%", "-5%", "-5%", "-5%", "-5%", "-5%"],
      //Damage: ["215%", "223%", "231%", "266%", "274%", "282%", "290%", "350%"]
      Damage: ["160%", "170%", "180%", "200%", "210%", "220%", "230%", "260%"],
      "Max Damage": ["270%", "280%", "290%", "330%", "340%", "350%", "360%", "440%"],
      "Infliction Chance": ["35%", "36%", "37%", "42%", "43%", "44%", "45%", "50%"]
    },
    finishingArrow: {
      Threshold: ["10%", "12%", "14%", "16%", "18%", "20%", "22%", "30%"],
      Damage: ["100%", "104%", "108%", "119%", "123%", "127%", "131%", "150%"]
    },
    multiShot: {
      TP: ["7", "7", "7", "12", "12", "12", "12", "22"],
      Speed: ["85%", "85%", "85%", "85%", "85%", "85%", "85%", "85%"],
      Accuracy: ["-5%", "-5%", "-5%", "-5%", "-5%", "-5%", "-5%", "-5%"],
      Damage: ["150%", "155%", "160%", "190%", "195%", "200%", "210%", "210%"],
      "Hits": ["2", "2", "2", "2", "2", "2", "2", "3"]
    },
    dropShot: {
      TP: ["6", "6", "6", "9", "9", "9", "9", "13"],
      Speed: ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
      Accuracy: ["+5%", "+5%", "+5%", "+5%", "+5%", "+5%", "+5%", "+5%"],
      Damage: ["180%", "188%", "196%", "221%", "231%", "241%", "251%", "300%"],
      "Backrow Damage": ["x3", "x3", "x3", "x3", "x3", "x3", "x3", "x3"]
    },
    naturesCloak: {
      //Evasion: ["+10%", "+13%", "+16%", "+19%", "+22%", "+25%", "+28%", "+35%"],
      //Evasion: ["+4%", "+6%", "+8%", "+10%", "+13%", "+15%", "+17%", "+19%", "+21%", "+25%"],
      Evasion: ["+5%", "+7%", "+10%", "+19%", "+21%", "+23%", "+25%", "+35%"],
      //"Damage Taken": ["100%", "100%", "100%", "115%", "115%", "115%", "115%", "125%"]
      "Damage Taken": ["105%", "110%", "115%", "120%", "125%", "130%", "135%", "150%"]
    },
    stalker: {
      TP: ["8", "8", "8", "8", "8", "14"],
      Danger: ["x0.5", "x0.45", "x0.4", "x0.35", "x0.3", "x0.15"],
      Duration: ["80", "100", "120", "140", "160", "255"]
    },
    efficiency: {
      TP: ["5", "5", "5", "10"],
      Speed: ["90%", "90%", "90%", "90%"],
      Restore: ["x1.05", "x1.15", "x1.25", "x2"]
    },
    sylphid: {
      Accuracy: ["+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%"],
      Damage: ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
      //Damage: ["75%", "80%", "85%", "95%", "100%", "105%", "110%", "130%"],
      "Chance": ["22%", "26%", "30%", "34%", "38%", "42%", "46%", "50%"],
      "Max Attacks": ["2", "2", "2", "3", "3", "3", "3", "4"]
    },
    swapStep: {
      TP: ["14", "14", "14", "16", "16", "16", "16", "20"],
      "Chance": ["50%", "55%", "60%", "65%", "70%", "75%", "80%", "100%"]
    },
    disablingShot: {
      "Infliction Chance": ["10%", "12%", "14%", "16%", "18%", "20%", "22%", "25%"]
    },
    sagittariusShot: {
      TP: ["14", "14", "14", "18", "18", "18", "18", "23"],
      Accuracy: ["+30%", "+30%", "+30%", "+30%", "+30%", "+30%", "+30%", "+30%"],
      Damage: ["520%", "540%", "560%", "640%", "620%", "680%", "700%", "800%"],
      "Infliction Chance": ["40%", "40%", "40%", "55%", "55%", "55%", "55%", "70%"]
    },
    hazyShot: {
      TP: ["12", "12", "12", "12", "12", "18"],
      Speed: ["200%", "200%", "200%", "200%", "200%", "200%"],
      Damage: ["500%", "560%", "620%", "680%", "740%", "900%"]
    },
    scapegoat: {
      TP: ["7", "7", "7", "12", "12", "12", "12", "18"],
      Redirects: ["1", "1", "1", "2", "2", "2", "2", "3"],
      "Damage Taken": ["95%", "93%", "91%", "87%", "85%", "83%", "81%", "75%"]
    },
    rayOfLight: {
      "Aggro": ["3%", "3%", "4%", "4%", "4%", "5%"],
      Defense: ["+4%", "+4%", "+5%", "+6%", "+7%", "+8%"],
      "Stacks": ["1", "2", "3", "4", "5", "6"],
      "Max Aggro": ["3%", "6%", "12%", "16%", "20%", "30%"],
      "Max Defense": ["+4%", "+8%", "+15%", "+24%", "+35%", "+48%"],
    },
    autoSagittarius: {
      Chance: ["20%", "26%", "32%", "38%", "44%", "67%"]
    }
  },
  Ninja: {
    insolence: {
      Speed: ["x3.5"],
      Evasion: ["+20%"]
    },
    ninpoPoisonMist: {
      "Infliction Chance": ["1000%", "1000%", "1000%"],
      "Base Poison Damage": ["100", "200", "300"]
    },
    ninpoScorpio: {
      "*TP": ["5", "5", "5", "9", "9", "9", "9", "15"],
      Speed: ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
      Accuracy: ["-6%", "-6%", "-6%", "-6%", "-6%", "-6%", "-6%", "-6%"],
      Damage: ["60%", "65%", "70%", "95%", "100%", "105%", "110%", "150%"],
      "*Infliction Chance": ["25%", "25%", "25%", "35%", "35%", "35%", "35%", "45%"],
      "Base Poison Damage": ["25", "30", "35", "45", "50", "55", "60", "90"],
      "Enemies Hit": ["3", "3", "3", "4", "4", "4", "4", "5"]
    },
    ninpoNeedles: {
      TP: ["4", "4", "4", "4", "4", "9"],
      Speed: ["500%", "500%", "500%", "500%", "500%", "500%"],
      Damage: ["40%", "50%", "60%", "70%", "80%", "100%"],
      "Infliction Chance": ["30%", "35%", "40%", "45%", "50%", "60%"],
      "Max Counterattacks": ["9", "9", "9", "9", "9", "9"]
    },
    shadowBind: {
      TP: ["4", "4", "4", "7", "7", "7", "7", "12"],
      Speed: ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
      Accuracy: ["±0%", "±0%", "±0%", "±0%", "±0%", "±0%", "±0%", "±0%"],
      Damage: ["150%", "155%", "160%", "185%", "190%", "195%", "200%", "230%"],
      "Infliction Chance": ["45%", "45%", "45%", "55%", "55%", "55%", "55%", "70%"]
    },
    acrobatics: {
      "Static Restore": ["1", "2", "3", "3", "4", "5", "6", "6"],
      "Percent Restore": ["0%", "0%", "0%", "1%", "1%", "1%", "1%", "2%"]
    },
    ninpoFlight: {
      TP: ["5", "5", "5", "13", "13", "13", "13", "21"],
      Speed: ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
      // Evasion: ["+55%", "+60%", "+65%", "+90%", "+96%", "+102%", "+108%", "+140%"],
      // "Evasion Per Dodge": ["-11%", "-12%", "-13%", "-18%", "-19.2%", "-20.4%", "-21.6%", "-28%"]
      "HP Cost": ["10%", "10%", "10%", "30%", "30%", "30%", "30%", "50%"],
      Evasion: ["+20.8%", "+21.6%", "+22.4%", "+27.8%", "+28.6%", "+29.4%", "+30.2%", "+55%"],
      Aggro: ["+25%", "+30%", "+35%", "+40%", "+45%", "+50%", "+55%", "+70%"]
    },
    ninpoMirage: {
      TP: ["4", "4", "4", "4", "4", "10"],
      Speed: ["75%", "75%", "75%", "75%", "75%", "75%"],
      "Decoy HP": ["30%", "40%", "50%", "60%", "70%", "100%"],
      "Decoy Stats": ["50%", "60%", "70%", "80%", "90%", "120%"],
      //"Decoy Evasion": ["+25%", "+29%", "+33%", "+37%", "+41%", "+50%"],
      "Decoy Evasion": ["+35%", "+40%", "+45%", "+50%", "+55%", "+65%"],
      "Decoy Aggro": ["+50%", "+50%", "+50%", "+50%", "+50%", "+50%"]
    },
    phantomKnives: {
      TP: ["6", "6", "6", "11", "11", "11", "11", "17"],
      Speed: ["85%", "85%", "85%", "85%", "85%", "85%", "85%", "85%"],
      Accuracy: ["±0%", "±0%", "±0%", "±0%", "±0%", "±0%", "±0%", "±0%"],
      Damage: ["90%", "100%", "110%", "130%", "140%", "150%", "160%", "200%"],
      "Debuff": ["-9.5%", "-11%", "-12.5%", "-14%", "-15.5%", "-17%", "-18.5%", "-20%"]
    },
    ninpoMirror: {
      TP: ["6", "6", "6", "6", "6", "10"],
      Speed: ["70%", "70%", "70%", "70%", "70%", "70%"],
      "Infliction Chance": ["40%", "44%", "48%", "52%", "56%", "70%"]
    },
    foxDrop: {
      TP: ["13", "13", "13", "16", "16", "16", "16", "20"],
      Speed: ["70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%"],
      Accuracy: ["-5%", "-5%", "-5%", "-5%", "-5%", "-5%", "-5%", "-5%"],
      Damage: ["170%", "178%", "186%", "211%", "219%", "227%", "235%", "280%"],
      "Infliction Chance": ["25%", "25%", "25%", "32%", "32%", "32%", "32%", "40%"]
    },
    hawkStrike: {
      TP: ["6", "6", "6", "11", "11", "11", "11", "20"],
      //TP: ["8", "8", "8", "13", "13", "13", "13", "20"],
      Speed: ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
      Accuracy: ["-5%", "-5%", "-5%", "-5%", "-5%", "-5%", "-5%", "-5%"],
      Damage: ["100%", "105%", "110%", "110%", "120%", "130%", "140%", "150%"],
      //Damage: ["120%", "126%", "132%", "132%", "138%", "144%", "150%", "150%"],
      "Minimum Hits": ["2", "2", "2", "2", "2", "2", "2", "3"],
      "Maximum Hits": ["3", "3", "3", "4", "4", "4", "4", "5"]
    },
    selfDestruct: {
      TP: ["7", "7", "7", "15", "15", "15", "15", "24"],
      Speed: ["20%", "20%", "20%", "20%", "20%", "20%", "20%", "20%"],
      Accuracy: ["+50%", "+50%", "+50%", "+50%", "+50%", "+50%", "+50%", "+50%"],
      Damage: ["300%", "350%", "400%", "500%", "550%", "600%", "650%", "800%"]
    },
    ninpoClone: {
      TP: ["5", "5", "5", "10", "10", "10", "10", "30"],
      "HP Cost": ["70%", "69%", "68%", "63%", "62%", "61%", "60%", "50%"],
      "TP Cost": ["70%", "69%", "68%", "63%", "62%", "61%", "60%", "50%"],
      Speed: ["300%", "300%", "300%", "300%", "300%", "300%", "300%", "300%"]
    },
    reprisal: {
      TP: ["12", "12", "12", "18", "18", "18", "18", "24"],
      Speed: ["75%", "75%", "75%", "75%", "75%", "75%", "75%", "75%"],
      Accuracy: ["-3%", "-3%", "-3%", "-3%", "-3%", "-3%", "-3%", "-3%"],
      "Damage Per Dodge": ["170%", "180%", "190%", "200%", "210%", "220%", "230%", "240%"],
      "Stacks": ["3", "3", "3", "4", "4", "4", "4", "5"],
      "Max Damage": ["510%", "540%", "570%", "800%", "840%", "880%", "920%", "1200%"]
    },
    autoClone: {
      Chance: ["10%", "20%", "30%", "40%", "50%", "60%", "70%", "80%", "90%", "100%"]
    },
    autoMirage: {
      Chance: ["25%", "30%", "40%", "53%", "67%", "100%"]
    },
    quietus: {
      TP: ["11", "11", "11", "16", "16", "16", "16", "21"],
      Speed: ["20%", "20%", "20%", "20%", "20%", "20%", "20%", "20%"],
      Accuracy: ["+5%", "+5%", "+5%", "+5%", "+5%", "+5%", "+5%", "+5%"],
      Damage: ["310%", "320%", "330%", "380%", "390%", "400%", "410%", "500%"],
      "Without Ailment": ["20%", "20%", "20%", "25%", "25%", "25%", "25%", "30%"],
      "With Ailment": ["35%", "35%", "35%", "47%", "47%", "47%", "47%", "60%"]
    },
    shadowstrike: {
      Chance: ["25%", "30%", "35%", "42%", "49%", "65%"]
    },
    eyeForAnEye: {
      "Infliction Chance": ["x1.07", "x1.1", "x1.13", "x1.16", "x1.19", "x1.22", "x1.25", "x1.35"]
    },
    lure: {
      TP: ["12", "12", "12", "17", "17", "17", "17", "24"],
      "Ally Damage": ["100%", "110%", "120%", "140%", "150%", "160%", "170%", "200%"]
    },
    ninpoShock: {
      TP: ["7", "7", "7", "11", "11", "11", "11", "16"],
      Speed: ["70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%"],
      "Infliction Chance": ["28%", "29%", "30%", "32%", "34%", "36%", "38%", "45%"]
    },
    fallingBloom: {
      TP: ["17", "17", "17", "23", "23", "23", "23", "28"],
      Speed: ["50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%"],
      Accuracy: ["-100%", "-100%", "-100%", "-100%", "-100%", "-100%", "-100%", "-100%"],
      Damage: ["450%", "470%", "490%", "610%", "640%", "670%", "700%", "900%"]
    },
    schadenfreude: {
      TP: ["9", "9", "9", "14", "14", "14", "14", "19"],
      Speed: ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
      Damage: ["220%", "230%", "240%", "275%", "285%", "295%", "305%", "360%"],
      "Force Restore": ["+10%", "+11%", "+12%", "+15%", "+16%", "+17%", "+18%", "+25%"]
    },
    drawingSlice: {
      TP: ["18", "18", "18", "24", "24", "24", "24", "30"],
      Speed: ["10%", "10%", "10%", "10%", "10%", "10%", "10%", "10%"],
      Accuracy: ["-5%", "-5%", "-5%", "-5%", "-5%", "-5%", "-5%", "-5%"],
      Damage: ["120%", "126%", "132%", "132%", "138%", "144%", "150%", "150%"],
      "Minimum Hits": ["4", "4", "4", "4", "4", "4", "4", "5"],
      "Maximum Hits": ["5", "5", "5", "6", "6", "6", "6", "7"]
    }
  },



};
