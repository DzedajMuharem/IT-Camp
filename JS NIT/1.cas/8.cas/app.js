// 1.
// Prebrojati i sabrati brojeve deljive sa 5 u intervalu 1 do n

// let broj1 = +prompt("Unesite broj");
// let suma = 0;
// let brojac = 0;
// for (let a = 1; a <= broj1; a++) {
//   if (a % 5 === 0) {
//     // console.log(a);
//     suma += a;
//     brojac++;
//   }
// }
// console.log(
//   "Zbir svih brojeva deljivih sa 5 iznosi: " + suma + ", i ima ih: " + brojac
// );

// 2.
// Neka se izvrsi iteracija od broja 99 do - 99
// Ispisati zbir broja deljivog sa 4 i 14.

// let zbir = 0;
// for (let b = 99; b >= -99; b--) {
//   if (b % 4 === 0) {
//     console.log(b + 14);
//   }
// }

// console.log(zbir);
// let zbiec = 0;
// let c = 99;
// while (c >= -99) {
//   if (c % 4 === 0) {
//     console.log(c + 14);
//   }
//   c--;
// }

// 3.
// Izracunati aritmeticku sredinu brojeva koji su deljivi sa 3.
// Iteracija se vrsi od 3 do 17

// let zbir = 0;
// let brojacd = 0;

// for (let d = 3; d <= 17; d++) {
//   if (d % 3 === 0) {
//     // console.log(d);
//     zbir += d;
//     brojacd++;
//   }
// }
// console.log("Aritmeticka sredina iznosi " + zbir / brojacd);

// let sumad = 0;
// let brojacdd = 0;

// let dd = 3;

// while (dd <= 17) {
//   if (dd % 3 === 0) {
//     sumad += dd;
//     brojacdd++;
//   }
//   dd++;
// }
// console.log("Aritmeticka sredina iznosi: " + sumad / brojacdd);

// 4.
// Задатак: Фудбалски терен
// Фудбалски терен димензија d×s треба оградити правоугаоном оградом тако да је растојање страница ограде
// од линије терена r. Напиши програм који одређује дужину ограде.
// Улаз: У три реда стандардног улаза налазе се три цела броја:
// • d - дужина терена у метрима (90 ≤ d ≤ 120)
// • s - ширина терена у метрима (45 ≤ s ≤ 90)
// • r - растојање ограде од терена у метрима (2 ≤ r ≤ 10)

// let d = +prompt(
//   "Unesite duzinu terena u metrima (od 90 do 120 ukljucujuci ta dva broja)"
// );
// let s = +prompt(
//   "Unesite sirinu terena u metrima (od 45 do 90, ukljucujuci ta dva broja)"
// );
// let r = +prompt(
//   "Unesite rastojanje ograde od terena u metrima(od 2 do 10, ukljucujuci ta dva broja)"
// );
// let duzinaOgrade = 0;

// for (let g = 90; g <= 120; g++) {
//   if (d <= 89 || d >= 121) {
//     console.log("Niste uneli korektne vrijednosti za d");
//     break;
//   } else if (s <= 44 || s >= 91) {
//     console.log("Niste uneli korektne vrijednosti za s");
//     break;
//   } else if (r <= 1 || r >= 11) {
//     console.log("Niste uneli korektne vrijednosti za r");
//     break;
//   } else if (isNaN(d) || isNaN(s) || isNaN(r)) {
//     console.log("Uneli ste nesto sto nije broj");
//     break;
//   } else if (g === d) {
//     duzinaOgrade = 2 * g + 2 * s + 8 * r;
//     // console.log(g);
//   }
// }
// console.log("Duzina ograde iznosi: " + duzinaOgrade);

// Domaci zadaci:
// 1.
// Korisnik unosi 2 broja:
// Na osnovu toga koji je broj manji, iteracija se vrsi od njega do veceg broja.
// Izracunati aritmeticku sredinu brojeva koji su deljivi sa 5.

// let broj1 = +prompt("Unesite prvi broj");
// let broj2 = +prompt("Unesite drugi broj");
// let zbir = 0;
// let brojac = 0;

// if (isNaN(broj1) || isNaN(broj2)) {
//   console.log("Niste uneli broj");
// } else if (broj1 > broj2) {
//   for (broj2; broj2 < broj1; broj2++) {
//     // console.log(broj2);
//     if (broj2 % 5 === 0) {
//       //   console.log(broj2);
//       zbir += broj2;
//       brojac++;
//     }
//   }
// } else if (broj1 < broj2) {
//   for (broj1; broj1 < broj2; broj1++) {
//     // console.log(broj1);
//     if (broj1 % 5 === 0) {
//       zbir += broj1;
//       brojac++;
//     }
//   }
// }
// console.log(
//   "Aritmeticka sredina brojeva koji su deljivi sa 5 iznosi: " + zbir / brojac
// );

// 2.
// Korisnik unosi broj iz intervala [12,16).
// Na osnovu unetog broja, iteracija se vrsi od njega do 1(ukljucujuci).
// Ispisati svaki broj iz iteracije, nljegov kvadrat i vrednost broja umanjenu za 25.

let broj = +prompt("Unesite broj iz intervala [12,16).");
let kvadrat = 0;
let umanjeno = 0;

switch (broj) {
  case 15:
    for (broj; broj >= 1; broj--) {
      //   console.log(broj);
      kvadrat = broj ** 2;
      umanjeno = broj - 25;
      console.log(
        "Broj iz svake iteracije: " +
          broj +
          " njegov kvadrat: " +
          kvadrat +
          " umanjena vrijednost: " +
          umanjeno
      );
    }
    break;
  case 14:
    for (broj; broj >= 1; broj--) {
      //   console.log(broj);
      kvadrat = broj ** 2;
      umanjeno = broj - 25;
      console.log(
        "Broj iz svake iteracije: " +
          broj +
          " njegov kvadrat: " +
          kvadrat +
          " umanjena vrijednost: " +
          umanjeno
      );
    }
    break;
  case 13:
    for (broj; broj >= 1; broj--) {
      //   console.log(broj);
      kvadrat = broj ** 2;
      umanjeno = broj - 25;
      console.log(
        "Broj iz svake iteracije: " +
          broj +
          " njegov kvadrat: " +
          kvadrat +
          " umanjena vrijednost: " +
          umanjeno
      );
    }
    break;
  case 12:
    for (broj; broj >= 1; broj--) {
      //   console.log(broj);
      kvadrat = broj ** 2;
      umanjeno = broj - 25;
      console.log(
        "Broj iz svake iteracije: " +
          broj +
          " njegov kvadrat: " +
          kvadrat +
          " umanjena vrijednost: " +
          umanjeno
      );
    }
    break;
  default:
    console.log("Niste uneli odgovarajuci broj");
}
