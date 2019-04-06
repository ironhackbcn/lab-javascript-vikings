// Soldier
function Soldier(health, strength) {
    this.health = health
    this.strength = strength
}

Soldier.prototype.attack = function () {
    return this.strength
}

Soldier.prototype.receiveDamage = function (damage) {
    this.health -= damage
}

// Viking
function Viking(name, health, strength) {
    Soldier.call(this, health, strength);
    this.name = name;
}

Viking.prototype = Object.create(Soldier.prototype);

Viking.prototype.receiveDamage = function (damage) {
    this.health -= damage
    if (this.health > 0) {
        return `${this.name} has received ${damage} points of damage`
    } else {
        return `${this.name} has died in act of combat`
    }
}

Viking.prototype.battleCry = () => {
    return 'Odin Owns You All!'
}

// Saxon
function Saxon(health, strength) {
    Soldier.call(this, health, strength)
}

Saxon.prototype = Object.create(Soldier.prototype);

Saxon.prototype.receiveDamage = function (damage) {
    this.health -= damage
    if (this.health > 0) {
        return `A Saxon has received ${damage} points of damage`
    } else {
        return 'A Saxon has died in combat'
    }
}

// War
function War() {
    this.vikingArmy = []
    this.saxonArmy = []
}

War.prototype.addViking = function (viking) {
    this.vikingArmy.push(viking)
}

War.prototype.addSaxon = function (saxon) {
    this.saxonArmy.push(saxon)
}

War.prototype.vikingAttack = function () {
    saxonSelected = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    vikingSelected = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

    console.log(saxonSelected.receiveDamage(vikingSelected.attack()))

    if (saxonSelected.health <= 0) {
        console.log('Saxon dead, removing from the battle field.');
        this.saxonArmy.splice(this.saxonArmy.indexOf(saxonSelected), 1);
    }
}

War.prototype.saxonAttack = function () {
    saxonSelected = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
    vikingSelected = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
    console.log(vikingSelected.receiveDamage(saxonSelected.attack()))

    if (vikingSelected.health <= 0) {
        console.log('Viking dead, removing from the battle field.');
        this.vikingArmy.splice(this.vikingArmy.indexOf(vikingSelected), 1);
    }
}

War.prototype.showStatus = function () {
    if (this.saxonArmy.length <= 0) {
        console.log('Vikings have won the war of the century!')
    } else if (this.vikingArmy.length <= 0) {
        return 'Saxons have fought for their lives and survive another day...'
    } else {
        console.log('--- Vikings and Saxons are still in the thick of battle. ---')
        nextTurn  = Math.floor(Math.random() * 150)
        if (nextTurn % 2 === 0) {
            console.log('Viking attacking!')
            war.vikingAttack()
        } else {
            console.log('Saxon attacking!')
            war.saxonAttack()
        }
        war.showStatus()
    }
}


viking1 = new Viking('Bob', 100, 254)
viking2 = new Viking('John', 103, 24)
saxon1 = new Saxon(150, 26)
saxon2 = new Saxon(400, 236)

war = new War()
war.addViking(viking1)
war.addViking(viking1)
war.addSaxon(saxon1)
war.addSaxon(saxon2)
war.showStatus()