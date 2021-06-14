class Human {
    constructor() {
        this.gender = "male";
    }
    printGender() {
        console.log(this.gender);
    }
}

class Person extends Human {
    constructor() {
        super();
        this.name = "Max";
        this.age = "28";
        this.gender = "female";
    }
    printMyName() {
        console.log(this.name);
    }
    printMyAge() {
        console.log(this.age);
    }
}

const person = new Person();
person.printMyName();
person.printMyAge();
person.printGender();

// ES6 version / Babel 
// https://jsbin.com/?js,console > choose ES6 / Babel, copy and paste the code below

// class Human2 {
//     gender = "male";
//      }
//      printGender = () => {
//          console.log(this.gender);
//      }
// }

// class Person2 extends Human2 {
//     constructor() {
//         name = "Max";
//         age = "28";
//         gender = "female";
//     }
//     printMyName = () => {
//         console.log(this.name);
//     }
//     printMyAge = () => {
//         console.log(this.age);
//     }
// }

// const person2 = new Person2();
// person2.printMyName();