// var age = prompt("Put your age??");
// document.getElementById("heading").innerHTML = "My age is " + age;
// /* Create a function */
// function greetings(name) {
//   var result = "hey " + name + " welcome to our site";
//   console.log(result);
// }

// var name = prompt("Enter your name");
// /* Calling the function */
// greetings(name);

/* loops */
// while loops
/* var num = 0;
while (num <= 10) {
  num += 1;
  if (num % 2 === 0) continue;
  console.log("Even Number:" + num);
}
// for loops

for (let i = 0; i <= 10; i++) {
  console.log("For loops:" + i);
}
 */

// string in javascript
/* var fruit = "banana";
var fruit1 = "banana,apple,orange";
console.log(`length:${fruit.length}`);
console.log(`Find an Index:${fruit.indexOf("an")}`);
console.log(`Slice:${fruit.slice(2, 4)}`);
console.log(`Replace:${fruit.replace("nana", "liii")}`);
console.log(`Character At:${fruit.charAt(1)}`);
console.log(`Alternative of Char at:${fruit[4]}`);
console.log(`Split:${fruit.split("")}`); // split by character
console.log(`Split:${fruit1.split(",")}`); // split by comma
 */

// Array in javascript

/* let fruits = ["apple", "licy", "banana", "orange"];
fruits = new Array("apple", "licy", "banana", "orange", "lemon");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// array to string
console.log(`array to string:${fruits.toString()}`);
console.log(`array-Joinng:${fruits.join("*")}`);
console.log(`Remove last item:${fruits.pop()}`);
console.log(`Push an element to last position:${fruits.push("*")} ${fruits}`);
console.log((fruits[fruits.length] = "new fruits"), fruits);
console.log("Remove first element:" + fruits.shift() + "\n Fruits:" + fruits); // remove first elements to an array
console.log(
  "Insert at first Index" + fruits.unshift("new food") + "\n Fruits:" + fruits
); // insert an elements at first index to an array

var vegetables = ["tomato", "potato", "zinger"];
var allFodds = fruits.concat(...vegetables);
console.log(allFodds);
console.log("slice:", allFodds.slice(2, 5));
console.log("remove:", allFodds.splice(2, 1), allFodds);
console.log("Reverse:", allFodds.reverse());

console.log(allFodds.sort());
let numbers = [22, 12, 5, 15, 100, 1, 555, 455, 8, 55, 15];
console.log(
  numbers.sort(function (a, b) {
    return a - b;
  })
);
console.log(
  numbers.sort(function (a, b) {
    return b - a;
  })
  );
   */
// object

console.log("hello javascript");
