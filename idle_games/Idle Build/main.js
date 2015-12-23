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
        out += game.resources[obj].name + ": <span id='" + fix(game.resources[obj].name)
               + "'>" + prettify(game.resources[obj].amount) + "</span><br/>"
        if(game.resources[obj].sellable == true) {
            out += "<button onClick='sellRes(" + JSON.stringify(fix(game.resources[obj].name))
                   + ", " + game.resources[obj].sellAmt + ")'>Sell "
                   + game.resources[obj].name + "</button><br/>";
        }
    }
    //Builds the buildings HTML
    for(var obj in game.buildings) {
        //Generate buy button
        out += "<button id='" + fix(game.buildings[obj].name) + "Buy' onClick='buyBuild("
               + JSON.stringify(fix(game.buildings[obj].name)) + ", 1)'>Purchase " 
               + game.buildings[obj].name;
        //Generate information display
        out += "</span><br/>Amount: <span id='" + fix(game.buildings[obj].name) 
               + "Amount'>0</span><br/>";
        //Generate cost display
        out += "Cost: <span id='" + fix(game.buildings[obj].name) + "Cost'>"
               + game.buildings[obj].cost + " " + game.buildings[obj].buyRes + "</span></button><br/>"
    }
    
    //Builds upgrades HTML
    
    for(var obj in game.upgrades) {
        var upg = game.upgrades[obj];
        out += "<span id='" + fix(upg.name) + "'";
        if(upg.unlocked == false)
            out += " style='display:none'";
        out += ">";
        if(upg.purchased == false) {
            out += "<button onClick='buyUpg("
                   + JSON.stringify(fix(upg.name))
                   + ")'>Purchase " + upg.name + "<br/>Cost: " + upg.cost + " " + upg.buyRes
                   + "</button><br/></span>";
        }
        else if(upg.purchased == true) {
            out += upg.name + "purchased<br/></span>";
        }
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
		write(fix(game.resources[obj].name), prettify(game.resources[obj].amount));
	}
	for(var obj in game.buildings) {
		write(fix(game.buildings[obj].name) + "Amount", game.buildings[obj].amount);
		write((fix(game.buildings[obj].name)+"Cost"), prettify(game.buildings[obj].cost) + " "
            + game.buildings[obj].buyRes);
	}
	for(var obj in game.upgrades) {
        if(game.upgrades[obj].purchased == true) {
            write(fix(game.upgrades[obj].name), "<span>" + game.upgrades[obj].name
            + " purchased</span><br/>")
        }
        else if(game.upgrades[obj].unlocked == true) {
            document.getElementById(fix(game.upgrades[obj].name)).style.display = "inline";
        }
        else {
            document.getElementById(fix(game.upgrades[obj].name)).style.display = "none";
        }
    }
}

function prettify(input) {
	var output = Math.round(input*1000000)/1000000;
	return output;
}

/**
 * @deprecated Unable to solve saving and loading issue. This has been removed
 * in order to release the next version as fully functional.
 */
/*function save() {
    var saveGame = "";
    for(var group in game) {
        for(var obj in game[group]) {
            saveGame += JSON.stringify(obj + ":");
            for(var i in game[group][obj]) {
                saveGame += JSON.stringify(game[group][obj][i] + ",");
            }
        }
        saveGame += "|";
    }
	localStorage.setItem("saveGame", JSON.stringify(saveGame));
}*/

function load() {
	/*var saveGame = JSON.parse(localStorage.getItem("saveGame"));
	if(saveGame) {
		var saveString1 = saveGame.split("|");
        for(var i=0; i<saveString1.length; i++) {
            var temp = saveString1[0].split(",");
            if(temp[0] !== JSON.stringify(game.global.version)) {
                for(var group in game) {
                    for(var a=0; a<saveString1.length; a++) {
                        var saveString2 = saveString1[a].split(",");
                        for(var obj in game[group]) {
                            for(var i in game[group][obj]) {
                                for(var b=0; b<saveString2.length; b++) {
                                    //game[group][obj][i] = saveString2[b];
                                    console.log(game[group][obj][i] + " " + saveString2[b]);
                                }
                            }
                        }
                    }
                }
            }
        }
	}*/
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
		
		for(obj in game.upgrades) {
            game.upgrades[obj].purchased = false
        }
        game = loadVars();
        generateDisplay();
	}
}

function addRes(name, amount) {
	var res = game.resources[name];
	res.amount += amount;
	display();
}

function sellRes(name, amount) {
    var res = game.resources[name];
    if(res.amount >= amount) {
        res.amount -= amount;
        game.resources["money"].amount += amount * res.value;
        display();
    }
}

function buyBuild(building, amount) {
    /**
     * Stores building information, in theory
     */
	var build = game.buildings[building];
    
	if(game.resources[build.buyRes].amount >= build.cost) {
		game.resources[build.buyRes].amount -= build.cost;
		build.amount += amount;
		build.cost = Math.ceil(build.oCost * Math.pow(game.global.multiplier, build.amount));
	}
	display();
}

function buyUpg(name) {
    /**
     * Stores the upgrade information
     */
    var upg = game.upgrades[name];
    
    if(game.resources[upg.buyRes].amount >= upg.cost) {
        game.resources[upg.buyRes].amount -= upg.cost;
        
        //Boost buildings
        if(upg.addGroup === "buildings") {
            game.buildings[upg.addObject].perSec *= upg.boost;
        }
        
        //Boost click
        if(upg.addGroup === "global") {
            game.global[upg.addObject] *= upg.boost;
        }
        
        upg.purchased = true;
    }
    display();
}

function fix(string) {
    while(string.indexOf(" ") != -1) {
        string = string.replace(" ", "");
    }
    string = string.charAt(0).toLowerCase() + string.slice(1)
    return string;
}

function unlockUpg() {
    for(var obj in game.upgrades) {
        var upg = game.upgrades[obj];
        if(!upg.unlocked) {
            if(upg.addGroup === "buildings") {
                if(game.buildings[upg.addObject].amount >= upg.req) {
                    upg.unlocked = true;
                }
            }
            else if(upg.addGroup === "global") {
                if(upg.addObject === "perClick") {
                    if(game.global.amtClicked >= upg.req)
                        upg.unlocked = true;
                }
            }
            display();
        }
    }
}

//Game loops
var incTime = window.setInterval(function(){
	//Increment resources
	for(obj in game.buildings) {
		var build = game.buildings[obj]
		var res = game.resources[build.addRes];
        if(build.useRes != undefined) {
            if(game.resources[build.useRes].amount >= build.useAmt * build.amount) {
                game.resources[build.useRes].amount -= build.useAmt * build.amount;
                res.amount += build.perSec * build.amount;
            }
        }
        else
            res.amount += build.perSec * build.amount;
	}
	display();
    if(game.resources.money.amount >= 1000000) {
        alert("YOU EFFING WIN!");
        delete incTime;
        delete saveTime;
        delete upgTime;
        alert("Your game has now been ended.");
        delete game;
    }
}, 1000);

//Save loop
/*var saveTime = window.setInterval(function() {
	save();
}, 120000);*/

//Unlocks upgrades when it is supposed to
var upgTime = window.setInterval(function() {
    unlockUpg();
}, 1000)