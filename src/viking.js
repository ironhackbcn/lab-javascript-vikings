// Soldier
function Soldier() {}

function Soldier(health, strength) {
    this.health = health;
    this.strength = strength;
};


Soldier.prototype.attack = function () {
    return this.strength;
  };


Soldier.prototype.receiveDamage = function(damage) {
    this.health = this.health - damage;
  };


// Viking
function Viking() {}

function Viking(name, health, strength) {
    this.name = name;
    this.health= health;
  }

// Saxon
function Saxon() {}

// War
function War() {}
