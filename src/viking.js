// Soldier
function Soldier(health,strength) {
this.health=health;
this.strength=strength;
}
Soldier.prototype.attack=function(){
    return this.strength;
}
Soldier.prototype.receiveDamage=function(theDamage){
    this.health= this.health - theDamage;
}
// Viking
function Viking(name,health,strength) {
    Soldier.call(this,health,strength);
    this.name=name;

}
Viking.prototype=Object.create(Soldier.prototype);
Viking.prototype.constructor=Viking;

Viking.prototype.receiveDamage=function(theDamage){
    this.health = this.health - theDamage;
    if (this.health>0){
        return `${this.name} has received ${theDamage} points of damage`;
    }
    else{
        return `${this.name} has died in act of combat`;
    }
}

Viking.prototype.battleCry=function(){
    return "Odin Owns You All!"
}

// Saxon
function Saxon(health,strength) {
    Soldier.call(this, health,strength);
}
Saxon.prototype=Object.create(Soldier.prototype);
Saxon.prototype.constructor=Saxon;

Saxon.prototype.receiveDamage=function(theDamage){
    this.health= this.health - theDamage;
    if (this.health>0){
        return `A Saxon has received ${theDamage} points of damage`;
    }
    else {
        return `A Saxon has died in combat`;
    }
}
// War
function War() {
  this.vikingArmy=[];
  this.saxonArmy=[];
};

War.prototype.addViking=function(v1){
    Viking(v1);
    this.vikingArmy.push(v1);
};
War.prototype.addSaxon=function(s1){
    this.saxonArmy.push(s1);
};

War.prototype.vikingAttack=function(){
    let sI=Math.floor(Math.random()*this.saxonArmy.length);
    let vI=Math.floor(Math.random()*this.vikingArmy.length);

    let s=this.saxonArmy[sI];
    let v=this.vikingArmy[vI];
    s.receiveDamage(v.strength);


    if (s.health<=0){
        this.saxonArmy.splice(this.saxonArmy[sI],1);
        return `A Saxon has died in combat`
    }
}
War.prototype.saxonAttack=function(){
    let sI=Math.floor(Math.random()*this.saxonArmy.length);
    let vI=Math.floor(Math.random()*this.vikingArmy.length);

    let s=this.saxonArmy[sI];
    let v=this.vikingArmy[vI];
    v.receiveDamage(s.strength);


    if (v.health<=0){
        this.vikingArmy.splice(this.vikingArmy[vI],1);  
    }
    return `${v.name} has received ${s.strength} points of damage`
}
War.prototype.showStatus=function(){
    if (this.saxonArmy.length===0){
        return "Vikings have won the war of the century!"
    }
    else if(this.vikingArmy.length===0){
        return "Saxons have fought for their lives and survive another day..."
    }
    else if(this.vikingArmy.length>0 && this.saxonArmy.length>0){
        return "Vikings and Saxons are still in the thick of battle."
    }
}
