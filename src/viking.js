// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
}

Soldier.prototype.attack = function() {
  return this.strength;
}

Soldier.prototype.receiveDamage = function(damage) {
  this.health -= damage;
}

// Viking
function Viking(name, health, strength) {
  this.name = name; 
  Soldier.call(this, health, strength);
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage = function(damage) {
  this.health -= damage;
  if (this.health > 0) {
    return this.name + "has received" + damage + "points of damage";
  } else {
    return this.name + "has died in act of combat";
  }
}

 Viking.prototype.battleCry = function() {
   return "Odin Owns You All!";
 }

// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage = function(damage) {
  this.health -= damage;
  if (this.health > 0) {
    return "A Saxon has received" + damage + "points of damage";
  } else {
    return "A Saxon has died in act of combat";
  }
}

// War
function War() {
 this.vikingArmy = [];
 this.saxonArmy = [];
 this.addViking = function(Viking){
   this.vikingArmy += Viking;
 };
 this.addSaxon = function(Saxon){
   this.saxonArmy += Saxon;
 };
 this.vikingAttack = function(){
  let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
  let randomSaxon = this.saxonArmy[randomSaxonIndex];
  let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
  let randomViking = this.vikingArmy[randomVikingIndex];
  randomSaxon.receiveDamage(randomViking.strength);
  if (randomSaxon.health <= 0){
    this.saxonArmy -= this.randomSaxon;
  }
 };
 this.saxonAttack = function(){
  let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
  let randomSaxon = this.saxonArmy[randomSaxonIndex];
  let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
  let randomViking = this.vikingArmy[randomVikingIndex];
  randomViking.receiveDamage(randomSaxon.strength);
  if (randomViking.health <= 0){
    this.vikingArmy -= this.randomViking;
  }
 };
 this.showStatus = function(){
   if (this.saxonArmy.length === 0){
     return "Vikings have won the war of the century!";
   } else if (this.vikingArmy.length === 0){
     return "Saxons have fought for their lives and survive another day...";
   } else {
     return "Vikings and Saxons are still in the thick of battle.";
   }
 }
}
