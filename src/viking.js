// Soldier
function Soldier(healthArg, strengthArg) {
  this.health = healthArg;
  this.strength = strengthArg;
  this.attack = function () {
    return this.strength;
  };
}

Soldier.prototype.receiveDamage = function (damage) {
  this.health = this.health - damage;
};

// Viking
function Viking(name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;
Viking.prototype.receiveDamage = function (damage) {
  this.health = this.health - damage;
  if (this.health > 0) {
    return this.name + " has received " + damage + " points of damage";
  } else {
    return this.name + " has died in act of combat";
  }
}

Viking.prototype.battleCry = function () {
  return "Odin Owns You All!";
}

// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;
Saxon.prototype.receiveDamage = function (damage) {
  this.health = this.health - damage;
  if (this.health >= 1) {
    return "A Saxon has received " + damage + " points of damage";
  } else {
    return "A Saxon has died in combat";
  }
}

// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
  this.addViking = function(viking){
    this.vikingArmy.push(viking);
  };
  this.addSaxon = function(saxon){
    this.saxonArmy.push(saxon);
  };
  this.vikingAttack = function(){
    attackedSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    this.saxonArmy[attackedSaxon].receiveDamage(this.vikingArmy[0].strength);
    if (this.saxonArmy[attackedSaxon].health <= 0){
      this.saxonArmy.splice(attackedSaxon, 1);
    };
    return "A Saxon has died in combat"; // How to get this returned from Saxon.receiveDamage()?
  };
  this.saxonAttack = function(){
    attackedViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    attackedViking.receiveDamage(this.saxonArmy[0].strength);
    if (attackedViking.health <= 0){
      this.vikingArmy.splice(attackedViking, 1);
    };
    return attackedViking.name + " has received " + this.saxonArmy[0].strength + " points of damage"; // How to get this returned from Viking.receiveDamage()?
  };
  this.showStatus = function(){
    if (this.saxonArmy.length == 0) {
      return "Vikings have won the war of the century!"
    } else if (this.vikingArmy.length == 0) {
      return "Saxons have fought for their lives and survive another day..."
    } else {
      return "Vikings and Saxons are still in the thick of battle."
    }
  }
}
