// Objects built in methods //

const person = {
  firstName: 'Hamed',
  lastName: 'Medjedovic',
  age: 16,
};

// Object.freeze(obj) metoda cini taj niz nepromenljivim.
person.age = 17;
console.log(person.age);

// Object.freeze(person);

person.age = 18;
console.log(person.age);

// Object.seal(obj) metoda cini objekat promenljivim s tim sto nema mogucnost dodavanja(brisanja) novih svojstava i metoda
// Object.seal(person);
// person.age = 22;
console.log(person);

// delete person.age;
console.log(person);

// Object.keys(obj) vraca niz kljuceva:
console.log(Object.keys(person));

// Object.entries(obj) vraca niz nizova:
// Svaki podniz je niz od dva elementa
const entries = Object.entries(person);
console.log(entries.flat().filter(x => typeof x === 'string'));

// Object.is(obj1,obj2)
const obj1 = {
  firstName: 'Mitar',
  lastName: 'Vranic',
};

const obj2 = {
  firstName: 'Mitar',
  lastName: 'Vranic',
};

const obj3 = obj1;

console.log(Object.is(obj1, obj2));
console.log(Object.is(obj1, obj3));

const ime = 'Bakir';
const prezime = 'Ujkanovic';
const godine = 19;

const person2 = {
  ime,
  prezime,
  godine,
};
console.log(person2);

// Destructuring

const person3 = {
  firstName: 'Hasan',
  lastName: 'Mujanovic',
  age: 18,
};

// const firstName = person3.firstName;

const { firstName, lastName, age } = person3;
console.log(firstName, lastName, age);

const godine3 = [
  { starost: 15 },
  { starost: 16 },
  { starost: 17 },
  { starost: 18 },
  { starost: 19 },
  { starost: 20 },
  { starost: 21 },
];

const punoletni = godine3.filter(x => x.starost > 17);
console.log(punoletni);

// 10. Write a JavaScript program to sort an array of JavaScript objects. Go to the editor
// Sample Object :

const library = [
  {
    title: 'The Road Ahead',
    author: 'Bill Gates',
    libraryID: 1254,
  },
  {
    title: 'Walter Isaacson',
    author: 'Steve Jobs',
    libraryID: 4264,
  },
  {
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    libraryID: 3245,
  },
];
// Expected Output:

// [[object Object] {
//   author: "Walter Isaacson",
//   libraryID: 4264,
//   title: "Steve Jobs"
// }, [object Object] {
//   author: "Suzanne Collins",
//   libraryID: 3245,
//   title: "Mockingjay: The Final Book of The Hunger Games"
// }, [object Object] {
//   author: "The Road Ahead",
//   libraryID: 1254,
//   title: "Bill Gates"
// }]
