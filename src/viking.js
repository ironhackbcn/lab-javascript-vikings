// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
  this.attack = function () {
    return this.strength;
  }
  this.receiveDamage = function (damage) {
    this.health -= damage;
  }
}

// Viking
function Viking(name, health, strength) {
  this.name = name;
  this.health = health;
  this.strength = strength;
  /* Soldier.attack = this; */
  this.receiveDamage = function (damageViking) {
    this.health -= this.damageViking;
    if (this.health > 0) {
      return `${this.name} has received ${this.damage} points of damage`;
    } else if (this.health <= 0) {
      return `${this.name} has died in act of combat`;
    };
  }
  this.battleCry = function(){
    return `Odin Owns You All!`
  }
}
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;



// Saxon
function Saxon(health, strength) {
  this.health = health;
  this.strength = strength;
  this.receiveDamage = function (saxonDamage) {
    this.health -= this.saxonDamage;
    if (this.health > 0) {
      return `A Saxon has received ${this.saxonDamage} points of damage`;
    } else if (this.health <= 0) {
      return `A Saxon has died in combat`
    }
  };
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

// War
function War() {}
