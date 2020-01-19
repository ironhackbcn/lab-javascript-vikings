// Soldier ++++++++++++++++++++++++++++++++++++++++++++++++++
function Soldier (healthArg, strengthArg) {
    this.health = healthArg;
    this.strength = strengthArg
}

Soldier.prototype.attack = function() {
    return this.strength
}

Soldier.prototype.receiveDamage = function(damage) {
    this.health -= damage;
}

// Viking ++++++++++++++++++++++++++++++++++++++++++++++++++
function Viking(name, healthArg, strengthArg) {
    Soldier.call(this, healthArg, strengthArg);
    this.name = name;
}

Viking.prototype = Object.create(Soldier.prototype); 
Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage = function(damage) {
    this.health -= damage;
    if (this.health <= 0) {
        return `${this.name} has died in act of combat`;
    } else {
        return `${this.name} has received ${damage} points of damage`;
    }
}

Viking.prototype.battleCry = function (){
    return "Odin Owns You All!"
}


// Saxon ++++++++++++++++++++++++++++++++++++++++++++++++++
function Saxon(healthArg, StrengthArg) {
    this.health = healthArg;
    this.strength = StrengthArg;
}

Saxon.prototype.attack = function(){
    return this.strength;
}

Saxon.prototype.receiveDamage = function(damage) {
    this.health -= damage;
    if (this.health <= 0) {
        return `A Saxon has died in combat`
    } else {
        return `A Saxon has received ${damage} points of damage`
    }
}

Saxon.prototype = Object.create(Soldier.prototype); 
Saxon.prototype.constructor = Saxon;

// War ++++++++++++++++++++++++++++++++++++++++++++++++++
function War () {
    this.vikingArmy = [];
    this.saxonArmy =[];
}

War.prototype.addViking = function(Viking){
    this.vikingArmy.push(Viking)
}

War.prototype.addSaxon = function(Saxon){
    this.saxonArmy.push(Saxon)
}

War.prototype.vikingAttack = function(){
    const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

    let resultVikingAttack = randomSaxon.receiveDamage(randomViking.strength);
    
    this.saxonArmy = this.saxonArmy.filter(function(saxon){
        return saxon.health > 0;
    });
    
    return resultVikingAttack;
}

War.prototype.saxonAttack = function(){
    const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

    let resultSaxonAttack = randomViking.receiveDamage(randomSaxon.strength);
    
    this.vikingArmy = this.vikingArmy.filter(function(viking){
        return viking.health > 0;
    });
    
    return resultSaxonAttack;
}

War.prototype.showStatus = function() {
    if(this.saxonArmy.length === 0){
        return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0){
        return "Saxons have fought for their lives and survive another day...";
    } else {
        return "Vikings and Saxons are still in the thick of battle.";
    }
        
    }