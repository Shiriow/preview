let levels = {


  Protectorv2: {
    shieldProtect: {
      "Damage Taken": ["50%"],
      "Aggro": ["+60%"]
    },
    fireCircle: {
      TP: ["4", "4", "4", "4", "4", "9"],
      "Damage Taken": ["80%", "77%", "74%", "71%", "68%", "55%"]
    },
    iceCircle: {
      TP: ["4", "4", "4", "4", "4", "9"],
      "Damage Taken": ["80%", "77%", "74%", "71%", "68%", "55%"]
    },
    voltCircle: {
      TP: ["4", "4", "4", "4", "4", "9"],
      "Damage Taken": ["80%", "77%", "74%", "71%", "68%", "55%"]
    },
    cellDivide: {
      TP: ["3", "3", "5", "5", "5", "7"],
      "Damage Taken": ["92%", "89%", "81%", "78%", "72%", "65%"]
    },
    shieldSmite: {
      TP: ["5", "5", "7", "7", "7", "10"],
      Speed: ["150%", "150%", "150%", "150%", "150%", "150%"],
      Damage: ["230%", "250%", "295%", "315%", "335%", "400%"]
    },
    shieldRush: {
      TP: ["7", "7", "7", "7", "13", "13", "13", "13", "13", "21"],
      Speed: ["60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%"],
      Damage: ["180%", "187%", "194%", "201%", "226%", "233%", "240%", "247%", "254%", "300%"],
      "Damage Taken": ["92%", "92%", "92%", "92%", "87%", "87%", "87%", "87%", "87%", "80%"],
      Turns: ["3", "3", "3", "3", "3", "3", "3", "3", "3", "3"]
    },
    provoke: {
      TP: ["3", "3", "3", "5", "5", "5", "5", "9"],
      Speed: ["120%", "120%", "120%", "150%", "150%", "150%", "150%", "200%"],
      //"Damage Taken": ["97%", "96%", "94%", "94%", "93%", "91%", "90%", "90%"],
      "Damage Taken": ["79%", "76%", "73%", "74%", "71%", "69%", "67%", "67%"],
      Aggro: ["+25%", "+30%", "+35%", "+35%", "+40%", "+45%", "+50%", "+50%"],
      Duration: ["3", "3", "3", "4", "4", "4", "4", "5"]
    },
    preProvoke: {
      Chance: ["25%", "30%", "35%", "42%", "49%", "65%"]
    },
    healingWall: {
      "Static Restore": ["7", "8", "9", "10", "11", "12", "13", "18"],
      "Percent Restore": ["4%", "5%", "6%", "7%", "8%", "9%", "10%", "15%"]
    },
    aegis: {
      Chance: ["20%", "30%", "40%", "50%", "60%", "70%", "80%", "100%"]
    },
    shieldBreak: {
      TP: ["10", "10", "10", "20", "20", "20", "20", "32"],
      Speed: ["50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%"],
      Damage: ["350%", "375%", "400%", "450%", "475%", "500%", "525%", "600%"],
      "Recoil": ["20%", "20%", "20%", "35%", "35%", "35%", "35%", "50%"]
    },
    shieldSiphon: {
      TP: ["8", "8", "14", "14", "14", "22"],
      Speed: ["200%", "200%", "200%", "200%", "200%", "200%"],
      Damage: ["110%", "120%", "140%", "150%", "160%", "200%"],
      "Percent Restore": ["10%", "10%", "20%", "20%", "20%", "35%"]
    },
    shieldTaboo: {
      TP: ["8", "8", "14", "14", "14", "22"],
      Speed: ["200%", "200%", "200%", "200%", "200%", "200%"],
      Damage: ["110%", "120%", "140%", "150%", "160%", "200%"],
      Duration: ["1", "1", "1", "1", "1", "2"]
    },
    swordbreaker: {
      Chance: ["10%", "12%", "14%", "16%", "18%", "20%", "22%", "25%"],
      "Damage Taken": ["75%", "75%", "75%", "75%", "75%", "75%", "75%", "75%"]
    },
    hpUp: {
      TP: ["13", "13", "18", "18", "18", "22"],
      Damage: ["500%", "520%", "600%", "620%", "640%", "700%"],
      "Damage Reduction": ["50%", "55%", "60%", "65%", "70%", "75%"]
    },
    autoguard: {
      Chance: ["12%", "14%", "16%", "18%", "20%", "22%", "24%", "26%", "28%", "40%"],
      "Damage Taken": ["75%", "75%", "75%", "75%", "75%", "75%", "75%", "75%", "75%", "75%"]
    },
    shieldFlare: {
      TP: ["10", "10", "10", "18", "18", "18", "18", "26"],
      Accuracy: ["+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%"],
      Damage: ["240%", "255%", "270%", "285%", "300%", "315%", "330%", "400%"]
    },
    shieldOath: {
      TP: ["4", "4", "4", "8", "8", "8", "8", "13"],
      Speed: ["125%", "125%", "125%", "175%", "175%", "175%", "175%", "250%"],
      "Damage Taken": ["95%", "93%", "91%", "91%", "89%", "87%", "85%", "80%"],
      Duration: ["3", "3", "3", "3", "3", "3", "3", "3"]
    },
    swordOath: {
      TP: ["4", "4", "4", "8", "8", "8", "8", "13"],
      Speed: ["125%", "125%", "125%", "175%", "175%", "175%", "175%", "250%"],
      "Damage Dealt": ["+7%", "+10%", "+13%", "+13%", "+17%", "+21%", "+25%", "+25%"],
      Duration: ["3", "3", "3", "3", "3", "3", "3", "3"]
    },
    regenOath: {
      TP: ["8", "8", "8", "13", "13", "13", "13", "20"],
      Speed: ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
      "Healing Power": ["35%", "44%", "53%", "53%", "62%", "71%", "80%", "80%"],
      Duration: ["3", "3", "3", "3", "3", "3", "3", "3"]
    },
    clemency: {
      TP: ["8", "8", "8", "13", "13", "13", "13", "20"],
      Speed: ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
      "Healing Power": ["35%", "44%", "53%", "53%", "62%", "71%", "80%", "80%"]
    },
    bullCharge: {
      TP: ["8", "8", "8", "13", "13", "13", "13", "20"],
      Speed: ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
      "Damage Dealt": ["+17%", "+20%", "+23%", "+23%", "+27%", "+31%", "+35%", "+35%"],
      "Damage Taken": ["85%", "83%", "81%", "81%", "79%", "77%", "75%", "75%"]
    },
    cover: {
      Chance: ["16%", "19%", "22%", "25%", "28%", "31%", "34%", "37%"]
    },
    firelight: {
      Damage: ["110%", "120%", "140%", "150%", "160%", "200%"],
    },
    lightTincture: {
      TP: ["6", "6", "6", "12", "12", "12", "12", "22"],
      "Chance": ["70%", "80%", "90%", "100%", "100%", "100%", "100%", "100%"],
      "Chance Reduction": ["100%", "100%", "100%", "80%", "70%", "60%", "50%", "35%"]
    },
    counterOath: {
      TP: ["7", "7", "7", "12", "12", "12", "12", "18"],
      Damage: ["75%", "80%", "85%", "85%", "90%", "95%", "100%", "100%"],
      //"Chance Reduction": ["-25%", "-25%", "-25%", "-15%", "-15%", "-15%", "-15%", "0%"]
      "Chance Reduction": ["-15%", "-15%", "-15%", "-15%", "-15%", "-15%", "-15%", "-15%"],
      Duration: ["3", "3", "3", "3", "3", "3", "3", "3"]
    }
  },

  Landsknecht: {
    trinity: {
      "Damage Dealt": ["x1.4"],
      Speed: ["x3"],
      Accuracy: ["+50%"]
    },
    fullCharge: {
      "Damage Dealt": ["x3"],
      Speed: ["x40"]
    },
    proficiency: {
      "Damage Dealt": ["+3%", "+4%", "+5%", "+10%"],
      Accuracy: ["+5%", "+6%", "+7%", "+10%"]
    },
    sonicRaid: {
      TP: ["4", "4", "4", "7", "7", "7", "7", "15"],
      Accuracy: ["+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%"],
      Damage: ["150%", "155%", "160%", "195%", "200%", "205%", "210%", "280%"]
    },
    blazingLink: {
      TP: ["4", "4", "9", "9", "9", "14"],
      Speed: ["125%", "125%", "125%", "125%", "125%", "125%"],
      Accuracy: ["±0%", "±0%", "±0%", "±0%", "±0%", "±0%"],
      //Damage: ["110%", "120%", "130%", "130%", "140%", "150%", "160%", "160%"],
      Damage: ["80%", "85%", "90%", "100%", "105%", "115%"],
      "Follow-Up Damage": ["30%", "32%", "34%", "36%", "38%", "40%"],
      //Chance: ["-10%", "-10%", "-5%", "-5%", "-5%", "0%"],
      //Chance: ["-15%", "-15%", "-10%", "-10%", "-10%", "-5%"],
      //Chance: ["-30%", "-30%", "-30%", "-25%", "-25%", "-25%", "-25%", "-20%"]
      "Break Debuff Damage": ["x1.25", "x1.25", "x1.25", "x1.25", "x1.25", "x1.25"]
    },
    freezingLink: {
      TP: ["4", "4", "4", "9", "9", "9", "9", "14"],
      Speed: ["125%", "125%", "125%", "125%", "125%", "125%", "125%", "125%"],
      Accuracy: ["±0%", "±0%", "±0%", "±0%", "±0%", "±0%", "±0%", "±0%"],
      //Damage: ["110%", "120%", "130%", "130%", "140%", "150%", "160%", "160%"],
      Damage: ["80%", "85%", "90%", "95%", "100%", "105%", "110%", "115%"],
      "Follow-Up Damage": ["30%", "32%", "34%", "34%", "36%", "38%", "40%", "40%"],
      Chance: ["-15%", "-15%", "-15%", "-10%", "-10%", "-10%", "-10%", "-5%"]
    },
    electricLink: {
      TP: ["4", "4", "4", "9", "9", "9", "9", "14"],
      Speed: ["125%", "125%", "125%", "125%", "125%", "125%", "125%", "125%"],
      Accuracy: ["±0%", "±0%", "±0%", "±0%", "±0%", "±0%", "±0%", "±0%"],
      //Damage: ["110%", "120%", "130%", "130%", "140%", "150%", "160%", "160%"],
      Damage: ["80%", "85%", "90%", "95%", "100%", "105%", "110%", "115%"],
      "Follow-Up Damage": ["30%", "32%", "34%", "34%", "36%", "38%", "40%", "40%"],
      Chance: ["-15%", "-15%", "-15%", "-10%", "-10%", "-10%", "-10%", "-5%"]
    },
    vanguard: {
      TP: ["3", "3", "3", "3", "3", "7", "7", "7", "7", "7"],
      Speed: ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
      "Damage Dealt": ["+10%", "+12%", "+15%", "+17%", "+20%", "+30%", "+30%", "+30%", "+30%", "+30%"],
      "Damage Taken": ["85%", "83%", "81%", "79%", "77%", "75%", "75%", "75%", "75%", "75%"],
      "Speed Increase": ["x4", "x5", "x6", "x7", "x8", "x20", "x20", "x20", "x20", "x20"],
      Duration: ["3", "3", "3", "3", "3", "5", "5", "5", "5", "5"],
      Chance: ["0%", "0%", "0%", "0%", "0%", "0%", "33%", "39%", "46%", "66%"]
    },
    physDefUp: {
      "Damage Taken": ["96%", "95%", "94%", "91%", "90%", "89%", "88%", "85%"]
    },
    doubleStrike: {
      TP: ["7", "7", "7", "10", "10", "10", "10", "14"],
      Speed: ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
      Accuracy: ["±0%", "±0%", "±0%", "±0%", "±0%", "±0%", "±0%", "±0%"],
      Damage: ["140%", "145%", "150%", "165%", "170%", "175%", "180%", "210%"]
    },
    penetrate: {
      TP: ["10", "10", "10", "15", "15", "15", "15", "20"],
        Speed: ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
      Accuracy: ["-5%", "-5%", "-5%", "-5%", "-5%", "-5%", "-5%", "-5%"],
      Damage: ["240%", "248%", "256%", "286%", "294%", "301%", "310%", "360%"],
      "Splash Damage": ["x0.5", "x0.5", "x0.5", "x0.5", "x0.5", "x0.5", "x0.5", "x0.5"]
    },
    spiralSlice: {
      TP: ["8", "8", "8", "12", "12", "12", "12", "16"],
      Speed: ["125%", "125%", "125%", "125%", "125%", "125%", "125%", "125%"],
      Accuracy: ["+5%", "+5%", "+5%", "+5%", "+5%", "+5%", "+5%", "+5%"],
      Damage: ["255%", "264%", "273%", "303%", "312%", "321%", "330%", "385%"]
    },
    improvedLink: {
      TP: ["7", "7", "7", "12"],
      Speed: ["80%", "80%", "80%", "80%"],
      "Added Follow-Ups": ["1", "2", "3", "5"],
      //Chance: ["+6%", "+8%", "+10%", "+15%"],
      Duration: ["3", "3", "3", "3"]
    },
    linkSmash: {
      Chance: ["7%", "8%", "9%", "10%", "14%", "15%", "16%", "17%", "18%", "25%"]
    },
    powerBreak: {
      // TP: ["5", "5", "5", "5", "5", "10"],
      // Speed: ["50%", "50%", "50%", "50%", "50%", "50%"],
      // Accuracy: ["92%", "92%", "92%", "92%", "92%", "92%"],
      // Damage: ["150%", "160%", "170%", "180%", "190%", "240%"],
      // "Damage Taken": ["93%", "92%", "91%", "90%", "89%", "85%"],
      // Duration: ["3", "3", "3", "3", "3", "3"]
      TP: ["4", "4", "9", "9", "9", "14"],
      Speed: ["125%", "125%", "125%", "125%", "125%", "125%"],
      Accuracy: ["±0%", "±0%", "±0%", "±0%", "±0%", "±0%"],
      Damage: ["164%", "173%", "212%", "221%", "230%", "285%"]
    },
    guardBreak: {
      TP: ["5", "5", "5", "5", "5", "10"],
      Speed: ["50%", "50%", "50%", "50%", "50%", "50%"],
      Accuracy: ["92%", "92%", "92%", "92%", "92%", "92%"],
      Damage: ["150%", "160%", "170%", "180%", "190%", "240%"],
      "Follow-Up Chance": ["40%", "42%", "54%", "56%", "58%", "75%"]
    },
    speedBreak: {
      TP: ["5", "5", "5", "5", "5", "10"],
      Speed: ["50%", "50%", "50%", "50%", "50%", "50%"],
      Accuracy: ["92%", "92%", "92%", "92%", "92%", "92%"],
      Damage: ["150%", "158%", "166%", "174%", "182%", "220%"],
      "Follow-Up Chance": ["40%", "42%", "54%", "56%", "58%", "75%"]
    },
    initiative: {
      "Damage Dealt": ["+7%", "+10%", "+13%", "+20%"],
      Accuracy: ["+4%", "+5%", "+6%", "+10%"]
    },
    fullBreak: {
      // TP: ["10", "10", "10", "14", "14", "14", "14", "18"],
      // Speed: ["50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%"],
      // Accuracy: ["85%", "85%", "85%", "85%", "85%", "85%", "85%", "85%"],
      // Damage: ["140%", "150%", "160%", "170%", "180%", "190%", "200%", "250%"],
      // "Break Debuff Damage": ["x2.25", "x2.25", "x2.25", "x2.25", "x2.25", "x2.25", "x2.25", "x2.25"]
      TP: ["4", "4", "9", "9", "9", "14"],
      Speed: ["125%", "125%", "125%", "125%", "125%", "125%"],
      Accuracy: ["±0%", "±0%", "±0%", "±0%", "±0%", "±0%"],
      Damage: ["80%", "85%", "90%", "100%", "105%", "115%"],
      "Follow-Up Damage": ["30%", "32%", "34%", "36%", "38%", "40%"],
      Chance: ["-15%", "-15%", "-10%", "-10%", "-10%", "-5%"],
      "Damage Taken": ["93%", "92%", "91%", "90%", "89%", "85%"],
      "Damage Dealt": ["+10%", "+12%", "+14%", "+16%", "+18%", "+25%"],
      Evasion: ["-10%", "-11%", "-12%", "-13%", "-14%", "-20%"],
      "Enemy Speed": ["x0.85", "x0.835", "x0.8", "x0.775", "x0.75", "x0.5"]
    },
    swordTempest: {
      TP: ["13", "13", "13", "18", "18", "18", "18", "24"],
      Speed: ["50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%"],
      Accuracy: ["-40%", "-40%", "-40%", "-40%", "-40%", "-40%", "-40%", "-40%"],
      Damage: ["350%", "363%", "376%", "426%", "439%", "452%", "465%", "560%"],
      "AoE Damage": ["150%", "161%", "176%", "226%", "239%", "252%", "265%", "360%"]
    },
    swiftStab: {
      TP: ["9", "9", "9", "14", "14", "14", "14", "21"],
      Speed: ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
      Accuracy: ["-10%", "-10%", "-10%", "-10%", "-10%", "-10%", "-10%", "-10%"],
      Damage: ["135%", "141%", "147%", "147%", "153%", "159%", "165%", "165%"],
      "Minimum Hits": ["2", "2", "2", "2", "2", "2", "2", "3"],
      "Maximum Hits": ["3", "3", "3", "4", "4", "4", "4", "4"]
    },
    linkMastery: {
      "Damage Dealt": ["+4%", "+5%", "+6%", "+7%", "+8%", "+9%", "+10%", "+11%", "+12%", "+15%"],
      "Max Damage Dealt": ["+99%", "+99%", "+99%", "+99%", "+99%", "+99%", "+99%", "+99%", "+99%", "+99%"]
    },
    linkEnd: {
      TP: ["10", "10", "10", "10", "10", "16"],
      Speed: ["70%", "70%", "70%", "70%", "70%", "70%"],
      Accuracy: ["+10%", "+10%", "+10%", "+10%", "+10%", "+10%"],
      Damage: ["130%", "138%", "146%", "154%", "162%", "200%"],
      "Damage Per Link": ["+30%", "+30%", "+30%", "+30%", "+30%", "+30%"],
      "Max Damage": ["490%", "516%", "542%", "568%", "594%", "740%"],
      "Break Debuff Damage": ["x1.25", "x1.25", "x1.25", "x1.25", "x1.25", "x1.25", "x1.25", "x1.25"]
    },
    sylphScreen: {
    },
    singleDevote: {
    }
  },
  Vampire: {
    deathMarch: {
      "Damage Per Hit": ["200%", "400%", "600%"]
    },
    drainBite: {
      TP: ["4", "4", "4", "8", "8", "8", "8", "14"],
      Speed: ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
      Accuracy: ["±0%", "±0%", "±0%", "±0%", "±0%", "±0%", "±0%", "±0%"],
      Damage: ["160%", "168%", "176%", "211%", "219%", "227%", "235%", "280%"],
      "Static Restore": ["10", "15", "20", "25", "30", "35", "40", "50"],
      "Percent Restore": ["10%", "12%", "14%", "22%", "24%", "26%", "28%", "35%"],
      "Overheal": ["10%", "12%", "14%", "22%", "26%", "30%", "34%", "40%"]
    },
    iceVein: {
      "Force Recovered": ["5%", "6%", "7%", "8%", "9%", "10%"]
    },
    lifeSiphon: {
      TP: ["6", "6", "6", "11", "11", "11", "11", "17"],
      Speed: ["120%", "120%", "120%", "120%", "120%", "120%", "120%", "120%"],
      Accuracy: ["+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%"],
      Damage: ["120%", "125%", "130%", "180%", "185%", "190%", "195%", "260%"],
    },
    metamorphosis: {
      TP: ["15", "15", "15", "22", "22", "22", "22", "30"],
      Speed: ["30%", "40%", "50%", "60%", "70%", "80%", "90%", "100%"],
      Accuracy: ["+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%"],
      "HP Cost": ["25%", "25%", "25%", "30%", "30%", "30%", "30%", "35%"],
      Damage: ["280%", "292%", "304%", "344%", "356%", "368%", "380%", "450%"]
    },
    bloodPact: {
      TP: ["4", "4", "4", "8", "8", "8", "8", "13"],
      Speed: ["60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%"],
      // "Max Blocks": ["3", "3", "3", "4", "4", "4", "4", "5"],
      // "Chance Reduction": ["35%", "33%", "31%", "27%", "25%", "23%", "21%", "15%"],
      // Duration: ["3", "3", "3", "4", "4", "4", "4", "5"]
      "Max Blocks": ["1", "1", "1", "2", "2", "2", "2", "2"],
      "Chance Reduction": ["100%", "100%", "100%", "50%", "45%", "40%", "35%", "15%"],
      "Damage Taken": ["95%", "92%", "89%", "81%", "78%", "75%", "72%", "65%"],
      Duration: ["3", "3", "3", "3", "3", "3", "3", "4"]
    },
    bareFangs: {
      TP: ["4", "4", "4", "7", "7", "7", "7", "13"],
      Damage: ["150%", "158%", "166%", "186%", "194%", "202%", "210%", "240%"],
      "Static Restore": ["6", "8", "10", "14", "16", "18", "20", "30"],
      "Percent Restore": ["6%", "8%", "10%", "12%", "14%", "16%", "18%", "25%"],
      Aggro: ["+25%", "+26.5%", "+28.5%", "+35%", "+37%", "+39%", "+41%", "+50%"]
    },
    crimsonShower: {
      TP: ["6", "6", "6", "9", "9", "9", "9", "15"],
      "Static Restore": ["7", "8", "9", "10", "11", "12", "13", "18"],
      "Percent Restore": ["4%", "5%", "6%", "7%", "8%", "9%", "10%", "15%"],
      Aggro: ["+25%", "+26.5%", "+28.5%", "+35%", "+37%", "+39%", "+41%", "+50%"]
    },
    rebirthRitual: {
      "Static Restore": ["1", "2", "3", "4"],
      "Percent Restore": ["1%", "1%", "1%", "2%"]
    },
    bloodyCatastrophe: {
      TP: ["8", "8", "8", "13", "13", "13", "13", "22"],
      "Damage Taken": ["85%", "85%", "85%", "80%", "80%", "80%", "80%", "75%"],
      Damage: ["150%", "160%", "170%", "190%", "200%", "210%", "220%", "260%"],
      "Damage Multiplier": ["1.25x", "1.25x", "1.25x", "1.25x", "1.25x", "1.25x", "1.25x", "1.25x"],
      "Damage Cap": ["450%", "480%", "510%", "570%", "600%", "630%", "660%", "780%"]
    },
    transfusion: {
      TP: ["7", "7", "7", "12", "12", "12", "12", "18"],
      Speed: ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
      "HP Cost": ["15%", "15%", "15%", "25%", "25%", "25%", "25%", "35%"],
      "Static Restore": ["7", "8", "9", "10", "11", "12", "13", "18"],
      "Percent Restore": ["20%", "21%", "22%", "25%", "26%", "27%", "28%", "35%"]
    },
    phlebotomy: {
      TP: ["15", "21", "27", "33", "39", "45", "51", "75"],
      Speed: ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
      "Static Restore": ["5", "7", "9", "11", "13", "15", "17", "25"],
      "Percentage Restore": ["1%", "1%", "1%", "2%", "2%", "2%", "2%", "2%"]
    },
    riseFromTheDead: {
      Chance: ["9%", "11%", "13%", "15%", "17%", "19%", "21%", "24%", "28%", "33%"],
      "Revive Restore": ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"]
    },
    underTheZenith: {
      Chance: ["10%", "12%", "13%", "15%", "16%", "18%", "19%", "21%", "22%", "24%"]
    },
    briefImmortality: {
      TP: ["14", "14", "14", "18", "18", "18", "18", "24"],
      Speed: ["125%", "125%", "125%", "125%", "125%", "125%", "125%", "125%"],
      "Static Restore": ["1", "20", "40", "100", "120", "140", "160", "250"],
      Duration: ["3", "3", "3", "3", "3", "3", "3", "3"]
    },
    vampiricSpirit: {
      TP: ["5", "5", "5", "10", "10", "10", "10", "15"],
      "HP Increase": ["20%", "25%", "30%", "35%", "40%", "45%", "50%", "60%"],
      "Static Restore": ["6", "8", "10", "14", "16", "18", "20", "30"],
      "Percent Restore": ["6%", "8%", "10%", "12%", "14%", "16%", "18%", "25%"],
      Duration: ["3", "3", "3", "4", "4", "4", "4", "5"]
    },
    sanguineTide: {
      TP: ["7", "7", "7", "12", "12", "12", "12", "17"],
      Speed: ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
      "Static Restore": ["6", "8", "10", "14", "16", "18", "20", "25"],
      "Percent Restore": ["6%", "8%", "10%", "12%", "13%", "14%", "15%", "20%"],
      "Chance": ["20%", "24%", "28%", "32%", "35%", "37%", "40%", "50%"],
      Duration: ["3", "3", "3", "4", "4", "4", "4", "5"]
    },
    umbralVeil: {
      TP: ["3", "3", "3", "3", "3", "5"],
      Speed: ["300%", "300%", "300%", "300%", "300%", "300%"],
      Aggro: ["-60%", "-65%", "-70%", "-75%", "-80%", "-95%"],
      Duration: ["3", "3", "3", "4", "4", "5"]
    },
    feast: {
      TP: ["6", "6", "6", "9", "9", "9", "9", "14"],
      "HP Loss": ["10%", "12%", "14%", "14%", "16%", "18%", "20%", "20%"],
      "Damage Dealt": ["20%", "25%", "30%", "30%", "35%", "40%", "45%", "45%"],
      "Static Restore": ["6", "8", "10", "14", "16", "18", "20", "25"],
      "Percent Restore": ["6%", "8%", "10%", "12%", "13%", "14%", "15%", "20%"],
      Duration: ["3", "3", "3", "4", "4", "4", "4", "5"]
    },
    vitalityDrain: {
      TP: ["4", "4", "4", "8", "8", "8", "8", "13"],
      Speed: ["60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%"],
      "Damage Dealt": ["+11%", "+13%", "+15%", "+17%", "+19%", "21%", "+23%", "+25%"],
      "Damage Taken": ["85%", "83%", "81%", "81%", "79%", "77%", "75%", "75%"],
      Duration: ["3", "3", "3", "4", "4", "4", "4", "5"]
    },
    vigorDrain: {
      TP: ["4", "4", "4", "8", "8", "8", "8", "13"],
      Speed: ["60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%"],
      "Damage Taken": ["92%", "91%", "90%", "89%", "88%", "87%", "86%", "85%"],
      "Damage Dealt": ["+17%", "+20%", "+23%", "+23%", "+27%", "+31%", "+35%", "+35%"],
      Duration: ["3", "3", "3", "4", "4", "4", "4", "5"]
    },
    crimsonOath: {
      TP: ["13", "13", "18", "18", "18", "22"],
      Damage: ["500%", "520%", "600%", "620%", "640%", "700%"],
      "Damage Reduction": ["50%", "55%", "60%", "65%", "70%", "75%"]
    },
    vampiricGrace: {
      Chance: ["8%", "10%", "12%", "14%", "16%", "18%", "20%", "23%"]
    }
  }

};
