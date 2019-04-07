// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
}

Soldier.prototype.attack = function() {
  return this.strength;
};

Soldier.prototype.receiveDamage = function (damage) {
  this.health -= damage;
}

// Viking
// I'm really struggling to understand inheritance! 

Viking.prototype = Object.create(Soldier.prototype);

function Viking(name, health, strength) {
  this.name = name;
  this.health = health;
  this.strength = strength;
}

Viking.prototype.attack = function(){
  return this.strength;
}

Viking.prototype.receiveDamage = function(damage){
  this.health -= damage;
  if(this.health > 0) {
    return `${this.name} has received ${damage} points of damage`;
  } else {
    return `${this.name} has died in act of combat`;
  }
}

// Saxon
function Saxon() {}

// War
function War() {}
