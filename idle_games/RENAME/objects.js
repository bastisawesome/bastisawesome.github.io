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
            //TODO Work on upgrades
        },
        achievements: {
            //TODO Work on achievements
        },
};

return toReturn;
}
var game = loadVars();