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
    this.health = this.health - damage;

    if (this.health <= 0) {
      return `${this.name} has died in act of combat`;
    } else {
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
    } else {
      return `A Saxon has received ${damage} points of damage`;
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
    this.vikingArmy.push(Viking)
  }

  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon)
  }

  selectRandom(arr) {
    let arrLength = arr.length
    let arrRandom = Math.floor(Math.random() * arrLength);
    let arrSelect = arr[arrRandom]
    return ([arrSelect, arrRandom])
  }

  vikingAttack() {
    let vikingSelect = this.selectRandom(this.vikingArmy);
    let saxonSelect = this.selectRandom(this.saxonArmy);

    let saxonDamage = saxonSelect[0].receiveDamage(vikingSelect[0].strength);

    if (saxonSelect[0].health <= 0) {
      this.saxonArmy.splice(saxonSelect[1], 1);
    }
    return saxonDamage;
  }

  saxonAttack() {
    let vikingSelect = this.selectRandom(this.vikingArmy);
    let saxonSelect = this.selectRandom(this.saxonArmy);

    let vikingDamage = vikingSelect[0].receiveDamage(saxonSelect[0].strength);

    if (vikingSelect[0].health <= 0) {
      this.vikingArmy.splice(vikingSelect[1], 1);
    }
    return vikingDamage;
  }

  showStatus() {
    if (this.saxonArmy.length == 0) {
      return ("Vikings have won the war of the century!")
    } else if (this.vikingArmy.length == 0) {
      return ("Saxons have fought for their lives and survive another day...")
    } else {
      return ("Vikings and Saxons are still in the thick of battle.")
    }
  }
}