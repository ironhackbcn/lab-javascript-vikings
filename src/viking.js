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
function War() {
  this.vikingArmy = [];
  this.saxonArmy =[];
}

War.prototype.addViking = function(Viking){
  this.vikingArmy.push(Viking);
}

War.prototype.addSaxon = function(Saxon){
  this.saxonArmy.push(Saxon);
}

War.prototype.vikingAttack = function(){

  let randomVikingIndex = Math.floor(Math.random()*this.vikingArmy.length);
  let randomSaxonIndex = Math.floor(Math.random()*this.saxonArmy.length);
  let randomViking = this.vikingArmy[randomVikingIndex];
  let randomSaxon = this.saxonArmy[randomSaxonIndex];

  let result = randomSaxon.receiveDamage(randomViking.strength);
  
  if(randomSaxon.health < 1){
    this.saxonArmy.splice(randomSaxonIndex, 1);
  }
  return result;
}

War.prototype.saxonAttack = function(){

  let randomVikingIndex = Math.floor(Math.random()*this.vikingArmy.length)
  let randomSaxonIndex = Math.floor(Math.random()*this.saxonArmy.length)
  let randomViking = this.vikingArmy[randomVikingIndex]
  let randomSaxon = this.saxonArmy[randomSaxonIndex]

  let result = randomViking.receiveDamage(randomSaxon.strength);
  
  if(randomViking.health < 1){
    this.vikingArmy.splice(randomVikingIndex, 1);
  }
  return result;
}

War.prototype.showStatus = function(){
  let result;
  if(this.saxonArmy.length === 0){
   result = "Vikings have won the war of the century!"
  }else if(this.vikingArmy.length === 0){
   result = 'Saxons have fought for their lives and survive another day...'
  }else{
   result = "Vikings and Saxons are still in the thick of battle."
  }
  return result;
}