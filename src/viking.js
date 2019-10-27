// Soldier
function Soldier(health, strength) {
    this.health = health;
    this.strength = strength;
}

Soldier.prototype.attack = function() {
    return this.strength;
    };
Soldier.prototype.receiveDamage = function(damage) {
    this.health -= damage;
    };

// Viking
function Viking(name, health, strength) {
    this.name = name;
    Soldier.call(this, health, strength);
    this.attack = function() {
        return this.strength;
    };
    this.receiveDamage = function(damage) {
    this.health -= damage;
        if (this.health > 0) {
            return this.name + " has received " + damage + " points of damage"; 
        } else /* if (this.health === 0)*/ {
            return this.name + " has died in act of combat";
        }
    };
    this.battleCry = function() {
        return "Odin Owns You All!";
    }
}

Viking.prototype = Object.create(Soldier.prototype);

// Saxon
function Saxon(health, strength) {
    Soldier.call(this, health, strength);
    this.attack = function() {
        return this.strength;
    };
    this.receiveDamage = function(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return "A Saxon has received " + damage + " points of damage";
        } else /* if (this.health === 0)*/ {
            return "A Saxon has died in combat";
            }
        };
}

Saxon.prototype = Object.create(Soldier.prototype);

// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];
}

War.prototype.addViking = function(Viking) {
    this.vikingArmy.push(Viking);
};

War.prototype.addSaxon = function(Saxon) {
    this.saxonArmy.push(Saxon);
};

War.prototype.vikingAttack = function() {
    let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    let randomViking = Math.floor(Math.random() * ((this.vikingArmy.length)));
    let attack = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength);
    for (let i = 0; i < this.saxonArmy.length; i++) {
    if (this.saxonArmy[i].health <= 0) {
        this.saxonArmy.splice(i, 1);
        }
    }

    return attack;

};
War.prototype.saxonAttack = function() {
    let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    let randomViking = Math.floor(Math.random() * ((this.vikingArmy.length)));
    let attack = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength);
    for (let i = 0; i < this.vikingArmy.length; i++) {
        if (this.vikingArmy[i].health <= 0) {
            this.vikingArmy.splice(i, 1);
        }
    }

    return attack;

};

War.prototype.showStatus = function() {
    if (this.saxonArmy.length === 0) {
        return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
        return "Saxons have fought for their lives and survive another day...";
    } else /* if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0) */ {
        return "Vikings and Saxons are still in the thick of battle.";
    }
};
