let skills = {
    Imperial: {
        ignition: {
            name_en: "Ignition",
            desc: "For 3 turns, the user's drive skills will not activate the overheat state.", 
            stats: [],
            unique: true,
            type: "Boost",
            dep: {},
            maxLevel: 0,
            coords: { x: 0, y: 0 }
        },
        conversion: {
            name_en: "Conversion",
            desc: "Restores HP and TP to the user. \nEnds Force Boost but does not break the Force gauge.",
            stats: ["STR"],
            unique: true,
            type: "Break",
            dep: { ignition: 0 },
            maxLevel: 0,
            coords: { x: 1, y: 0 }
        },
        returnStroke: {
            name_en: "Grim Rush",  
            desc: "Starter skill. Deals melee weapon damage to one target. \nRecovers Force on hit.",
            stats: ["STR", "Arms", "Driveblade"],
            dep: {},
            maxLevel: 6,
            coords: { x: 0, y: 1.25 }
        },
        typhoonTrigger: {
            name_en: "Typhoon Trigger", 
            desc: "Fusion skill. Deals melee cut damage to one target. \nReduces overheat duration by a set number of turns and recovers Force on hit.",
            stats: ["STR", "Arms", "Driveblade"],
            dep: { returnStroke: 3 },
            maxLevel: 8,
            coords: { x: 1, y: 1.25 }
        },
        tranceRiot: {
            name_en: "Trance Riot",
            desc: "Fusion skill. Deals melee cut damage to one target, and places the user in the overheat state for 1 turn. Pauses Force Boost duration this turn.\nCannot be used next turn or while overheated. \nTP cost is reduced per TP used beforehand. \nUser will take 1.25x damage until activation.",
            stats: ["STR", "Arms", "Driveblade"],
            dep: { typhoonTrigger: 2 },
            maxLevel: 6,
            coords: { x: 2, y: 0.75 }
        },
        ampedDischarge: {
            name_en: "Amped Discharge",
            desc: "Starter skill. Deals melee cut damage to one target, then deal multiple instances of imbuable damage. \nPlaces the user in the overheat state for 6 turns and cannot be used while overheated. \nTP cost is reduced per TP used beforehand. \nUser will take 1.5x damage until activation.", 
            stats: ["STR", "Arms", "Driveblade"],
            dep: { tranceRiot: 2 },
            maxLevel: 8,
            coords: { x: 3, y: 0.75 }
        },
        powderMark: {
            name_en: "Powder Mark",  
            desc: "Finisher skill. Deals melee cut damage to one front row target, then follow-up with imbuable damage on the same target and the back row. \nPlaces the user in the overheat state for 9 turns and cannot be used while overheated. \nTP cost is reduced per TP used beforehand. \nUser will take 2x damage until activation.",
            stats: ["STR", "Arms", "Driveblade"],
            dep: { ampedDischarge: 2 },
            maxLevel: 8,
            coords: { x: 4, y: 0.75 }
        },
        heatSink: {
            name_en: "Heat Sink",
            
            desc: "Reduces overheat duration by a set number of turns. Each cast increases Drive damage with a maximum of 4 increases which are reset upon the user's death.",
            stats: ["Head", "Driveblade"],
            dep: { typhoonTrigger: 3 },
            maxLevel: 8,
            coords: { x: 2, y: 1.75 }
        },
        wideEffect: {
            name_en: "Wide Effect",
            desc: "Single-target skills have a chance to affect neighboring enemies. The chance is rolled for each enemy individually if there are two enemies next to the target, rather than once for both.",
            stats: [],
            dep: { heatSink: 3 },
            maxLevel: 8,
            coords: { x: 3, y: 1.75 }
        },
        busterBeat: {
            name_en: "Buster Beat", 
            desc: "Starter skill. Deals melee cut damage to one target. Attempts to inflict leg bind.",
            stats: ["STR", "LUC", "Arms", "Driveblade"],
            dep: {},
            maxLevel: 6,
            coords: { x: 0, y: 2.75 }
        },
        energyBlade: {
            name_en: "Energy Blade", 
            desc: "Combo skill. Deals melee cut damage to one target. \nRestores HP to the user based on the amount of damage dealt. \nPlaces the user in the overheat state for 6 turns.",
            stats: ["STR", "Arms", "Driveblade"],
            dep: { busterBeat: 3 },
            maxLevel: 8,
            coords: { x: 1, y: 2.75 }
        },
        doubleDown: {
            name_en: "Double Down",  
            desc: "Finisher skill. Deals melee cut damage to one target. \nIncreases attack for non-Drive Imperial skills for the next two turns.\nUsable only while overheated.",   
            
            
            stats: [],
            dep: { energyBlade: 2 },
            maxLevel: 8,
            coords: { x: 2, y: 2.75 }
        },
        finisher: {
            name_en: "Finisher",
            desc: "When the user kills an enemy, their TP is restored.",
            stats: [],
            dep: { doubleDown: 4 },
            maxLevel: 8,
            coords: { x: 3, y: 2.75 }
        },
        overdrive: {
            name_en: "Overdrive",
            desc: "Can only be used during Force Boost and outside of Overheat. Deals melee cut damage to all enemies.\nUser will take 2x damage until activation. \nEnds Force Boost after cast.",
            
            
            stats: [],
            dep: { finisher: 3, wideEffect: 3 },
            maxLevel: 8,
            coords: { x: 4, y: 2.25 }
        },
        roughDivide: {
            name_en: "Rough Divide",
            desc: "Starter skill. Reduces physical damage to the user's row for one turn. \nIf Rough Divide is activated by enemy damage, the user will use their equipped weapon to counterattack the source of the damage and reduce Overheat by 1 turn. ",
            stats: ["STR", "Arms", "Driveblade"],
            dep: {},
            maxLevel: 8,
            coords: { x: 0, y: 4 }
        },
        coolingCell: {
            name_en: "Cooling Cell", 
            desc: "Starter skill. Restores one ally's HP, and reduces all physical damage directed at them for one turn.",   
            stats: ["Arms", "Driveblade"],
            dep: { roughDivide: 2 },
            maxLevel: 8,
            coords: { x: 1, y: 4 }
        },
        solidBarrel: {
            name_en: "Solid Barrel",
            desc: "Combo skill. Deals melee cut damage to one target, heal the user and, for that turn, increases the user's chance of being targeted. \nPreserves the effect of last turn's Rough Divide or Cooling Cell. \nReduces overheat duration by X turns.",
            stats: ["STR", "Arms", "Driveblade"],
            dep: { coolingCell: 2 },
            maxLevel: 8,
            coords: { x: 2, y: 4 }
        },
        keenFlurry: {
            name_en: "Keen Flurry",
            desc: "Final skill. Attempts to nullify physical attacks directed at the user's row for one turn. Each time an attack is nullified, the chance of it triggering again on that ally is reduced.",
            stats: ["Arms", "Driveblade"],
            dep: { solidBarrel: 2 },
            maxLevel: 8,
            coords: { x: 3, y: 4 }
        },
        rearGuard: {
            name_en: "Rear Guard",
            desc: "Starter skill. For a set number of turns, increases defense for one ally, but that ally will move last each turn. Reduces overheat duration by 1 turn and recovers 10% Force.",
            stats: ["Arms", "Driveblade"],
            dep: {},
            maxLevel: 6,
            coords: { x: 0, y: 5 }
        },
        deflectorField: {
            name_en: "Deflector Field",
            desc: "Reduces physical damage taken to all party members for one turn. \nIf user received damage, repeat with half potency next turn. \nPlaces the user in the overheat state for 5 turns and cannot be used while overheated.",  
            stats: ["Arms", "Driveblade"],
            dep: { rearGuard: 2 },
            maxLevel: 8,
            coords: { x: 1, y: 5 }
        },
        overheatShield: {
            name_en: "Overheat Shield", 
            desc: "While overheated, increases the user's defense.",
            stats: [],
            dep: { deflectorField: 2 },
            maxLevel: 6,
            coords: { x: 2, y: 5 }
        },
        avenger: {
            name_en: "Avenger",   
            desc: "When an ally dies, restores HP and TP to the user.", 
            stats: [],
            dep: { rearGuard: 2 },
            maxLevel: 6,
            coords: { x: 1, y: 6 }
        },
        thermalAura: {
            name_en: "Thermal Aura",   
            desc: "Passively restore HP to the user's row while the user is in the Force Boost state.",
            
            
            stats: [],
            dep: { avenger: 2 },
            maxLevel: 8,
            coords: { x: 2, y: 6 }
        },
        guardPoint: {
            name_en: "Zero Sum", 
            desc: "Increases the damage of Drive skills after activating a Guard skill.",
            stats: [],
            dep: { overheatShield: 2, thermalAura: 2 },
            maxLevel: 8,
            coords: { x: 3, y: 5.5 }
        },
        sentinelShell: {
            name_en: "Sentinel Shell",
            desc: "Final skill. Reduces all damage to all party members and sets their defensive values to the user's for one turn.",
            stats: ["Arms", "Driveblade"],
            dep: { keenFlurry: 2, guardPoint: 2 },
            maxLevel: 8,
            coords: { x: 4, y: 4.75 }
        },
        mine: {
            name_en: "Mine",
            desc: "Occasionally gains more items when using Mine points.",
            stats: [],
            unique: true,
            dep: {},
            maxLevel: 1,
            coords: { x: 0, y: 6 }
        }
    },


};
