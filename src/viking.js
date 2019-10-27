// Soldier
function Soldier (health, strength) {

    this.health = health;
    this. strength = strength;
};

Soldier.prototype.attack = function () {

    return this.strength
};

Soldier.prototype.receiveDamage = function (dmg) {
    
    this.health = this.health -= dmg;
    
};

Viking.prototype = Object.create(Soldier.prototype); // By doing this, Viking function inherit from Soldier
Viking.prototype.constructor = Viking

// Viking
function Viking (name, health, strength) {

    this.name = name;
    this.health = health;
    this.strength = strength;
};

Viking.prototype.receiveDamage = function (dmg) {

    this.health = this.health -= dmg;

    if (this.health > 0) {
        return `${this.name} has received ${dmg} points of damage`;
    } 
    else {
        return `${this.name} has died in act of combat`
    }

};

Viking.prototype.battleCry = function () {

    return `Odin Owns You All!`

};

Saxon.prototype = Object.create(Soldier.prototype); // By doing this, Saxon function inherit from Soldier
Saxon.prototype.constructor = Saxon;


// Saxon
function Saxon(health, strength) {

    this.health = health;
    this.strength = strength;

};

Saxon.prototype.receiveDamage = function (dmg) {

    this.health = this.health -= dmg;

    if (this.health > 0) {
        return `A Saxon has received ${dmg} points of damage`
    } 
    else {
        return `A Saxon has died in combat`
    };
};


// War
War.prototype = Object.create(Soldier.prototype); // By doing this, War function inherit from Soldier
War.prototype.constructor = War;

function War() {

     this.vikingArmy = [];
     this.saxonArmy = [];

};


War.prototype.addViking = function (Viking) {

    var newViking = this.vikingArmy.push(Viking);

};


War.prototype.addSaxon = function (Saxon) {

    var newSaxon = this.saxonArmy.push(Saxon);

};

// function vikingAttack
War.prototype.vikingAttack = function () {

    var victim = Math.floor(Math.random() * this.saxonArmy.length)

    var attacker = Math.floor(Math.random() * this.vikingArmy.length)

    var result = this.saxonArmy[victim].receiveDamage(this.vikingArmy[attacker].strength)
    
    if (result === `A Saxon has died in combat`) {
        this.saxonArmy.splice(victim,  1);
    }

    return result

};


// function saxonAttack
War.prototype.saxonAttack = function () {

    var victim = Math.floor(Math.random() * this.vikingArmy.length)

    var attacker = Math.floor(Math.random() * this.saxonArmy.length)

    var result = this.vikingArmy[victim].receiveDamage(this.saxonArmy[attacker].strength)

    if(result.indexOf(`died in act of combat`) != -1) {
        this.vikingArmy.splice(victim, 1);
    }
    return result
    
};


War.prototype.showStatus = function () {
    

    if (this.saxonArmy.length == 0) {
        return "Vikings have won the war of the century!";
    }

    else if (this.vikingArmy.length == 0) {
      return "Saxons have fought for their lives and survive another day...";
    }

    else if (this.saxonArmy.length !== 0 && this.vikingArmy.length !== 0) {
      return "Vikings and Saxons are still in the thick of battle.";
    }

};
