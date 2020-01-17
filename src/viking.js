// Soldier
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

// Viking
function Viking(name, healthArg, strengthArg) {
    Soldier.call(this, healthArg, strengthArg);
    this.name = name;
}

Viking.prototype = Object.create(Soldier.prototype); 
Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage = function(damage) {
    this.health -= damage;
    if (this.health <= 0) {
        return `${this.name} has died in act of combat`
    } else {
        return `${this.name} has received ${damage} points of damage`
    }
}

Viking.prototype.battleCry = function (){
    return "Odin Owns You All!"
}

// Saxon
function Saxon() {}

// War
function War() {}
