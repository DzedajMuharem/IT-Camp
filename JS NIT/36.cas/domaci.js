// ---------------------------------------------- //
const nizBrojeva = [10, 4, 6, 27, 8, 45, 5, 8, 35, 48];

// 1. Iz niza od 10 elemenata izracunati sumu parnih brojeva niza.
const zbirZadatak1 = nizBrojeva
  .filter(function (element) {
    return element % 2 === 0;
  })
  .reduce((a, b) => {
    return a + b;
  });
console.log(zbirZadatak1);

// 2. From the array of numbers, choose even double even numbers and compute the sum using Array's filter, map and reduce methods.
const zadatak2 = nizBrojeva
  .filter(function (elemenata) {
    return elemenata % 2 === 0;
  })
  .map(x => {
    return x * 2;
  })
  .reduce((a, b) => {
    return a + b;
  });
console.log(zadatak2);

// 3. Write a JavaScript program to find the most frequent item of an array.
// Sample array :
const arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 3];

let brojac = 0;
let item;
let ponavljanje = 1;

function zadatak3(niz) {
  for (let i = 0; i < niz.length; i++) {
    for (let b = 0; b < niz.length; b++) {
      if (niz[i] === niz[b]) {
        brojac++;
        if (ponavljanje < brojac) {
          ponavljanje = brojac;
          item = niz[i];
        }
      }
    }
    brojac = 0;
  }
  console.log(brojac);
  console.log(item);
}
console.log(zadatak3(arr1));

// 4. Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

function zadatak4(string) {
  let nova;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toLowerCase()) {
      nova += string[i].toUpperCase();
    } else {
      nova += string[i].toLowerCase();
    }
  }
  return nova;
}
console.log(zadatak4('The Quick Brown Fox'));
