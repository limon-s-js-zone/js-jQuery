### Prototype:

Prototype is a property that every function created in javascript
has that point to an object.

-   Object.create(object): allowed us to craete new object and
    delegating to another object.
-   Get prototype: Object.getPrototypeOf(instance) return the current
    prototype of an object
-   Has on property:instance.hasOwnProperty(value)
-   Note: We can't use new or a constuructor function in arrow function

##### Difference between new and without new:

If we use new keyword in fornt of a function invocation, javascript autometically behind craete object. There no need to explicitely initiallize Object.create() method.

# Inheritence:

to access all the parent method we need to use object.create delegate.

-   Dog.prototype = Object.create(Animals.prototype);
    to set current constructor:
-   Dog.prototype.constructor = Dog;
    to pass value by constructor:
-   Animals.call(this, name, energy);
