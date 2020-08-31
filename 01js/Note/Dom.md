#### DOM: Document Object Model

The HTML DOM is a standard object model and programming interface for HTML.
The HTML DOM is a standard for how to get, change, add, or delete HTML elements.

##### Finding HTML documents

- document.getElementById(id) Find an element by element id
- document.getElementsByTagName(name) Find elements by tag name
- document.getElementsByClassName(name) Find elements by class name

##### Changing HTML Elements

- element.innerHTML = new html content Change the inner HTML of an element
- element.attribute = new value Change the attribute value of an HTML element
- element.style.property = new style Change the style of an HTML element

##### Adding and Deleting Elements

- document.createElement(element) Create an HTML element
- document.removeChild(element) Remove an HTML element
- document.appendChild(element) Add an HTML element
- document.replaceChild(new, old) Replace an HTML element
- document.write(text) Write into the HTML output stream

##### Changing the Value of an Attribute

**document.getElementById(id).attribute = new value**

##### Changing HTML Style

**document.getElementById(id).style.property = new style**

## Dom Events

##### HTML Event Attributes

```
<h1 onclick="changeText(this)">Click on this text!</h1>
<button onclick="displayDate()">Try it</button>
function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}
function changeText(id) {
  id.innerHTML = "Ooops!";
}
```

##### Assign Events Using the HTML DOM

```

<button id="myBtn">Try it</button>
document.getElementById("myBtn").onclick = displayDate;

```

##### onload and onunload Events

The onload and onunload events are triggered when the user enters or leaves the page.

<body onload="mymessage()">
```
function mymessage() {
  alert("This message was triggered from the onload event");
}
```

##### onchange Event

The onchange event is often used in combination with validation of input fields.

```
<input type="text" id="fname" onchange="upperCase()">
function myFunction() {
  var x = document.getElementById("fname");
  x.value = x.value.toUpperCase();
}
```

##### onmouseover and onmouseout Events

```
<div onmouseover="mOver(this)" onmouseout="mOut(this)">
Mouse Over Me</div>
function mOver(obj) {
  obj.innerHTML = "Thank You"
}

function mOut(obj) {
  obj.innerHTML = "Mouse Over Me"
}
```

##### onmousedown, onmouseup and onclick Events

The onmousedown, onmouseup, and onclick events are all parts of a mouse-click. First when a mouse-button is clicked, the onmousedown event is triggered, then, when the mouse-button is released, the onmouseup event is triggered, finally, when the mouse-click is completed, the onclick event is triggered.

```
<img id="myimage" onmousedown="lighton()" onmouseup="lightoff()" src="bulboff.gif" width="100" height="180" />
function lighton() {
  document.getElementById('myimage').src = "bulbon.gif";
}
function lightoff() {
  document.getElementById('myimage').src = "bulboff.gif";
}

```

## addEventListener() method

The addEventListener() method attaches an event handler to the specified element.

- Syntax: element.addEventListener(event, function, useCapture);

##### Event Handler to an Element

```
<button id="myBtn">Try it</button>
document.getElementById("myBtn").addEventListener("click", function() {
  alert("Hello World!");
});
```

##### Passing Parameters

When passing parameter values, use an "anonymous function" that calls the specified function with the parameters:

```
<button id="myBtn">Try it</button>
document.getElementById("myBtn").addEventListener("click", function() {
  myFunction(p1, p2);
});

function myFunction(a, b) {
  var result = a * b;
  document.getElementById("demo").innerHTML = result;
}
```

##### Event Bubbling or Event Capturing?

In bubbling the inner most element's event is handled first and then the outer: the <p> element's click event is handled first, then the <div> element's click event.

In capturing the outer most element's event is handled first and then the inner: the <div> element's click event will be handled first, then the <p> element's click event.

```
<div id="myDiv1">
  <h2>Bubbling:</h2>
  <p id="myP1">Click me!</p>
</div><br>

<div id="myDiv2">
  <h2>Capturing:</h2>
  <p id="myP2">Click me!</p>
</div>
document.getElementById("myP1").addEventListener("click", function() {
  alert("You clicked the white element!");
}, false);

document.getElementById("myDiv1").addEventListener("click", function() {
  alert("You clicked the orange element!");
}, false);

document.getElementById("myP2").addEventListener("click", function() {
  alert("You clicked the white element!");
}, true);

document.getElementById("myDiv2").addEventListener("click", function() {
  alert("You clicked the orange element!");
}, true);
```

##### removeEventListener() method

The removeEventListener() method removes event handlers that have been attached with the addEventListener() method:

```
<div id="myDIV">
  <p>This div element has an onmousemove event handler that displays a random number every time you move your mouse inside this orange field.</p>
  <p>Click the button to remove the div's event handler.</p>
  <button onclick="removeHandler()" id="myBtn">Remove</button>
</div>

<p id="demo"></p>

<script>
document.getElementById("myDIV").addEventListener("mousemove", myFunction);

function myFunction() {
  document.getElementById("demo").innerHTML = Math.random();
}

function removeHandler() {
  document.getElementById("myDIV").removeEventListener("mousemove", myFunction);
}
</script>
```

#####

```

```

#####

```

```
