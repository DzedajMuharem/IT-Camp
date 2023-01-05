// Domaci:
// 1. Napraviti funkciju koja pravi novi niz, koji ce sadrzati samo elemente koji su se nalazili na parnim mestima unutar originalnog niza.
// [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
// [2,4,6,8,10,12,14]
// 2. Iz nekog niza izdvojiti sve parne brojeve.(Napraviti novi niz)
// 3. Iz nekog niza izdvojiti sve neparne brojeve.(Napraviti novi niz)
// 4. Iz nekog niza izdvojiti sve pozitivne brojeve.(Napraviti novi niz)

const nizGlavni = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function zadatak1(niz) {
  let nizanovi = [];
  for (let i = 1; i < niz.length; i += 2) {
    nizanovi.push(niz[i]);
  }
  return nizanovi;
}

console.log(zadatak1(nizGlavni));

function zadatak2(niz) {
  let noviNiz = [];
  for (let broj of niz) {
    if (broj % 2 === 0) {
      noviNiz.push(broj);
    }
  }
  return noviNiz;
}
console.log(zadatak2(nizGlavni));

function zadatak3(niz) {
  let noviNiz = [];
  for (let broj of niz) {
    if (broj % 2 !== 0) {
      noviNiz.push(broj);
    }
  }
  return noviNiz;
}
console.log(zadatak3(nizGlavni));
