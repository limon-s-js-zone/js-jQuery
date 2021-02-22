const Logger = (message, params) => console.log(message, params);

const arrayWithPushPop = () => {
  let array = ["JavaScript"];
  Logger("Before push():", array);
  array.push("React");
  Logger("After push():", array);
  array.pop();
  Logger("After pop():", array);
};

const arrayWithShiftUnshift = () => {
  let array = ["JavaScript"];
  Logger("Before unshift():", array);
  array.unshift("Angular");
  Logger("After unshift():", array);
  array.shift();
  Logger("After shift():", array);
};

const getSomeElement = () => {
  let array = ["JavaScript", "Angular", "React", "GraphQl", "SQL"];
  let sliceItem = array.slice(1, 3);
  Logger("slice():", sliceItem);
};

const deleteAndAddSplice = () => {
  var array = ["JavaScript", "Angular", "React", "GraphQl", "SQL"];
  let remove = array.splice(1, 2, "Java", "golang");
  Logger("Remove Item:", remove);
  Logger("splice():", array);
};

const indexOfANDlastIndexOf = () => {
  let array = ["JavaScript", "Angular", "React", "GraphQl", "SQL"];
  let findIndexFromStart = array.indexOf("Angular", 1);
  Logger("indexOf(search,[start_position])", findIndexFromStart);
  let findIndexFromLast = array.lastIndexOf("Angular", 1);
  Logger("lastIndexOf(search,[start_position])", findIndexFromLast);
};

const joinArray = () => {
  let array = ["JavaScript", "Angular", "React", "GraphQl", "SQL"];
  let newArray = array.concat("Asp.net core", "python");
  Logger("arr.concat():", newArray);
  let spreadnewArray = [...newArray, "GoLang", "flutter"];
  Logger("using...:", spreadnewArray);
};
const arrayToString = () => {
  let array = ["JavaScript", "Angular", "React", "GraphQl", "SQL"];
  let arrayToString = array.toString();
  Logger("Array-to-String:", arrayToString);
  let arrayJoin = array.join(" /");
  Logger("Array-to-String>arr.join():", arrayJoin);
};

// arrayWithPushPop();
// arrayWithShiftUnshift();
//getSomeElement();
//deleteAndAddSplice();
// indexOfANDlastIndexOf();
// joinArray();
// arrayToString();

/* Es6 Features */
const arrayIteration = () => {
  let array = [10, 20, 30];
  for (let i = 0; i < array.length; i++) {
    Logger(`Index:${i}`, array[i] * 5);
  }
  Logger("Array:", array);
  let arr = ["limon", "likhon", "lama"];

  for (let key in arr) {
    console.log("Key:", key, arr[key]);
  }
};

const mapExample = () => {
  let array = ["JavaScript", "Angular", "React", "GraphQl", "SQL"];
  let numArray = [10, 20, 30];
  //return a value with new array with out mituing the original array.
  let subtractArray = numArray.map((value, index) => {
    console.log("Index:", index, "value:", value);
    return value - 5;
  });
  console.log("Subtract:", subtractArray);

  let newArray = array.map((value) => "programing " + value);
  Logger("Programming:", newArray);
  Logger("Programming:", array);
};

/* example of foreach */
const forEachExample = () => {
  let array = ["JavaScript", "Angular", "React", "GraphQl", "SQL"];
  let numArray = [10, 20, 30];
  numArray.forEach((value, index) => {
    console.log("Index:", index, "value:", value * 5);
    return value - 5;
  });

  //   muted the original array
  array.forEach((item, index, arr) => {
    //it will be undefined
    return (arr[index] = "Programming" + item);
  }, 5);
  Logger("Programming:", array);
  Logger("Numarray:", numArray);
};
/* How to craete a array */
const createArray = () => {
  const array = new Array(10).fill(2).map((v) => v + 5);
  const array2 = [
    ...new Array(10).fill(2).map((v) => Math.ceil(Math.random() * 20)),
  ];
  Logger("Generate Array:", array);
  Logger("Generate Array:", array2);
};

const someEveryDemo = () => {
  let student = ["limon", "likhon", "lama"];
  let someArray = student.some((title, index, arr) => {
    return title.indexOf("likhonnj") > -1;
  });
  Logger("Result:some()>", someArray);

  let onlyincludesBoolean = student.includes("likhon", 0);

  Logger("includes():", onlyincludesBoolean);
};
// arrayIteration();
// mapExample();
// forEachExample();
// createArray();
// someEveryDemo();
