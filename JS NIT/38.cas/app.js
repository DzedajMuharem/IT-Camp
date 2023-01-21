// every() - metodaa proverava da li su svi elementi niza zadovoljili uslov.
// every() - metoda vraca  boolean

// Da li su svi u grupi punoletni?
const godine = [16, 19, 18, 19, 15, , 17, 21, 20, 17];
const isEveryAdult = godine.every(godine => godine > 17);
// console.log(isEveryAdult);

const niz = [
  'Tarik',
  'Bakir',
  'Haris',
  'Aladin',
  'Hamed',
  'Mehmed',
  'Hatidza',
  'Hasan',
  'Miona',
  'Mitar',
];

const duzina = niz.every(niz => niz.length >= 5);
// console.log(duzina);

// some() metoda proverava da li bar jedan element niza zadovoljava uslov
// some() metoda vraca boolean

const isSomeName = niz.some(some => some.length === 9);
// console.log(isSomeName);

const isSomeName2 = niz.some(some => some.length === 7);
// console.log(isSomeName2);

function metoda(niz) {
  for (let i of niz) {
    if (i.length === 7) {
      return true;
    } else {
      continue;
    }
  }
  return false;
}
console.log(metoda(niz));
console.log(metoda(['Nije sedam karaktera', 'opet nije sedam karaktera']));

// find() metoda vraca vrijednost prvog elementa koji je prosao test funkcije
const brojevi = [4, 9, 16, 25, 29];

// Koji je priv element niza veci od 18
const nadji = brojevi.find(broj => broj > 18);
console.log(nadji);

// Ako nijedan element nije zadovoljio uslov find metoda vraca undefined

// findIndex() metoda vraca index prvog elementa koji je zadovoljio uslov
// ako nijedan element ne zadovoljava uslov metoda vraca -1

const nadji2 = brojevi.findIndex(broj => broj > 18);
console.log(nadji2);

const nekaMetoda = Array.from('ABCDE');
console.log(nekaMetoda);
