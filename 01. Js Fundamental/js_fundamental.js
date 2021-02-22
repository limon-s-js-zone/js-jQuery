//create a default logger
var logger = (param) => console.log(param);

function checkType() {
  logger(`Check Type: ${typeof null}`);
}
function jsInteaction() {
  alert("a", a);
  let age = prompt("How old are you?", 100);
  logger(age);
}
const typeConversation = () => {
  logger(`Number to string> ${String(20)}`);
  logger(`String to Number>result: ${Number("20h")}`);
  logger(`True To Number: ${Number(true)}`);
  logger(`Number To Boolean: ${Boolean(undefined)}`);
};

const comparision = () => {
  logger(">>>>>Start Comparison section");
  logger(`compare with 0 and false> result:${"12" == false}`);
  logger(`compare with undefined and false> result:${undefined == false}`);
  logger(`compare with NaN and 0> result:${null >= 0}`);
  logger(`compare with undefined and null> result:${undefined == null}`);
  logger("End Comparison section<<<<<<<<");
};

const nullishOperator = () => {
  let firstName = null;
  let lastName = null;
  let address = null;
  let consumeName = firstName ?? lastName ?? address ?? "limon";
  console.log(consumeName);
  //logger(consumeName);
};
// checkType();
// jsInteaction();
// typeConversation();
// comparision();
nullishOperator();
