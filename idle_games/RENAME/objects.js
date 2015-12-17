function loadVars() {
    var toReturn = {
        global: {
            version: "0.0.1",
            perClick: 1
        },
        resources: {
            item: {
                name: "Item",
                amount: 0
            }
        },
        buildings: {
            /**
                * @var name:        Name of the building
                * @var amount:      Amount of the building
                * @var buyRes:      Resource to be spent to buy building
                * @var addRes:      Resource to be boosted by building
                * @var oPerSec:     Original boosted amount (used for calculations)
                * @var perSec:      Boosted amount per second
                * @var oCost:       Original cost of building (used for calculations)
                * @var cost:        Cost of the building. Increases by some amount.
                * @var unlocked:    Whether or not the buildins is unlocked
                */
            factory: {
                name: "Factory",
                amount: 0,
                buyRes: "item",
                addRes: "item",
                oPerSec: 1,
                perSec: 1,
                oCost: 10,
                cost: 10,
                unlocked: true,
            },
            building: {
                name: "Building",
                amount: 0,
                buyRes: "item",
                addRes: "item",
                oPerSec: 2,
                perSec: 2,
                oCost: 100,
                cost: 100,
                unlocked: true,
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
             * @var boost:          How much to boost (multiplicative)
             */
            factoryBoost: {
                name: "Factory Boost",
                unlocked: true,
                purchased: false,
                buyRes: "item",
                cost: 1000,
                addGroup: "buildings",
                addObject: "factory",
                boost: 2
            },
            buildingBoost: {
                name: "Building Boost",
                unlocked: true,
                purchased: false,
                buyRes: "item",
                cost: 10000,
                addGroup: "buildings",
                addObject: "building",
                boost: 2
            },
        },
        achievements: {
            //TODO Work on achievements
        },
};

return toReturn;
}
var game = loadVars();