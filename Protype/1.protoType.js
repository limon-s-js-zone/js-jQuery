const animalMethod = {
    eat(amount) {
        console.log(`${this.name} is eating!`);
        this.energy += amount;
        console.log(`Energy is ${this.energy}`);
    },
    sleep(length) {
        console.log(`${this.name} is sleeping!`);
        this.energy += length;
        console.log(`Energy is ${this.energy}`);
    },
    play(length) {
        console.log(`${this.name} is playing!`);
        this.energy -= length;
        console.log(`Energy is ${this.energy}`);
    },
};

function Animal(name, energy) {
    let animal = Object.create(animalMethod);
    animal.name = name;
    animal.energy = energy;

    return animal;
}
const leo = Animal("leo", 10);
leo.eat(5);
