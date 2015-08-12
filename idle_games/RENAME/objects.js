function loadVars() {
	var toReturn = {
		global: {
			perClick: 1
		},
		resources: {
			item: {
				name: "item",
				amount: 0
			}
		},
		buildings: {
			factory: {
				name: "factory",
				amount: 0,
				buyRes: "item",
				addRes: "item",
				oPerSec: 1,
				perSec: 1,
				oCost: 10,
				cost: 10
			}
		}
	};
	
	return toReturn;
}
var game = loadVars();