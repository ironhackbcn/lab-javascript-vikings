// Iteration 1 - Soldier

function Soldier(health, strength) {

  // const soldier = {};

  this.health = health;
  this.strength = strength;
  /*this.attack = function () {
    return this.strength;
  }*/
  this.receiveDamage = function (damage) {
    this.health = this.health - damage;
  }
}
Soldier.prototype.attack = function () {
  return this.strength;
};


// Iteration 2 - Viking

function Viking(name, health, strength) {

  // const viking = {};

  this.name = name;
  this.health = health;
  this.strength = strength;
  
  this.receiveDamage = function (damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`; 
    }
    if (this.health <= 0) {
      return `${this.name} has died in act of combat`;
    }
  };
  this.battleCry = function () {
    return "Odin Owns You All!";
  };
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking


// Iteration 3 Saxon

function Saxon (health, strength) {
  this.health = health;
  this.strength = strength;
  
  this.receiveDamage = function (damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`; 
    }
    if (this.health <= 0) {
      return `A Saxon has died in combat`;
    }
  };
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon


// Iteration 4 - War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
  this.addViking = function (Viking) {
    //this.Viking = Viking {};
    this.vikingArmy.push(Viking);
  };
  this.addSaxon = function (Saxon) {
    this.saxonArmy.push(Saxon);;
  };
  /*
  this.vikingAttack = function () {
    var oldHealth = Saxon.health;
    war.vikingAttack(); {
    Saxon.health = oldHealth - Viking.strength;
    }
  };
  
  this.saxonAttack = function () {};Viking.strength()
  this.showStatus = function () {};*/
}