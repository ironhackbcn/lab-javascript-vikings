// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
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
  constructor(health, strength) {
    super(health, strength);
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
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(vikingArmy) {
    this.vikingArmy.push(vikingArmy);
  }
  addSaxon(saxonArmy) {
    this.saxonArmy.push(saxonArmy);
  }
  vikingAttack() {
    let saxon = this.saxonArmy[0];
    let viking = this.vikingArmy[0];

    const result = saxon.receiveDamage(viking.strength);
    this.saxonArmy = this.saxonArmy.filter(function(saxon) {
      return saxon.health > 0;
    });

    return result;
  }
  saxonAttack() {
    const result = viking.receiveDamage(saxon.strength);
    this.saxonArmy = this.vikingArmy.filter(function(saxon) {
      return viking.health > 0;
    });
    return result;
  }
  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survive another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}
