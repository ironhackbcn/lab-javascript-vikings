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

// QUESTION - I don't know why I chose a random viking and a random saxon, but i saw other classmates doing it...
War.prototype.vikingAttack = function() {
  let saxonIndex = Math.floor(Math.random() * saxonArmy.length);
  let attackedSaxon = this.saxonArmy[saxonIndex];
  
  let vikingIndex = Math.floor(Math.random() * vikingArmy.length);
  let attacker = this.vikingArmy[vikingIndex];

  // QUESTION - not really a question, but I don't know why this doesn't work. 
  attackedSaxon.receiveDamage(attacker.strength);

}

War.prototype.showStatus = function() {
  if(this.saxonArmy.length === 0) {
    return 'Vikings have won the war of the century!';
  }
}