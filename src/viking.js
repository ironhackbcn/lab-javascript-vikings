// Soldier
function Soldier(healthArg, strengthArg) {
  this.health = healthArg;
  this.strength = strengthArg;
  this.attack = function(){
    return this.strength;
    // says there is a declaration exception for the attached method?
  }
  this.receiveDamage = function(damage){
    this.health = this.health - damage;  
   }
};

// Viking
function Viking(name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
   // => if it uncomment the below it throws failures 
   //for all other tests that have previously been passed.

  //this.receiveDamage = function(damage){
   // this.health = this.health - damage;
    //if (this.health > 0) {
    //return this.name + "has received" damage + "points of damage";
     //}
    // else {
    //  return this.name + "has died in act of combat"
   //};

   this.battleCry = function () {
     return "Odin Owns You All!"
   };
  };

// Saxon
function Saxon(health, strength) {
  Soldier.call(health, strength);

}



// War
function War() {}

