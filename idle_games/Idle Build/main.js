/*
  DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE 
                    Version 2, December 2004 

 Copyright (C) 2015 Giles Johnson <poi543@gmail.com> 

 Everyone is permitted to copy and distribute verbatim or modified 
 copies of this license document, and changing it is allowed as long 
 as the name is changed. 

            DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE 
   TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION 

  0. You just DO WHAT THE FUCK YOU WANT TO.
 */
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
    
    // Generates the sell buttons
    for(var obj in game.resources) {
        if(game.resources[obj].sellable == true) {
            out += "<button onClick='sellRes(" + JSON.stringify(fix(game.resources[obj].name))
                   + ", " + game.resources[obj].sellAmt + ")'>Sell " + game.resources[obj].sellAmt + ' '
                   + game.resources[obj].name + "<br/>For " 
                   + game.resources[obj].value*game.resources[obj].sellAmt + " money</button>";
	    
	}
	/*if(game.resources[obj].amount >= game.resources[obj].sellAmt*10) {
		out += "<button onClick='sellRes(" + JSON.stringify(fix(game.resources[obj].name))
		    + ", " + game.resources[obj].sellAmt*10 + ")'>Sell " + game.resources[obj].sellAmt*10 + ' '
		    + game.resources[obj].name + "<br/>For "
		    + game.resources[obj].value*game.resources[obj].sellAmt*10 + " money</button>";
	}*/
        
        out += "<br/>";
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
            out += game.buildings[obj].cost[i] + " " + game.resources[game.buildings[obj].buyRes[i]].name + "<br/>";
        }
        out += "</span>";
        out += "<span id='" + fix(build.name) + "Desc'>" + build.desc + "</span></button><br/></span>";
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
            alert("Problem displaying... " + id + " " + e + "! If this problem persists, please contact the developer.");
            window.clearInterval(incTime);
	    window.clearInterval(saveTime);
	    window.clearInterval(unlTime);
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
                    message += prettify(game.buildings[obj].cost[i]) + " " + game.resources[game.buildings[obj].buyRes[i]].name + '<br/>';
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
    var output = 0;
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
    else if(input >= 100000000 && input < 100000000000) {
        output = (input/100000000);
        if(input%100000000 >= 1000)
            output = output.toFixed(3);
        else
            output = Math.round(output);
        output = output.toString();
        output += 'B';
    }
    else {
        output = Math.ceil(output);
    }
    return output;
}

function reset(skipConf) {
	if(skipConf || confirm("This will wipe all of your data! You will lose EVERYTHING! Are you sure?")) {
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
    game.amtBuildPurchased++;
    
    for(var i=0; i<buyRes.length; i++) {
        cost[i] += Math.ceil((build.amount * game.global.multiplier));
    }
    
    display();
}

function buyUpg(name) {
    /*
     * Stores the upgrade information
     */
    var upg = game.upgrades[name];
    
    if(game.resources[upg.buyRes].amount >= upg.cost) {
        game.resources[upg.buyRes].amount -= upg.cost;
        
        if(upg.name.contains('Tier') && !upg.name.contains('Click')) {
            build = game.buildings[upg.addObject];
            build.addRes.push(fix(game.resources[upg.tier].name));
            build.perSec.push(1);
            //Reset the upgrade boosts
            for(var i in build.perSec) {
                build.perSec[i] = 1;
            }
            for(var obj in game.upgrades) {
                upg2 = game.upgrades[obj];
                if(upg2.name.contains('Boost')) {
                    if(upg2.addObject = fix(build.name) && upg2.purchased) {
                        for(var i in build.perSec) {
                            build.perSec[i] *= upg2.boost;
                        }
                    }
                }
            }
        }
        if(upg.name.contains('Boost')) {
            if(upg.addGroup == 'buildings') {
                build = game.buildings[upg.addObject];
                for(var i=0; i<build.perSec.length; i++) {
                    build.perSec[i] *= upg.boost;
                }
            }
            else {
                game[upg.addGroup][upg.addObject] *= upg.boost;
            }
        }
        upg.purchased = true;
        game.global.numUpgPurchased++;
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
            else {
                if(game.global[upg.reqRes] >= upg.req)
                    upg.unlocked = true;
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
                    var res = game.resources.tinOre;
                    var coal=false, copper=false, iron=false;
                    for(var obj in game.upgrades) {
                        upg = game.upgrades[obj]
                        if(upg.name.contains('Mine Tier')) {
                            if(upg.name === "Mine Tier I" && upg.purchased) {
                                coal = true;
                                continue;
                            }
                            if(upg.name === "Mine Tier II" && upg.purchased) {
                                copper = true;
                                continue;
                            }
                            if(upg.name === "Mine Tier III" && upg.purchased) {
                                iron = true;
                            }
                        }
                    }
                    if(coal && genRndNum(0, 100) >= 80)
                        res = game.resources.coal;
                    else if(copper && genRndNum(0, 100) >= 80)
                        res = game.resources.copperOre;
                    else if(iron && genRndNum(0, 100) >= 80)
                        res = game.resources.ironOre;
                    var incNum = genRndNum((100 + (2*(game.buildings.mine.amount))), (100 + (10*(game.buildings.mine.amount))));
                    res.amount += incNum;
                    message += game.chozoLore.mine.events[(genRndNum(0, game.chozoLore.mine.events.length))].format(incNum, res.name) + '<br/></span>';
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
    var mineCoal = false, mineCopper = false, mineIron = false;
    addRes("tinOre", game.global.tinPerClick)
    game.global.amtTinMined++;
    game.global.amtMined++;
    
    for(var obj in game.upgrades) {
        var upg = game.upgrades[obj];
        if(upg.name.contains('Click') && upg.purchased) {
            if(upg.name === "Click Tier I") {
                mineCoal = true;
            }
            else if(upg.name === "Click Tier II") {
                mineCopper = true;
            }
            else if(upg.name === "Click Tier III") {
                mineIron = true;
            }
        }
    }
    if(mineCoal && genRndNum(0, 100) >= 80) {
        addRes('coal', game.global.coalPerClick);
        game.global.amtCoalMined++;
        game.amtMined++;
    }
    if(mineCopper && genRndNum(0, 100) >= 80) {
        addRes('copperOre', game.global.copperPerClick);
        game.global.amtCopperMined++;
        game.global.amtMined++;
    }
    if(mineIron && genRndNum(0, 100) >= 80) {
        addRes('ironOre', game.global.ironPerClick);
        game.global.amtIronMined++;
        game.global.amtMined++;
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
            if(build.useRes) {
                for(var i=0; i<build.useRes.length; i++) {
                    if(game.resources[build.useRes[i]].amount < (build.useAmt[i]*build.amount)) {
                        return;
                    }
                }
                
                for(var i=0; i<build.useRes.length; i++) {
                    game.resources[build.useRes[i]].amount -= (build.useAmt[i]*build.amount);
                }
                for(var i=0; i<build.addRes.length; i++) {
                    addRes(build.addRes, build.perSec[i]*build.amount);
                }
            }
            else {
                for(var i=0; i<build.addRes.length; i++) {
                    addRes(build.addRes[i], build.perSec[i]*build.amount);
                }
            }
        }
    }
    display();
    genRandEvent();
    game.global.timer++;
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
        delete gameCp['buildings'][obj].reqGroup;
        delete gameCp['buildings'][obj].reqObject;
        delete gameCp['buildings'][obj].reqAmt;
    }
    for(var obj in gameCp['upgrades']) {
        var a = gameCp['upgrades'][obj];
        delete a.buyRes;
        delete a.cost;
        delete a.addGroup;
        delete a.addObject;
        delete a.req;
        delete a.boost;
        delete a.desc;
        delete a.dispName;
        if(a.name.contains('Tier')) {
            delete a.reqRes;
        }
        delete a.name;
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
        if(saveStr.global.version === "0.0.1" || saveStr.global.version === "V0.1.0 ALPHA") {
            alert('Unfortunately, do to some updating, your save has to be wiped. Sorry. :(');
            reset(true);
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

String.prototype.contains = function(it) { return this.indexOf(it) != -1; }; // Implements a contains function to strings

//Last line of code:
load();