// Soldier
function Soldier(health , strength) {
    this.health = health;
    this.strength = strength;
    this.attack = function (){
        return this.strength;
    }

    this.receiveDamage = function (damage){
    this.health = this.health - damage;
  }
}



// Viking

function Viking(name, health, strength) {
    this.name = name;
    Soldier.call(this, health, strength);
   this.receiveDamage = function (damage){
       this.health = this.health - damage;
    if (this.health > 0){
        return  `${this.name} has received ${damage} points of damage`  
    }
     return `${this.name} has died in act of combat`
    }
    this.battleCry = function(){
        return "Odin Owns You All!"
    }
}

Viking.prototype = Object.create(Soldier.prototype)
Viking.prototype.constructor = Viking

// Saxon
function Saxon(health, strength) {
    Soldier.call(this, health, strength);
    this.receiveDamage = function(damage){
        this.health = this.health - damage;
        if (this.health > 0){
            return `A Saxon has received ${damage} points of damage`
        }
        return "A Saxon has died in combat"
    }
}

Saxon.prototype = Object.create(Soldier.prototype)
Saxon.prototype.constructor = Saxon

// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
  this.addViking = function (viking){
     this.vikingArmy.push(viking);
  }
  this.addSaxon =  function(saxon){
        this.saxonArmy.push(saxon)
  }
  this.vikingAttack = function (){
   let randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
   let randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]; 
   let result = randomSaxon.receiveDamage (randomViking.strength);
        if (randomSaxon.health <= 0){
            this.saxonArmy.splice(this.saxonArmy[randomSaxon], 1)
        }
        return result
        
  }
  this.saxonAttack = function (){
    let randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
    let randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]; 
    let result = randomViking.receiveDamage (randomSaxon.strength);
         if (randomViking.health <= 0){
             this.vikingArmy.splice(this.vikingArmy[randomViking], 1)
         }
         return result
         
   }
   this.showStatus = function(){
       if(this.saxonArmy.length === 0){
           return "Vikings have won the war of the century!";
    }   if (this.vikingArmy.length === 0){
        return"Saxons have fought for their lives and survive another day...";
    }   if (this.vikingArmy.length === this.saxonArmy.length){
        return"Vikings and Saxons are still in the thick of battle.";
    }
   }
}


