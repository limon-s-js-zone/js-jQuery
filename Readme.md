## Js Fundamental

1.  ### Data types:

        There are two types of data types in js.

    1.  ##### Primitive

        A primitive is not an object it holds raw data and does not have any method. We can not change any existing value but we can reassign a new value.

        - string: Used for denoting string
        - number: Used for denoting integers or floating-point
        - bigint: Used for denoting whole numbers larger than 2^53 - 1 or -(2^53-1)
        - boolean: Used for denoting true or false
        - undefined: a special value which represents `nothing`, `empty` or `value unknown`
        - symbol: Used for denoting unique identifiers
        - null: Used for denoting an intentional absence of a value

        key Points:

        - primitive values are immutable
        - Primitives are stored by value

    2.  ##### Non Primitive:

        A non primitive data is an object so it has methods. We can change any existing value but we can not directly alter an object.

        key Points:

        - Non-Primitive (objects) are stored by reference.
        - non-primitive values are mutable

        Data Type:

        - Object
        - Array
        - RegExp
        - Date
        - Function

    3.  #### How can check a data type and if `null` is empty value why typeof() function return it's a object?

        We can check a data type using typeof function.

        `typeof null //return a object`
        This is the error of the js Language.

    4.  #### Js Interaction:

        There are 3 js interaction function in js.

        1. `alert()` : It shows a message and waits for the user to press `OK`.
        2. `prompt(title,[default value])` : It shows a modal window with a text message, an input field for the visitor, and the buttons OK/Cancel.

        ```js
        let age=prompt("tell me your age?"30);
        alert(`I am ${age} years old`);
        ```

        3. `confirm(message)` : The function confirm shows a modal window with a question and two buttons: OK and Cancel and returns a boolean value.

    5.  #### Type Conversation

    ```js
    console.log(Number("hello")// return NaN- Not a number value
    console.log(Number(true)// return 1
    console.log(String(12)// return 12
    console.log(Boolean("hello")//return true
    console.log(Boolean(udefined)// return false
    ```

    6. #### Comparison

    ```js
    console.log(null == undefined); // true
    console.log("0" == false); // true
    console.log("0" === false); // false; because strict comparison.
    console.log(null => 0); // true. because Comparisons convert null to a number, treating it as 0. That’s why (3) null >= 0 is true and (1) null > 0 is false.
    console.log(NaN == 0); // false. Because
    console.log(undefined==0)//flase undefined gets converted to NaN and NaN is a special numeric value which returns false for all comparisons.
    ```

    7. #### Operators

       - `Operand`: An operand – is what operators are applied to.
       - `Binary operator`: An operator is binary if it has more than single operand.`a=a+b`
       - `Unary Operator`: An operator is unary if it has a single operand. `let a=12; console.log(-a)`

       1. Operator Precedence:

          `unary plus>unariy minus>expotential>multiplication>division>addition>substrction>assignment`

       2. Chaining assignment:

          ```js
          let a, b, c;
          a = b = c = 4 + 5; // a=9;b=9;c=9
          ```

       3. What is the difference between postfix vs prefix?

          ```js
          let a = 12,
            b = 12;
          console.log(++a); // 13; first increment then returns value.
          console.log(b++); // 12; first return then increment.
          ```

       4. Logical Operators:

          - AND operator(&&): if both condition true then return true otherwise return false.
          - OR operator(||): If a single condition true then return true otherwise return false.
          - NOT operator(!): Convert a boolean type.
          - **Note:** ANd operator has higher precedence than OR operator.

       5. Nullish Operator:

          The `??` operator is called Nullish operator. We use nullish opertor to pass a default value to a property.

          ```js
          let firstName = null;
          let lastName = "sarker";
          let address = null;
          console.log(firstName ?? lastName ?? address ?? "limon"); //return limon
          console.log(firstName || lastName || address || "limon"); //return sarker
          ```

2.  ## Array

    JavaScript arrays are used to store multiple values in a single variable.

    - ### Array Method:

      - `push(),pop():`

        This two method works as Stack(LIFO) like.That means it push the elemnt at the end of the array and pop the last element.

      - `shift(),unshift():`

        This two method works as Quewe(FILO) like.That means it unshift() the elemnt at the begining of the array and shift the first element.

      - `slice(start,[end])`

        This method will create a new array without changing original array. It is used to get specific items from array.

        ```js
        let array = ["JavaScript", "Angular", "React", "GraphQl", "SQL"];
        let sliceItem = array.slice(1, 3);
        console.log("slice():", sliceItem);
        // ["Angular", "React"]
        ```

      - `splice(start,n_of_item_to_Delete,[add_items]) :`

        This method will remove elements as well as add items to array. It will also returns the removes items array.

      - `indexOf(search,[start_position]) and lastIndexOf(search,[start_position]):`

        The indexOf() method will search from **_0 to n-1_** and the lastIndexOf() method will search from **_n-1 to 0_**. If index is found it will return 1 otherwise 0.

      - ##### How can we join more array to a single array?

        - `concat()`: The concat() method creates a new array by merging (concatenating) existing arrays. The concat() method does not change the existing arrays. It always returns a new array.

      - ##### How can convert array to string?

        - `toString():`
          JavaScript automatically converts an array to a comma separated string when a primitive value is expected.

        - `join(separator):`
          The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string.

    - #### ES6 features:

      1.  `map()`:
          The map() method in JavaScript creates an array by calling a specific function on each element present in the parent array. It is a non-mutating method. Generally map() method is used to iterate over an array and call a function on every element of the array.

          - Return: It returns a new array and elements of arrays are the result of a callback function.

            Note: Callback function returns a new element.

      2.  `for..in`:
          For -in loop use to iterate an object as well as an array.

      3.  `forEach()`:
          The forEach() method calls a function once for each element in an array, in order.This callback is allowed to mutate the calling array.

          - Callback: This allows the function to test each and every element in the array.
          - ThisObject: This will be called when the callback function is executed.
          - Return: It returns the newly created array.

          Note: Call back function does not return undefined.

      4.  `filter()`:
          Returns a new array containing all elements of the calling array for which the provided filtering function returns true.

      5.  `find()`:

          Returns the found element in the array, if some element in the array satisfies the testing function, or undefined if not found.

      6.  `fill(value,start?, end?)`:

          The fill() method changes all elements in an array to a static value,

          ```js
          let array = new Array(10)
            .fill(5)
            .map((value) => value * Math.Random());
          console.log(array);
          ```

      7.  `some()`:
          Returns true if at least one element in this array satisfies the provided testing function.
      8.  `every()`:
          Returns true if every element in this array satisfies the testing function.
      9.  `includes(search,start_index)`:
          Determines whether the array contains a value, returning true or false as appropriate.
      10. `findIndex()`:
          The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. If not found then returns -1

    - ### How can we itterates an array?
      We can use for loop, forEach() method, for..in method, map() method.

3.  ## objects

    Objects are used to store keyed collections of various data and more complex entities.An object can be created with figure brackets {…} with an optional list of properties. A property is a “key: value” pair, where key is a string (also called a “property name”), and value can be anything. Objects are mutable: They are addressed by reference, not by value.

    1. ### How can iterate an object?
       We can use for..in loop and buildin for loop to itterate an object.
    2. ### How can clone an object?

       Copying an object variable creates one more reference to the same object. We need to create a new object and replicate the structure of the existing one by iterating over its properties and copying them on the primitive level.

       Example:

       ```js
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
       const cloneObject = (obj, emptyObj) => {
         for (let key in obj) {
           emptyObj[key] = obj[key];
         }
         return emptyObj;
       };

       let cloneStudent = {};
       let obj = cloneObject(Student, cloneStudent);
       // We can use Object.assign(destination,[obj....])
       // let obj = Object.assign(cloneStudent, Student);
       ```

       Note: We can not do nested cloning and with object.assign() method. To solve this problem we need to deep clone the object with \_deepClone(obj) from lodash library.

    3. ### Object Method
       - `this`: This keyword used to create an reference to its property.
         However, arrow function does not have this property.
         ```js
         let user = { name: "John" };
         let admin = { name: "Admin" };
         function sayhi() {
           console.log("Hello: ", this.name);
         }
         // creating an property
         user.f = sayhi;
         //then calling the property
         user.f();
         ```
    4. ### How can we access property from object methods?

       We can access the property from object 2 ways.

       - `. notation`: `object.propertyname`
       - `[] notatioin`: `object[prperty_name]`

    5. ### How can get key and value from an object?
       - `Object.keys(obj)`: return an array of keys.
       - `Object.values(obj)`: return an array of values.
       - `Object.entries(obj)`: return an array of [key,values] pairs.
    6. ### How can we transform an object?

       - Use Object.entries(obj) method to get a key/value pair of array.

       ```js
       const generateObjectWithEntries = (obj, array) => {
         // if we use forEach we must add array then return.
         Object.entries(obj).forEach(([key, value]) => array.push(value));
         return array;
         // simple
         return Object.entries(obj).map(([key, value]) => obj[key]);
       };
       ```

       - Use array method on that array.

       ```js
       const transformObjectWithMap = (obj) => {
         return Object.keys(obj).map((key) => obj[key]);
       };
       ```

       - Use Object.fromEntries(array) method on an resulting array to turn it to back a object.

       ```js

       ```

    7. ### How can we convert array to object?

       ```js
       const convertArrayToObject = (array, key) => {
         return array.reduce((acc, curr) => {
           acc[curr[key]] = curr;
           return acc;
         }, {});
       };
       // or
       const newObject = (array, key) =>
         array.reduce((acc, curr) => ((acc[curr[key]] = curr), acc), {});
       ```

4.  ## Map & Set

    1. ### Map():

       Map is a collection of key-value pairs where the key can be of any type. Map remembers the original order in which the elements were added to it, which means data can be retrieved in the same order it was inserted in.

       1. ### Maps Method:

          - new Map() – creates the map.
          - map.set(key, value) – stores the value by the key. `map.set("BD","taka")`
          - map.get(key) – returns the value by the key, undefined if key doesn’t exist in map. `map.get("BD")`
          - map.has(key) – returns true if the key exists, false otherwise. `map.get("BD")`
          - map.delete(key) – removes the value by the key.`map.delete("BD")`
          - map.clear() – removes everything from the map.`map.clear()`
          - map.size – returns the current element count. `map.size`

       2. ### How can we iterate over a map?

          We can iterate map using for..of or forEach loop.

          ```js
          for (const [key, value] of maps) {
            logger(key, value);
          }
          maps.forEach((value, key) => {
            logger(key, value);
          });
          ```

       3. ### How can we convert map to array?
          [Answer](https://www.freecodecamp.org/news/how-to-use-javascript-collections-map-and-set/)
       4. ### How can we convert map to object?

    2. ### Set

       A Set is a special type collection – “set of values” (without keys), where each value may occur only once.

       1. Sets Methods:

          - new Set(iterable) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
          - set.add(value) – adds a value, returns the set itself.
          - set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
          - set.has(value) – returns true if the value exists in the set, otherwise false.
          - set.clear() – removes everything from the set.
          - set.size – is the elements count.

       2. How can we iterate over a map?
          We can iterate map using for..of or forEach loop.

          ```js

          ```

5.  ## CallBack Promise Asynchronous
    1.  ### Callback
        A callback is a function when a asynchronous function is ready.
    2.  ### Promise:
        pomise is an object that holds the eventual result of an asynchronous function.Initialy it's a independending state when we create the promises.
        Anywhere we have an asychronous function that takes a callback we should modified that function that reaturn a promise.

## methods:

Constructor Function
Constructor functions technically are regular functions. There are two conventions though:

- They are named with capital letter first.
- They should be executed only with "new" operator.

```js
function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User("Jack");
```

When a function is executed with new, it does the following steps:

- A new empty object is created and assigned to this.
- The function body executes. Usually it modifies this, adds new properties to it.
- The value of this is returned.
