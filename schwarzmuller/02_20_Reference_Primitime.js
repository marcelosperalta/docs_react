const person = {
    name: "Max"
};

const secondPerson = {
    ...person
};

person.name = "Manu";

console.log(secondPerson); // "Max"
console.log(person);       // "Manu"