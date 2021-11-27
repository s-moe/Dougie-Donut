/*
don't forget to make your git repo. 

*/
class Hamster {
  constructor(name) {
    this.owner = '';
    this.name = name;
    this.price = 15;
  }
  wheelRun() {
    console.log('sqeak squeak');
  }
  eatFood() {
    console.log('nibble nibble');
  }
  getPrice() {
    return this.price;
  }
}

//COMMIT!!!

class Person {
  constructor(name) {
    this.name = name;
    this.age = 0;
    this.height = 0;
    this.weight = 0;
    this.mood = 0;
    this.hamsters = [];
    this.bankAccount = 0;
  }
  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
  getWeight() {
    return this.weight;
  }
  greet() {
    console.log (`Hello ${this.name}`);
  }
  eat(num) {
    for (let i = 0; i< num; i++){
      this.weight++;
      this.mood++;
    }
  }
  exercise(num) {
    for (let i = 0; i < num; i++){
      this.weight--
    }
  }
  ageUp(num) {
    for (let i=0; i< num; i++){
      this.age++;
      this.height++;
      this.weight++;
      this.mood++;
      this.bankAccount+=10;
    }
  }
  buyHamster(hamster){
    this.hamsters.push(hamster)
    this.mood+=10;
    this.bankAccount -= hamster.getPrice()
  }
}

//COMMIT!!!!


//1. 
const Timmy = new Person ('Timmy')
//. 2
Timmy.ageUp(5)

//3. 
Timmy.eat(5)

//4. 
Timmy.exercise(5)

//5. 
Timmy.ageUp(9)

//6. 

const Gus = new Hamster('Gus') // argument

//7. 
Gus.owner = 'Timmy'

//8. 

Timmy.buyHamster(Gus)

//9. 
Timmy.ageUp(15)

//10. 
Timmy.eat(2)

//11.
Timmy.exercise(2)

//COMMIT!!!


//!!!!!!!!!Daring Adventure - go to markdown to create a new folder, indexes, etc. !!!!!!!!!!

class Hero {
  constructor(name){
    this.name = name;
    this.health = 100;
    this.weapons = {
      sprinkleSpray: 5,
      sugarShock:10,
    }
    this.catchphrases = [
      'i\'m fresher than day old pizza',
      'you can\'t count my calories'
      ]
  }
  talkSass() {
    // return this.catchphrases[0]
    return this.catchphrases[Math.floor(Math.random()*this.catchphrases.length)];
  }
  announceHealth(){
    console.log(this.health)
  }

  
  // fight(){
  //   console.log('i\'m ready to rumble')
  // }
//Upgrade their fight methods so that it accesses one of their weapons and console log its hitpoints.
  fight(enemy) {
    console.log (this.weapons.sprinkleSpray)
// Using the hitpoints from the weapon they're using, subtract that amount from the enemy's health (i.e. If Dougie fights Pizza Rat using sprinkleSpray, subtract sprinkleSpray's hitpoint value (5) from Pizza Rat's health)
    let newHealth = enemy.health -= this.weapons.sprinkleSpray;
    return `${enemy.name} has a new health of ${newHealth}`
  }
}

const Dougie = new Hero('Dougie') 
//COMMIT!!!!!!!!!!! - specific instructions for message in mark down

class Enemy {
  constructor(name){
    this.name = name;
    this.health = 100;
    this.weapons = {
      pepperoniStars: 5,
      cheeseGrease: 10,
    }
    this.catchphrases = [
      'i\'m youtube famous',
      'i\'m more dangerous than an uncovered sewer']
  }
  talkSmack(){
    return this.catchphrases[Math.floor(Math.random()*this.catchphrases.length)];
  }
  announceHealth(){
    console.log(this.health)
  }
  // fight(){
  //   console.log('i\'m gonna flatten you like a slice of pepperoni!')
  // }
  //Upgrade their fight methods so that it accesses one of their weapons and console log its hitpoints.
  //2. (added 'enemy' as a parameter)
  fight(enemy) {
    //1.
    console.log (this.weapons.cheeseGrease);
  //3. 
    let newHealth = enemy.health -= this.weapons.cheeseGrease;
    return `${enemy.name} has a new health of ${newHealth}`
  }
}
const PizzaRat = new Enemy('Pizza Rat')
//COMMIT!!!!!!!!!!!!!!

//1. 
Dougie.talkSass()

//2. 
PizzaRat.talkSmack()

//3. 
Dougie.announceHealth()

//4. 
PizzaRat.announceHealth()

//Upgrade their fight methods so that it accesses one of their weapons and console log its hitpoints.


//COMMIT!!!!!



//<!DOCTYPE html>
// <html>
// <head>
//   <meta charset="utf-8">
//   <title>w04d3 Objects Lab</title>
//   <script src="objects.js"></script>
// </head>
// <body>
// </body>
// </html>