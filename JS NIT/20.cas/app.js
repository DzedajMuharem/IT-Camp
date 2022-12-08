// const slova = (recenica) => {
//   let brojac = 0;

//   for (let i = 0; i < recenica.length; i++) {
//     if (recenica[i] === " " || recenica[i] === ".") {
//       continue;
//     } else if (recenica[i] === recenica[i].toLowerCase()) {
//       brojac++;
//     }
//   }
//   return brojac;
// };
// console.log(slova("Koliko ima malih slova u recenici"));

// ispisati da li ima vise malih ili velikih slova

////////////////////

// const malaVelika = (recenica) => {
//   let mala = 0;
//   let velika = 0;
//   for (let i = 0; i < recenica.length; i++) {
//     if (recenica[i] !== recenica[i].toUpperCase()) {
//       mala++;
//     } else if (recenica[i] !== recenica[i].toLowerCase()) {
//       velika++;
//     }
//   }
//   if (mala < velika) {
//     return `Ima vise velikih slova ${velika}`;
//   } else if (mala > velika) {
//     return `Ima vise malih slova ${mala}`;
//   } else {
//     return "Ima podjednako velikih i malih slova ";
//   }
// };
// console.log(malaVelika("DA DA da da da DA"));

///////////////////////

// Velika slova u stringu treba svesti na mala slova

// const svedi = (recenica) => {
//   //   let novi = recenica.toLowerCase();
//   //   return novi;
//   let nova = "";
//   for (let i = 0; i < recenica.length; i++) {
//     if (recenica[i] !== recenica[i].toLowerCase()) {
//       nova += recenica[i].toLowerCase();
//     } else {
//       nova += recenica[i];
//     }
//   }
//   return nova;
// };
// console.log(svedi("Recenica SA avelikim slovima"));

/////////////////////////////////////

// Pronaci poziciju poslednjeg razmaka

const razmak = (recenica) => recenica.lastIndexOf(" ");

console.log(razmak("ki  m l"));

///////////////////////

// Ispisati duzinu prve reci unetog stringa

// const zadatak = (recenica) => {
//   //   let duzinaStringa = recenica.search(" ");
//   //   return duzinaStringa;
//   let brojac = 0;
//   for (let i = 0; i < recenica.length; i++) {
//     if (recenica[i + 1] === " ") {
//       break;
//     } else {
//       brojac++;
//     }
//   }
//   return brojac;
// };
// console.log(zadatak("Koliko asda"));

/////////////////////////////////////////////////////

// Iz unetog stringa izdvoji n znakova sa leve strane

// const unetiString = (recenica, n) => {
//   if (n > recenica.length) {
//     return recenica;
//   } else {
//     return recenica.substr(0, n);
//   }
// };
// console.log(unetiString("Pera ima devojku", 60));
