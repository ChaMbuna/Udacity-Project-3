// Enemies our player must avoid
var Enemy = function (x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
    this.x += this.speed * dt;    
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function (x, y) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-boy.png';
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.update = function(dt) {
};

var Xdir = 101;
var Ydir = 83;
var Moveleft = 0;
var Moveright = 400;
var Moveup = 83;
var Movedown = 400;

Player.prototype.handleInput = function (key) {
    switch(key){
    case 'left':
        if (this.x > Moveleft)
        this.x -=Xdir;
        break;
    case 'right':
        if (this.x < Moveright)
        this.x +=Xdir;
        break;
    case 'up':
        if (this.y > Moveup)
        this.y -=Ydir;
        else player.resetOnWin();
        break;
    case 'down':
        if (this.y < Movedown)
        this.y +=Ydir;
        break;
    default:
        return;
    }
};

// initializes enemies and player
var allEnemies = [];
var enemy1 = new Enemy(0, 150);
allEnemies.push(enemy1);
var enemy2 = new Enemy(0, 70);
allEnemies.push(enemy2);
var enemy3 = new Enemy(0, 220);
allEnemies.push(enemy3);
var enemy4 = new Enemy(0, 70);
allEnemies.push(enemy4);
var enemy5 = new Enemy(0, 150);
allEnemies.push(enemy5);

var player = new Player(200, 400);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
