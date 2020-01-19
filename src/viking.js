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

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

// War
function War() {

    this.vikingArmy = [];
    this.saxonArmy = []; 
}

War.prototype.addViking = function(viking) {this.vikingArmy.push(viking);};
War.prototype.addSaxon = function(saxon) {this.saxonArmy.push(saxon)};

War.prototype.vikingAttack = function() {
    // const randomSaxon = this.saxonArmy[Math.floor(Math.random() * arr.length)];
    // const randomViking = this.vikingArmy[Math.floor(Math.random() * arr.length)];

    let randomVikingPosition = Math.floor(Math.random() * this.vikingArmy.length);
    let randomViking = this.vikingArmy[randomVikingPosition];
    
    let randomSaxonPosition = Math.floor(Math.random() * this.saxonArmy.length);
    let randomSaxon = this.saxonArmy[randomSaxonPosition];
    
    let fightResults = randomSaxon.receiveDamage(randomViking.strength);

    if (randomSaxon.health <= 0) { 
        this.saxonArmy.splice(randomSaxonPosition, 1);
    }
    return fightResults;
    };


War.prototype.saxonAttack = function () {
    
    let randomVikingPosition = Math.floor(Math.random() * this.vikingArmy.length);
    let randomViking = this.vikingArmy[randomVikingPosition];
    
    let randomSaxonPosition = Math.floor(Math.random() * this.saxonArmy.length);
    let randomSaxon = this.saxonArmy[randomSaxonPosition];
    
    let fightResults = randomViking.receiveDamage(randomSaxon.strength);

    if (randomViking.health <= 0) { 
        this.vikingArmy.splice(randomVikingPosition, 1);
    }
    return fightResults;
    
};

War.prototype.showStatus = function () {
    if (this.saxonArmy.length===0) {
        return `Vikings have won the war of the century!`;
        }
    else if (this.vikingArmy.length === 0) {
        return "Saxons have fought for their lives and survive another day...";
        }
    else if (this.saxonArmy.length >= 1 && this.vikingArmy.length >= 1) {
        return "Vikings and Saxons are still in the thick of battle."
    }

};

