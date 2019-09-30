// Soldier
function Soldier(health, strength) {
    this.health = health;
    this.strength = strength;
    this.attack = function(){
        return this.strength;
    }
    this.receiveDamage = function(damage){
        this.health -= damage;
    }
}

// Viking
function Viking(name, health, strength) {
    Soldier.call(this, health, strength)
    this.name = name
    this.receiveDamage = function(damage){
        this.health -= damage
        return this.health > 0 ? `${this.name} has received ${damage} points of damage` : `${this.name} has died in act of combat`;
        //if(this.health > 0){return `${this.name} has received ${damage} points of damage`} else{return `${this.name} has died in act of combat`}
    }
    this.battleCry = function(){
        return "Odin Owns You All!"
    }
}

Viking.prototype = Object.create(Soldier.prototype)
Viking.prototype.constructor = Viking

// Saxon
function Saxon(health, strength) {
    Soldier.call(this, health, strength)
    this.receiveDamage = function(damage){
        this.health -= damage
        return this.health > 0 ? `A Saxon has received ${damage} points of damage` : `A Saxon has died in combat`;
        //if(this.health > 0){return `${this.name} has received ${damage} points of damage`} else{return `${this.name} has died in act of combat`}
    }
}


Saxon.prototype = Object.create(Soldier.prototype)
Saxon.prototype.constructor = Saxon

// War
function War() {
    this.vikingArmy = []
    this.saxonArmy = []
    this.addViking = function(object){
        this.vikingArmy.push(object);
    }
    this.addSaxon = function(object){
        this.saxonArmy.push(object)
    }
    this.vikingAttack = function(){
        let numberSaxon = Math.floor(Math.random()*this.saxonArmy.length)
        let attackedSaxon = this.saxonArmy[numberSaxon]
        let numberViking = Math.floor(Math.random()*this.vikingArmy.length)
        let attackViking = this.vikingArmy[numberViking]

        let result = attackedSaxon.receiveDamage(attackViking.attack())

        if (attackedSaxon.health <= 0) {this.saxonArmy.splice(numberSaxon, 1)}
        return result
    }

    this.saxonAttack = function(){
        let numberSaxon = Math.floor(Math.random()*this.saxonArmy.length)
        let attackSaxon = this.saxonArmy[numberSaxon]
        let numberViking = Math.floor(Math.random()*this.vikingArmy.length)
        let attackedViking = this.vikingArmy[numberViking]
        
        let result = attackedViking.receiveDamage(attackSaxon.attack())

        if (attackedViking.health <= 0) {this.vikingArmy.splice(numberViking, 1)}
        return result
    }

    this.showStatus = function(){
        if (this.saxonArmy == 0) {return "Vikings have won the war of the century!"}
        else if (this.vikingArmy == 0){return "Saxons have fought for their lives and survive another day..." }
        else {return "Vikings and Saxons are still in the thick of battle."}
    }
}
