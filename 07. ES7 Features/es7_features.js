/* how to conver a object to an array */

const convertArrayToObject = (array, key) => {
  return array.reduce((acc, curr) => {
    acc[curr[key]] = curr;
    return acc;
  }, {});
};
// to simple:
let array = [
  { id: 111, name: "John", age: 29 },
  { id: 112, name: "Sarah", age: 25 },
  { id: 122, name: "Kate", age: 22 },
  { id: 123, name: "Tom", age: 21 },
  { id: 125, name: "Emma", age: 24 },
];
const newObject = (array, key) =>
  array.reduce((acc, curr) => ((acc[curr[key]] = curr), acc), {});
console.log("new object:", newObject(array, "id"));
console.log(convertArrayToObject(array, "name"));
