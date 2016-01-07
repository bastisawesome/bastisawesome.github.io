write('versionDisplay', game.global.version);
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
    }
    
    out += "<br/>";
    
    for(var obj in game.resources) {
        if(game.resources[obj].sellable == true) {
            out += "<button onClick='sellRes(" + JSON.stringify(fix(game.resources[obj].name))
                   + ", " + 5 + ")'>Sell 5 "
                   + game.resources[obj].name + "<br/>For " 
                   + game.resources[obj].value*5 + " money</button><br/>";
        }
    }
    out += "<br/>";
    
    //Builds the buildings HTML
    for(var obj in game.buildings) {
        var build = game.buildings[obj];
        //Generate buy button
        out += "<span id='" + fix(build.name) + "'";
        if(!build.unlocked)
            out += " style='display:none'";
        out += ">";
        out += "<button id='" + fix(game.buildings[obj].name) + "Buy' onClick='buyBuild("
            + JSON.stringify(fix(game.buildings[obj].name)) + ", 1)'>Purchase " 
            + game.buildings[obj].name;
        //Generate information display
        out += "<br/>Amount: <span id='" + fix(game.buildings[obj].name) 
            + "Amount'>" + build.amount + "</span><br/>";
        //Generate cost display
        out += "Cost: <span id='" + fix(game.buildings[obj].name) + "Cost'>"
            + game.buildings[obj].cost + " " + game.buildings[obj].buyRes + "</span></button></span><br/>"
    }
    
    out += "<br/>";
    
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
            out += upg.name + " purchased<br/></span>";
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
        var res = game.resources[obj];
	}
	for(var obj in game.buildings) {
        var build = game.buildings[obj]
        if(build.unlocked) {
            write(fix(game.buildings[obj].name) + "Amount", game.buildings[obj].amount);
            write((fix(game.buildings[obj].name)+"Cost"), prettify(game.buildings[obj].cost) + " "
                + game.buildings[obj].buyRes);
            document.getElementById(fix(build.name)).style.display = "inline";
        }
        else {
            document.getElementById(fix(build.name)).style.display = "none";
        }
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

function reset() {
	if(confirm("This will wipe all of your data! You will lose EVERYTHING! Are you sure?")) {
		localStorage.removeItem("saveGame");
        game = loadVars();
        generateDisplay();
	}
}

function addRes(name, amount) {
	var res = game.resources[name];
    var inc = 1;
    for(var obj in game['upgrades']) {
        if(game['upgrades'][obj].addObject === 'perClick')
            if(game['upgrades'][obj].purchased)
                inc *= game['upgrades'][obj].boost;
    }
	res.amount += amount*inc;
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
        
        /*//Boost buildings
        if(upg.addGroup === "buildings") {
            game.buildings[upg.addObject].perSec *= upg.boost;
        }
        
        //Boost click
        if(upg.addGroup === "global") {
            game.global[upg.addObject] *= upg.boost;
        }*/
        
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

function unlockBuild() {
    for(var obj in game.buildings) {
        var build = game.buildings[obj];
        if(!build.unlocked) {
            if(game[build.reqGroup][build.reqObject].amount >= build.reqAmt) {
                build.unlocked = true;
                display();
            }
        }
    }
}

//Game loops
var incTime = window.setInterval(function(){
	//Increment resources
	for(var obj in game.buildings) {
        if(game.buildings[obj].unlocked) {
            var build = game.buildings[obj];
            var res = game.resources[build.addRes];
            if(build.useRes) {
                if(game.resources[build.useRes].amount >= build.useAmt * build.amount) {
                    game.resources[build.useRes].amount -= build.useAmt * build.amount;
                    //res.amount += build.perSec * build.amount;
                }
            }
            //Used to determine the multiplier for upgrades
            var upgInc = 1;
            for(var a in game.upgrades) {
                if(game.upgrades[a].addGroup === 'buildings') {
                    if(game.upgrades[a].addObject === fix(build.name)) {
                        if(game.upgrades[a].purchased == true)
                            upgInc *= game.upgrades[a].boost;
                    }
                }
            }
            res.amount += (build.perSec * upgInc) * build.amount;
        }
	}
	display();
}, 1000);

//Unlocks various things when it is supposed to
var unlTime = window.setInterval(function() {
    unlockUpg();
    unlockBuild();
}, 1000)

/****************************************
 *************SAVE STUFFS!!!*************
 ****************************************/
function save() {
    //Copies the game object over to a copy
    var gameCp = JSON.parse(JSON.stringify(game));
    //Cleanup the game copy
    
    //Remove useless global variables
    delete gameCp['global'].multiplier;
    delete gameCp['global'].perClick;
    
    for(var obj in gameCp['resources']) {
        delete gameCp['resources'][obj].name;
        delete gameCp['resources'][obj].sellable;
        delete gameCp['resources'][obj].sellAmt;
        delete gameCp['resources'][obj].value;
    }
    for(var obj in gameCp['buildings']) {
        delete gameCp['buildings'][obj].name;
        delete gameCp['buildings'][obj].buyRes;
        delete gameCp['buildings'][obj].addRes;
        delete gameCp['buildings'][obj].useRes;
        delete gameCp['buildings'][obj].useAmt;
        delete gameCp['buildings'][obj].perSec;
        delete gameCp['buildings'][obj].oCost;
    }
    for(var obj in gameCp['upgrades']) {
        var a = gameCp['upgrades'][obj];
        delete a.name;
        delete a.buyRes;
        delete a.cost;
        delete a.addGroup;
        delete a.addObject;
        delete a.req;
        delete a.boost;
    }
    var saveStr = {};
    for(var a in gameCp) {
        saveStr[a] = gameCp[a];
        for(var b in gameCp[a]) {
            saveStr[a][b] = gameCp[a][b];
            for(var c in gameCp[a][b]) {
                saveStr[a][b][c] = gameCp[a][b][c];
            }
        }
    }
    localStorage.setItem('saveGame', JSON.stringify(saveStr));
}

function load() {
    var saveStr = JSON.parse(localStorage.getItem('saveGame'));
    if(saveStr) {
        for(var a in saveStr) {
            for(var b in saveStr[a]) {
                for(var c in saveStr[a][b]) {
                    game[a][b][c] = saveStr[a][b][c] || game[a][b][c];
                }
            }
        }
    }
    generateDisplay();
}

var saveTime = window.setInterval(function() {
    save();
}, 60000);

//Last line of code:
load();