// Soldier
function Soldier(health,strength) {
    this.health = health;
    this.strengh = strength;
}

Soldier.prototype.attack = function (){
    return this.strengh;
}

Soldier.prototype.receiveDamage = function(damage) {
    this.health -= damage;
  };

// Viking
function Viking(name, health, strength) {
    this.name = name;
    Soldier.call(this,health,strength);
};
Viking.prototype = Object.create(Solider.prototype);
Viking.prototype.constructor = Viking;

function receiveDamage (){
    Animal.call(this, name, owner, "Whoof");
    this.humanRelation = "love";
  }
  

this.battleCry()

// Saxon
function Saxon() 
    Soldier.call(health,strength);
}

// War
function War() {}
