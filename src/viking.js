// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;

  this.attack = () => {
    return this.strength;
  };

  this.receiveDamage = damage => {
    this.health -= damage;
  };
}

// Viking
function Viking(name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
  this.receiveDamage = damage => {
    if (damage) {
      this.health -= damage;
      if (!this.health) {
        return `${this.name} has died in act of combat`;
      } else {
        return `${this.name} has received ${damage} points of damage`;
      }
    }
  };
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.battleCry = () => {
  return `Odin Owns You All!`;
};

// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);

  this.receiveDamage = damage => {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  };
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
  War.prototype.addViking = Viking => {
    this.vikingArmy.push(Viking);
  };

  War.prototype.addSaxon = Saxon => {
    this.saxonArmy.push(Saxon);
  };

  War.prototype.vikingAttack = function() {
    let saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    let vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);

    let saxonUnit = this.saxonArmy[saxonIndex];
    let vikingUnit = this.vikingArmy[vikingIndex];

    saxonUnit.receiveDamage(vikingUnit.strength);

    if (saxonUnit.health <= 0) {
      this.saxonArmy.splice(this.saxonArmy[saxonIndex], 1);
      return `A Saxon has died in combat`;
    }
  };

  War.prototype.saxonAttack = function() {
    let saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    let vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);

    let saxonUnit = this.saxonArmy[saxonIndex];
    let vikingUnit = this.vikingArmy[vikingIndex];

    vikingUnit.receiveDamage(saxonUnit.strength);

    if (vikingUnit.health <= 0) {
      this.vikingArmy.splice(this.vikingArmy[vikingIndex], 1);
    }
    return `${vikingUnit.name} has received ${saxonUnit.strength} points of damage`;
  };

  War.prototype.showStatus = () => {
    if (this.saxonArmy.length === 0) {
      console.log(`Vikings have won the war of the century!`);
      return `Vikings have won the war of the century!`;
    } else if (this.vikingArmy.length === 0) {
      console.log("Saxons have fought for their lives and survive another day...");
      return "Saxons have fought for their lives and survive another day...";
    } else {
      console.log(`Vikings and Saxons are still in the thick of battle.`);
      return `Vikings and Saxons are still in the thick of battle.`;
    }
  };
}
