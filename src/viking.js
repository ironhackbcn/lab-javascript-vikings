// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
  this.attack = function () {
    return this.strength;
  }
  this.receiveDamage = function (damage) {
    this.health -= damage;
  }
}

// Viking
function Viking(name, health, strength) {
  this.name = name;
  this.health = health;
  this.strength = strength;
  /* THE LINE 19 breakes the recieve damage function */
  /* this.vikingAttack = Soldier.call(this, Soldier.attack); */ 
  this.receiveDamage = function (damageViking) {
    this.health -= damageViking;
    if (this.health > 0) {
      return `${this.name} has received ${damageViking} points of damage`;
    } else if (this.health <= 0) {
      return `${this.name} has died in act of combat`;
    };
  }
  this.battleCry = function(){
    return `Odin Owns You All!`
  }
}
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;



// Saxon
function Saxon(health, strength) {
  this.health = health;
  this.strength = strength;
  /* The same as above */
/*   Soldier.call(this, Soldier.attack); */
  this.receiveDamage = function (saxonDamage) {
    this.health -= saxonDamage;
    if (this.health > 0) {
      return `A Saxon has received ${saxonDamage} points of damage`;
    } else if (this.health <= 0) {
      return `A Saxon has died in combat`
    }
  };
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

/* these test aint working since i got problem with the inheritance of the attack method in the previous contructors */
// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
  this.addViking = function(Viking){
    Viking.call(this, name, health, strength);
    vikingArmy.push(Viking);
    /* this.Array.vikkingArmy.push(Viking); */
  }
  this.addSaxon = function(Saxon){
    Viking.call(this, name, strength);
    saxonArmy.push(this);
  }
  this.vikingAttack = function(){
    this.vikingArmy[Math.floor(this.length*Math.random())].this.health.receiveDamage(this.saxonArmy[Math.floor(this.length*Math.random())].strength);
    /* dont know how to implement the remove deads */
    return Saxon.receiveDamage();
  }
  this.saxonAttack = function(){
    this.saxonArmy[Math.floor(this.length*Math.random())].this.health.receiveDamage(this.vikingArmy[Math.floor(this.length*Math.random())].strength);
    /* dont know how to implement the remove deads */
    return Viking.receiveDamage();
  }
  this.showStatus = function(){
    if (saxonArmy.length === 1 && vikingArmy.length === 1) {
      console.log('Vikings and Saxons are still in the thick of battle.');
    } else if (saxonArmy.length === 0 ){
      return `Vikings have won the war of the century!`;
    } else if (vikingArmy.length === 0) {
      return `Saxons have fought for their lives and survive another day...`;
    }
  }
}
