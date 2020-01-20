// Soldier
function Soldier (health, strength) {
    this.health = health;
    this.strength = strength;
    this.attack = function () { 
        return this.strength;
    };
    this.receiveDamage = function (damage) {
        this.health -= damage;
    };
    }

// Viking
function Viking(name, health, strength) {

    Soldier.call(this, health, strength);
    this.name = name;
    this.receiveDamage = function (damage) {
      this.health -= damage;
      if (this.health > 0) {
        return `${this.name} has received ${damage} points of damage`;
      } else {
        return `${this.name} has died in act of combat`;
      }
    };
    this.battleCry = function () {
      return `Odin Owns You All!`
    }
  }
  
// I DON'T UNDERSTAND THE FOLLOWING STATEMENT. It was created by my partner, Henriette, on day 5:
  Viking.prototype = Object.create(Soldier.prototype);
  Viking.prototype.constructor = Viking;

// Saxon
function Saxon(health, strength) {

    Soldier.call(this, health, strength);
    this.receiveDamage = function (damage) {
        this.health -= damage;
        if (this.health > 0) {
          return `A Saxon has received ${damage} points of damage`;
        } else {
          return `A Saxon has died in combat`;
        }
      }
}

// I DON'T UNDERSTAND THE FOLLOWING STATEMENT. It was created by my partner, Henriette, on day 5:
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];
};

War.prototype.addViking = function (viking) {
    this.vikingArmy.push(viking);
};

War.prototype.addSaxon = function (saxon) {
    this.saxonArmy.push(saxon);
};

/*
War.prototype.vikingAttack() {
    // ???
}

War.prototype.saxonAttack() {
    // ???
}
*/

// Not sure what is wrong here:
War.prototype.showStatus = function () {
    if (this.saxonArmy.length === 0) {
        return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
        return "Saxons have fought for their lives and survive another day...";   
    } else if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0) {
        return "Vikings and Saxons are still in the thick of battle.";
    }
};