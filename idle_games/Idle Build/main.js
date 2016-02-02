write('versionDisplay', game.global.version);
//For some effing reason this is the only fix
document.getElementById('clickButton').onmousedown = function() { click(); };
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
        out += "Cost: <span id='" + fix(game.buildings[obj].name) + "Cost'>";
        for(var i=0; i<build.buyRes.length; i++) {
            out += game.buildings[obj].cost[i] + " " + game.buildings[obj].buyRes[i] + "<br/>";
        }
        out += "</span>";
        out += "<span id='" + fix(build.name) + "Desc'>" + build.desc + "</span></button><br/></span>";
    }
    
    /*for(var i in game.buildings) {
        if(game.buildings[i].unlocked) {
            out += "<br/>";
            break;
        }
    }*/
    
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
                   + ")'>Purchase " + upg.dispName + "<br/>Cost: " + upg.cost + " " + upg.buyRes
                   + "<br/>"
                   + "<span id='" + fix(upg.name) + "Desc'>" + upg.desc + "</span><br/></button><br/></span>";
        }
        else if(upg.purchased == true) {
            out += upg.dispName + " purchased<br/></span>";
        }
    }
    
    document.getElementById('randEvents').style.display = 'none';
    
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
            var message = "";
            for(var i=0; i<build.buyRes.length; i++) {
                message += prettify(game.buildings[obj].cost[i]) + " " + game.buildings[obj].buyRes[i] + '<br/>';
            }
            write((fix(game.buildings[obj].name)+"Cost"), message);
            write(fix(build.name) + "Desc", build.desc);
            document.getElementById(fix(build.name)).style.display = "inline";
        }
        else {
            document.getElementById(fix(build.name)).style.display = "none";
        }
	}
	for(var obj in game.upgrades) {
        if(game.upgrades[obj].purchased == true) {
            write(fix(game.upgrades[obj].name), "<span>" + game.upgrades[obj].dispName
            + " purchased</span><br/>");
        }
        else if(game.upgrades[obj].unlocked == true) {
            document.getElementById(fix(game.upgrades[obj].name)).style.display = "inline";
            write(fix(game.upgrades[obj].name) + "Desc", game.upgrades[obj].desc); 
        }
        else {
            document.getElementById(fix(game.upgrades[obj].name)).style.display = "none";
        }
    }
}

function prettify(input) {
    var output = '';
    output = input;
    
    //Secret change...
    if (output == 666) {
        output++; //This only changes the number displayed, the actual value remains the same. I'm too lazy to fix that.
    }
    
    /*
     ********************
     ******Millions******
     ********************
     */
    if(input >= 1000000 && input < 100000000) {
        output = (input/1000000);
        if(input%1000000 >= 100)
            output = output.toFixed(3);
        else
            output = Math.round(output);
        output = output.toString();
        output += 'M';
    }
    
    /*
     ********************
     ******Billions******
     ********************
     */
    if(input >= 100000000 && input < 100000000000) {
        output = (input/100000000);
        if(input%100000000 >= 1000)
            output = output.toFixed(3);
        else
            output = Math.round(output);
        output = output.toString();
        output += 'B';
    }
    
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
    
    //Updated purchase system!
    var buyRes = build.buyRes;
    var cost = build.cost;
    
    for(var i=0; i<buyRes.length; i++) {
        var res = game.resources[buyRes[i]];
        var amt = res.amount;
        if(amt < cost[i]) {
            return;
        }
    }
    
    for(var i=0; i<buyRes.length; i++) {
        var res = game.resources[buyRes[i]];
        res.amount -= cost[i];
    }
    
    build.amount += amount;
    
    for(var i=0; i<buyRes.length; i++) {
        cost[i] += Math.ceil((build.amount * 1.17));
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

/*********************************
 **********Random Events**********
 *********************************
 */

function genRandEvent() {
    var tsle = game.global.timeSinceLastEvent;
    if(!game.buildings.mine.amount){
        tsle = 0;
        return;
    }
    var chance = 99;
    if(tsle >= genRndNum(300, 600)) {
        if(tsle > 360 && tsle < 420)
            chance = 90;
        else if(tsle > 420 && tsle < 480)
            chance = 85;
        else if(tsle > 480 && tsle < 540)
            chance = 80;
        else if(tsle > 540)
            chance = 75;
        if(genRndNum(0, 100) >= chance) {
            var disp = document.getElementById('randEvents');
            if(disp.style.display === 'none')
                disp.style.display = 'inline';
            if(disp.children.length == 5) {
                disp.removeChild(document.getElementById('1'));
                for(var i=2; i<=5; i++) {
                    document.getElementById(i).id = i - 1;
                }
            }
            while(true) {
                var message = "<span id='" + (disp.children.length+1) + "'>";
                if(game.buildings.mine.amount && (genRndNum(0, 100) >= 70)) {
                    var incNum = genRndNum((100 + (2*(game.buildings.mine.amount))), (100 + (10*(game.buildings.mine.amount))));
                    game.resources.ironOre.amount += incNum;
                    message += game.chozoLore.mine.events[(genRndNum(0, game.chozoLore.mine.events.length))].format(incNum) + '<br/></span>';
                    disp.innerHTML += message;
                    break;
                }
                if(game.buildings.marketplace.amount && (genRndNum(0, 100) >= 65)) {
                    var incNum = genRndNum((10 + (2*(game.buildings.marketplace.amount))), (10 + (10*(game.buildings.marketplace.amount))));
                    game.resources.money.amount += incNum;
                    message += game.chozoLore.marketplace.events[(genRndNum(0, game.chozoLore.marketplace.events.length))].format(incNum) + '<br/></span>';
                    disp.innerHTML += message;
                    break;
                }
                if(game.buildings.smeltery.amount && (genRndNum(0, 100) >= 60)) {
                    var incNum = genRndNum((100 + (2*(game.buildings.smeltery.amount))), (100 + (10*(game.buildings.smeltery.amount))));
                    message += game.chozoLore.smeltery.events[(genRndNum(0, game.chozoLore.smeltery.events.length))].format(incNum) + '<br/></span>';
                    disp.innerHTML += message;
                    break;
                }
                if(game.buildings.hardwareStore.amount && (genRndNum(0, 100) >= 55)) {
                    var incNum = genRndNum((20 + (2*(game.buildings.hardwareStore.amount))), (20 + (10*(game.buildings.hardwareStore.amount))));
                    message += game.chozoLore.smeltery.events[(genRndNum(0, game.chozoLore.hardwareStore.events.length))].format(incNum) + '<br/></span>';
                    disp.innerHTML += message;
                    break;
                }
                if(game.buildings.steelMill.amount && (genRndNum(0, 100) >= 50)) {
                    var incNum = genRndNum((100 + (2*(game.buildings.steelMill.amount))), (100 + (10*(game.buildings.steelMill.amount))));
                    message += game.chozoLore.steelMill.events[(genRndNum(0, game.chozoLore.steelMill.events.length))].format(incNum) + '<br/></span>';
                    disp.innerHTML += message;
                    break;
                }
                if(game.buildings.steelMarketplace.amount && (genRndNum(0, 100) >= 45)) {
                    var incNum = genRndNum((50 + (2*(game.buildings.steelMarketplace.amount))), (50 + (10*(game.buildings.steelMarketplace.amount))));
                    message += game.chozoLore.steelMarketplace.events[(genRndNum(0, game.chozoLore.steelMill.events.length))].format(incNum) + '<br/></span>';
                    disp.innerHTML += message;
                    break;
                }
            }
            game.global.timeSinceLastEvent = 0;
        }
        else {
            return;
        }
    }
}

function genRndNum(min, max) {
    return (Math.floor(Math.random() * max) + min);
}

//This is the third secret. It uses Python-based text parsing. Do you remember "string {0}".format('CAKE')? Well here it is!
String.prototype.format = function () {
  var i = 0, args = arguments;
  return this.replace(/{}/g, function () {
    return typeof args[i] != 'undefined' ? args[i++] : '';
  });
};

function click() {
    game.global.amtClicked++;
    var inc = 1;
    for(var obj in game['upgrades']) {
        if(game['upgrades'][obj].addObject === 'perClick')
            if(game['upgrades'][obj].purchased)
                inc *= game['upgrades'][obj].boost;
    }
    addRes('ironOre', game.global.perClick*inc);
    if(genRndNum(0, 100) >= 90) {
        addRes('coal', 1);
    }
}

//Game loops
var incTime = window.setInterval(function(){
    //Stuff!
    game.global.timeSinceLastEvent++;
    //Increment resources
    for(var obj in game.buildings) {
        if(game.buildings[obj].amount) {
            var build = game.buildings[obj];
            var res = game.resources[build.addRes];
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
            if(build.useRes) {
                for(var i=0; i<build.useRes.length; i++) {
                    if(game.resources[build.useRes[i]].amount < (build.useAmt[i]*build.amount)) {
                        console.log('Hi!');
                        return;
                    }
                }
                
                for(var i=0; i<build.useRes.length; i++) {
                    game.resources[build.useRes[i]].amount -= (build.useAmt[i]*build.amount);
                }
                addRes(build.addRes, ((build.perSec*upgInc)*build.amount));
            }
            else {
                addRes(build.addRes, ((build.perSec * upgInc) * build.amount));
            }
        }
    }
    display();
    genRandEvent();
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
    delete gameCp['global'].version;
    delete gameCp['global'].multiplier;
    delete gameCp['global'].perClick;
    
    //Remove entire section
    delete gameCp.chozoLore;
    
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
        delete gameCp['buildings'][obj].desc;
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
        delete a.desc;
        delete a.dispName;
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
        if(saveStr.global.version === "0.0.1") {
            alert('Unfortunately, do to some updating, your save has to be wiped. Sorry. :(');
            reset();
            return;
        }
        for(var a in saveStr) {
            for(var b in saveStr[a]) {
                if(a === 'global') {
                    game[a][b] = saveStr[a][b] || game[a][b];
                }
                else {
                    for(var c in saveStr[a][b]) {
                        game[a][b][c] = saveStr[a][b][c] || game[a][b][c];
                    }
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