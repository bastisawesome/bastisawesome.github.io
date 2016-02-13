function loadVars() {
    var toReturn = {
        global: {
            version: "V0.1.0 ALPHA",
            multiplier: 1.15,
            perClick: 1,
            //Amount of times the user clicks to gain resources
            amtClicked: 0,
            timeSinceLastEvent: 0,
        },
        resources: {
            money: {
                name: "Money",
                amount: 0
            },
            ironOre: {
                name: "Iron Ore",
                amount: 0,
                value: .2,
                sellable: true,
                sellAmt: 5
            },
            iron: {
                name: "Iron",
                amount: 0,
                value: 1,
                sellable: true,
                sellAmt: 5
            },
            steel: {
                name: "Steel",
                amount: 0,
                value: 5,
                sellable: true,
                sellAmt: 5
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
                addRes: "ironOre",
                perSec: 1,
                oCost: [15],
                cost: [15],
                reqGroup: "resources",
                reqObject: "money",
                reqAmt: 15,
                unlocked: false,
                desc: "Become the manager of a mine. Produces 1 iron ore per second."
            },
            marketplace: {
                name: "Marketplace",
                amount: 0,
                buyRes: ["money"],
                addRes: "money",
                useRes: ["ironOre"],
                useAmt: [5],
                perSec: 1,
                oCost: [150],
                cost: [150],
                reqGroup: 'buildings',
                reqObject: 'mine',
                reqAmt: 5,
                unlocked: false,
                desc: "Manage a marketplace for selling iron ore."
            },
            smeltery: {
                name: "Smeltery",
                amount: 0,
                buyRes: ["money"],
                addRes: "iron",
                useRes: ["ironOre"],
                useAmt: [1],
                perSec: 1,
                oCost: [250],
                cost: [250],
                reqGroup: 'resources',
                reqObject: 'money',
                reqAmt: 250,
                unlocked: false,
                desc: "Buy smelteries to process your iron ore into ingots."
            },
            hardwareStore: {
                name: "Hardware Store",
                amount: 0,
                buyRes: ["money"],
                addRes: "money",
                useRes: ["iron"],
                useAmt: [5],
                perSec: 25,
                oCost: [250],
                cost: [250],
                reqGroup: 'buildings',
                reqObject: 'smeltery',
                reqAmt: 5,
                unlocked: false,
                desc: "Contract with a hardware store and start selling your processed iron."
            },
            steelMill: {
                name: "Steel Mill",
                amount: 0,
                buyRes: ["money", "iron"],
                addRes: "steel",
                useRes: ["iron", "coal"],
                useAmt: [2, 1],
                perSec: 1,
                oCost: [500, 100],
                cost: [500, 100],
                reqGroup: 'resources',
                reqObject: 'iron',
                reqAmt: 100,
                unlocked: false,
                desc: "Begin processing iron into steel."
            },
            steelMarketplace: {
                name: "Steel Marketplace",
                amount: 0,
                buyRes: ["money"],
                addRes: "money",
                useRes: ["steel"],
                useAmt: [5],
                perSec: 50,
                oCost: [500],
                cost: [500],
                reqGroup: 'buildings',
                reqObject: 'steelMill',
                reqAmt: 5,
                unlocked: false,
                desc: "Contract your marketplaces to sell your newly processed steel."
            },
        },
        upgrades: {
            /**
             * @var name:           Name of the upgrade
             * @var unlocked:       If the upgrade is unlocked
             * @var purchased:      If the upgrade is purchased
             * @var buyRes:         Resource to be spent buying the upgrade
             * @var cost:           Price of the upgrade
             * @var addGroup:       What group to upgrade from [global|resources|buildings]
             * @var addObject:      What object to upgrade
             * @var req:            Requirment
             * @var boost:          How much to boost (multiplicative)
             */
            mineBoostI: {
                name: "Mine Boost I",
                unlocked: false,
                purchased: false,
                buyRes: "money",
                cost: 100,
                addGroup: "buildings",
                addObject: "mine",
                req: 10,
                boost: 2,
                dispName: "Better Pickaxes",
                desc: "By upgrading your miners axes you can increase their efficiency."
            },
            mineBoostII: {
                name: "Mine Boost II",
                unlocked: false,
                purchased: false,
                buyRes: "money",
                cost: 250,
                addGroup: "buildings",
                addObject: "mine",
                req: 50,
                boost: 2,
                dispName: "Strip Mine",
                desc: "This ingenious technique makes for a double efficient mine!"
            },
            mineBoostIII: {
                name: "Mine Boost III",
                unlocked: false,
                purchased: false,
                buyRes: "money",
                cost: 500,
                addGroup: "buildings",
                addObject: "mine",
                req: 100,
                boost: 2,
                dispName: "Better Mines",
                desc: "Some mysterious blue substance has been found... I'm sure it's okay."
            },
            smelteryBoostI: {
                name: "Smeltery Boost I",
                unlocked: false,
                purchased: false,
                buyRes: "money",
                cost: 100,
                addGroup: "buildings",
                addObject: "smeltery",
                req: 10,
                boost: 2,
                dispName: "Hotter Furnaces",
                desc: "By increasing the temperature of the flames you can process iron quicker."
            },
            smelteryBoostII: {
                name: "Smeltery Boost II",
                unlocked: false,
                purchased: false,
                buyRes: "money",
                cost: 250,
                addGroup: "buildings",
                addObject: "smeltery",
                req: 50,
                boost: 2,
                dispName: "New Fuel",
                desc: "By engineering a new source of fuel your smelteries can process twice the iron!"
            },
            smelteryBoostIII: {
                name: "Smeltery Boost II",
                unlocked: false,
                purchased: false,
                buyRes: "money",
                cost: 500,
                addGroup: "buildings",
                addObject: "smeltery",
                req: 100,
                boost: 2,
                dispName: "More Workers",
                desc: "Bang! Bang! Bang! What? No, that was the sound of pounding on iron ore to shape it. NOT A GUN!"
            },
            steelMillBoostI: {
                name: "Steel Mill Boost I",
                unlocked: false,
                purchased: false,
                buyRes: "money",
                cost: 500,
                addGroup: "buildings",
                addObject: "steelMill",
                req: 10,
                boost: 2,
                dispName: "More Coal",
                desc: "With more coal you can use more coal causing more coal to be used. No, that was not a useful statement."
            },
            steelMillBoostII: {
                name: "Steel Mill Boost II",
                unlocked: false,
                purchased: false,
                buyRes: "money",
                cost: 1000,
                addGroup: "buildings",
                addObject: "steelMill",
                req: 50,
                boost: 2,
                dispName: "More Steel",
                desc: "It is well known that by having more steel you do, in fact, have more steel."
            },
            steelMillBoostIII: {
                name: "Steel Mill Boost III",
                unlocked: false,
                purchased: false,
                buyRes: "money",
                cost: 2000,
                addGroup: "buildings",
                addObject: "steelMill",
                req: 100,
                boost: 2,
                dispName: "Even More Steel",
                desc: "No, I did not run out of ideas when I was making this... *quickly runs away*"
            },
            clickBoostI: {
                name: "Click Boost I",
                unlocked: false,
                purchased: false,
                buyRes: "money",
                cost: 10,
                addGroup: "global",
                addObject: "perClick",
                req: 100,
                boost: 2,
                dispName: "Better Pickaxe",
                desc: "No, this is not a re-hash of another upgrade."
            },
            clickBoostII: {
                name: "Click Boost II",
                unlocked: false,
                purchased: false,
                buyRes: "money",
                cost: 50,
                addGroup: "global",
                addObject: "perClick",
                req: 250,
                boost: 2,
                dispName: "Manual Labour",
                desc: "Nothing like good ol' fashioned manual labour to increase your stores quicker."
            },
            clickBoostIII: {
                name: "Click Boost III",
                unlocked: false,
                purchased: false,
                buyRes: "money",
                cost: 100,
                addGroup: "global",
                addObject: "perClick",
                req: 500,
                boost: 2,
                dispName: "No Name",
                desc: "I admit I had run out of ideas at this point."
            }
        },
        achievements: {
            //TODO Work on achievements
        },
        chozoLore: {
            mine: {
                events: [
                    "Your miners have kindly donated {} iron ore they have mined.",
                    "A miner stumbled upon a large vein of iron ore. You gain {} iron ore.",
                    "The mining business is booming! Your miners manage to stockpile and extra {} iron ore.",
                    "A sudden influx of miners has increased your iron ore by {} ore."
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