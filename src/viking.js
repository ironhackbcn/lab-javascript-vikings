// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;

  this.attack = function () {
    return this.strength;
  };

  this.receiveDamage = function (damage) {
    this.health -= damage;
  };
}

// Viking
function Viking(name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;

  this.receiveDamage = function (damage) {
    this.health -= damage;
    return (this.health > 0) ? `${this.name} has received ${damage} points of damage` : `${name} has died in act of combat`;
  };

  this.battleCry = function () {
    return "Odin Owns You All!";
  };
}
Viking.prototype = Object.create(Soldier.prototype);

// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);

  this.receiveDamage = function (damage) {
    this.health -= damage;
    return (this.health > 0) ? `A Saxon has received ${damage} points of damage` : `A Saxon has died in combat`;
  };
}
Saxon.prototype = Object.create(Soldier.prototype);

// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];

  this.addViking = function (Viking) {
    this.vikingArmy.push(Viking);
  };

  this.addSaxon = function (Saxon) {
    this.saxonArmy.push(Saxon);
  };

  this.vikingAttack = function () {

    // Generate random combatants
    let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    let randomViking = Math.floor(Math.random() * this.vikingArmy.length);

    // Make them fight
    let attack = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength);

    // Check if one of them died
    if (this.saxonArmy[randomSaxon].health <= 0) {
      this.saxonArmy.splice(randomSaxon, 1);
    }

    return attack;
  };

  this.saxonAttack = function () {

    // Generate random combatants
    let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    let randomViking = Math.floor(Math.random() * this.vikingArmy.length);

    // Make them fight
    let attack = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength);

    // Check if one of them died
    if (this.vikingArmy[randomViking].health <= 0) {
      this.vikingArmy.splice(randomViking, 1);
    }

    return attack;
  };

  this.showStatus = function () {
    if (this.saxonArmy.length <= 0) {
      return "Vikings have won the war of the century!";
    }
    if (this.vikingArmy.length <= 0) {
      return "Saxons have fought for their lives and survive another day...";
    }
    return "Vikings and Saxons are still in the thick of battle.";
  };
}