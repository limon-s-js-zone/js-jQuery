const logger = (message, params) => console.log(message, params);
let Student = {
  id: "14203165",
  dept: "CSE",
  firstName: "limon",
  lastName: "Sarker",
  //   object getter
  get fullName() {
    return this.firstName + " " + this.lastName;
  },
};
const checkMutedState = () => {
  Student.dept = "EEEE";
  logger("Check Object State:", JSON.stringify(Student));
};
/* clone an premitive object */
const cloneObject = (obj, emptyObj) => {
  for (let key in obj) {
    emptyObj[key] = obj[key];
  }
  return emptyObj;
};

const createObjectClone = () => {
  let cloneStudent = {};
  let obj = cloneObject(Student, cloneStudent);
  // let obj = Object.assign(cloneStudent, Student);
  logger("Clone Student:", obj);
};

/* using this keyword */
function thisDemo() {
  let user = { name: "John" };
  let admin = { name: "Admin" };
  function sayhi() {
    console.log("Hello: ", this.name);
  }
  // creating an property
  user.f = sayhi;
  //then calling the property
  user.f();
}
// checkMutedState();
// createObjectClone();
// thisDemo();

// object method in json

const dogShedding = {
  foxhound: 3,
  "basset hound": 2,
  beagle: 3,
  "bernese mountain dog": 1,
  poodle: 5,
  stu1: [
    {
      name: "Limon",
      id: 1,
    },
    {
      name: "Malek",
      id: 2,
    },
  ],
};
const generateObjectkeysValues = (obj) => {
  const getKey = Object.keys(obj);
  const getValues = Object.values(obj);
  return [getKey, getValues];
};
const getgenerateObjectkeysValues = () => {
  logger("Keys:", generateObjectkeysValues(dogShedding)[0]);
  logger("values:", generateObjectkeysValues(dogShedding)[1]);
};

const transformObjectWithMap = (obj) => {
  return Object.keys(obj).map((key) => obj[key]);
};

const getGenerateObjectWithMap = () => {
  logger("transformObjectWithMap:", transformObjectWithMap(dogShedding));
};
const generateObjectWithEntries = (obj, array) => {
  // Object.entries(obj).forEach(([key, value]) => array.push(value));
  //return array;
  return Object.entries(obj).map(([key, value]) => obj[key]);
};
const getGenerateObjectWithEntries = () => {
  let arr = [];
  logger(
    "generateObjectWithEntries:",
    generateObjectWithEntries(dogShedding, arr)
  );
};

// getgenerateObjectkeysValues();
// getGenerateObjectWithMap();
// getGenerateObjectWithEntries();
