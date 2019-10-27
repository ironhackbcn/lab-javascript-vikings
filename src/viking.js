// Soldier
function Soldier(healthArg, strengthArg) {
this.health = healthArg;
this.strength = strengthArg;
}
Soldier.prototype.attack = function(){
return this.strength;
}
Soldier.prototype.receiveDamage = function(damage){
    this.health -= damage;
}

// Viking
function Viking(name, health, strength) {
    this.name = name;
    Soldier.call(this, health, strength);
}
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage = function(damage){
    this.health -= damage;
    if (this.health > 0){
    return `${this.name} has received ${damage} points of damage`;
    }
    else {
    return `${this.name} has died in act of combat`;
    }
}

Viking.prototype.battleCry = function(){
    return "Odin Owns You All!";
}



// Saxon
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;
function Saxon(health, strength) {
    Soldier.call(this, health, strength);
}
Saxon.prototype.receiveDamage = function(damage){
    this.health -= damage;
    if (this.health > 0){
    return `A Saxon has received ${damage} points of damage`;
    }
    else {
    return `A Saxon has died in combat`;
    
    }

}
// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];
}
War.prototype.addViking = function(viking){
    this.vikingArmy.push(viking);
}
War.prototype.addSaxon = function(saxon){
    this.saxonArmy.push(saxon);
}
War.prototype.vikingAttack = function(){
    this.randomsSaxonFighterNumber = Math.floor(Math.random()*this.saxonArmy.length);
    this.saxonFighter = this.saxonArmy[this.randomsSaxonFighterNumber];
    this.randomVikingFighterNumber = Math.floor(Math.random()*this.vikingArmy.length);
    this.vikingFighter = this.vikingArmy[this.randomVikingFighterNumber];
    
    var result = this.saxonFighter.receiveDamage(this.vikingFighter.strength);
    for (let i = 0; i < this.saxonArmy.length; i++){
        if(this.saxonArmy[i].health <= 0){
            this.saxonArmy.splice(i,1);
        }
        return result;
    }

}
War.prototype.saxonAttack = function(){
    this.randomsSaxonFighterNumber = Math.floor(Math.random()*this.saxonArmy.length);
    this.saxonFighter = this.saxonArmy[this.randomsSaxonFighterNumber];
    this.randomVikingFighterNumber = Math.floor(Math.random()*this.vikingArmy.length);
    this.vikingFighter = this.vikingArmy[this.randomVikingFighterNumber];

    var result = this.vikingFighter.receiveDamage(this.saxonFighter.strength);
    for (let i = 0; i < this.vikingArmy.length; i++){
        if(this.vikingArmy[i].health <= 0){
            this.vikingArmy.splice(i,1);
        }
        return result;
    }

    
}
War.prototype.showStatus = function(){
    if (this.saxonArmy.length == 0){
        return "Vikings have won the war of the century!";
    }
    if (this.vikingArmy.length == 0){
        return "Saxons have fought for their lives and survive another day...";
    }
    if (this.saxonArmy != 0 && this.vikingArmy != 0){
    return "Vikings and Saxons are still in the thick of battle."
    }
}