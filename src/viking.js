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
function Saxon(healthArg, strengthArg) {
    Soldier.call(this, healthArg, strengthArg)
}

Saxon.prototype = Object.create(Soldier.prototype); 
Saxon.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage = function(damage) {
    this.health -= damage;
    if (this.health <= 0) {
        return `A Saxon has died in combat`
    } else {
        return `A Saxon has received ${damage} points of damage`
    }
}

// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];
};

War.prototype.addViking = function(vikingObj) {
    this.vikingArmy.push(vikingObj);
};

War.prototype.addSaxon = function(saxonObj) {
    this.saxonArmy.push(saxonObj);
};

War.prototype.vikingAttack = function() {
    // chose random viking 
    let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    // chose random saxon and save his position in the Saxon Army Array
    const randomSaxonPosition = Math.floor(Math.random() * this.saxonArmy.length);
    let randomSaxon = this.saxonArmy[randomSaxonPosition];
    // let the Saxon receive the damage and retun
    let fightOutcome = randomSaxon.receiveDamage(randomViking.strength);
    //remove dead Saxon
    if (randomSaxon.health <= 0) {
        this.saxonArmy.splice(randomSaxonPosition, 1);
    };
    return fightOutcome;
};

War.prototype.saxonAttack = function() {
    // chose random viking and save position in Viking Army Array
    const randomVikingPosition = Math.floor(Math.random() * this.vikingArmy.length);
    let randomViking = this.vikingArmy[randomVikingPosition];
    // chose random saxon
    let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    // let the Viking receive the damage
    const fightOutcome = randomViking.receiveDamage(randomSaxon.strength);
    //remove dead Viking
    if (randomViking.health <= 0) {
        this.vikingArmy.splice(randomVikingPosition, 1);
    };
    return fightOutcome;
};

War.prototype.showStatus = function() {
    if (this.saxonArmy.length < 1) {
        return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length < 1) {
        return "Saxons have fought for their lives and survive another day..."
    } else {
        return "Vikings and Saxons are still in the thick of battle."
    }
};

