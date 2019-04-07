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
    this.health = this.health - damage
  }
}

class Viking extends Soldier {
  name = "";
  constructor(name, initialHealth, initialStrength) {
    super(initialHealth, initialStrength)
    this.name = name;
    console.log(`${this.name} with health ${this.health} and strength ${this.strength} ready for war!`)
  }

  receiveDamage(damage) {
    super.receiveDamage(damage)
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`
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
    console.log(`A Saxon with health ${this.health} and strength ${this.strength} is ready for war`)
  }

  receiveDamage(damage) {
    super.receiveDamage(damage)
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`
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
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }
  vikingAttack() {
    console.log("The Vikings are attacking");
    const randomSaxonId = Math.floor(Math.random() * this.saxonArmy.length);
    const choosenSaxon = this.saxonArmy[randomSaxonId];

    const randomVikingId = Math.floor(Math.random() * this.vikingArmy.length);
    const choosenViking = this.vikingArmy[randomVikingId];

    const recieveDamageResult = choosenSaxon.receiveDamage(choosenViking.strength)

    if (choosenSaxon.health < 1) {
      this.saxonArmy.splice(randomSaxonId, 1);
    }
    return recieveDamageResult;
  }

  saxonAttack() {
    console.log("The Saxons are attacking");
    const randomVikingId = Math.floor(Math.random() * this.vikingArmy.length);
    const choosenViking = this.vikingArmy[randomVikingId];

    const randomSaxonId = Math.floor(Math.random() * this.saxonArmy.length);
    const choosenSaxon = this.saxonArmy[randomSaxonId];

    const recieveDamageResult = choosenViking.receiveDamage(choosenSaxon.strength)
    if (choosenViking.health < 1) {
      this.vikingArmy.splice(randomVikingId, 1);
    }
    return recieveDamageResult;
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return `Vikings have won the war of the century!`
    } else if (this.vikingArmy.length === 0) {
      return `Saxons have fought for their lives and survive another day...`
    } else {
      return `Vikings and Saxons are still in the thick of battle.`
    }
  }

  isGameOver() {
    return (this.vikingArmy.length === 0 || this.saxonArmy.length === 0);
  }
}

let battleField = new War();

function randomSoldierCreate(soldierType) {
  const soldierHealth = [50, 70, 80, 85, 90, 95, 100, 100, 110, 200, 250, 300];
  const soldierStrengh = [80, 82, 90, 85, 90, 95, 98, 99, 100, 100, 100, 200, 250, 300];

  const randomHealthId = Math.floor(Math.random() * soldierHealth.length);
  const randomHealth = soldierHealth[randomHealthId];

  const randomStrengthId = Math.floor(Math.random() * soldierStrengh.length);
  const randomStrength = soldierStrengh[randomStrengthId];

  if (soldierType === 'viking') {
    const vikingNames = ['Tor', 'Loki', 'Bjørn', 'Ivar', 'Odin', 'Harald', 'Knut',
      'Ragnar', 'Magnus', 'Leif', 'Arvid', 'Bodil', 'Erik', 'Finn', 'Orm'];
    const randomVikingNameId = Math.floor(Math.random() * vikingNames.length);
    const randomVikingName = vikingNames[randomVikingNameId];
    return new Viking(randomVikingName, randomHealth, randomStrength);

  } else if (soldierType === 'saxon') {
    return new Saxon(randomHealth, randomStrength)
  }
}


for (i = 1; i < 41; i++) {
  battleField.addViking(randomSoldierCreate('viking'));
}

for (i = 1; i < 41; i++) {
  battleField.addSaxon(randomSoldierCreate('saxon'));
}

console.log(`The battle will start!`)

while (!battleField.isGameOver()) {
  console.log(battleField.vikingAttack());
  console.log(battleField.showStatus());
  if (!battleField.isGameOver()) {
    console.log(battleField.saxonAttack());
    console.log(battleField.showStatus());
  }
}

