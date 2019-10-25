// Soldier

// Constructor Soldier with two arguments
function Soldier(healthArg, strengthArg) {
    this.health = healthArg;
    this.strength = strengthArg;

}
// We declare two function into the protopy to use after
Soldier.prototype.attack = function(){
        return this.strength;
    }

Soldier.prototype.receiveDamage = function(damage){
        this.health = this.health - damage;
}

// var guerrero = new Soldier(100, 20);


// Viking
// Viking has the two arguments from Soldier

function Viking(name,healthArg, strengthArg) {
    this.name = name;
    Soldier.call(this, healthArg, strengthArg);   //inherit the two arguments from Soldier.
}

// Able to use protoype(it is a pointer to Soldier object) with Viking variable.
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

// Declare function to know if viking is died or not.
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

// var viking = new Viking("Rafa", 100, 50);


// Saxon
// Same arguments from Soldier

function Saxon(healthArg, strengthArg) {
    Soldier.call(this, healthArg, strengthArg); //take the arguments from Soldier.
}
// To use the pointer prototype with Soldier object from Saxon
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Viking;

// Declare function to know if viking is died or not.
Saxon.prototype.receiveDamage = function (damage){
    this.health = this.health - damage;
    if(this.health > 0){
        return `A Saxon has received ${damage} points of damage`;
    }else {
        return `A Saxon has died in combat`;
    }
}

// var saxon = new Saxon(100, 55);



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
    var result;
    // var randomVikingNum = Math.floor(Math.random() * this.vikingArmy.length);
    // var randomSaxonNum = Math.floor(Math.random() * this.saxonArmy.length);
    var viking = this.vikingArmy[0];
    var saxon = this.saxonArmy[0];
    
    // El saxon mira el valor de damaged que le quita.
    result = saxon.receiveDamage(viking.strength);

    // Check if saxon live is 0 or less to remove from the list.
    if(saxon.health <= 0){
        this.saxonArmy.pop();
    }

    return result;
}

War.prototype.saxonAttack = function(){
    // We have to choose one viking and one saxon from the VikinaArray and  SaxonArray.

    // var randomVikingNum = Math.floor(Math.random() * this.vikingArmy.length);
    // var randomSaxonNum = Math.floor(Math.random() * this.saxonArmy.length);
    var viking = this.vikingArmy[0];
    var saxon = this.saxonArmy[0];

    // This one will have if is alive or not.
    var result = viking.receiveDamage(saxon.strength);

    if(viking.health <= 0) {
        this.vikingArmy.pop();
    } 
    return result;
    
}
War.prototype.showStatus = function(){
    var wonViking = "Vikings have won the war of the century!";
    var surviveSaxon = "Saxons have fought for their lives and survive another day...";
    var surviveSV = "Vikings and Saxons are still in the thick of battle.";
    if(this.saxonArmy.length == 0){
        return wonViking;
    }else if(this.vikingArmy.length == 0 ){
        return surviveSaxon;
    }else{
        return surviveSV;
    }
}