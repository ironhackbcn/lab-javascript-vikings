// Soldier
function Soldier(healthArg, strengthArg) {
    this.health = healthArg;
    this.strength = strengthArg;

}
Soldier.prototype.attack = function(){
        return this.strength;
    }

Soldier.prototype.receiveDamage = function(damage){
        this.health = this.health - damage;
}

var guerrero = new Soldier(100, 20);


// Viking
function Viking(name,healthArg, strengthArg) {
    this.name = name;
    Soldier.call(this, healthArg, strengthArg);   
}
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage = function(damage){
    this.health = this.health - damage;
    if(this.health > 0){
        return `${this.name} has received ${damage} points of damage`;
    }else {
        return `${this.name} has died in act of combat`;
    }
}

Viking.prototype.battleCry = function(){
    return "Odin Owns You All!";
}

var viking = new Viking("Rafa", 100, 50);


// Saxon
function Saxon(healthArg, strengthArg) {
    Soldier.call(this, healthArg, strengthArg);
}
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Viking;

Saxon.prototype.receiveDamage = function (damage){
    this.health = this.health - damage;
    if(this.health > 0){
        return `A Saxon has received ${damage} points of damage`;
    }else {
        return `A Saxon has died in combat`;
    }
}

var saxon = new Saxon(100, 55);



// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];
}

War.prototype.addViking = function(Viking){
     this.vikingArmy.push(Viking);
}

War.prototype.addSaxon = function(Viking){
    this.saxonArmy.push(Viking);
}


War.prototype.vikingAttack = function(){
    
}

War.prototype.saxonAttack = function(){
    
}
War.prototype.showStatus = function(){
    
}