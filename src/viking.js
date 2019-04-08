// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
};

// oder soldier = new Soldier(health, strength);??

Soldier.prototype.attack = function () {
  return this.strength;
};

Soldier.prototype.receiveDamage = function (damage){
  this.health -= damage;
}

// Viking
function Viking(name, health, strength) {
  Soldier.call(this, health, strength);
  this.name =name;
};



Viking.prototype = Object.create(Soldier.prototype); //muss vor den neuen prototypes functions stehen!!!
Viking.prototype.constructor = Viking;

Viking.prototype.battleCry= function (){ 
  return "Odin Owns You All!";
};

Viking.prototype.receiveDamage = function (damage) {
  this.health -= damage;
  if (this.health > 0) {
    return this.name + " has received " + damage + " points of damage";
  } else {
    return this.name + " has died in act of combat";
  }
};




// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);
};

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage = function(damage){
  this.health -= damage;
  if (this.health > 0){
    return "A Saxon has received "+ damage+" points of damage"; 
  }
  else {
    return "A Saxon has died in combat";
  }
};






// War
function War() {

  this.vikingArmy = [];
  this.saxonArmy = [];
  
};



War.prototype.saxonAttack = function(){
  let ranNumS = Math.floor(Math.random()*this.saxonArmy.length);
  let ranNumV = Math.floor(Math.random()*this.vikingArmy.length);
  let ranSax = this.saxonArmy[ranNumS];
  let ranVik = this.vikingArmy[ranNumV];
  
  let damageVik = ranVik.receiveDamage(ranSax.strength);

  if (ranVik.health <= 0) {
       this.vikingArmy.splice(ranNumV, 1);
   } else {
   return damageVik;
   }
};



War.prototype.addSaxon = function(saxon){
  this.saxonArmy.push(saxon);
};

War.prototype.addViking = function(viking){
  this.vikingArmy.push(viking);
};

War.prototype.vikingAttack = function(){
  let ranNumS = Math.floor(Math.random()*this.saxonArmy.length);
  let ranNumV = Math.floor(Math.random()*this.vikingArmy.length);
  let ranSax = this.saxonArmy[ranNumS];
  let ranVik = this.vikingArmy[ranNumV];
  
  let damageSax = ranSax.receiveDamage(ranVik.strength);

  if (ranSax.health <= 0) {
    this.saxonArmy.splice(ranNumS, 1);
      } else {
   return damageSax;  //why is there a failure in jasmine? In the saxonAttack is no failure and it is the same function??
   }
};

War.prototype.showStatus = function(){
  if (this.saxonArmy.length === 0){
    return "Vikings have won the war of the century!";
  }
  if (this.vikingArmy.length === 0){
    return "Saxons have fought for their lives and survive another day...";
  }
  else {
    return "Vikings and Saxons are still in the thick of battle.";
  }
};





