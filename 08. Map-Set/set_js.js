logger = (result, params) => console.log(result, params);

const generateSet = () => {
  let john = { name: "John" };
  let pete = { name: "Pete" };
  let mary = { name: "Mary" };
  let set = new Set();
  set.add(john);
  set.add(pete);
  set.add(mary);
  for (let user of set) {
    logger("user:", user);
  }
  logger("result:", set);
  return set;
};
/* Set generator */
const setIterator = (sets) => {
  for (const [key, value] of sets) {
    logger(key, value);
  }
  sets.forEach((value, key) => {
    logger(key, value);
  });
};
const convertArrayToSet = (array) => {};
const convertSetToArray = (array) => {};
const convertSetToObject = () => {};
const convertSetToObject = (array) => {};
generateSet();
