// Soldier
/*function Soldier() {}*/

class Soldier {
  //constructor function of soldier
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  //Method attack
  attack() {
    return this.strength;
  }
  //Method receive damage
  receiveDamage(damage) {
    // received damage rest variable
    this.health = this.health - damage;
  }
}

// Viking
//function Viking() {}

//viking takes the same properties of soldier
class Viking extends Soldier {
  //and adds a new one: name
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  //method attack
  attack() {
    return this.strength;
  }
  //Method receive damage
  receiveDamage(damage) {
    // received damage rest variable
    this.health = this.health - damage;
    //if health <= 0, it's supposed viking is dead
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }
  //battle cry method
  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Saxon
//function Saxon() {}//

//Saxon takes the same properties of soldier
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }
  //Method receive damage
  receiveDamage(damage) {
    // received damage rest variable
    this.health = this.health - damage;
    //if health <= 0, it's supposed viking is dead
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
//function War() {}//

class War {
  //constructor function of war
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  //war receives the viking with all his properties and adds it to the viking's army
  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }
  //war receives a saxon with all his properties and adds it to the saxon's army
  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }
  vikingAttack() {
    //saxons are saved in saxonArmy array, take randomly one of them to fight
    let saxonSoldier = this.saxonArmy[
      Math.floor(Math.random() * this.saxonArmy.length)
    ];
    //vikings are saved in vikingArmy array, take randomly one of them to fight
    let vikingSoldier = this.vikingArmy[
      Math.floor(Math.random() * this.vikingArmy.length)
    ];
    //select random saxon to receive damage from a viking (equal to his strength)
    let whenVikingsAttacks = saxonSoldier.receiveDamage(vikingSoldier.strength);
    //remove saxon from the saxonArmy if he dies
    if (saxonSoldier.health <= 0) {
      this.saxonArmy.splice(saxonSoldier);
    }
    //add return to the function receiveDamage
    return whenVikingsAttacks;
  }
  saxonAttack() {
    //saxons are saved in saxonArmy array, take randomly one of them to fight
    let saxonSoldier = this.saxonArmy[
      Math.floor(Math.random() * this.saxonArmy.length)
    ];
    //vikings are saved in vikingArmy array, take randomly one of them to fight
    let vikingSoldier = this.vikingArmy[
      Math.floor(Math.random() * this.vikingArmy.length)
    ];
    //select random saxon to receive damage from a viking (equal to his strength)
    let whenSaxonsAttack = vikingSoldier.receiveDamage(saxonSoldier.strength);
    //remove viking from the vikingArmy if he dies
    if (vikingSoldier.health <= 0) {
      this.vikingArmy.splice(vikingSoldier);
    }
    return whenSaxonsAttack;
  }
  showStatus() {
    if (this.saxonArmy.length === 0 && this.vikingArmy.length > 0) {
      return `Vikings have won the war of the century!`;
    } else if (this.saxonArmy.length > 0 && this.vikingArmy.length === 0) {
      return `Saxons have fought for their lives and survive another day...`;
    } else {
      return `Vikings and Saxons are still in the thick of battle.`;
    }
  }
}
