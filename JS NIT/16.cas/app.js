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

const mojaFukncija = function (recenica) {
  if (recenica.length > 9) {
    let polaDuzine;
    // if (recenica.length % 2 === 0) {
    //   polaDuzine = recenica.length / 2;
    // } else if (recenica.length % 2 !== 0) {
    //   polaDuzine = Math.ceil(recenica.length / 2);
    // }
    polaDuzine =
      recenica.length % 2 === 0
        ? recenica.length / 2
        : Math.ceil(recenica.length / 2);
    const isecak = recenica.slice(polaDuzine, recenica.length);
    const novaRecenica = isecak.replace(/a/g, "B");
    const konacno = "Ovo je novodobijena recenica, ".concat(novaRecenica);
    return konacno;
  } else {
    const recenica2 = recenica.concat(
      recenica.length,
      "nedovoljno za dalje ispitivanje."
    );
    return recenica2;
  }
};
console.log(mojaFukncija("Kraj casa"));
console.log(mojaFukncija("Kraj 2. casa rada sa stringovima."));

// Domaci zadatak.
// Napraviti funkciju koja trazi od korisnika da unese neku recenicu, zatim funkcija vraca,
//  datu recenicu u vise oblika (spojenu u jedan string).
// 1. recenicu ispisanu velikim slovima,
// 2. recenicu ispisanu malim slovima,
// 3. pola recenice ispisano velikim slovima, pola recenice ispisano malim slovima
// 4. Ako se u recenici nadje rec 'skola' neka bude zamenjena recju fakultet,
// 5. Neka bude ispisano prvih 10 karaktera unete recenice,
// 6. Neka bude ispisano poslednjih 10 karaktera unete recenice.

const drugiZadatak = function () {
  let unesiteRecenicu = prompt("Unesite recenicu");
  let velikaSlova = unesiteRecenicu.toUpperCase();
  let malaSlova = unesiteRecenicu.toLowerCase();
  // let polaMala = "";
  let polaVelika = "";
  if (unesiteRecenicu.length % 2 === 0) {
    polaVelika = unesiteRecenicu.length / 2;
  } else {
    polaVelika = Math.ceil(unesiteRecenicu.length / 2);
  }

  const polaM = unesiteRecenicu.slice(0, polaVelika).toLowerCase();
  const polaV = unesiteRecenicu
    .slice(polaVelika, unesiteRecenicu.length)
    .toUpperCase();
  const polaPola = polaM + polaV;
  let skola = unesiteRecenicu.replace("skola", "fakultet");
  let prvih10 = unesiteRecenicu.substr(0, 10);
  let poslednjih10 = unesiteRecenicu.substr(-10);

  let ispis =
    "2. recenicu ispisanu malim slovima: " +
    malaSlova.concat(
      "\n",
      "1. recenicu ispisanu velikim slovima: ",
      "\n",
      velikaSlova,
      "\n",
      "pola recenice ispisano velikim slovima, pola recenice ispisano malim slovima: ",
      "\n",
      polaPola,
      "\n",
      '4. Ako se u recenici nadje rec "skola" neka bude zamenjena recju fakultet: ',
      "\n",
      skola,
      "\n",
      "5. Neka bude ispisano prvih 10 karaktera unete recenice; ",
      "\n",
      prvih10,
      "\n",
      "6. Neka bude ispisano poslednjih 10 karaktera unete recenice: ",
      "\n",
      poslednjih10
    );
  return ispis;
};
console.log(drugiZadatak());
