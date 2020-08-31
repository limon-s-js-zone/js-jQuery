// this is called a constructor function
function Animal(name, energy) {
    let animal = Object.create(Animal.prototype);
    animal.name = name;
    animal.energy = energy;

    return animal;
}
function AnimalWithNew(name, energy) {
    // let animal = Object.create(Animal.prototype);
    this.name = name;
    this.energy = energy;

    // return animal;
}
Animal.prototype.eat = function (amount) {
    console.log(`${this.name} is eating!`);
    this.energy += amount;
    console.log(`Energy is ${this.energy}`);
};
Animal.prototype.sleep = function (length) {
    console.log(`${this.name} is sleeping!`);
    this.energy += length;
    console.log(`Energy is ${this.energy}`);
};
Animal.prototype.play = function (length) {
    console.log(`${this.name} is playing!`);
    this.energy -= length;
    console.log(`Energy is ${this.energy}`);
};
AnimalWithNew.prototype.eat = function (amount) {
    console.log(`${this.name} is eating!`);
    this.energy += amount;
    console.log(`Energy is ${this.energy}`);
};
AnimalWithNew.prototype.sleep = function (length) {
    console.log(`${this.name} is sleeping!`);
    this.energy += length;
    console.log(`Energy is ${this.energy}`);
};
AnimalWithNew.prototype.play = function (length) {
    console.log(`${this.name} is playing!`);
    this.energy -= length;
    console.log(`Energy is ${this.energy}`);
};
console.log("******Without new keyword********");
const leo = Animal("leo", 10);
leo.eat(4);

console.log("******use  new keyword********");
const leoWithNew = new AnimalWithNew("dog", 12);
leoWithNew.play(5);
// loop through an prototype:
for (let key in leoWithNew) {
    if (leoWithNew.hasOwnProperty(key)) {
        console.log(`Key: ${key} Value: ${leoWithNew[key]}`);
    }
}

const Dog = function (name, energy, life) {
    // this = passes the dog object
    AnimalWithNew.call(this, name, energy);
    this.life = life;
};

console.log("********Prototype chain and inheritence********");
// to access all the parent method we need to use object.create delegate
Dog.prototype = Object.create(AnimalWithNew.prototype);
Dog.prototype.bark = function (life) {
    console.log(`${this.name} has life!`);
    this.energy -= life;
    console.log(`Remainning life is ${this.energy}`);
};
Dog.prototype.constructor = Dog;
const charlie = new Dog("New Dog", 10, 5);
console.log(charlie);
charlie.eat(5);
charlie.bark(2);
// it points parent constructor insted of dog constructor
// to fix this set dog protype constuctor to dog. ex: Dog.prototype.constructor = Dog;
console.log(charlie.constructor);
