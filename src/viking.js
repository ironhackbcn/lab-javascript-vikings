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
class Viking extends Soldier {
  constructor(nameArg, healthArg, strengthArg) {
    super(healthArg, strengthArg);
    this.name = nameArg;
    this.health = healthArg;
    this.strength = strengthArg;
  }

  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(healthArg, strengthArg) {
    super(healthArg, strengthArg);
  }

  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}
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
  let saxon = this.saxonArmy[0];
  let viking = this.vikingArmy[0];
  let result = saxon.receiveDamage(viking.strength);
  this.saxonArmy = this.saxonArmy.filter(function(saxon) {
    return saxon.health > 0;
  });
  return result;
};
War.prototype.saxonAttack = function() {
  let result = this.vikingArmy[0].receiveDamage(this.saxonArmy[0].strength);
  this.vikingArmy = this.vikingArmy.filter(function(viking) {
    return viking.health > 0;
  });
  return result;
};
War.prototype.showStatus = function() {
  if (this.saxonArmy.length === 0) {
    return "Vikings have won the war of the century!";
  } else if (this.vikingArmy.length === 0) {
    return "Saxons have fought for their lives and survive another day...";
  } else {
    return "Vikings and Saxons are still in the thick of battle.";
  }
};
