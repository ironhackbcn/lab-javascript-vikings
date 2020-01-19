// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
}
Soldier.prototype.attack = function () {
    return this.strength;
};

Soldier.prototype.receiveDamage = function (damage) {
    this.health = this.health - damage;
}



// Viking
function Viking(name, health, strength) {
    Soldier.call(this, health, strength);
    this.name = name;
}
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage = function (damage) {
this.health = this.health - damage;
if (this.health > 0 ) {
    return `${this.name} has received ${damage} points of damage`;
} else {
    return `${this.name} has died in act of combat`;
}
};

Viking.prototype.battleCry = function () {
    return "Odin Owns You All!"
}


// Saxon
function Saxon(health, strength) {
    Soldier.call(this, health, strength);
}
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;


Saxon.prototype.receiveDamage = function(theDamage) {
    this.health = this.health - theDamage;
    if(this.health > 0) {
        return `A Saxon has received ${theDamage} points of damage`;
    } else {
        return "A Saxon has died in combat";
    }
}


// War
function War() {
this.vikingArmy = [];
this.saxonArmy = [];
}
War.prototype.addViking = function (v) {
    this.vikingArmy.push(v);
};
War.prototype.addSaxon = function (s) {
    this.saxonArmy.push(s);
};
War.prototype.vikingAttack = function () {
    let sRandom = [Math.floor(Math.random() * this.saxonArmy.length)];
    let vRandom = [Math.floor(Math.random() * this.vikingArmy.length)];

    let saxon = this.saxonArmy[sRandom];
    let viking = this.vikingArmy[vRandom];

    var result = saxon.receiveDamage(viking.strength);


    if (saxon.health <= 0) {
    this.saxonArmy.splice(sRandom, 1);

}
    return result


};

War.prototype.saxonAttack = function () {
    let sRandom = [Math.floor(Math.random() * this.saxonArmy.length)];
    let vRandom = [Math.floor(Math.random() * this.vikingArmy.length)];

    let saxon = this.saxonArmy[sRandom];
    let viking = this.vikingArmy[vRandom];

    let result = viking.receiveDamage(saxon.strength);

    if (viking.health <= 0) {
        this.vikingArmy.splice(vRandom, 1);

    }

    return result;






/*
    var result1 = vikingRandom.receiveDamage(saxonRandom.strength);

     if (viking.health > 0) {
         this.vikingArmy.splice(vikingRandom, 1);
     }

     return result1
     */

};
War.prototype.showStatus = function () {
    if (this.saxonArmy.length === 0) {
        return "Vikings have won the war of the century!"
    }
    else if (this.vikingArmy.length === 0) {
        return "Saxons have fought for their lives and survive another day..."
    }
    else if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {
        return "Vikings and Saxons are still in the thick of battle.";
    }
    
};