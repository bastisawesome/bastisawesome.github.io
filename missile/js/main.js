window.onload = loadGame; // Loads the game.

var gameCanvas;                 // Stores the game canvas for easy managament
var canvasContext;              // Stores the canvas context for easy managament
var missileGroup= [];            // Holds all enemy sprites
var cloudGroup = [];            // Holds all of the cloud sprites
var loop;                       // Loops the game; stored here to allow for modification
var delta, now, then=0;           // Holds the change in FPS
/**
 * Sets all of the variables and prepares the game to run.
 */
function loadGame() {
    gameCanvas = document.getElementById('gameCanvas');
    canvasContext = gameCanvas.getContext('2d');
    
    frame();
}

/*
 * Handles the game loop.
 */
function frame() {
    genDelta();
    update();
    render();
    loop = requestAnimationFrame(frame);
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
    if(Math.random() < 1/40) {
        addMissile();
        if(Math.random() < 1/50) {
            addMissile();
            if(Math.random() < 1/60) {
                addMissile();
                if(Math.random() < 1/70) {
                    addMissile();
                    if(Math.random() < 1/80) {
                        addMissile();
                        if(Math.random() < 1/90) {
                            addMissile();
                            if(Math.random() < 1/100) {
                                addMissile();
                            }
                        }
                    }
                }
            }
        }
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
    canvasContext.fillStyle = SKYBLUE;   // Sets the colour
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
    //TODO Finish this code
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