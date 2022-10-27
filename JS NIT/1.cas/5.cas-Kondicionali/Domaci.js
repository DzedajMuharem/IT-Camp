// 1.
// Napisati program koji na osnovu dva uneta broja od strane korisnika ispisuje
// Povrsinu kvadrata ako su uneti brojevi jednaki,
// Povrsinu pravougaonika ako su uneti brojevi razliciti

const prviBroj = +prompt("Unesite prvi broj");
const drugiBroj = +prompt("Unesite drugi broj");

if (isNaN(prviBroj) || isNaN(drugiBroj)) {
  console.log("Unete vrednosti nisu brojevi");
} else if (prviBroj === drugiBroj) {
  console.log("Povrsina kvadrata iznosi: " + prviBroj * drugiBroj + "cm");
} else if (prviBroj !== drugiBroj) {
  console.log("Povrsina pravougaonika iznosi: " + prviBroj * drugiBroj + "cm");
}

// Za proveru da li je vrijednost nekog broja NaN se koristi metoda:
// isNaN(vrednost);

// switch (prviBroj) {
//   case drugiBroj:
//     console.log("Povrsina kvadrata iznosi " + prviBroj * drugiBroj + " cm");
//     break;
//   default:
//     console.log(
//       "Povrsina pravougaonika iznosi " + prviBroj * drugiBroj + " cm"
//     );
// }

// 2.
// Korisnik unosi dva realna broja x i y. Napisati program koji izracunava i stampa
// kolicnik x/y, ako je broj y razlicit od nule,
// a inace ispisuje poruku: Deljenje je nemoguce.

const x = +prompt("Unesite realni broj x");
const y = +prompt("Unesite realni broj y");

// if (y != 0) {
//   console.log("Kolicnik ova dva broja iznosi: " + x / y);
// } else {
//   console.log("Deljenje je nemoguce");
// }

if (isNaN(x) || isNaN(y)) {
  console.log("Vrijednosti moraju biti brojevi");
} else if (y === 0) {
  console.log("Deljenje nije moguce sa nulom");
} else {
  console.log("Rezultat deljenja iznosi: " + prviBroj / drugiBroj);
}
