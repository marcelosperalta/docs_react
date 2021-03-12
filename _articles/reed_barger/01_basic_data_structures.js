console.log(` -------------------- variables (declarations) -------------------- `)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#declarations
// var, let, const

// var
// Declares a variable, optionally initializing it to a value.
var x = 42;          // local and global variable
console.log(x);      // expected output: 42

// let 
// Declares a block-scoped, local variable, optionally initializing it to a value.
let y = 13;          // block-scope local variable
console.log(y);      // expected output: 13

// const
// Declares a block-scoped, read-only named constant.
const number = 42;   // read-only
console.log(number); // expected output: 42


console.log(` -------------------- objects -------------------- `)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
// {}
// name (or key) and value:

var myCar = {
//  name  value
    make: "Porsche"
}
console.log(myCar); // expected output: { make: 'Porsche' }

var myCar = new Object();
myCar.make = 'Porsche';
myCar.model = 'Boxster';
myCar.year = 1996;
console.log(myCar); // expected output: { make: 'Porsche', model: 'Boxster', year: 1996 }

var myCar = {
    make: 'Porsche',
    model: 'Cayman',
    year: 2005
};
console.log(myCar); // expected output: { make: 'Porsche', model: 'Cayman', year: 2005 }

myCar['make'] = 'Porsche';
myCar['model'] = 'Taycan';
myCar['year'] = 2019;
console.log(myCar); // expected output: { make: 'Porsche', model: 'Taycan', year: 2019 }

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}
var mycar = new Car('Porsche', 'Boxster', 1996);
console.log(mycar); // expected output: Car { make: 'Porsche', model: 'Boxster', year: 1996 }

function Person(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
}
var rand = new Person('Rand McKinnon', 33, 'M');
var ken = new Person('Ken Jones', 39, 'M');
function Car(make, model, year, owner) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.owner = owner;
}
var car1 = new Car('Eagle', 'Talon TSi', 1993, rand);
var car2 = new Car('Nissan', '300ZX', 1992, ken);
console.log(car2.owner.name); // expected output: Ken Jones
car1.color = 'black'; 
console.log(car1);            // expected output:
                              // Car {
                              //     make: 'Eagle',
                              //     model: 'Talon TSi',
                              //     year: 1993,
                              //     owner: Person { name: 'Rand McKinnon', age: 33, sex: 'M' },
                              //     color: 'black'
                              // }

const Manager = {
  name: "John",
  age: 27,
  job: "Software Engineer"
}
const Intern= {
  name: "Ben",
  age: 21,
  job: "Software Engineer Intern"
}
function sayHi() {
    console.log('Hello, my name is', this.name)
}
// add sayHi function to both objects
Manager.sayHi = sayHi;
Intern.sayHi = sayHi;
Manager.sayHi() // expected output: Hello, my name is John'
Intern.sayHi()  // expected output: Hello, my name is Ben'

function howOldAmI (){
    console.log('I am ' + this.age + ' years old.')
  }
Manager.howOldAmI = howOldAmI;
Manager.howOldAmI() // expected output: I am 27 years old.
Intern.howOldAmI = howOldAmI;
Intern.howOldAmI()  // expected output: I am 21 years old.

var o = {
    a: 7,
    get b() {
      return this.a + 1;
    },
    set c(x) {
      this.a = x / 2;
    }
};
console.log(o.a); // expected output: 7
console.log(o.b); // expected output: 8  <-- At this point the get b() method is initiated.
o.c = 50;         //                     <-- At this point the set c(x) method is initiated
console.log(o.a); // expected output: 25
console.log(o.b); // expected output: 26

var o = { a: 0 };
Object.defineProperties(o, {
    'b': { get: function() { return this.a + 1; } },
    'c': { set: function(x) { this.a = x / 2; } }
});
console.log(o.b); // expected output: 1
o.c = 10;                               // Runs the setter, which assigns 10 / 2 (5) to the 'a' property
console.log(o.a); // expected output: 5
console.log(o.b); // expected output: 6 // Runs the getter, which yields a + 1 or 6

// Creates a new object, myobj, with two properties, a and b.
var myobj = new Object;
myobj.a = 5;
myobj.b = 12;
console.log(myobj);         // expected output: { a: 5, b: 12 }
// Removes the a property, leaving myobj with only the b property.
delete myobj.a;
console.log ('a' in myobj); // expected output: "false"
console.log(myobj)          // expected output: { b: 12 }

g = 17;
console.log(g);    // expected output: 17
delete g;
// console.log(g); // expected output: error: "g is not define"

// Two variables, two distinct objects with the same properties
var fruit = {name: 'apple'};
var fruitbear = {name: 'apple'};
console.log(fruit == fruitbear);  // expected output: false
console.log(fruit === fruitbear); // expected output: false
// Two variables, a single object
var fruit = {name: 'apple'};
var fruitbear = fruit;  // Assign fruit object reference to fruitbear
// Here fruit and fruitbear are pointing to same object
console.log(fruit == fruitbear);  // expected output:  true
console.log(fruit === fruitbear); // expected output:  true
fruit.name = 'grape';
console.log(fruitbear); // output: { name: "grape" }, instead of { name: "apple" }


console.log(` -------------------- arrays -------------------- `)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// []

console.log("Create an Array");
let fruits = ['Apple', 'Banana']
console.log(fruits.length) // 2

console.log("Access an Array item using the index position");
let first = fruits[0]
console.log(first)        // Apple
let last = fruits[fruits.length - 1]
console.log(last)         // Banana

console.log("Loop over an Array");
fruits.forEach(function(item, index, array) {
  console.log(item, index) // Apple 0
                           // Banana 1
})

console.log("Add an item to the end of an Array");
let newLength1 = fruits.push('Orange')
console.log(newLength1) // 3
console.log(fruits)     // [ 'Apple', 'Banana', 'Orange' ]

console.log("Remove an item from the end of an Array");
let removeLast = fruits.pop() // remove Orange (from the end)
console.log(removeLast) // Orange
console.log(fruits)     // ["Apple", "Banana"]

console.log("Remove an item from the beginning of an Array");
let removeFirst = fruits.shift() // remove Apple from the front
console.log(removeFirst) // Apple
console.log(fruits)      // ["Banana"]

console.log("Add an item to the beginning of an Array");
let newLength2 = fruits.unshift('Strawberry') // add to the front
console.log(newLength2)  // 2
console.log(fruits)      // [ 'Strawberry', 'Banana' ]

console.log("Find the index of an item in the Array");
                // index            0,        1,       2
fruits.push('Mango') // ["Strawberry", "Banana", "Mango"]
let pos = fruits.indexOf('Banana')
console.log(pos)     // 1
let pos2 = fruits.indexOf('Mango')
console.log(pos2)    // 2

console.log("Remove an item by index position");
let removedItem = fruits.splice(pos, 1) // this is how to remove an item
console.log(removedItem) // [ 'Banana' ]
console.log(fruits)      // ["Strawberry", "Mango"]

console.log("Remove items from an index position");
         // pos2          0,        1,        2,       3
let vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot']
console.log(vegetables)   // ["Cabbage", "Turnip", "Radish", "Carrot"]
let pos3 = 1
let n = 2
let removedItems = vegetables.splice(pos3, n)
// this is how to remove items, n defines the number of items to be removed,
// starting at the index position specified by pos and progressing toward the end of array.
console.log(vegetables)   // ["Cabbage", "Carrot"] (the original array is changed)
console.log(removedItems) // ["Turnip", "Radish"]

console.log("Copy an Array");
let shallowCopy = fruits.slice() // this is how to make a copy
console.log(shallowCopy); // ["Strawberry", "Mango"]

console.log("Accessing array elements");
// zero-indexed:
//                                   0,                            1,                          2
let arr = ['this is the first element', 'this is the second element', 'this is the last element']
console.log(arr[0])              // logs 'this is the first element'
console.log(arr[1])              // logs 'this is the second element'
console.log(arr[arr.length - 1]) // logs 'this is the last element'
console.log(arr[3])              // undefined
// console.log(arr.0)            // a syntax error
let years = [1950, 1960, 1970, 1980, 1990, 2000, 2010]
// console.log(years.0)   // a syntax error
console.log(years[0])     // works properly // 1950
// renderer.3d.setTexture(model, 'character.png')     // a syntax error
// renderer['3d'].setTexture(model, 'character.png')  // works properly 
// In the 3d example, '3d' had to be quoted (because it begins with a digit).
console.log(years['2'] != years['02']) // true

console.log("Relationship between length and numerical properties");
const fruits2 = []
fruits2.push('banana', 'apple', 'peach')
console.log(fruits2.length)        // 3
fruits2[5] = 'mango'
console.log(fruits2[5])            // 'mango'
console.log(Object.keys(fruits2))  // ['0', '1', '2', '5']
console.log(fruits2.length)        // 6
console.log(fruits2)               // [ 'banana', 'apple', 'peach', <2 empty items>, 'mango' ]
fruits2.length = 10
console.log(fruits2)               // ['banana', 'apple', 'peach', <2 empty items>, 'mango', <4 empty items>]
console.log(Object.keys(fruits2))  // ['0', '1', '2', '5']
console.log(fruits2.length)        // 10
console.log(fruits2[8])            // undefined
fruits2.length = 2
console.log(Object.keys(fruits2))  // ['0', '1']
console.log(fruits2.length)        // 2
console.log(fruits2)               // [ 'banana', 'apple' ]
fruits2.length = 10
console.log(fruits2)               // [ 'banana', 'apple', <8 empty items> ]

console.log("Creating an array using the result of a match");
// Match one d followed by one or more b's followed by one d
// Remember matched b's and the following d
// Ignore case
const myRe = /d(b+)(d)/i
const myArray = myRe.exec('cdbBdbsbz')
console.log(myArray); // [ 'dbBd', 'bB', 'd', index: 1, input: 'cdbBdbsbz', groups: undefined ]

console.log("Constructor");
// Array()
// [element0, element1, ..., elementN]
// new Array(element0, element1[, ...[, elementN]])
// new Array(arrayLength)
let fruits3 = ['Apple', 'Banana'];
console.log(fruits3.length); // 2
console.log(fruits3[0]);     // "Apple"
let fruits4 = new Array(2);
console.log(fruits4.length); // 2
console.log(fruits4[0]);     // undefined