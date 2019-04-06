// // Soldier
// function Soldier() {}

// // Viking
// function Viking() {}

// // Saxon
// function Saxon() {}

// // War
// function War() {}


class Soldier {
  health = 0;
  strength = 0;

  constructor(initialHealth, initialStrength) {
    this.health = initialHealth;
    this.strength = initialStrength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    //should remove the received damage from the health property
    this.helth = this.health - damage
  }

}

class Viking extends Soldier {
  name = "";
  constructor(name, initialHealth, initialStrength) {
    super(initialHealth, initialStrength)
    this.name = name;
    console.log(`${this.name} is ready for war!`)
  }

  receiveDamage(damage) {

    this.helth = this.health - damage
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage. \n The current health is ${this.helth}`
    } else {
      return `${this.name} has died in act of combat`
    }

  }

  battleCry() {
    return `Odin Owns You All!`
  }
}

class Saxon extends Soldier {

  constructor(initialHealth, initialStrength) {
    super(initialHealth, initialStrength)
    this.name = name;
    console.log(`A Saxon is ready for war`)
  }

  receiveDamage(damage) {
    this.helth = this.health - damage
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage. \n The current health is ${this.helth}`
    } else {
      return `A Saxon has died in combat`
    }

  }

}

class War {

  vikingArmy = [];
  saxonArmy = [];
  constructor() {
    console.log('War field created')

  }
  addViking(viking) {
    this.vikingArmy.push(viking);
  }
  addSaxon() {
    this.saxonArmy.push(saxon);
  }
  vikingAttack() {

    const randomSaxonId = Math.floor(Math.random() * this.saxonArmy.length);
    const choosenSaxon = this.saxonArmy[randomSaxonId];

    const randomVikingId = Math.floor(Math.random() * this.saxonArmy.length);
    const choosenViking = this.vikingArmy[randomVikingId];

    const recieveDamageResult = choosenSaxon.receiveDamage(choosenViking.strength)
    if (choosenSaxon.strength < 0) {
      this.saxonArmy.splice(randomSaxonId, 1);
    }
    return recieveDamageResult;

  }
  saxonAttack() {

  }
  showStatus() {

  }
}


let battleField = new War();

for (i = 1; i < 21; i++) {
  battleField.addViking(new Viking('Tor' + i, 100, 100))
}

for (i = 1; i < 21; i++) {
  battleField.addViking(new Saxon(90, 80))
}
