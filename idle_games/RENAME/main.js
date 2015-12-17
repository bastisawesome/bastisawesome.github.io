load();

//Functions
/**
 * Reads the objects from game and then generates the HTML from it.
*/
function generateDisplay() {
    /**
     * Holds the global variables from the game object
     */
    var gglob = game.global;
    /**
     * Holds the resources from the game object
     */
    var gres = game.resources;
    /**
     * Holds the buildings from the game object
     */
    var gbuilds = game.buildings;
    /**
     * Holds the upgrades from the game object
     */
    var gups = game.upgrades;
    /**
     * Holds the achievements from the game object
     */
    var gcheevos = game.achievements;
    
    /**
     * Contains the HTML to be displayed.
     */
    var out = ""
    
    // Begin generating the HTML necessary
    //Builds the resources HTML
    for(var obj in game.resources) {
        out += game.resources[obj].name + ": <span id='" + game.resources[obj].name
               + "'>0</span><br/>"
    }
    //Builds the buildings HTML
    for(var obj in game.buildings) {
        //Read the building
        //Generate buy button
        out += "<button id='" + game.buildings[obj].name + "Buy' onClick='buyBuild("
               + JSON.stringify(game.buildings[obj].name) + ", 1)'>Purchase " 
               + game.buildings[obj].name + "</button><br/>";
        //Generate information display
        out += "<span id='" + game.buildings[obj].name + "'>" + game.buildings[obj].name
               + "</span> Amount: <span id='" + game.buildings[obj].name + "Amount'>0</span><br/>";
        //Generate cost display
        out += "Cost: <span id='" + game.buildings[obj].name + "Cost'>"
               + game.buildings[obj].cost + "</span><br/>"
    }
    
    //Display
    write("tempName", out);
}

function write(id, value) {
	try {
		document.getElementById(id).innerHTML = value;
	}
	catch(e) {
		console.log("Problem displaying...");
        console.log(id);
		console.log(e);
		console.log("If this problem persists, please contant the developer");
	}
}

function display() {
	//Display items
	for(var obj in game.resources) {
		write(game.resources[obj].name, game.resources[obj].amount);
	}
	for(var obj in game.buildings) {
		write(game.buildings[obj].name + "Amount", game.buildings[obj].amount);
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
    generateDisplay();
	//display();
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

function buyBuild(building, amount) {
    /**
     * Stores building information, in theory
     */
	var build = game.buildings[building.toLowerCase()];
    
	if(game.resources[build.buyRes].amount >= build.cost) {
		game.resources[build.buyRes].amount -= build.cost;
		build.amount += amount;
		build.cost = Math.ceil(build.cost * 1.17);
	}
	display();
}

//Game loops
var disTime = window.setInterval(function(){
	//Increment resources
	for(obj in game.buildings) {
		var build = game.buildings[obj]
		var res = game.resources[build.addRes];
		res.amount += build.perSec * build.amount;
	}
	display();
}, 1000);

//Save loop
var saveTime = window.setInterval(function() {
	save();
}, 120000);