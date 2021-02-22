// EXAMINE THE DOCUMENT OBJECT //

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// //document.title =  123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent = 'Hello';
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// GETELEMENTBYID //
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = 'solid 3px #000';

// GETELEMENTSBYCLASSNAME //
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// // Gives error
// //items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < items.length; i++){
//   items[i].style.backgroundColor = '#f4f4f4';
// }

// GETELEMENTSBYTAGNAME //
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// // Gives error
// //items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < li.length; i++){
//   li[i].style.backgroundColor = '#f4f4f4';
// }

// QUERYSELECTOR //
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World'

// var submit = document.querySelector('input[type="submit"]');
// submit.value="SEND"

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

// QUERYSELECTORALL //
// var titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even= document.querySelectorAll('li:nth-child(even)');

// for(var i = 0; i < odd.length; i++){
//   odd[i].style.backgroundColor = '#f4f4f4';
//   even[i].style.backgroundColor = '#ccc';
// }

// Traversing
/*
 var itemList = document.getElementById("items");
//parent node 
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = "red";
console.log(itemList.parentNode.parentNode);
//parent Element
itemList.parentElement.style.cssText =
    "font-size:18px;font-weight:bold;background:gray;";
console.log(itemList.parentElement.parentElement);

// childNodes: contain white space
console.log(itemList.childNodes);
// children: return HTMlcollection
console.log("children:", itemList.children);
console.log("firstChild:", itemList.firstChild);
console.log("firstElementChild:", itemList.firstElementChild);
itemList.firstElementChild.textContent = "hello Limon";

// siblings
console.log(itemList.nextElementSibling);
console.log(itemList.previousElementSibling);

// create dom
var newDiv = document.createElement("div");
newDiv.className = "limon likhon";
newDiv.id = "limon1";
console.log("classlist", newDiv.classList);
newDiv.classList.remove("limon");
newDiv.setAttribute("lang", "eng");
var newDivText = document.createTextNode("<h1>hello javascript</h1>");
newDiv.innerHTML = "<h1>hello javascript</h1>";
// newDiv.appendChild(newDivText);

var container = document.querySelector("header .container");
var h1 = document.querySelector("header h1");

console.log(newDiv);

newDiv.style.fontSize = "30px";

container.insertBefore(newDiv, h1);
console.log(newDiv);
console.log(newDiv.hasAttribute("lang"));
if (newDiv.hasAttribute("lang")) {
    newDiv.removeAttribute("lang");
    newDiv.setAttribute("language", "bangla");
    console.log("new Div:", newDiv);
} */

//js event
var button = document.getElementById("button");

button.addEventListener("click", buttonClick);
function buttonClick() {
    document.getElementById("header-title").textContent = "Changed";
    console.log("button clicked");
}
