//Samuel Ledeboer

// Soldier
function Soldier(health, strength) {
    this.health = health;
    this.strength = strength;

    this.attack = function () {
        return this.strength;
    }
    
    /*this.receiveDamage = function (damage) {
        this.health -= damage;
    } 
    */
}

Soldier.prototype.receiveDamage = function (damage) {
    this.health -= damage;
}



// Viking
function Viking(name, health, strength) {
    this.name = name;
    //this.health = health;
    //this.strength = strength;
    
    Soldier.call(this, health, strength)
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;


//recieve damage
Viking.prototype.receiveDamage = function (damage) {
    this.health-= damage;
    if (this.health > 0) {
        return `${this.name} has received ${damage} points of damage`
    } else {
        return `${this.name} has died in act of combat`
    }
}

// Saxon
function Saxon( health, strength ) {
    this.health = health;
    this.strength = strength;
 }
 Saxon.prototype = Object.create(Soldier.prototype);
 Saxon.prototype.constructor = Saxon;
 


//attack function
 Saxon.prototype.attack = function() {
    return this.strength;
 };
 Saxon.prototype.receiveDamage = function (damage)  {
    this.health -= damage;
    if ( this.health > 0 ) {
        /*
        return 'A Saxon has received  ' + damage + ' points of damage';
        */
        return 'A Saxon has received ' + damage + ' points of damage';
    } else if ( this.health <= 0 ){
        return 'A Saxon has died in combat';
    }
 };function Saxon() {}

 
// War

