// replace() metod vrsi zamenu nekoliko karaktera datog stringa. Ima 2 argumenta
// Po defaultu replace() metoda menja samo first match datog stringa.

const recenica = "Danas smo podelili sertifikate za HTML, CSS i JS.";

let recenica2 = recenica.replace("Danas", "Juce");
recenica2 = recenica.replace("s", "t");

// Za promenu svih pronalazenja datog stringa cemo koristiti Regular Expressions:

// 1. g (global)

recenica2 = recenica.replace(/s/g, "t");

// 2. i (insensitive)

recenica2 = recenica.replace(/s/i, "A");

recenica2 = recenica.replace(/s/gi, "A");

console.log(recenica2);

// toUpperCase() metoda za pretaranje celog stringa u velika slova
console.log(recenica.toUpperCase());
console.log(recenica);
console.log(recenica.toLowerCase());

// concat() vrsi spajanje dva ili vise stringova

let a = "Danas je 16. cas JavaScripta";

let b = "Bice i preko 50 casova JavaScripta";
// bez concat()
let c = a + " " + b;
console.log(c);

// sa concat()

c = a.concat(b);
console.log(c);

c = a.concat(" ", b, "\nNakon toga cemo raditi react biblioteki");
console.log(c);

// NAPOMENA //
// Sve stringa metode prave novu promenljivu (jer su stringovi nepromenljive(immutable) vrijednosti)

// Napravitee funkciju koja kod stringa koji predstavlja argument funkcije
// ispituje sledece
//Ako dati string ima vecu duzinu od 9:
// pravi novi string koji ce biti isecak od pola do kraja originalnog stringa
// Nakon toga novom stringu menjamo sva mala slova a sa velikim slovom B

// i funkcija ce vratiti novi string koji je sastavljen od 'Ovo je novodobijena recenica, od dve recenice i poslednjeg izmenjenog isecka'

// Ako ima duzinu manju od 9:
// funkcija treba vratiti poruku:
// argument + njena duzina, 'nedovoljno za dalje ispitivanje'

const zadatak = function (a) {
  let novi = "";
  let novi2 = "";
  if (a.length > 9) {
    novi = a.slice(a.length / 2, a.length);
    novi = novi.toLowerCase();
    novi2 = novi.replace(/a/g, "B");
    return novi2.concat(
      " Ovo je novodobijena recenica, od dve recenice i poslednjeg izmenjenog isecka"
    );
  } else {
    return a.concat(a.length, " nedovoljno za dalje ispitivanje");
  }
};
console.log(zadatak("Ovo je recenica sa mnogo karaktera"));
