//Variables
var cookies = 0;
var cursors = 0;
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
	write("cursors", cursors);
	write("cookies", cookies);
	write("cursorCost", Math.floor(10*Math.pow(1.1,cursors)));
}

function prettify(input) {
	var output = Math.round(input*1000000)/1000000;
	return output;
}

function cookieClick(number) {
	cookies += number;
	write('cookies',cookies);
}

function buyCursor() {
	var cursorCost = Math.floor(10*Math.pow(1.1,cursors));
	if(cookies >= cursorCost) {
		cursors += 1;
		cookies -= cursorCost;
		display();
	};
}

function save() {
	_gaq.push(['_trackEvent', 'My Game', 'Save']);
	var save = {
		cookies: cookies,
		cursors: cursors,
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
		if(typeof savegame.cookies !== "undefined") cookies = savegame.cookies;
		if(typeof savegame.cursors !== "undefined") cursors = savegame.cursors;
	}
	
	display();
}

function reset() {
	if(confirm("This will wipe all of your data! You will lose EVERYTHING! Are you sure?")) {
		localStorage.removeItem("save");
		cookies = 0;
		cursors = 0;
	}
	display();
}

//Game loop
window.setInterval(function(){
	cookieClick(cursors);
}, 1000);

//Save loop
window.setInterval(function() {
	save();
}, 60000);