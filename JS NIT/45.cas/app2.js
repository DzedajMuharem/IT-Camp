const arr = [-3, 4.8, 5, 3, -3.2];

const zadatak1 = function (arr) {
  const newArr = arr.filter(
    element => element > 0 && element === Math.trunc(element)
  );
  //   const newArr2 = arr.filter(element => element > 0 && element % 1 === 0);
  return newArr.map(el => el ** 2);
};
console.log(zadatak1(arr));
// Postoji builtin metoda u JS koja provjreva da li je neki broji intiger(ceo):
Number.isInteger();

// We have an array of objects representing different people in our contacts lists.
// A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.
// The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.
// If both are true, then return the "value" of that property.
// If name does not correspond to any contacts then return the string No such contact.
// If prop does not correspond to any valid properties of a contact found to match name then return the string No such property.

const contacts = [
  {
    firstName: 'Akira',
    lastName: 'Laine',
    number: '0543236543',
    likes: ['Pizza', 'Coding', 'Brownie Points'],
  },
  {
    firstName: 'Harry',
    lastName: 'Potter',
    number: '0994372684',
    likes: ['Hogwarts', 'Magic', 'Hagrid'],
  },
  {
    firstName: 'Sherlock',
    lastName: 'Holmes',
    number: '0487345643',
    likes: ['Intriguing Cases', 'Violin'],
  },
  {
    firstName: 'Kristian',
    lastName: 'Vos',
    number: 'unknown',
    likes: ['JavaScript', 'Gaming', 'Foxes'],
  },
];

// We have an array of objects representing different people in our contacts lists.
// A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.
// The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.
// If both are true, then return the "value" of that property.
// If name does not correspond to any contacts then return the string No such contact.
// If prop does not correspond to any valid properties of a contact found to match name then return the string No such property.

const lookUpProfile = function (name, prop) {
  //   contacts.forEach(element => {});
  //   const values = Object.values(contacts);
  //   console.log(values.includes(prop));

  const element = arr.find(element => {
    const [keys, values] = Object.entries(element);
    console.log();

    return element.firstName === name && keys.includes(prop);
  });
  if (element) return element[proprty];
  else return 'No such contact';
};
console.log(lookUpProfile('Kristian', 'likes'));
