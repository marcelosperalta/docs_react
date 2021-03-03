
// variables (declarations)
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


// objects
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
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