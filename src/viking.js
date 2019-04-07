// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
}

Soldier.prototype.attack = function () {
  return this.strength;
}

Soldier.prototype.receiveDamage = function (theDamage) {
  this.health = this.health - theDamage;
  if (this.constructor.name === "Viking") {
    if (this.health > 0) {
      return `${this.name} has received ${theDamage} points of damage`;
    } else {
      // remove from array vikingArmy
      // I don't know how to access to war1 whithout the name

      for (var i = 0; i < war1.vikingArmy.length; i++) {
        if (war1.vikingArmy[i].health <= 0) {
          war1.vikingArmy.splice(i, 1);
        }
      }

      this.battleCry();
      return `${this.name} has died in act of combat`;
    }
  } else if (this.constructor.name === "Saxon") {
    if (this.health > 0) {
      return `A Saxon has received ${theDamage} points of damage`;
    } else {
      // remove from array saxonArmy
      // I don't know how to access to war1 whithout the name

      for (var i = 0; i < war1.saxonArmy.length; i++) {
        if (war1.saxonArmy[i].health <= 0) {
          war1.saxonArmy.splice(i, 1);
        }
      }

      this.battleCry();
      return `A Saxon has died in act of combat`;
    }
  }

  if (this.health <= 0) {
    return this.battleCry();
  }
}

Soldier.prototype.attack = function () {
  return this.strength;
}

Soldier.prototype.battleCry = function () {
  return "Odin Owns You All!";
}


// Viking
function Viking(name, health, strength) {
  this.name = name;
  Soldier.call(this, health, strength);
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;



// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;



// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
}

War.prototype.addViking = function (viking) {
  this.vikingArmy.push(viking);
}

War.prototype.addSaxon = function (saxon) {
  this.saxonArmy.push(saxon);
}

War.prototype.vikingAttack = function () {
  var randomSaxonNumber = Math.floor(Math.random() * this.saxonArmy.length);
  var randomSaxon = this.saxonArmy[randomSaxonNumber];

  var randomVikingNumber = Math.floor(Math.random() * this.vikingArmy.length);
  var randomViking = this.vikingArmy[randomVikingNumber];

  if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0) {
    return randomSaxon.receiveDamage(this.vikingArmy[randomVikingNumber].strength);
  }
}



War.prototype.saxonAttack = function () {
  var randomSaxonNumber = Math.floor(Math.random() * this.saxonArmy.length);
  var randomSaxon = this.saxonArmy[randomSaxonNumber];

  var randomVikingNumber = Math.floor(Math.random() * this.vikingArmy.length);
  var randomViking = this.vikingArmy[randomVikingNumber];
  if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0) {
    return randomViking.receiveDamage(this.saxonArmy[randomSaxonNumber].strength);
  }
}

War.prototype.showStatus = function () {
  if (war1.saxonArmy.length === 0) {
    return "Vikings have won the war of the century!";

  } else if (war1.vikingArmy.length === 0) {
    return "Saxons have fought for their lives and survive another day...";
  } else {
    return "Vikings and Saxons are still in the thick of battle.";
  }

}


var viking1 = new Viking("Red leader", 300, 150);
//var viking2 = new Viking("Gold leader", 300, 150);
var saxon1 = new Saxon(60, 25);
//var saxon2 = new Saxon(60, 25);
//var saxon3 = new Saxon(60, 25);
var war1 = new War();


console.log(war1.addViking(viking1));
//console.log(war1.addViking(viking2));
console.log(war1.addSaxon(saxon1));
//console.log(war1.addSaxon(saxon2));
//console.log(war1.addSaxon(saxon3));
//console.log(war1);
console.log(war1.vikingAttack());
console.log(war1.saxonAttack());
// console.log(war1.saxonAttack());
// console.log(war1.saxonAttack());
// console.log(war1.saxonAttack());
// console.log(war1.saxonAttack());
// console.log(war1.saxonAttack());
// console.log(war1.saxonAttack());
// console.log(war1.saxonAttack());
// console.log(war1.saxonAttack());
// console.log(war1.saxonAttack());
// console.log(war1.saxonAttack());
// console.log(war1.saxonAttack());
// console.log(war1.saxonAttack());
// console.log(war1.saxonAttack());
// console.log(war1.saxonAttack());
// console.log(war1.saxonAttack());
// console.log(war1.saxonAttack());
// console.log(war1.saxonAttack());
// console.log(war1.saxonAttack());
console.log(war1.showStatus());


/*

// Testing
var soldier1 = new Soldier(10, 1);
console.log(soldier1);
console.log(soldier1.receiveDamage(1));
console.log(soldier1);
console.log(soldier1.receiveDamage(10));
console.log(soldier1);


console.log("-------------------------");


var viking1 = new Viking("Red leader", 15, 2);
console.log(viking1);
console.log(viking1.receiveDamage(1));
console.log(viking1);
console.log(viking1.receiveDamage(15));
console.log(viking1);


console.log("-------------------------");



var saxon1 = new Saxon(40, 4);
console.log(saxon1);
console.log(saxon1.receiveDamage(1));
console.log(saxon1);
console.log(saxon1.receiveDamage(40));
console.log(saxon1);

*/