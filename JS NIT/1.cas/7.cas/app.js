// while petlja nam omogucava iteraciju kroz neki objekat nekoliko puta
// uz potencijalno odredjene uslove
// Kod while petlje je neophodno na kraju koda definisati povecanje iteratora
// kako ne bismo dobili beskonacnu petlju

// Sintaksa

// while (uslov) {
// blok koda za izvrsavanje
// definisati povecanje iteratora
// }

// Ispisati sve parna brojeve od 1-10

// let i = 1;
// while (i < 11) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
//   i++;
// }

// const broj = +prompt("Unesite neki broj veci od 1");
// let c = 1;
// while (c <= broj) {
//   console.log(c ** 2);
//   c++;
// }

// let broj1 = +prompt("Unesite prvi broj");
// let broj2 = +prompt("Unesite drugi broj");

// if (isNaN(broj1) || isNaN(broj2)) {
//   console.log("Niste uneli broj");
// } else if (broj1 < broj2) {
//   while (broj1 <= broj2) console.log(broj1);
//   broj1++;
// } else if (broj1 > broj2) {
//   while (broj1 >= broj2) {
//     console.log(broj2);
//     broj2++;
//   }
// } else if (broj1 === broj2) {
//   console.log("Uneli ste dva ista broja");
// }

// do while petlja predstavlja poseban slucaj while petlje,
// gde se prvo izvrsava kod pa tek onda proverava uslov

// Sintaksa

// do {
// blok koda za izvrsavanje
// } while (uslov);

// Ispisati sve brojeve od 1-5

let broj3 = 1;
do {
  console.log(broj3);
  broj3++;
} while (broj3 < 6);

// Nedostatak do while petlje kroz primer.
// Ispisato sve brojeve manje od 20 krenuvsi od broja koji unosi korisnik

let broj4 = +prompt("Unesite broj");

do {
  console.log(broj4);
  broj4++;
} while (broj4 < 21);
