// Domaci:
// 1. Pomocu for petlje napraviti novi niz, koji ce sadrzati samo godine vece od 17.

// 2.
// Prvi deo. Napraviti pomocni niz koji ce sadrzati elemente od oba niza.
// Drugi deo. Napraviti jos jedan pomocni niz koji ce iz prvog dodatnog niza uzeti parne brojeve.
// Treci deo. U drugom pomocnom nizu umetnuti na prva dva mesta 10 i 20.
// Funkcija na kraju treba da vrati dva napravljena pomocna niza.

const DATA1 = [2, 26, 38, 75, 11, 29];
const DATA2 = ['a', 'b', 'c', 'd', 'e'];

// 2.
function zadatak2() {
  const obaNiza = [...DATA1, ...DATA2];

  function drugiNiz2(niz) {
    let parniBrojevi = [];
    for (let i of niz)
      if (typeof i === typeof 123 && i % 2 === 0) {
        parniBrojevi.push(i);
      }
    return parniBrojevi;
  }
  let drugiNiz = drugiNiz2(obaNiza);
  drugiNiz.unshift(10, 20);

  return `[ ${drugiNiz} ],
[ ${obaNiza} ]`;
}
console.log(zadatak2());

// 1.
function zadatak1(niz) {
  let noviNiz = [];
  for (let i of niz) {
    if (i > 17) noviNiz.push(i);
  }
  return noviNiz;
}
console.log(zadatak1(DATA1));
