// Soldier
function Soldier(healthArg, strengthArg) {
  this.health = healthArg;
  this.strength = strengthArg;
}
Soldier.prototype.attack = function (){
  return this.strength;
 };
Soldier.prototype.receiveDamage = function(damageArg){
  this.health -=  damageArg;
}

// Viking

Viking.prototype = Object.create(Soldier.prototype); 

function Viking(name, healthArg, strengthArg,) {
Soldier.call(this, healthArg, strengthArg);
this.name = name;
this.receiveDamage =  function (damageArg){
  this.health -=  damageArg;
  if (this.health > 0){
    return this.name + " has received " + damageArg + " points of damage" 
  }else {
    return this.name + " has died in act of combat" 
  }
}
this.battleCry = function(){
  return "Odin Owns You All!"
}
}

// Saxon

Saxon.prototype = Object.create(Soldier.prototype); 

function Saxon(healthArg, strengthArg) {
Soldier.call(this, healthArg, strengthArg)
this.receiveDamage =  function (damageArg){
  this.health -=  damageArg;
  if (this.health > 0){
    return "A Saxon has received " + damageArg + " points of damage" 
  }else {
    return "A Saxon has died in combat"
  }
}
}

// War
function War() {}
