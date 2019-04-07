
function Soldier (healthArg, strengthArg) {
	this.health = healthArg;
	this.strength = strengthArg;
	//this.name = nameArg; // I would pass 3 arguments to Soldier for the subclasses to inherit.
}

Soldier.prototype.attack = function () {
	return this.strength;
}

Soldier.prototype.receiveDamage = function (damage) {
	if (damage !== 0) {
		this.health -= damage;
	}

}

//console.log('Soldier methods:', Soldier.prototype);
	

// Viking
function Viking (nameArg, healthArg, strengthArg) {
	this.name = nameArg;
	Soldier.call(this, healthArg, strengthArg);
}

Viking.prototype = Object.create(Soldier.prototype); // I am not sure if it will overwrite revieceDamage function
Viking.prototype.receiveDamage = function (damage) {
	this.health -= damage;
	if(this.health > 0) {
		return `${this.name} has received ${damage} points of damage`;
	} else if (this.health <= 0) {
		return `${this.name} has died in act of combat`;
	}
}
Viking.prototype.battleCry = function () {
	return 'Odin owns you all!!'
}


// Saxon
function Saxon(healthArg, strengthArg) {
	this.name = 'Saxon';
	Soldier.call(this, healthArg, strengthArg)
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.receiveDamage = function (damage) {
	this.health -= damage
	if (this.health < 0) {
		return `A ${this.name} has received ${damage} points of damage`;
	} else if (this.health <= 0) {
		return `A ${this.name} has died in combat`;
	}
}
// War
function War() {
	this.vikingArmy = [];
	this.saxonArmy = [];
}

War.prototype.addViking = function (Viking) { // I dont understand if viking its a parameter why I am asked to pass Viking object, i think it should work with any argument to whom i will later pass Viking obj
	this.vikingArmy.push(Viking); // I wonder if there is a method to push several objects to an array or if it would haev been possible to do it with a loop
	// this.vikingArmy.push(Viking); 
	// this.vikingArmy.push(Viking); 
	// this.vikingArmy.push(Viking); 
}

War.prototype.addSaxon = function (Saxon) {
	this.saxonArmy.push(Saxon);
	// this.saxonArmy.push(Saxon);
	// this.saxonArmy.push(Saxon);
	// this.saxonArmy.push(Saxon);
}

War.prototype.vikingAttack = function () {
	let randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
	let randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
	let damagedSaxon = randomSaxon.receiveDamage(randomViking.strength); // I'm not sure if the method receive dmg will be the saxon one, tried accesing with Saxon.recieveDamage but did not work, same for vikingArmy
	if (randomSaxon.health <= 0) {
		let saxonIndex = this.saxonArmy.indexOf(randomSaxon);
		this.saxonArmy.splice(saxonIndex,1);
	} else {
		return damagedSaxon;
	}
}

War.prototype.saxonAttack = function () {
	let randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
	let randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
	let damagedViking = randomViking.receiveDamage(randomSaxon.strength);
	if (randomViking.health <= 0) {
		let vikingIndex = this.vikingArmy.indexOf(randomViking);
		this.vikingArmy.splice(vikingIndex,1);
	} else {
		return damagedViking;
	}
}

War.prototype.showStatus = function () {
	if (this.saxonArmy.length === 0 && this.vikingArmy.length !== 0) {
		return 'Vikings have won the war of the century!';
	} else if (this.vikingArmy.length === 0 && this.saxonArmy.length !== 0) {
		return 'Saxons have fought for their lives and survive another day...';
	} else {
		return 'Vikings and Saxons are still in the thick of battle.';
	}
}










