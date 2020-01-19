// Soldier
function Soldier(health, strength) {
    this.health = health;
    this.strength = strength;
    this.attack = function (){
        return this.strength;
    };
    this.receiveDamage = function (damage) {
        this.health -= damage; 
    }
}

// Viking
function Viking(name, health, strength) {
    Soldier.call(this,health, strength);
    this.name = name;
    this.receiveDamage =function (damage) {
        this.health -= damage;
        if(this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }
    this.battleCry = function () {
        return "Odin Owns You All!"
    }
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;



// Saxon
function Saxon(health, strength) {
    Soldier.call(this,health, strength);  
     this.receiveDamage =function (damage) {
        this.health -= damage;
        if(this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        } else {
            return `A Saxon has died in combat`
        }
    }    
}

// War
function War() {

    this.vikingArmy = []
    this.saxonArmy = []; 

    this.addViking = function(Viking) { this.vikingArmy.push(Viking);};
    this.addSaxon = function(Saxon) {this.saxonArmy.push(Saxon)};
    this.vikingAttack = function() {
       const randomSaxon = this.saxonArmy[Math.floor(Math.random() * arr.length)];
       const randomViking = this.vikingArmy[Math.floor(Math.random() * arr.length)];
       Saxon.receiveDamage()
    };
    this.saxonAttack = function() {};
    this.showStatus = function() {}; 
}

// vikingAttack() method
// A Saxon (chosen at random) has their receiveDamage() method called with 
// the damage equal to the strength of a Viking (also chosen at random). 
// This should only perform a single attack and the Saxon doesn't get to attack back.
// should be a function
// should receive 0 arguments
// should make a Saxon receiveDamage() equal to the strength of a Viking
// should remove dead saxons from the army
// should return result of calling receiveDamage() of a Saxon with the 
// strength of a Viking