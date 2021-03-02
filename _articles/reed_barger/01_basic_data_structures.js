
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
console.log(car1); // expected output:
                   // Car {
                   //     make: 'Eagle',
                   //     model: 'Talon TSi',
                   //     year: 1993,
                   //     owner: Person { name: 'Rand McKinnon', age: 33, sex: 'M' },
                   //     color: 'black'
                   // }