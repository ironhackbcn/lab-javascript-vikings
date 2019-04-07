// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
}

Soldier.prototype.attack = function() {
  return this.strength;
};

Soldier.prototype.receiveDamage = function(damage) {
  this.health -= damage;
};

// Viking
function Viking(name, health, strength) {
  this.name = name;
  Soldier.call(this, health, strength);
}

Viking.prototype = new Soldier();

Viking.prototype.receiveDamage = function(damage) {
  this.health -= damage;
  if (this.health > 0) {
    return this.name + " has received " + damage + " points of damage";
  } else {
    return this.name + " has died in act of combat";
  }
};

Viking.prototype.battleCry = function() {
  return "Odin Owns You All!";
};

// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);
}

Saxon.prototype = new Soldier();

Saxon.prototype.attack = function() {
  return this.strength;
};

Saxon.prototype.receiveDamage = function(damage) {
  this.health -= damage;
  if (this.health > 0) {
    return "A Saxon has received " + damage + " points of damage";
  } else {
    return "A Saxon has died in combat";
  }
};

// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
}

War.prototype.addViking = function(viking) {
  this.vikingArmy.push(viking);
};

War.prototype.addSaxon = function(saxon) {
  this.saxonArmy.push(saxon);
};

War.prototype.vikingAttack = function() {
  var randomNumberForViking = Math.floor(
    Math.random() * this.vikingArmy.length
  );
  var randomNumberForSaxon = Math.floor(Math.random() * this.saxonArmy.length);

  var randomSaxon = this.saxonArmy[randomNumberForSaxon];
  var randomViking = this.vikingArmy[randomNumberForViking];

  // var damage = randomViking.attack();
  randomSaxon.receiveDamage(randomViking.attack());

  if (randomSaxon.health < 1) {
    this.saxonArmy.pop(randomSaxon);
  }

  return randomSaxon.receiveDamage(randomViking.strength);
};

War.prototype.saxonAttack = function() {
  var randomNumberForViking = Math.floor(
    Math.random() * this.vikingArmy.length
  );
  var randomNumberForSaxon = Math.floor(Math.random() * this.saxonArmy.length);

  var randomSaxon = this.saxonArmy[randomNumberForSaxon];
  var randomViking = this.vikingArmy[randomNumberForViking];

  var damage = randomViking.attack();
  randomSaxon.receiveDamage(damage);

  if (randomViking.health < 1) {
    this.vikingArmy.pop(randomViking);
  }

  return randomViking.receiveDamage(randomSaxon.strength);
};

War.prototype.showStatus = function() {
  if (this.saxonArmy.length < 1) {
    return "Vikings have won the war of the century!";
  }else if (this.vikingArmy.length < 1) {
    return "Saxons have fought for their lives and survive another day...";
  } else { 
    return "Vikings and Saxons are still in the thick of battle.";
  }
};
