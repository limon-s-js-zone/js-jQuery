document.getElementById("reset").disabled = true;
function getAgeInDays() {
  var year = prompt("Enter you birthday year");
  let currentDate = new Date();
  var days = (currentDate.getFullYear() - year) * 365;
  // create a h1 element
  var h1 = document.createElement("h1");
  // create a text node
  var textArea = document.createTextNode("You are " + days + " days old");
  // set attribute to element
  h1.setAttribute("id", "agesId");
  // append text area to element
  h1.appendChild(textArea);
  // get specific div to append h1 element
  document.getElementById("flex-box-result").appendChild(h1);
  document.getElementById("click-me").disabled = true;
  document.getElementById("reset").disabled = false;
  // reset;
}

function reset() {
  var id = document.getElementById("agesId");
  if (id) {
    id.remove();
    document.getElementById("click-me").disabled = false;
    document.getElementById("reset").disabled = true;
  } else {
    console.log("no id found");
  }
}
