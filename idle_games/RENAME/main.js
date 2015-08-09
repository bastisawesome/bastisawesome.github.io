//Variables
var items = 0;
var buildings = 0;
load();

//Functions
function write(id, value) {
	try {
		document.getElementById(id).innerHTML = value;
	}
	catch(e) {
		console.log("Problem displaying...");
		console.log(e);
		console.log("If this problem persists, please contant the developer");
	}
}

function display() {
	write("buildings", buildings);
	write("items", items);
	write("buildingCost", Math.floor(10*Math.pow(1.1,buildings)));
}

function prettify(input) {
	var output = Math.round(input*1000000)/1000000;
	return output;
}

function itemClick(number) {
	items += number;
	display();
}

function buyBuilding() {
	var buildingCost = Math.floor(10*Math.pow(1.1,buildings));
	if(items >= buildingCost) {
		buildings += 1;
		items -= buildingCost;
		display();
	};
}

function save() {
	var save = {
		items: items,
		buildings: buildings
	}
	
	try {
		localStorage.setItem("save",JSON.stringify(save));
	}
	catch(e) {
		console.log("Problem saving to localStorage...");
		console.log(e);
		console.log("If this problem persists, please contact the developer.");
	}
}

function load() {
	var savegame = JSON.parse(localStorage.getItem("save"));
	if(savegame) {
		if(typeof savegame.items !== "undefined") items = savegame.items;
		if(typeof savegame.buildings !== "undefined") buildings = savegame.buildings;
	}
	
	display();
}

function reset() {
	if(confirm("This will wipe all of your data! You will lose EVERYTHING! Are you sure?")) {
		localStorage.removeItem("save");
		items = 0;
		buildings = 0;
	}
	display();
}

//Game loop
window.setInterval(function(){
	itemClick(buildings);
}, 1000);

//Save loop
window.setInterval(function() {
	save();
}, 60000);