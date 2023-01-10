// 1. Write a simple JavaScript program to join all elements of the following array into a string where is * between elements.

// 2. Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8

// 1.

function zadatak1(niz) {
  return niz.join('*');
}
console.log(zadatak1(['Red', 'Green', 'White', 'Black']));

// 2.

function zadatak2() {
  let broj = prompt('unesi broj');
  let novi = '';
  for (let i = 0; i < broj.length; i++) {
    if (broj[i] === 0) {
      novi += 0;
    } else if (broj[i] % 2 === 0 && broj[i + 1] % 2 === 0) {
      novi += broj[i] + '-';
    } else {
      novi += broj[i];
    }
  }
  return novi;
}
console.log(zadatak2());
