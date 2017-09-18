/*
 * Player constructor. Used to store attributes for the player object.
 */
Player = function() {
    this.image = new Image();
    this.image.src = 'img/jet.png';
    this.x = 0;
    this.y = gameCanvas.height/2;
    this.width = 62;
    this.height = 25;
    this.lives = 3;
    this.speed = 5;
    
    this.onLoop = function() {
    }
    
    this.onHit = function() {
        this.lives--;
//         this.x = 0;
//         this.y = gameCanvas.height/2;
    }
}

/**
 * Enemy constructor. Used to store attributes for the enemy objects.
 */
Missile = function() {
    this.image = new Image();
    this.image.src = 'img/missile.png';
    this.x = gameCanvas.width;
    this.y = Math.random()*gameCanvas.height;
    this.width = this.image.width;
    this.height = this.image.height;
    this.speed = (Math.random()*60) + 50;
    
    this.onLoop = function(delta) {
        this.x -= this.speed * delta;
    }
}

/**
 * Boss constructor.
 */
AI = function() {
    this.a = function() {}
    this.b = function() {}
}

Boss = function() {
    this.image = new Image();
    this.image.src = 'img/boss.png';
    this.ai = AI.a;
    
    this.onLoop = function() {
        this.ai();
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
    
    this.onLoop = function(delta) {
        this.x -= 50 * delta;
    }
}
