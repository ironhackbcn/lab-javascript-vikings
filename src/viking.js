// Soldier
function Soldier(healthArg, strengthArg) {

  this.health = healthArg;
  this.strength = strengthArg;
}

Soldier.prototype.attack = function (){

  return this.strength;
};

Soldier.prototype.receiveDamage = function (damageArg){

  this.health -= damageArg;
};



// Viking
function Viking(nameArg, healthArg, strengthArg) {
  
  Soldier.call(this, healthArg, strengthArg);
  this.name = nameArg;
}

Viking.prototype = Object.create(Soldier.prototype);

Viking.prototype.receiveDamage = function (damageArg){

  this.health -= damageArg;
  if(this.health > 0){
    return `${this.name} has received ${damageArg} points of damage`;
  }
  else{
    return `${this.name} has died in act of combat`;
  }
};

Viking.prototype.battleCry = function (){
  
  return `Odin Owns You All!`;
};



// Saxon
function Saxon(healthArg, strengthArg) {

  Soldier.call(this, healthArg, strengthArg);
}

Saxon.prototype = Object.create(Soldier.prototype);

Saxon.prototype.receiveDamage = function (damageArg){

  this.health -= damageArg;
  if(this.health > 0){
    return `A Saxon has received ${damageArg} points of damage`;
  }
  else{
    return `A Saxon has died in combat`;
  }
};



// War
function War() {

  this.vikingArmy = [];
  this.saxonArmy = [];
}

War.prototype.addViking = function (vikingObj) {

  this.vikingArmy.push(vikingObj);
};

War.prototype.addSaxon = function (saxonObj) {

  this.saxonArmy.push(saxonObj);
};

War.prototype.vikingAttack = function () {

  let randomIndexSaxon = getRandomWarrior(this.saxonArmy);
  let randomIndexViking = getRandomWarrior(this.vikingArmy);

  let result = this.saxonArmy[randomIndexSaxon].receiveDamage(this.vikingArmy[randomIndexViking].strength);
  removeDeadWarriors(this.saxonArmy);
  return result;
};

War.prototype.saxonAttack = function () {

  let randomIndexSaxon = getRandomWarrior(this.saxonArmy);
  let randomIndexViking = getRandomWarrior(this.vikingArmy);
  
  let result = this.vikingArmy[randomIndexViking].receiveDamage(this.saxonArmy[randomIndexSaxon].strength);
  removeDeadWarriors(this.vikingArmy);
  return result;
};

War.prototype.showStatus = function () {

  if(this.saxonArmy.length === 0){
    return `Vikings have won the war of the century!`;
  }
  else if(this.vikingArmy.length === 0){
    return `Saxons have fought for their lives and survive another day...`;
  }
  else{
    return `Vikings and Saxons are still in the thick of battle.`;
  }
};



//auxiliar functions
function getRandomWarrior(arrayWarriors){

  return Math.floor( Math.random() * arrayWarriors.length);
}

function removeDeadWarriors(arrayWarriors){

  for(var i = 0 ; i < arrayWarriors.length ; i++){
    if(arrayWarriors[i].health <= 0){
      arrayWarriors.splice(i);
    }
  }
}





//Let's make them figth in the console!!!!
/*
console.log("INITIALIZING WAR_________________");
var war = new War();

console.log("CREATING SOME VIKINGS_________________");
war.addViking(new Viking(`Uros`,300,10));
war.addViking(new Viking(`Àxel`,250,15));
war.addViking(new Viking(`Jack`,200,20));

console.log("CREATING SOME SAXONS__________________");
war.addSaxon(new Saxon(300,10));
war.addSaxon(new Saxon(250,15));
war.addSaxon(new Saxon(200,20));

console.log("STARTING BATTLE__________________");
var i = 0;
var fighting = true;

while (fighting){

  console.log(`Turn: ${i} -> ${war.showStatus()}`);

  if(war.showStatus() !== `Vikings and Saxons are still in the thick of battle.`){

    fighting = false;
  }
  else{
    if(i % 2 === 0){

      console.log(war.saxonAttack());
    }
    else{

      console.log(war.vikingAttack());
    }
    i++;
  }
}

console.log("BATTLE ENDED__________________");
*/