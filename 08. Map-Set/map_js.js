logger = (result, params) => console.log(result, params);
let map = new Map([
  ["banana", 1],
  ["orange", 2],
  ["meat", 4],
]);
const mapgenerator = () => {
  map.set("mutton", 5);
  console.log(map.has("banana"));
  map.clear();
  console.log(map.size);
};

const mapIterator = (maps) => {
  for (const [key, value] of maps) {
    logger(key, value);
  }
  maps.forEach((value, key) => {
    logger(key, value);
  });
};

const convertArrayToMap = (array) => {
  let student = [
    { id: 14203165, dept: "BCSE" },
    { id: 14204165, dept: "BEE" },
  ];
};
const convertMapToArray = (array) => {};
const convertMapToObject = () => {};
const convertMapToObject = (array) => {};
// mapIterator(map);
