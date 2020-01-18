// Soldier
function Soldier(health, strength) {
    this.health = health;
    this.strength = strength;
}

Soldier.prototype.attack = function(){
    return this.strength;
}

Soldier.prototype.receiveDamage = function(damage){
    this.health -= damage;
}

// Viking
function Viking(name, health, strength) {
    Soldier.call(this, health, strength);
    this.name = name;
}

Viking.prototype = new Soldier();
// Viking.prototype = Object.create(Solider.prototype); //for some reason this didn't work
Viking.prototype.constructor = Viking;
Viking.prototype.receiveDamage = function(damage){
    this.health -= damage;
    return this.health>0? `${this.name} has received ${damage} points of damage`:`${this.name} has died in act of combat`;
}

Viking.prototype.battleCry = function(){
    return "Odin Owns You All!";
}


// Saxon
function Saxon(health, strength) {
    Soldier.call(this, health, strength);

    this.receiveDamage = function(damage){
        this.health -= damage;
        return this.health>0? `A Saxon has received ${damage} points of damage`:`A Saxon has died in combat`;
    };
}

Saxon.prototype = new Soldier();
Saxon.prototype.constructor = Saxon;

// War
function War() {
    this.vikingArmy =[];
    this.saxonArmy = [];
    this.addViking = function(Viking){
        this.vikingArmy.push(Viking);
    };
    this.addSaxon = function(Saxon){
        this.saxonArmy.push(Saxon);
    };
    this.vikingAttack = function(){
        let index = Math.floor(Math.random() * this.saxonArmy.length);
        let selectedVikingArmy = this.vikingArmy[index];
        let selectedSaxon =this.saxonArmy[index];
        let VikingStrength =selectedSaxon.receiveDamage(selectedVikingArmy.strength);
        if(selectedSaxon.health <=0){ 
            this.saxonArmy.splice(index,1);
            return `A Saxon has died in combat`;
        }
        else{
            return VikingStrength;
        }        
    };
    this.saxonAttack = function(){
        let index = Math.floor(Math.random() * this.vikingArmy.length);
        let selectedViking = this.vikingArmy[index];
        let selectedSaxon = this.saxonArmy[index];

        let saxonStrength = selectedViking.receiveDamage(selectedSaxon.strength);
        if (selectedViking.health <= 0) {
            this.vikingArmy.splice(index, 1); 
        } else
            return saxonStrength;
    };

    this.showStatus = function(){
        if(this.saxonArmy.length ==0){
            return `Vikings have won the war of the century!`
        }
        else if(this.vikingArmy.length == 0){
            return `Saxons have fought for their lives and survive another day...`
        }
        else{
            return `Vikings and Saxons are still in the thick of battle.`
        }
    };
}
