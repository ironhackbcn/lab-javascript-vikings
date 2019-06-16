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

class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
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

class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(viking) {
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }
  vikingAttack() {
    let saxon = this.saxonArmy[
      Math.floor(Math.random() * this.saxonArmy.length)
    ];
    let viking = this.vikingArmy[
      Math.floor(Math.random() * this.vikingArmy.length)
    ];
    let resultAttack = saxon.receiveDamage(viking.strength);
    this.saxonArmy = this.saxonArmy.filter(function(saxon) {
      return saxon.health >= 1;
    });
    return resultAttack;
  }
  saxonAttack() {
    let saxon = this.saxonArmy[
      Math.floor(Math.random() * this.saxonArmy.length)
    ];
    let viking = this.vikingArmy[
      Math.floor(Math.random() * this.vikingArmy.length)
    ];
    let resultAttack = viking.receiveDamage(saxon.strength);
    this.vikingArmy = this.vikingArmy.filter(function(viking) {
      return viking.health >= 1;
    });
    return resultAttack;
  }
  showStatus() {
    if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survive another day...";
    }
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    }

    return "Vikings and Saxons are still in the thick of battle.";
  }
}
