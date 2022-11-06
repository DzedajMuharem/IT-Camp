// 1. Prebrojati koliko se puta u unetom stringu pojavljuje slovo m(malo i veliko).

let recenica = prompt("Unesite recenicu po izboru");
let brojac = 0;
for (let i = 0; i < recenica.length; i++) {
  if (recenica[i] === "m" || recenica[i] === "M") {
    brojac++;
  }
}
console.log(
  "U unetoj recenici slovo m(Malo i veliko) se pojavljuje: " + brojac + " puta"
);

// 2. Prebrojati koliko ima znakova koji su cifre u unetom stringu.

let recenica2 = prompt("Unesite recenicu po izboru");
let brojac2 = 0;

for (let i = 0; i < recenica2.length; i++) {
  if (
    recenica2[i] === "1" ||
    recenica2[i] === "2" ||
    recenica2[i] === "3" ||
    recenica2[i] === "4" ||
    recenica2[i] === "5" ||
    recenica2[i] === "6" ||
    recenica2[i] === "7" ||
    recenica2[i] === "8" ||
    recenica2[i] === "9" ||
    recenica2[i] === "0"
  ) {
    brojac2++;
  }
}
console.log(brojac2);

// for (let i = 0; i < recenica2.length; i++) {
//   a = parseInt(recenica2[i]);
//   recenica2.charCodeAt();
//   if (!isNaN(a)) {
//     brojac2++;
//   }
// }
// console.log(brojac2);

// let recenica3 = prompt("Unesite recenicu po izboru");
// let num = "1234567890";
// let brojac3 = 0;

// for (let i = 0; i < recenica3.length; i++) {
//   if (num.includes(recenica3[i])) {
//     brojac3++;
//   }
// }

// console.log(brojac3);
