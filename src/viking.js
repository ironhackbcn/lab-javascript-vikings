// Soldier
function Soldier(healthArg, strengthArg) {
  this.health = healthArg;
  this.strength = strengthArg;
}

Soldier.prototype.attack = function() {
  return this.strength;
};

Soldier.prototype.receiveDamage = function(damage) {
  this.health -= damage;
};

// Viking
function Viking(name, healthArg, strengthArg) {
  Soldier.call(this, healthArg, strengthArg);
  this.name = name;
}

// ****
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;
// ****

Viking.prototype.receiveDamage = function(damage) {
  this.health -= damage;
  if (this.health <= 0) {
    return `${this.name} has died in act of combat`;
  } else {
    return `${this.name} has received ${damage} points of damage`;
  }
};

Viking.prototype.battleCry = function() {
  return "Odin Owns You All!";
};

// Saxon
function Saxon(healthArg, strengthArg) {
  Soldier.call(this, healthArg, strengthArg);
}

// ****
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;
// ****

Saxon.prototype.receiveDamage = function(damage) {
  this.health -= damage;
  if (this.health <= 0) {
    return `A Saxon has died in combat`;
  } else {
    return `A Saxon has received ${damage} points of damage`;
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
  const targetVikingIndex = [Math.floor(Math.random() * this.vikingArmy.length)];
  const targetSaxonIndex = [Math.floor(Math.random() * this.saxonArmy.length)];
  this.saxonArmy[targetSaxonIndex].receiveDamage(
    this.vikingArmy[targetVikingIndex].attack()
  );
  if (this.saxonArmy[targetSaxonIndex].health < 0) {
    this.saxonArmy.splice(targetSaxonIndex, 1);
    return "A Saxon has died in combat";
  }
};

War.prototype.saxonAttack = function() {
  const targetVikingIndex = [Math.floor(Math.random() * this.vikingArmy.length)];
  const targetSaxonIndex = [Math.floor(Math.random() * this.saxonArmy.length)];
  this.vikingArmy[targetVikingIndex].receiveDamage(
    this.saxonArmy[targetSaxonIndex].attack()
  );
  if (this.vikingArmy[targetVikingIndex].health < 0) {
    this.vikingArmy.splice(targetVikingIndex, 1);
  }
  return `${this.vikingArmy[targetVikingIndex].name} has received ${this.saxonArmy[targetSaxonIndex].strength} points of damage`;
};

War.prototype.showStatus = function() {
    if (this.saxonArmy.length < 1) {
        return "Vikings have won the war of the century!"
    } else if (this.vikingArmy.length < 1) {
        return "Saxons have fought for their lives and survive another day..."
    } else {
        return "Vikings and Saxons are still in the thick of battle."
    }
};
