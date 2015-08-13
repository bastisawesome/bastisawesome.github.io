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
	//Display items
	for(obj in game.resources) {
		write(game.resources[obj].name, game.resources[obj].amount);
	}
	for(obj in game.buildings) {
		write(game.buildings[obj].name, game.buildings[obj].amount);
		write((game.buildings[obj].name+"Cost"), prettify(game.buildings[obj].cost));
	}
}

function prettify(input) {
	var output = Math.round(input*1000000)/1000000;
	return output;
}

function save() {
	localStorage.setItem("saveGame", JSON.stringify(game));
}

function load() {
	var saveGame = JSON.parse(localStorage.getItem("saveGame"));
	if(saveGame) {
		game = saveGame;
	}
	display();
}

function reset() {
	if(confirm("This will wipe all of your data! You will lose EVERYTHING! Are you sure?")) {
		localStorage.removeItem("saveGame");
		//Reset global variables
		game.global.perClick = 1;
		
		for(obj in game.resources) {
			game.resources[obj].amount = 0;
		}
		
		for(obj in game.buildings) {
			game.buildings[obj].amount = 0;
			game.buildings[obj].perSec = game.buildings[obj].oPerSec;
			game.buildings[obj].cost = game.buildings[obj].oCost;
		}
	}
	display();
}

function addRes(name, amount) {
	var res = game.resources[name];
	res.amount += amount;
	display();
}

function buyBuild(name, amount) {
	var build = game.buildings[name];
	if(game.resources[build.buyRes].amount >= build.cost) {
		game.resources[build.buyRes].amount -= build.cost;
		build.amount += amount;
		build.cost = Math.ceil(build.cost * 1.17);
	}
	display();
}

//Game loops
window.setInterval(function(){
	//Increment resources
	for(obj in game.buildings) {
		var build = game.buildings[obj]
		var res = game.resources[build.addRes];
		res.amount += build.perSec * build.amount;
	}
	display();
}, 1000);

//Save loop
window.setInterval(function() {
	save();
}, 120000);