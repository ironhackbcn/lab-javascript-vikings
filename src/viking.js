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
    this.health -= damage;
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
      return `${this.name} has received ${this.damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry() {
    return `Odin Owns You All!`;
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
      return `A Saxon has received ${this.damage} points of damage`;
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
  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }
  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }
  vikingAttack() {
    let passiveSaxon = this.saxonArmy[
      Math.floor(Math.random() * this.saxonArmy.length)
    ];
    let activeViking = this.vikingArmy[
      Math.floor(Math.random() * this.vikingArmy.length)
    ];
    let resultPassiveSaxon = passiveSaxon.receiveDamage(activeViking.strength);
    if (passiveSaxon.health <= 0) {
      let indexPassiveSaxon = this.saxonArmy.indexOf(passiveSaxon);
      this.saxonArmy.splice(indexPassiveSaxon, 1);
    }
    return resultPassiveSaxon;
  }
  saxonAttack() {
    let passiveViking = this.vikingArmy[
      Math.floor(Math.random() * this.vikingArmy.length)
    ];
    let activeSaxon = this.saxonArmy[
      Math.floor(Math.random() * this.saxonArmy.length)
    ];
    let resultPassiveViking = passiveViking.receiveDamage(activeSaxon.strength);
    if (passiveViking.health <= 0) {
      let indexPassiveViking = this.vikingArmy.indexOf(passiveViking);
      this.vikingArmy.splice(indexPassiveViking, 1);
    }
    return resultPassiveViking;
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return `Vikings have won the war of the century!`;
    } else if (this.vikingArmy.length === 0) {
      return `Saxons have fought for their lives and survive another day...`;
    } else if (this.vikingArmy.length >= 1 && this.saxonArmy.length >= 1) {
      return `Vikings and Saxons are still in the thick of battle.`;
    }
  }
}
