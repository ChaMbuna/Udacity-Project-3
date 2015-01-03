var Xdir = 100;
var Ydir = 84;
var Canvasleft = 0;
var Canvasright = 400;
var Canvastop = 84;
var Canvasbottom = 400;

var Enemy = function (x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.sprite = 'images/enemy-bug.png';
    var enemySpeeds = [80, 140, 160, 180, 200, 240, 280, 300];
    var randomSpeed = enemySpeeds[Math.floor(Math.random() * enemySpeeds.length)];
    this.speed = randomSpeed;    
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
    this.x += this.speed * dt;
    if (this.x > Canvasright) {
        this.x = Math.floor(Math.random() * -300);
    }
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

var score = 0;

Player.prototype.reset = function () {
    this.x = 200;
    this.y = 400;
    score--;
    document.getElementById('score').innerHTML = 'Score ['+score+']';
};

Player.prototype.resetOnWin = function () {
    this.x = 200;
    this.y = 400;
    score++;
    document.getElementById('score').innerHTML = 'Score ['+score+']';
};


Player.prototype.handleInput = function (key) {
    switch(key){
    case 'left':
        if (this.x > Canvasleft)
        this.x -=Xdir;
        break;
    case 'right':
        if (this.x < Canvasright)
        this.x +=Xdir;
        break;
    case 'up':
        if (this.y > Canvastop)
        this.y -=Ydir;
        else player.resetOnWin();
        break;
    case 'down':
        if (this.y < Canvasbottom)
        this.y +=Ydir;
        break;
    default:
        return;
    }
};

Player.prototype.update = function() {
for(var e = 0, quantityEnemies = allEnemies.length; e < quantityEnemies; e++) {
        if(player.x <= (allEnemies[e].x + 70) && allEnemies[e].x <= (player.x + 50) && player.y <= (allEnemies[e].y + 70) && allEnemies[e].y <= (player.y + 60)) {
            player.reset();               
            }
}
};

// initializes enemies and player
var allEnemies = [];
var enemy1 = new Enemy(0, 62);
allEnemies.push(enemy1);
var enemy2 = new Enemy(-200, 62);
allEnemies.push(enemy2);
var enemy3 = new Enemy(0, 144);
allEnemies.push(enemy3);
var enemy4 = new Enemy(-200, 144);
allEnemies.push(enemy4);
var enemy5 = new Enemy(0, 230);
allEnemies.push(enemy5);
var enemy6 = new Enemy(-200, 230);
allEnemies.push(enemy6);

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
