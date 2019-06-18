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
    super(health, strength); //llama al constructor del Soldier
    this.name = name;
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health <= 0) {
      return `${this.name} has died in act of combat`;
    } else if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
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
    this.health = this.health - damage;
    if (this.health <= 0) {
      return `A Saxon has died in combat`;
    } else if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    }
  }
}

var vikingSoldier = new Viking(Viking.name, Viking.health, Viking.strength);
var saxonSoldier = new Saxon(Saxon.health, Saxon.strength);

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
    let attackedSaxon = this.saxonArmy[
      Math.floor(Math.random() * this.saxonArmy.length)
    ]; //Pick the soldier corresponding to the number
    let randomViking = this.vikingArmy[ //Choose a random viking to attack
      Math.floor(Math.random() * this.vikingArmy.length)
    ];
    let attack = attackedSaxon.receiveDamage(randomViking.strength); //apply to the attackedSaxon the receiveDamage method
    this.saxonArmy = this.saxonArmy.filter(function(saxonSoldier) {
      //eliminate dead saxons from the army
      return saxonSoldier.health > 0;
    });
    return attack;
  }

  saxonAttack() {
    let attackedViking = this.vikingArmy[
      Math.floor(Math.random() * this.vikingArmy.length)
    ]; //Pick the soldier corresponding to the number
    let randomSaxon = this.saxonArmy[ //Choose a random saxon to be the attacker
      Math.floor(Math.random() * this.saxonArmy.length)
    ];
    let attack = attackedViking.receiveDamage(randomSaxon.strength);
    this.vikingArmy = this.vikingArmy.filter(function(vikingSoldier) {
      return vikingSoldier.health > 0;
    });
    return attack;
  }

  showStatus() {
    if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survive another day...";
    }
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}
