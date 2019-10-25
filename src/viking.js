// Soldier
const name = "Harald";
const damage = 25;

function Soldier(health, strength) {
    this.health = health;
    this.strength = strength;
}

Soldier.prototype.attack = function () {
    return this.strength
  };

  Soldier.prototype.receiveDamage = function (damage) {
     this.health -= damage;
  };

  var soldier = new Soldier(30, 20);

// Viking
function Viking(name, health, strength) {
    Soldier.call(this, health, strength);
    this.name = name; 
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;


Viking.prototype.battleCry = function () {
    return  "Odin Owns You All!"
  };

  Viking.prototype.receiveDamage = function (damage) {
    this.health -= damage;
    if (this.health > 0) {
        return `${name} has received ${damage} points of damage`
    } else {
        return `${name} has died in act of combat`
    }
  };


// Saxon
function Saxon(health, strength) {
    Soldier.call(this, health, strength);
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;



Saxon.prototype.receiveDamage = function (damage) {
    this.health -= damage;
    if (this.health > 0) {
        return `A Saxon has received ${damage} points of damage`
       
    } else {
        return "A Saxon has died in combat"
    }
 };



// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];
}

War.prototype = Object.create(War.prototype);
War.prototype.constructor = War;


War.prototype.addViking = function (Viking) {
    
    this.vikingArmy.push(Viking)
 };

 War.prototype.addSaxon = function (Saxon) {
    this.saxonArmy.push(Saxon)
 };

 function randomSoldier(soldier){
    return parseInt(Math.random() * soldier.length)
  }
  

 War.prototype.vikingAttack = function () {
     var randomViking = randomSoldier(this.vikingArmy)
     var randomSaxon = randomSoldier(this.saxonArmy);
     this.saxonArmy[randomSaxon].health -= this.vikingArmy[randomViking].strength;
 
     if (this.saxonArmy[randomSaxon].health <= 0) {
         this.saxonArmy.splice(0,1);  
     }
     
     return "A Saxon has died in combat"
 };

War.prototype.saxonAttack = function () {
    var randomViking = randomSoldier(this.vikingArmy)
    var randomSaxon = randomSoldier(this.saxonArmy)
    this.vikingArmy[randomViking].health -= this.saxonArmy[randomSaxon].strength
   
    if(this.vikingArmy[randomViking].health <= 0) {
        this.vikingArmy.splice(0,1)
    }
    return `${name} has received ${damage} points of damage`
 };

War.prototype.showStatus = function () {
   if (this.saxonArmy.length === 0) {
    return "Vikings have won the war of the century!";
   } 
   else if (this.vikingArmy.length === 0) {
    return "Saxons have fought for their lives and survive another day...";
   } 
   else  {
    return 'Vikings and Saxons are still in the thick of battle.'
   }
 };
