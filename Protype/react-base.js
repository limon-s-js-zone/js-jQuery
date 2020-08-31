/* Modules  */
// name module: import {...} from ""
// default module: import .... from "" to acqire this we made export something with default keyword. Ex: export default func(){}
/* Combined of doing things */
const first = [1, 3, 5];
const second = [2, 4, 6];
const com1 = first.concat(second);
console.log("Using concat():", com1);

const com2 = [...first, ...second];
console.log("spread operator:", com2);
const addCom2 = ["Even", ...first, "Odd", ...second];
console.log("spread operator:", addCom2);
// cloaning an object
const clone = ["Clone", ...com2];
console.log("Clone:", clone);
// complex object
const fullName = {
    firstName: "Md",
    lastName: "Malek",
    fullname: function () {
        return this.firstName + " " + this.lastName;
    },
};
const object2 = {
    location: "Dhaka",
};
const obcom1 = { ...fullName, ...object2, country: "Bangladesh" };
console.log(obcom1);
console.log(fullName.fullname());

/* using map */
const colors = ["red", "blue", "green", "black"];
const items = colors.map((color) => `<li>${color}</li>`);
console.log(items);

const address = {
    city: "Uttara",
    state: "Dhaka",
    country: "Bangladesh",
};
// const city = address.city;
// const state = address.state;
// const country = address.country;
//  we simply do that
const { city: ct } = address;
const { state, country } = address;

/* // Arrow function
const squre = function (number) {
    console.log(number * number);
};
squre(5);
const squere = (number) => number * number;
console.log("Squere with arrow function:", squere(5));

const jobs = [
    { name: "limon", id: 1, isActive: true },
    { name: "likhon", id: 1, isActive: false },
    { name: "lum", id: 1, isActive: true },
];
// Arrow function
const isActive = jobs.filter(function (job) {
    return job.isActive;
});
const isActiveWithArrow = jobs.filter((job) => job.isActive); */
/* start using of this */

/* const person1 = {
    talk() {
        //  arrow function will inherit that we
        // setTimeout(() => {
        //     console.log(this);
        // }, 1000);
        const that = this;
        setTimeout(function () {
            console.log(that);
        }, 1000);
    },
};
person1.talk();

const person = {
    name: "limon",
    walk() {
        console.log("Walk:", this);
    },
    talk() {
        console.log("Talk:");
    },
};
person.walk();

const walk = person.walk.bind(person);
walk(); */
/* end of this keyword */
/* 
// object
const person = {
    name: "limon",
    walk() {
        console.log("Walk:", this);
    },
    talk() {
        console.log("Talk:", this);
    },
};
person.walk();
person.name = "";
// input field dynamically get a property or an objects
const targetMember = "name";
person[targetMember.value] = "limon"; */
