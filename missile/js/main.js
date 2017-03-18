var gameCanvas;                 // Stores the game canvas for easy managament
var canvasContext;              // Stores the canvas context for easy managament
var missileGroup= [];          	// Holds all enemy sprites
var cloudGroup = [];            // Holds all of the cloud sprites
var loop;                       // Loops the game; stored here to allow for modification
var delta, now, then=0;         // Holds the change in FPS
var player;			// Controls the player character
var pressedKeys = [];		// Handles user input
var paused = true;		// Pauses the game
/**
 * Sets all of the variables and prepares the game to run.
 */
function loadGame() {
    gameCanvas = document.getElementById('gameCanvas');
    canvasContext = gameCanvas.getContext('2d');
    
    player = new Player();
    
    frame();
}

/*
 * Handles the game loop.
 */
function frame() {
    if(!paused) {
	genDelta();
	input();
	update();
	render();
	loop = requestAnimationFrame(frame);
    }
}

/*
 * Updates delta
 */
function genDelta() {
    now = new Date();
    delta = (now - then) / 1000;
    then = now;
}

/*
 * Handles the looping functions of the game.
 */
function update() {
    // Handle collisions
    colCheck();
    
    if(!cloudGroup[0]) {
        addCloud();
    }
    if(Math.random() < 1/40) {
        addCloud();
        if(Math.random() < 1/50) {
            addCloud();
            if(Math.random() < 1/60) {
                addCloud();
                if(Math.random() < 1/70) {
                    addCloud();
                    if(Math.random() < 1/80) {
                        addCloud();
                        if(Math.random() < 1/90) {
                            addCloud();
                            if(Math.random() < 1/100) {
                                addCloud();
                            }
                        }
                    }
                }
            }
        }
    }

    for(var i in cloudGroup) {
        if(cloudGroup.hasOwnProperty(i)) {
            cloudGroup[i].onLoop(delta);
            if(cloudGroup[i].x + cloudGroup[i].x_offset < 0) {
                cloudGroup.splice(i, 1);
            }
        }
    }
    
    if(!missileGroup[0]) {
        addMissile();
    }
    var loops=1;
    while(true) {
        if(Math.random() < 1/(20 + (10*loops))) {
            addMissile();
            loops++;
        }
        else break;
    }
    for(var i in missileGroup) {
        if(missileGroup.hasOwnProperty(i)) {
            missileGroup[i].onLoop(delta);
            if(missileGroup[i].x + missileGroup[i].x_offset < 0) {
                missileGroup.splice(i, 1);
            }
        }
    }
}

function render() {
    // Clear the canvas
    canvasContext.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
    
    // Fill the background layer 4
    canvasContext.beginPath();          // Allows filling
    canvasContext.rect(0, 0, gameCanvas.width, gameCanvas.height);
    canvasContext.fillStyle = Colours.SKYBLUE;   // Sets the colour
    canvasContext.fill();               // Fills the canvas
    
    // Generate clouds as background layer 3
    for(var property in cloudGroup) {
        if(cloudGroup.hasOwnProperty(property)) {
            canvasContext.drawImage(cloudGroup[property].image, cloudGroup[property].x, cloudGroup[property].y);
        }
    }
    
    // Generate missiles as background layer 2
    for(var i in missileGroup) {
        if(missileGroup.hasOwnProperty(i)) {
            canvasContext.drawImage(missileGroup[i].image, missileGroup[i].x, missileGroup[i].y);
        }
    }
    
    // Generate boss as background layer 2
    //TODO Finish this code
    
    // Generate player as background layer 1
    canvasContext.drawImage(player.image, player.x, player.y);
}

/*
 * Adds a new enemy to the game
 */
function addMissile() {
    missileGroup.push(new Missile());
}

/*
 * Adds a new cloud to the game.
 */
function addCloud() {
    cloudGroup.push(new Cloud());
}

/*
 * Handles user input
 */
document.addEventListener('keydown', function(event) {
    if(pressedKeys.indexOf(event.keyCode) == -1)
	pressedKeys.push(event.keyCode);
});
document.addEventListener('keyup', function(event) {
    while(pressedKeys.indexOf(event.keyCode) >-1)
	pressedKeys.splice(pressedKeys.indexOf(event.keyCode), 1);
});
function input() {
    for(var i in pressedKeys) {
	switch(pressedKeys[i]) {
	    case KEYS.UP:
		player.y -= player.speed;
		if(player.y < 0)
		    player.y = 0;
		break;
	    case KEYS.DOWN:
		player.y += player.speed;
		if(player.y+player.height > gameCanvas.height)
		    player.y = gameCanvas.height-player.height;
		break;
	    case KEYS.LEFT:
		player.x -= player.speed;
		if(player.x < 0)
		    player.x = 0;
		break;
	    case KEYS.RIGHT:
		player.x += player.speed;
		if(player.x+player.width > gameCanvas.width)
		    player.x = gameCanvas.width-player.width;
		break;
	}
    }
}

/*
 * Handles collision detection
 */
function colCheck() {
    for(var i in missileGroup) {
	if(collides(missileGroup[i], player)) {
	    missileGroup.splice(i, 1);
	}
    }
}

/*
 * Check if objects collide
 */
function collides(a, b) {
  return a.x < b.x + b.width &&
    a.x + a.width > b.x &&
    a.y < b.y + b.height &&
    a.y + a.height > b.y;
}

/*
 * Checks if the tab is focused
 */
window.onblur = function() {
    console.log("Pausing...");
    paused = true;
}
window.onfocus = function() {
    console.log("Unpausing...");
    paused = false;
}

/*
 * Load the game
 */
window.addEventListener("load", function() {
    paused = false;
    loadGame();
}
