let movies = [
  "Layer Cake",
  "Star Wars",
  "Star Trek",
  "Jaws",
  "Jurassic Park",
  "Gross Pointe Blank",
  "Eternal Sunshine of the Spotless Mind",
  "Memento",
  "Dog Soldiers",
  "The Host",
  "Gran Torino",
  "Close Encounters of the Third Kind",
  "Good Will Hunting",
  "Casino Royale",
  "Almost Famous",
];
// const numbers = [12, 45, 2, 15, 89, 7, 45];
const numbers = [1, 2, 2, 5, 10, 2, 3, 4];
function addNumbers(acc, item) {
  return acc + item;
}
let sums = numbers.reduce(addNumbers);
// console.log(sums);

let largest = numbers.reduce((acc, item) => {
  return acc < item ? item : acc;
}, 0);
console.log("largest: ", largest);
let sortingArray = numbers.reduce((acc, items) => {
  if (acc.indexOf(items) === -1) {
    if (items >= 2) {
      acc.push(items);
    }
  }
  return acc;
}, []);
console.log("sorting Array:", sortingArray);
/* Total */
console.log("Sum.....");
let sum = numbers.reduce((acc, item) => {
  return acc + item;
}, 0);
console.log("Total: ", sum);

/* array to objcet */
const obj = Object.assign({}, numbers);
// console.log(obj);

const posts = [
  { id: 1, category: "frontend", title: "All About That Sass" },
  { id: 2, category: "backend", title: "Beam me up, Scotty: Apache Beam tips" },
  {
    id: 3,
    category: "frontend",
    title: "Sanitizing HTML: Going antibactirial on XSS attacks",
  },
];
const categoryPosts = posts.reduce((acc, post) => {
  acc[post.category] = posts;
  return acc;
}, {});
console.log(categoryPosts);
