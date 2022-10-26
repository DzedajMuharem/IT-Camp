// 1.
// Napisati program koji na osnovu dva uneta broja od strane korisnika ispisuje
// Povrsinu kvadrata ako su uneti brojevi jednaki,
// Povrsinu pravougaonika ako su uneti brojevi razliciti

const prviBroj = +prompt("Unesite prvi broj");
const drugiBroj = +prompt("Unesite drugi broj");

if (prviBroj === drugiBroj) {
  console.log("Povrsina kvadrata iznosi: " + prviBroj * drugiBroj + "cm");
} else if (prviBroj < 0) {
  console.log("Prvi broj ne sme biti negativan");
} else if (drugiBroj < 0) {
  console.log("Drugi broj ne sme biti negativan");
} else {
  console.log("Povrsina pravougaonika iznosi: " + prviBroj * drugiBroj + "cm");
}

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

if (y != 0) {
  console.log("Kolicnik ova dva broja iznosi: " + x / y);
} else {
  console.log("Deljenje je nemoguce");
}
