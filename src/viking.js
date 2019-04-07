// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
}

Soldier.prototype.attack = function() {
  return this.strength;
};

Soldier.prototype.receiveDamage = function (damage) {
  this.health -= damage;
}

// Viking

Viking.prototype = Object.create(Soldier.prototype);

function Viking(name, health, strength) {
  this.name = name;
  this.health = health;
  this.strength = strength;
}

Viking.prototype.attack = function() {
  return this.strength;
}

Viking.prototype.receiveDamage = function(damage) {
  this.health -= damage;
  if(this.health > 0) {
    return `${this.name} has received ${damage} points of damage`;
  } else {
    return `${this.name} has died in act of combat`;
  }
}

Viking.prototype.battleCry = function() {
  return `Odin Owns You All!`;
}

// Saxon

Saxon.prototype = Object.create(Soldier.prototype);

function Saxon(health, strength) {
  this.health = health;
  this.strength = strength;
}

Saxon.prototype.attack = function() {
  return this.strength;
}

Saxon.prototype.receiveDamage = function(damage) {
  this.health -= damage;
  if(this.health > 0) {
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

// QUESTION - do we have to use the new Viking / new Saxon constructor when we add to the vikingArmy / saxonArmy array?

War.prototype.addViking = function(viking) {
  this.vikingArmy.push(viking);
}

War.prototype.addSaxon = function(saxon) {
  this.saxonArmy.push(saxon);
}

// QUESTION - I don't know why I chose a random viking and a random saxon, but I saw other classmates doing it...

// QUESTION - I've passed all tests now but am reviewing my code - why don't I need to say let this.saxonIndex = ... ?

War.prototype.vikingAttack = function() {
  let saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
  let attackedSaxon = this.saxonArmy[saxonIndex];
  
  let vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
  let attacker = this.vikingArmy[vikingIndex];

  let result = attackedSaxon.receiveDamage(attacker.strength);

  if(attackedSaxon.health <= 0){
   this.saxonArmy.splice(saxonIndex, 1);
  }

  return result;
}

War.prototype.saxonAttack = function() {
  let vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
  let attackedViking = this.vikingArmy[vikingIndex];
  
  let saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
  let attacker = this.saxonArmy[saxonIndex];

  let result = attackedViking.receiveDamage(attacker.strength);

  if(attackedViking.health <= 0){
   this.vikingArmy.splice(vikingIndex, 1);
  }
  return result;
}

War.prototype.showStatus = function() {
  if(this.saxonArmy.length === 0) {
    return 'Vikings have won the war of the century!';
  } else if (this.vikingArmy.length === 0) {
    return "Saxons have fought for their lives and survive another day..."
  } else {
    return "Vikings and Saxons are still in the thick of battle."
  }
}