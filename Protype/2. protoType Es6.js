// this is called a constructor function
class Animals {
    constructor(name, energy) {
        this.name = name;
        this.energy = energy;
    }
    eat(amount) {
        console.log(`${this.name} is eating!`);
        this.energy += amount;
        console.log(`Energy is ${this.energy}`);
    }
    play(length) {
        console.log(`${this.name} is playing!`);
        this.energy -= length;
        console.log(`Energy is ${this.energy}`);
    }
    sleep(length) {
        console.log(`${this.name} is sleeping!`);
        this.energy += length;
        console.log(`Energy is ${this.energy}`);
    }
}
console.log("******ES6 Examle******");
const leoes6 = new Animals("hey", 100);
leoes6.eat(4);
//  inheritence
class Dogs extends Animals {
    constructor(name, energy, life) {
        super(name, energy);
        this.life = life;
    }
    bark(bark) {
        console.log(`${this.name} is barking!`);
        this.life -= bark;
        console.log(`Remainning life is ${this.life} after barking`);
    }
}
const dogs = new Dogs("Hola", 15, 12);
dogs.play(1.2);
dogs.bark(2.2);
