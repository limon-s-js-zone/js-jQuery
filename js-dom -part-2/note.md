# Dom -selector:

## jQuery

## js:

### Select by Id:

-   document.getElementById(“id”);
-   document.getElementById(“id”).textContent //return textContent
-   document.getElementById(“id”).textContent=”set the text”
-   document.getElementById(“id”).innerText
-   document.getElementById(“id”).innerText=”set inner text”
-   document.getElementById(“id”).innerHtml=”<h3>Add element inside selected element”
-   document.getElementById(“id”).style.borderBottom=”1 px solid red”
-   document.getElementById(“id”).style.cssText(“color:red;font-weight:bold;”)

### Select by Class Name

-   document.getElementsByClassName('list-group-item');

### Select By tag Name:

-   document.getElementsByTagName('list-group-item');

### Query Selector or CSS selector

//// Returns the first element within the document that matches the specified group of selectors.

-   document.querySelector('#id');
-   document.querySelector('.class');
-   document.querySelector('input[type="submit"]'); =>select first input element with type=input
    // that match the specified group of selectors.
-   document.querySelectorAll('div.note, div.alert');

//js
document.querySelector('li:first-child').style.color="red"
document.querySelector('li:last-child').style.color="red"
document.querySelector('li:nth-child(2)').style.color="red"
//jquery
$("li:first").css({color:"red"})
$("li:last").css({color:"red"})
$("li:even").css({color:"red"})
$("li:odd").css({color:"red"})
\$("li:nth-child(2n)").css({color:"red"})

### Query selector all

document.querySelectorAll('li:nth-child(odd)');
document.querySelectorAll('li:nth-child(even)');

#### TRAVERSING THE DOM Js

## jQuery TRAVERSING

#### Jquery ancestors:

##### parent(): return direct parent

-   \$("span").parent();

#### parents():return all parents || select specific parent

-   \$("span").parents();
-   \$("span").parents('div'); return "div" element

#### parentsUntil()

The parentsUntil() method returns all ancestor elements between two given arguments.

-   \$("span").parentsUntill('div');

### jQuery Descendants:

#### children()

return all children or specific children

-   \$("div").children(); all children
-   \$("div").children('ul'); ul children

#### find()

return all span elements that are inside the div

-   \$("div").find("span");

## jQuery Siblings:

-   \$(selector).siblings()- return all siblings
-   \$(selector).siblings("selector")- return specific siblings
-   next(): return immediate next siblings
-   nextAll():return next all siblings
-   nextUntil():return untill next selector.
    jquery("selector").nextUntill("selector")

## jQuery Filter:

-   first():jquery("selctor").first()- return frist selected element
-   last(): jquery("selctor").last()-return last selected element
-   eq(index):jquery("selctor").eq(index)-return index selected element
-   filter():jquery("selctor").filter("selector")- return matching elements
-   not(): jquery("selctor").not("selector")-
    return non matching elements
