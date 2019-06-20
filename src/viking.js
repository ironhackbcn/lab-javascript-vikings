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
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Saxon}
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }
  receiveDamage(damage) {
    this.health -= damage;
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
  addViking(viking) {
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }
  vikingAttack() {
    let randomViking = random(this.vikingArmy);
    let randomSaxon = random(this.saxonArmy);
    let resultAttack = randomSaxon.receiveDamage(randomViking.strength);
    if (randomSaxon.health <= 0) {
      let positionSaxonDead = this.saxonArmy.indexOf(randomSaxon);
      this.saxonArmy.splice(positionSaxonDead, 1);
    }
    return resultAttack;
  }
  saxonAttack() {
    let randomViking = random(this.vikingArmy);
    let randomSaxon = random(this.saxonArmy);
    let resultAttack = randomViking.receiveDamage(randomSaxon.strength);
    if (randomViking.health <= 0) {
      let positionVikingDead = this.vikingArmy.indexOf(randomViking);
      this.vikingArmy.splice(positionVikingDead, 1);
    }
    return resultAttack;
  }
  showStatus() {
    if (this.saxonArmy.length === 0) {
      return `Vikings have won the war of the century!`;
    } else if (this.vikingArmy.length === 0) {
      return `Saxons have fought for their lives and survive another day...`;
    } else {
      return `Vikings and Saxons are still in the thick of battle.`;
    }
  }
}

function random(arr) {
  const solder = arr[Math.floor(Math.random() * arr.length)];
  return solder;
}
