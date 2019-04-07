// Soldier
function Soldier (health, strength) {
  this.health = health;
  this.strength = strength;
}
Soldier.prototype.attack = function (){
  return this.strength;
}
Soldier.prototype.receiveDamage = function (damage){
  this.health = this.health - damage;
}

Viking.prototype = Object.create(Soldier.prototype);
Saxon.prototype = Object.create(Soldier.prototype);

// Viking
function Viking(name,health,strength) {
  Soldier.call(this, health, strength);
  this.name = name;
}
Viking.prototype.attack = function(){
  return this.strength;
}
Viking.prototype.receiveDamage = function (damage){
  this.health = this.health - damage;
  if(this.health <= 0){
    return `${this.name} has died in act of combat`;
  }
  else{
    return `${this.name} has received ${damage} points of damage`;
  }
}
Viking.prototype.battleCry = function(){
  return `Odin Owns You All!`;
}
// Saxon
function Saxon(health,strength) {
  Soldier.call(this, health, strength);
}
Saxon.prototype.attack = function(){
  return this.strength;
}
Saxon.prototype.receiveDamage = function (damage){
  this.health = this.health - damage;
  if(this.health <= 0){
    return `A Saxon has died in combat`;
  }
  else{
    return `A Saxon has received ${damage} points of damage`;
  }
}




// War
function War() {}

var viking = new Viking(300,200,"pepe");
console.log(console.log(viking.health))
console.log(console.log(viking.strength))
console.log(console.log(viking.name))

//var soldier = new Soldier(300,200);
//soldier.receiveDamage(50);
