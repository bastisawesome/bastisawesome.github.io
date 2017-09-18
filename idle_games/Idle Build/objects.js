/*
 * Thanks to a few friends for helping me with the upgrades!
  DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE 
                    Version 2, December 2004 

 Copyright (C) 2015 Giles Johnson <poi543@gmail.com> 

 Everyone is permitted to copy and distribute verbatim or modified 
 copies of this license document, and changing it is allowed as long 
 as the name is changed. 

            DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE 
   TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION 

  0. You just DO WHAT THE FUCK YOU WANT TO.
 */
function loadVars() {
    var toReturn = {
        global: {
            version: "V2.0.0 ALPHA",
            multiplier: 1.15,
            tinPerClick: 1,
            coalPerClick: 1,
            copperPerClick: 1,
            ironPerClick: 1,
            amtCoalMined: 0,
            amtTinMined: 0,
            amtCopperMined: 0,
            amtIronMined: 0,
            timeSinceLastEvent: 0,
            timer: 0,
            numUpgPurchased: 0,
            numBuildPurchased: 0
        },
        resources: {
            money: {
                name: "Money",
                amount: 0
            },
            tinOre: {
                name: "Tin Ore",
                amount: 0,
                sellable: true,
                value: .1,
                sellAmt: 10
            },
            tin: {
                name: "Tin",
                amount: 0
            },
            copperOre: {
                name: "Copper Ore",
                amount: 0,
                sellable: true,
                value: .2,
                sellAmt: 5
            },
            copper: {
                name: "Copper",
                amount: 0
            },
            ironOre: {
                name: "Iron Ore",
                amount: 0,
                value: .5,
                sellable: true,
                sellAmt: 2
            },
            iron: {
                name: "Iron",
                amount: 0,
                value: 1,
                sellable: false,
                sellAmt: 1
            },
            steel: {
                name: "Steel",
                amount: 0,
                value: 5,
                sellable: false,
                sellAmt: 1
            },
	    coal: {
                name: "Coal",
                amount: 0,
                value: 0,
                sellable: false,
            }
        },
        buildings: {
            /**
                * @var name:        Name of the building
                * @var amount:      Amount of the building
                * @var buyRes:      Resource to be spent to buy building
                * @var addRes:      Resource to be boosted by building
                * @var perSec:      Boosted amount per second
                * @var oCost:       Original cost of building (used for calculations)
                * @var cost:        Cost of the building. Increases by some amount.
                * @var unlocked:    Whether or not the buildins is unlocked
                */
            mine: {
                name: "Mine",
                amount: 0,
                buyRes: ["money"],
                addRes: ["tinOre"],
                perSec: [1],
                oCost: [15],
                cost: [15],
                reqGroup: "resources",
                reqObject: "tinOre",
                reqAmt: 150,
                unlocked: false,
                desc: "Become the manager of a mine. Produces 1 tin ore per second."
            },
            smeltery: {
                name: "Smeltery",
                amount: 0,
                buyRes: ["money"],
                addRes: ["tin"],
                useRes: ["tinOre", "coal"],
                useAmt: [1, 0.1],
                perSec: [1],
                oCost: [100],
                cost: [100],
                reqGroup: 'resources',
                reqObject: 'money',
                reqAmt: 100,
                unlocked: false,
                desc: "Buy smelteries to process your tin ore into ingots."
            },
            steelMill: {
                name: "Steel Mill",
                amount: 0,
                buyRes: ["money", "iron"],
                addRes: ["steel"],
                useRes: ["iron", "coal"],
                useAmt: [2, 1],
                perSec: [1],
                oCost: [500, 100],
                cost: [500, 100],
                reqGroup: 'resources',
                reqObject: 'iron',
                reqAmt: 100,
                unlocked: false,
                desc: "Begin processing iron into steel."
            },
            hardwareStore: {
                name: "Hardware Store",
                amount: 0,
                buyRes: ["money", "tinOre"],
                addRes: ["money"],
                useRes: ["tin"],
                useAmt: [10],
                perSec: [1],
                oCost: [150, 200],
                cost: [150, 200],
                reqGroup: 'buildings',
                reqObject: 'smeltery',
                reqAmt: 5,
                unlocked: false,
                desc: "Contract with a hardware store and start selling materials. Can be upgraded to sell different materials."
            }
        },
        upgrades: {
	    clicker: {
		boost: {
		    tinBoostI: {
			unlocked: false,
			purchased: false,
			buyRes: 'money',
			cost: 50, //This is likely to stay the same
			addGroup: 'global',
			addObject: 'tinPerClick',
			reqRes: 'amtTinMined',
			req: 600,
			boost: 2,
			name: '[RENAME]',
			desc: "You mine tin faster?"
		    },
		    coalBoostI: {
			unlocked: false,
			purchased: false,
			buyRes: 'money',
			cost: 250,
			addGroup: 'global',
			addObject: 'coalPerClick',
			reqRes: 'amtCoalMined',
			req: 300,
			boost: 2,
			name: '[RENAME]',
			desc: "You mine coal faster?"
		    },
		    copperBoostI: {
			unlocked: false,
			purchased: false,
			buyRes: 'money',
			cost: 125,
			addGroup: 'global',
			addObject: 'copperPerClick',
			reqRes: 'amtCopperMined',
			req: 150,
			boost: 2,
			name: '[RENAME]',
			desc: "You mine copper faster?"
		    },
		    ironBoostI: {
			unlocked: false,
			purchased: false,
			buyRes: 'money',
			cost: 200,
			addGroup: 'global',
			addObject: 'ironPerClick',
			reqRes: 'amtIronMined',
			req: 75,
			boost: 2,
			name: '[RENAME]',
			desc: "You mine iron faster?"
		    },
		},
		tier: {
// 		    clickTierI: {
// 			unlocked: false,
// 			purchased: false,
// 			buyRes: "money",
// 			cost: 10, //This is likely to remain the same
// 			reqRes:"amtTinMined",
// 			req: 100,
// 			name: "Tin Pickaxe",
// 			desc: "Nothing is better than being able to mine coal. (tier: coal)"
// 		    },
// 		    clickTierII: {
// 			unlocked: false,
// 			purchased: false,
// 			buyRes: "money",
// 			cost: 25, //This is likely to remain the same
// 			reqRes: "amtCoalMined",
// 			req: 50,
// 			name: "New Pickaxe",
// 			desc: "With this ingenious invention you can now mine copper. (tier: copper)"
// 		    },
// 		    clickTierIII: {
// 			unlocked: false,
// 			purchased: false,
// 			buyRes: "money",
// 			cost: 60,
// 			reqRes: "amtCopperMined",
// 			req: 25,
// 			name: "Copper pickaxe",
// 			desc: "With iron you can do a lot more. (tier: iron)"
// 		    },
		}
	    },
	    mine: {
		boost: {
		    mineBoostI: {
			unlocked: false,
			purchased: false,
			buyRes: 'money',
			cost: 50,
			addGroup: 'buildings',
			addObject: 'mine',
			reqRes: 'mine',
			req: 10,
			boost: 2,
			name: '[RENAME]',
			desc: "Mines are twice as efficient."
		    },
		    mineBoostII: {
			unlocked: false,
			purchased: false,
			buyRes: 'money',
			cost: 100,
			addGroup: 'buildings',
			addObject: 'mine',
			reqRes: 'mine',
			req: 25,
			boost: 2,
			name: '[RENAME]',
			desc: "Mines are twice as efficient."
		    },
		    mineBoostIII: {
			unlocked: false,
			purchased: false,
			buyRes: 'money',
			cost: 200,
			addGroup: 'buildings',
			addObject: 'mine',
			reqRes: 'mine',
			req: 50,
			boost: 2,
			name: 'Phazon Mines',
			desc: "That mysterious blue material, now known as phazon, has somehow made your miners twice as efficient."
		    },
		    mineBoostIV: {
			unlocked: false,
			purchased: false,
			buyRes: 'money',
			cost: 350,
			addGroup: 'buildings',
			addObject: 'mine',
			reqRes: 'mine',
			req: 75,
			boost: 2,
			name: 'Depper Mines',
			desc: "Going even deeper into the earth to find more materials."
		    },
		    mineBoostV: {
			unlocked: false,
			purchased: false,
			buyRes: 'money',
			cost: 500,
			addGroup: 'buildings',
			addObject: 'mine',
			reqRes: 'mine',
			req: 100,
			boost: 2,
			name: 'Better Training',
			desc: "You put your miners through vigorous training to teach them a more efficient pickaxe wielding style."
		    },
		    mineBoostVI: {
			unlocked: false,
			purchased: false,
			buyRes: 'money',
			cost: 750,
			addGroup: 'buildings',
			addObject: 'mine',
			reqRes: 'mine',
			req: 125,
			boost: 2,
			name: 'Drills',
			desc: "Using drills your miners can collect ore easier."
		    },
		    mineBoostVII: {
			unlocked: false,
			purchased: false,
			buyRes: 'money',
			cost: 900,
			addGroup: 'buildings',
			addObject: 'mine',
			reqRes: 'mine',
			req: 150,
			boost: 2,
			name: 'Hollow Shell',
			desc: "The poor earth..."
		    },
		},
		tier: {
		}
	    },
	    smeltery: {
		boost: {
		    smelteryBoostI: {
			unlocked: false,
			purchased: false,
			buyRes: 'money',
			cost: 150,
			addGroup: 'buildings',
			addObject: 'smeltery',
			reqRes: 'smeltery',
			req: 10,
			boost: 2,
			name: 'Hotter Forge',
			desc: "By burning the coals hotter you can smelt more efficiently."
		    },
		    smelteryBoostII: {
			unlocked: false,
			purchased: false,
			buyRes: 'money',
			cost: 200,
			addGroup: 'buildings',
			addObject: 'smeltery',
			reqRes: 'smeltery',
			req: 25,
			boost: 2,
			name: 'Floor Plan',
			desc: "By expanding the smelteries you create more space for the equipment."
		    },
		    smelteryBoostIII: {
			unlocked: false,
			purchased: false,
			buyRes: 'money',
			cost: 250,
			addGroup: 'buildings',
			addObject: 'smeltery',
			reqRes: 'smeltery',
			req: 50,
			boost: 2,
			name: 'Conveyer Belts',
			desc: "By using this design in your smelteries your ingots can quickly be transported away."
		    },
		    smelteryBoostIV: {
			unlocked: false,
			purchased: false,
			buyRes: 'money',
			cost: 300,
			addGroup: 'buildings',
			addObject: 'smeltery',
			reqRes: 'smeltery',
			req: 75,
			boost: 2,
			name: 'New Smelting Techniques',
			desc: "With new smeling techniques you can smelt a lot more ore."
		    },
		},
		tier: {
		}
	    },
	    steelMill: {
		boost: {
		    steelMillBoostII: {
			unlocked: false,
			purchased: false,
			buyRes: "money",
			cost: 1000,
			addGroup: "buildings",
			addObject: "steelMill",
			reqRes: 'steelMill',
			req: 25,
			boost: 2,
			name: "More Steel",
			desc: "It is well known that by having more steel you do, in fact, have more steel."
		    },
		    steelMillBoostIII: {
			unlocked: false,
			purchased: false,
			buyRes: "money",
			cost: 0,
			addGroup: "buildings",
			addObject: "steelMill",
			reqRes: 'steelMill',
			req: 50,
			boost: 2,
			name: "Even More Steel",
			desc: "No, I did not run out of ideas when I was making this... *quickly runs away*"
		    },
		},
		tier: {
		}
	    },
	    hardwareStore: {
		boost: {
		    hardwareStoreBoostI: {
			unlocked: false,
			purchased: false,
			buyRes: 'money',
			cost: 100,
			addGroup: 'buildings',
			addObject: 'hardwareStore',
			reqRes: 'hardwareStore',
			req: 10,
			boost: 2,
			name: 'More Employees',
			desc: "With more employees you can sell more, I guess."
		    },
		    hardwareStoreBoostII: {
			unlocked: false,
			purchased: false,
			buyRes: 'money',
			cost: 150,
			addGroup: 'buildings',
			addObject: 'hardwareStore',
			reqRes: 'hardwareStore',
			req: 25,
			boost: 2,
			name: 'Cheaper Stock',
			desc: "By lowering the price more people will buy your products"
		    },
		    hardwareStoreBoostIII: {
			unlocked: false,
			purchased: false,
			buyRes: 'money',
			cost: 200,
			addGroup: 'buildings',
			addObject: 'hardwareStore',
			reqRes: 'hardwareStore',
			req: 50,
			boost: 2,
			name: 'Increased Stock',
			desc: "By increasing your supplies... Something."
		    },
		    hardwareStoreBoostIV: {
			unlocked: false,
			purchased: false,
			buyRes: 'money',
			cost: 300,
			addGroup: 'buildings',
			addObject: 'hardwareStore',
			reqRes: 'hardwareStore',
			req: 75,
			boost: 2,
			name: 'Commercials',
			desc: "By running commercials you increase popularity on your supplies."
		    },
		    hardwareStoreBoostV: {
			unlocked: false,
			purchased: false,
			buyRes: 'money',
			cost: 400,
			addGroup: 'buildings',
			addObject: 'hardwareStore',
			reqRes: 'hardwareStore',
			req: 100,
			boost: 2,
			name: 'Internation Business',
			desc: "Going international! Best business decision ever! Now more countries can purchase your supplies!"
		    },
		    hardwareStoreBoostVI: {
			unlocked: false,
			purchased: false,
			buyRes: 'money',
			cost: 500,
			addGroup: 'buildings',
			addObject: 'hardwareStore',
			reqRes: 'hardwareStore',
			req: 125,
			boost: 2,
			name: 'Website',
			desc: "With the commercial succces (get the pun?) you decide to go digital!"
		    },
		},
		tier: {
		}
	    }
        },
        logBook: {
            /*
             * corporateScumbag {
             *  name: 'Corporate Scumbag',
             *  desc: "You have become a corporate scumbag!"
             */
        },//This is a 1.0.0 ALPHA secret. It is another reference to Metroid Prime.
        chozoLore: {
            /*TODO Add events on unlocks*/
            mine: {
                events: [
                    "Your miners have kindly donated {} {} they have mined.",
                    "A miner stumbled upon a large vein of iron ore. You gain {} {}.",
                    "The mining business is booming! Your miners manage to stockpile an extra {} {}.",
                    "A sudden influx of miners has increased your stores with {} {}.",
                ]
            },
            marketplace: {
                events: [
                    "Stock increased on your mines! You have gained {} money!",
                    "Your markets are booming with business! Your profits get you {} money!",
                    "More employees were hired and managed to increase profits by {} money.",
                    "Management has succeeded in managing! You gain {} profits!"
                ]
            },
            smeltery: {
                events: [
                    "{} iron gained!",
                    "The smelting business is booming! You manage to produce {} extra iron.",
                    "Your smelters manage to scrap together bits of ore to process into {} extra iron."
                ]
            },
            hardwareStore: {
                events: [
                    "{} money gained!",
                    "Price of iron increased! You gain {} money!",
                    "Stock increased on your smeltery! You earn {} money!",
                    "Your stores are booming with business! You profit by {} money."
                ]
            },
            steelMill: {
                events: [
                    "{} steel gained!",
                    "The steel business is booming! Your mills manage to profit with {} steel!",
                    "Your steel mills find a stache of iron which they convert into {} steel."
                ]
            },
            steelMarketplace: {
                events: [
                    "{} money gained!",
                    "Stock on steel mills has greatly increased. {} money is now yours.",
                    "Your steel markets are booming with business! You gained {} money!"
                ]
            }
        } //Yes, this is the non-secretive secret. I was going to go with Adam, but... Well, Metroid: Other M ruined it for me. Metroid Prime Trilogy was the best!
};

return toReturn;
}
var game = loadVars();