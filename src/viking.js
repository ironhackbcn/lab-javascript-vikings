// Soldier
function Soldier (health, strength) {
  this.health = health;
  this.strength = strength;
}

Soldier.prototype.attack = function () {
  return this.strength;
}
Soldier.prototype.receiveDamage = function (damage) {
  this.health -= damage;
}

// Viking
function Viking(name, health, strength) {
  this.name = name;
  Soldier.call(this, health, strength);
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

// reimplementation of method receiveDamage()
Viking.prototype.receiveDamage = function (damage) {
  this.health -= damage;
  if (this.health > 0) {
    return `${this.name} has received ${damage} points of damage`;
  } else {
    return `${this.name} has died in act of combat`;
  }
}
Viking.prototype.battleCry = function () {
  return 'Odin Owns You All!'
}

// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

// reimplementation of method receiveDamage()
Saxon.prototype.receiveDamage = function (damage) {
  this.health -= damage;
  if (this.health > 0) {
    return `A Saxon has received ${damage} points of damage`;
  } else {
    return `A Saxon has died in combat`;
  }
}


// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
}

War.prototype.addViking = function(vikingObj) {
  this.vikingArmy = this.vikingArmy.concat(vikingObj);
}
War.prototype.addSaxon = function(saxonObj) {
  this.saxonArmy = this.saxonArmy.concat(saxonObj);
}

War.prototype.vikingAttack = function () {
  var randomSaxon = Math.round(Math.random() * (this.saxonArmy.length-1));
  var randomViking = Math.round(Math.random() * (this.vikingArmy.length-1));
  var result = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength);
  if (this.saxonArmy[randomSaxon].health <= 0) {
    this.saxonArmy.splice(randomSaxon,1);
  }
  return result;
}
War.prototype.saxonAttack = function () {
  var randomSaxon = Math.round(Math.random() * (this.saxonArmy.length-1));
  var randomViking = Math.round(Math.random() * (this.vikingArmy.length-1));
  var result = this.vikingArmy[randomSaxon].receiveDamage(this.saxonArmy[randomSaxon].strength);
  if (this.vikingArmy[randomViking].health <= 0) {
    this.vikingArmy.splice(randomViking,1);
  }
  return result;
}

War.prototype.showStatus = function () {
  if (this.saxonArmy.length === 0) {
    return 'Vikings have won the war of the century!';
  } else if (this.vikingArmy.length === 0) {
    return 'Saxons have fought for their lives and survive another day...';
  } else {
    return 'Vikings and Saxons are still in the thick of battle.';
  }
}
