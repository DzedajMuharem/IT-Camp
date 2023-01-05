// Iz datog niza ispitati koliko elemenata je tipa string,
// koliko tipa number,
// koliko tipa boolean,
// koliko elemenata je zapravo niz?
const nizz = [
  "jagoda",
  25,
  true,
  "mandarina",
  [1, 2, 3],
  "ananas",
  49,
  694,
  "tresnja",
];
let stringg = 0;
let numberr = 0;
let booleann = 0;
let arrayy = 0;
// for (let i = 0; i < nizz.length; i++) {
//   if (typeof nizz[i] === typeof "stringneki") {
//     stringg++;
//   } else if (typeof nizz[i] === typeof true) {
//     booleann++;
//   } else if (typeof nizz[i] === typeof 23) {
//     numberr++;
//   } else if (typeof nizz[i] === typeof ["neki", "niz"]) {
//     arrayy++;
//   }
// }
// console.log(`U datom nizu ${stringg} elementa su string, ${numberr} elementa su broj,
// ${booleann} elementa su boolean, ${arrayy} elementa su niz`);

// Novi zapis for petlje, koji se odnosi na sve iterirajuce objekte.
// for (let i of nizz) {
//   console.log(i);
// }

function types(niz) {
  let stringg = 0;
  let numberr = 0;
  let booleann = 0;
  let arrayy = 0;
  for (let item of niz) {
    if (typeof item === typeof "stringg") {
      stringg++;
    } else if (typeof item === typeof true) {
      booleann++;
    } else if (typeof item === typeof 23) {
      numberr++;
    } else if (item instanceof Array) {
      arrayy++;
    }
  }
  return `U datom nizu ${stringg} elementa su string, ${numberr} elementa su broj,
${booleann} elementa su boolean, ${arrayy} elementa su niz`;
}
console.log(types(nizz));
