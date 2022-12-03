// split() metode nam vraca niz na osnovu nekog stringa na koji je primenjen

const recenica =
  "Ovde je prilicno hladno, ali smo dobili obecanje da ce uskoro poceti grejanje. Ako se to ne desi, bice odlaganja casova";

// Ako se kod split metode izostavi argument dobicemo niz od jednog elementa

const niz = recenica.split();
console.log(niz);

const niz2 = recenica.split(",");
console.log(niz2);

const niz3 = recenica.split("*");
console.log(niz3);

// Napraviti niz od stringa, tako da se elementi niza prave do svake reci "decembar". Rec "decembar" ne sme biti deo
// nijednog elementa niza
const recenica2 =
  "Decembar je poslednji mesec u godini. u decembar pocinje zima, decembar je najhladniji mesec  u godini";

const nizDecembar = recenica2.split(/decembar/i);
console.log(nizDecembar);

// Search metode:

// indexOf() metoda nam vraca prvu poziciju gde se zapravo nalazi poslati argument(jedan ili vise karaktera)
// kada se radi o nekom stringu.

const pozicija = recenica2.indexOf("j");
console.log(pozicija);

const pozicija2 = recenica2.indexOf("mesec");
console.log(pozicija2);

// Ako trazimo poziciju nepostojeceg stringa unutar nase recenice, rezultat ce biti broj -1
const pozicija3 = recenica2.indexOf("Omar");
console.log(pozicija3);

//Drugi argument predstavlja poziciju od koje krecemo sa trazenjem stringa
const pozicija4 = recenica2.indexOf("mesec", 30);
console.log(pozicija4);

// lastIndexOf() metoda nam vraca poslednju poziciju gde se zapravo nalazi poslati argument(jedan ili vise karaktera)
// kada se radi o nekom stringu.

const pozicija5 = recenica2.lastIndexOf("mesec", 30);
console.log(pozicija5);

// Ako trazimo poziciju nepostojeceg stringa unutar nase recenice, rezultat ce biti broj -1

const pozicija6 = recenica2.lastIndexOf("Ima li ovo u recenici");
console.log(pozicija6);

// Napraviti funkciju koja na osnovu parametra ispituje pojavljivanje rijeci 'ko osvaja'.
// Ako se vise puta pojavljuje dati string vratiti poziciju prvo i poslednje pojavljivanje
// Ako se pojavljuje jednom, vratiti poziciju jednog pojavljivanja, ako se ne pojavljuje vratiti poruku
// nismo pronasli dati string

const koOsvaja = (recenica3) => {
  let prvo = recenica.indexOf("ko osvaja");
  let poslednje = recenica.lastIndexOf("ko osvaja");
  if (prvo === -1) {
    return "nismo pronasli dati string";
  } else if (prvo === poslednje) {
    return "Reci 'ko osvaja' se nalaze jednom u recenici";
  } else if (prvo !== poslednje) {
    return (
      "Reci 'ko osvaja' se nalaze na: " +
      prvo +
      "poziciji\nPoslednje pojavljivanje reci ko osvaja se nalazi na: " +
      poslednje +
      "poziciji"
    );
  }
  //else {
  //     return (
  //   "Reci 'ko osvaja' se nalaze na: " +
  //   prvo +
  //   "poziciji\nPoslednje pojavljivanje reci ko osvaja se nalazi na: " +
  //   poslednje +
  //   "poziciji"
  //   }
};
