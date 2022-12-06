// search() metoda nam daje poziciju(inedx) nekog stringa (argumenta metode)

const recenica = "Desila se neocekivana poseta";
const position = recenica.search("poseta");
console.log(position);

// Razlike izmedju indexOf() i search() metoda:
// 1. indexOf() metoda dozvoljava drugi argument (pozicija odakle krece trazenje stringa)
// 2. serach() metoda dozvoljava regular expressions

const recenica2 =
  "Danas su cetvrtfinala svetskog prvenstva, danas je takodje bila dodela sertifikata";
const position2 = recenica2.search(/danas/i);
console.log(position2);

// match() metoda nam vraca niz

const matchingDanas = recenica2.match("danas");
const matchingDanas2 = recenica2.match(/danas/gi);

console.log(matchingDanas);
console.log(matchingDanas2);

// includes() metoda nam vraca boolean u zavisnosti od toga da li se argument
// nalazi u stringu na koji primenjujemo metodu

const isPresence = recenica2.includes("Omar");
const isPresence2 = recenica2.includes("danas");

console.log(isPresence);
console.log(isPresence2);

// includes() metoda dozvoljava drugi argument sto zapravo predstavlja poziciju od koje ce se traziti dati string

const isPresence3 = recenica2.includes("danas", 60);
console.log(isPresence3);

// startsWith() i endsWith() metode nam vracaju boolean u zavisnosti od toga da li dati string pocinje(zavrsava)
// argumentom metode

const startsWithDanas = recenica2.startsWith("danas");
console.log(startsWithDanas);

const endsWithDanas = recenica2.endsWith("danas");
console.log(endsWithDanas);

// JS Template Literals //
// Bolja praksa je koristiti ``

// Prednosti:
// 1. Mozemo koristiti navodnike (obicne ili duple) unutar stringa.

const recenica3 = `Neki dobri 'ljudi'`;
// 2. Template Literals dozvoljavaju multiline stringove.
const recenica4 = `Neki multilne
tekst
siu`;
console.log(recenica4);

// 3. Interpolacija - Omogucava laksi nacin interpolacije promenljivih
// ( ili izraza) unutar nekog stringa

let a = 5;
let b = 30;
const recenica5 = `Jedna flasa ima zapreminu ${a}l, ukupna kolicina limunade je ${b}l stoga mozemo napuniti ${Math.floor(
  b / a
)} flasa limunade `;
console.log(recenica5);

// Napraviti funkciju koja ispituje argument.
// Ako se u recenici nadje rec 'skola', neka se vrati pozicija prvog pojavljivanja
// date reci.
// Ako recenica pocinje sa recju 'Automobil' neka se vrati boolean true
// Ako je recenica parne duzine neka se vrati broj pojavljivanja reci 'kuca'

// const zadatak = (recenicaNeka) => {
//   let brojac = 0;
//   if (recenicaNeka.startsWith("Automobil")) {
//     return true;
//   } else if (recenicaNeka.includes("skola")) {
//     return recenicaNeka.indexOf("skola");
//   } else if (recenicaNeka.length % 2 === 0) {
//     if (recenicaNeka.match("kuca")) {
//       brojac++;
//       return brojac;
//     }
//   }
// };
// console.log(zadatak("da kola kuca kuca li ova rec sadrzi rec kuca"));
// console.log(matchingDanas2);

const zadatak2 = (recenica) => {
  if (recenica.includes("skola")) {
    return recenica.indexOf("skola");
  } else if (recenica.startsWith("Automobil")) {
    return true;
  } else if (recenica.length % 2 === 0) {
    let brojac = 0;
    if (recenica.includes("kuca")) {
      const kuce1 = recenica.match(/kuca/gi);
      let kucee = kuce1.length;
      return `Broj pojavljivanja reci 'kuca' unutar datog stringa je ${kucee}`;
    }
  }
};
console.log(zadatak2("Sutra se ide skola"));
console.log(zadatak2("Automobil je prodat"));
console.log(zadatak2("Ja zivim u stanu."));
console.log(zadatak2("kuca kuca kucakucakucaKuca  kuca siu"));
