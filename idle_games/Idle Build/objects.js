function loadVars() {
    var toReturn = {
        global: {
            version: "0.0.1",
            multiplier: 1.15,
            perClick: 1,
            //Amount of times the user clicks to gain resources
            amtClicked: 0,
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
                buyRes: "money",
                addRes: "ironOre",
                perSec: 1,
                oCost: 15,
                cost: 15,
                reqGroup: "resources",
                reqObject: "money",
                reqAmt: 15,
                unlocked: false
            },
            marketplace: {
                name: "Marketplace",
                amount: 0,
                buyRes: "money",
                addRes: "money",
                useRes: "ironOre",
                useAmt: 5,
                perSec: 1,
                oCost: 150,
                cost: 150,
                reqGroup: 'buildings',
                reqObject: 'mine',
                reqAmt: 5,
                unlocked: false
            },
            smeltery: {
                name: "Smeltery",
                amount: 0,
                buyRes: "money",
                addRes: "iron",
                useRes: "ironOre",
                useAmt: 1,
                perSec: 1,
                oCost: 250,
                cost: 250,
                reqGroup: 'resources',
                reqObject: 'money',
                reqAmt: 250,
                unlocked: false
            },
            hardwareStore: {
                name: "Hardware Store",
                amount: 0,
                buyRes: "money",
                addRes: "money",
                useRes: "iron",
                useAmt: 5,
                perSec: 25,
                oCost: 250,
                cost: 250,
                reqGroup: 'buildings',
                reqObject: 'smeltery',
                reqAmt: 5,
                unlocked: false
            },
            steelMill: {
                name: "Steel Mill",
                amount: 0,
                buyRes: "iron",
                addRes: "steel",
                useRes: "iron",
                useAmt: 2,
                perSec: 1,
                oCost: 100,
                cost: 100,
                reqGroup: 'resources',
                reqObject: 'iron',
                reqAmt: 100,
                unlocked: false
            },
            steelMarketplace: {
                name: "Steel Marketplace",
                amount: 0,
                buyRes: "money",
                addRes: "money",
                useRes: "steel",
                useAmt: 5,
                perSec: 50,
                oCost: 500,
                cost: 500,
                reqGroup: 'buildings',
                reqObject: 'steelMill',
                reqAmt: 5,
                unlocked: false
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
                boost: 2
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
                boost: 2
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
                boost: 2
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
                boost: 2
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
                boost: 2
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
                boost: 2
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
                boost: 2
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
                boost: 2
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
                boost: 2
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
                boost: 2
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
                boost: 2
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
                boost: 2
            }
        },
        achievements: {
            //TODO Work on achievements
        }
};

return toReturn;
}
var game = loadVars();