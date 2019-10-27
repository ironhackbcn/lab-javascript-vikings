// Soldier
function Soldier(health, strength) {
    this.health = health
    this.strength = strength

    this.attack = function() {
        return this.strength;
    }
    this.receiveDamage = function(theDamage) {
        this.health -= theDamage;

    }

}

// Viking
function Viking(name, health, strength) {

    this.name = name;

    Soldier.call(this, health, strength)

    this.attack = function() {
        return this.strength;
    }
    this.receiveDamage = function(theDamage) {
        this.health -= theDamage;


        if (this.health > 0) {
            return `${this.name} has received ${theDamage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }

    }

    this.battleCry = function() {
        return "Odin Owns You All!";
    }

}

Viking.prototype = Object.create(Soldier.prototype)

Viking.prototype.constructor = Viking;


this.prototype.receiveDamage = function(theDamage) {
    this.health -= theDamage;

}

function Saxon(health, strength) {
    Soldier.call(this, health, strength);


    this.attack = function() {
        return this.strength
    };
    this.receiveDamage = function(theDamage) {
        this.health -= theDamage;


        if (this.health > 0) {
            return `A Saxon has received ${theDamage} points of damage`;
        } else {
            return `A Saxon has died in combat`;
        }

    }

}

Saxon.prototype = Object.create(Soldier.prototype)

Saxon.prototype.constructor = Saxon;

// War
function War() {

    this.vikingArmy = [];
    this.saxonArmy = [];

    this.addViking = function(Viking) {
        this.vikingArmy.push(Viking);
    }

    this.addSaxon = function(Saxon) {
        this.saxonArmy.push(Saxon);
    }

    this.vikingAttack = function() {
        var result = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)].receiveDamage(this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)].strength);
        for (let i = 0; i < this.saxonArmy.length; i++) {
            if (this.saxonArmy[i].health <= 0) {
                this.saxonArmy.splice(i, 1);
            }
        }
        return result;
    }

    this.saxonAttack = function() {
        var result = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)].receiveDamage(this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)].strength);
        for (let i = 0; i < this.vikingArmy.length; i++) {
            if (this.vikingArmy[i].health <= 0) {
                this.vikingArmy.splice(i, 1);
            }
        }
        return result;
    }


    this.showStatus = function() {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        }
        if (this.vikingArmy.length === 0) {

            return "Saxons have fought for their lives and survive another day...";

        }
        if (this.vikingArmy.length >= 1 && this.saxonArmy.length >= 1) {
            return "Vikings and Saxons are still in the thick of battle.";
        }

    }
}