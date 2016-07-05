/*
 * Player constructor. Used to store attributes for the player object.
 */
Player = function() {
    this.image = new Image();
    this.image.src = 'img/jet.png';
    this.x = 0;
    this.y = gameCanvas.height/2;
    this.x_offset = 62;
    this.y_offset = 25;
    this.lives = 3;
    this.speed = 5;
    
    this.onLoop = function() {
    }
}

/**
 * Enemy constructor. Used to store attributes for the enemy objects.
 */
Missile = function() {
    this.image = new Image();
    this.image.src = 'img/missile.png';
    this.x = gameCanvas.width;
    this.x_offset = this.image.width;
    this.y = Math.random()*gameCanvas.height;
    this.speed = (Math.random()*60) + 50;
    
    this.onLoop = function(delta) {
        this.x -= this.speed * delta;
    }
}

/**
 * Boss constructor.
 */
Boss = function() {
    this.image = new Image();
    this.image.src = 'img/boss.png';
    
    this.onLoop = function() {
    }
}

/**
 * Cloud constructor.
 */
Cloud = function() {
    this.image = new Image();
    this.image.src = 'img/cloud' + Math.floor((Math.random()*8)+1) +'.png';
    this.x = gameCanvas.width;
    this.y = Math.random() * gameCanvas.height;
    this.x_offset = this.image.width;
    
    this.onLoop = function(delta) {
        this.x -= 50 * delta;
    }
}