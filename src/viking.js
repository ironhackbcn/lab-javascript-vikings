// Soldier
function Soldier(health, strength) {
    this.health = health;
    this.strength = strength;
    this.attack = function(){
        return this.strength;
    }
    this.receiveDamage=function(damage){
        this.health -= damage
    }
}

// Viking
function Viking(name, health, strength) {
    this.name = name;
    Soldier.call(this, health, strength);
    this.battleCry = function(){
        return 'Odin Owns You All!';
    }
    this.receiveDamage = function(damage){
        this.health -= damage;
        if(this.health>0){
            return `${this.name} has received ${damage} points of damage`;
        }
        else {
            return `${this.name} has died in act of combat`;
        }
    }
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;


// Saxon
function Saxon(health, strength) {
    Soldier.call(this, health, strength);
    this.name = "Saxon"
    this.receiveDamage = function(damage){
        this.health -= damage;
        if(this.health>0){
            return `A ${this.name} has received ${damage} points of damage`;
        }
        else {
            return `A ${this.name} has died in combat`;
        }
    }
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

// War
function War() {
    this.vikingArmy = []
    this.saxonArmy = []
    this.addViking = (vikingUnit)=>{
        this.vikingArmy.push(vikingUnit);
    }
    this.addSaxon = function(saxonUnit){
        this.saxonArmy.push(saxonUnit);
    }
    this.vikingAttack = function(){
        var ranomSaxonIndex = Math.floor(Math.random()*this.saxonArmy.length)
        var randomVikingIndex = Math.floor(Math.random()*this.vikingArmy.length)
        var randomSaxon = this.saxonArmy[ranomSaxonIndex];
        var randomViking = this.vikingArmy[randomVikingIndex]
        randomSaxon.receiveDamage(randomViking.strength)
        if(randomSaxon.health<=0){
            this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxon), this.saxonArmy.indexOf(randomSaxon)+1) 
        }
    }
    this.saxonAttack = function(){
        var ranomSaxonIndex = Math.floor(Math.random()*this.saxonArmy.length)
        var randomVikingIndex = Math.floor(Math.random()*this.vikingArmy.length)
        var randomSaxon = this.saxonArmy[ranomSaxonIndex];
        var randomViking = this.vikingArmy[randomVikingIndex]
        randomViking.receiveDamage(randomSaxon.strength)
        if(randomViking.health<=0){
            this.vikingArmy.splice(this.vikingArmy.indexOf(randomViking), this.saxonArmy.indexOf(randomSaxon)+1) 
        }
        return randomViking.receiveDamage(randomSaxon.strength);
    }
    this.showStatus = function(){
        if(saxonArmy.length==0){
            return "Vikings have won the war of the century!";
        }
        else if(vikingArmy.length==0){
            return "Saxons have fought for their lives and survive another day..."
        }
        else if(vikingArmy.length>0 && saxonArmy.length>0){
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}
