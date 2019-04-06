// Soldier
function Soldier (health , strength) {
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
  // this.__proto__ = Soldier.prototype;
}
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage = function(damage) {
  this.health -= damage; 
  if(this.health > 0){
    return this.name + ' has received ' + damage + ' points of damage';
  }
  else{
    return this.name + " has died in act of combat";
  }
}

Viking.prototype.battleCry = function(){
  return "Odin Owns You All!";
}





// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength)
}
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage = function(damage) {
  this.health -= damage; 
  if(this.health > 0){
    return "A Saxon has received " + damage + " points of damage";
  }
  else{
    return "A Saxon has died in combat";
  }
}




// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
}

War.prototype.addViking = function (Viking) {
  this.vikingArmy.push(Viking);
}

War.prototype.addSaxon = function (Saxon) {
  this.saxonArmy.push(Saxon);
}

War.prototype.vikingAttack = function () {
  var indexViking = randomNum(this.vikingArmy);
  var randomViking = this.vikingArmy[indexViking];
  var damage = randomViking.attack();

  var indexSaxon = randomNum(this.saxonArmy);
  var randomSaxon = this.saxonArmy[indexSaxon];
  var result = randomSaxon.receiveDamage(damage);
  
  if(randomSaxon.health <= 0) this.saxonArmy.splice(indexSaxon, 1);

  return result;
}

War.prototype.saxonAttack = function (){
  var indexSaxon = randomNum(this.saxonArmy);
  var randomSaxon = this.saxonArmy[indexSaxon];
  var damage = randomSaxon.attack();
  
  var indexViking = randomNum(this.vikingArmy);
  var randomViking = this.vikingArmy[indexViking];
  var result = randomViking.receiveDamage(damage);
  
  if(randomViking.health <= 0) this.vikingArmy.splice(indexSaxon, 1);

  return result;
}

War.prototype.showStatus = function (){
  if(this.saxonArmy.length === 0){
    return "Vikings have won the war of the century!"
  } else if (this.vikingArmy.length === 0){
    return "Saxons have fought for their lives and survive another day..."
  } else {
    return "Vikings and Saxons are still in the thick of battle."
  }
}

/*************************/

function randomNum (arr){
  var random = Math.floor(Math.random() * arr.length);
  return random;
}