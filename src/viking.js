// Soldier
function Soldier(healthArg, strengthArg) {
    this.health = healthArg;
    this.strength = strengthArg;

    this.attack = function(){
        return this.strength;
    };

    this.receiveDamage = function(damage){
        this.health = this.health - damage;
    }
}

// Viking
function Viking(name, health, strength) {
    this.name = name;
    Soldier.call(this,health, strength); 
    
    this.receiveDamage = function(damage){
        this.health = this.health - damage;
        if(this.health > 0){
            return `${this.name} has received ${damage} points of damage`
        } else{ return `${this.name} has died in act of combat`}
    }

    this.battleCry = function(){
        return "Odin Owns You All!"
    }
}
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

// Saxon
function Saxon(health, strength) {
    Soldier.call(this, health, strength);

    this.receiveDamage = function(damage){
        this.health = this.health - damage;
        if(this.health > 0){
            return `A Saxon has received ${damage} points of damage`
        } else{ return `A Saxon has died in combat`}
    }
}
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;
// War
function War() {
    this.vikingArmy = []
    this.saxonArmy = [];

    this.addViking = function(viking){
        this.vikingArmy.push(viking);
    };
    this.addSaxon = function(saxon){
        this.saxonArmy.push(saxon);
    };
    this.vikingAttack = function(){
       let attackedSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
       let vikingAttack = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
       let damageSaxon = attackedSaxon.receiveDamage(vikingAttack.strength);
        if(attackedSaxon.health <=0){
            this.saxonArmy.splice(this.saxonArmy[attackedSaxon],1);
        }
        return damageSaxon;
    }
    this.saxonAttack = function(){
        let attackedViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
        let saxonAttack = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
        let damageViking = attackedViking.receiveDamage(saxonAttack.strength);
         if(attackedViking.health <=0){
             this.vikingArmy.splice(this.vikingArmy[attackedViking],1);
         }
         return damageViking;
    };
    this.showStatus = function(){
        if(this.saxonArmy.length === 0){
            return "Vikings have won the war of the century!"
        } else if (this.vikingArmy.length === 0){
            return "Saxons have fought for their lives and survive another day..."
        } else {
            return "Vikings and Saxons are still in the thick of battle."
        }
    };
}
