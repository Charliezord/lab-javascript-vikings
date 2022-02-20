// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
   this.health -= damage;
  }
}


// Viking
class Viking extends Soldier{
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    this.health -= damage;
     if(this.health > 0){
     return `${this.name} has received ${damage} points of damage`
      }
      else {
        return `${this.name} has died in act of combat`
      }
  }

  battleCry(){
    return 'Odin Owns You All!'
  }
}


// Saxon
class Saxon extends Soldier {

  receiveDamage(damage) {
    this.health -= damage;
    if(this.health > 0){
      return `A Saxon has received ${damage} points of damage`
       }
       else {
         return `A Saxon has died in combat`
       }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(oneViking){
    this.vikingArmy.push(oneViking)
  }
  addSaxon(oneSaxon){
    this.saxonArmy.push(oneSaxon)
  }



vikingAttack(){
  const randomViking =  this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
  const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]; 

    // if viking attack saxon

    if(randomSaxon.health > 0){ 
      this.saxonArmy.splice(randomSaxon[0], 1)
    }
    return randomSaxon.receiveDamage(randomViking.attack())
  }


  // if saxon attack viking 
  saxonAttack(){
    const randomViking =  this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]; 

      if(randomViking.health > 0){ 
        this.vikingArmy.splice(randomViking[0], 1)
    }
    return randomViking.receiveDamage(randomSaxon.attack())

  }

 /* 
bonus itteration 5 - not working i think - because of same reason that above dead vikings are not removed?
  attack(){
    const randomViking =  this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]; 
  // if viking attack saxon

  	 if(randomSaxon.health > 0){ 
      this.saxonArmy.splice(randomSaxon[1], 1)
      }
   // if saxon attack viking 
      if(randomViking.health > 0){ 
        this.vikingArmy.splice(randomViking[1], 1)
      }

    return randomSaxon.receiveDamage(randomViking.attack()) + randomViking.receiveDamage(randomSaxon.attack());
}

*/


  showStatus(){
    if (this.saxonArmy == 0){
      return "Vikings have won the war of the century!"
    }
    else if(this.viking == 0){
      return "Saxons have fought for their lives and survived another day..."
    }
    else { 
      return "Vikings and Saxons are still in the thick of battle."
    }
  }

}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}

