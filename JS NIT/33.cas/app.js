// indexOf() metoda vraca poziciju elementa koji predstavlja argument date metode.

const niz = ['Hatida', 'Bakir', 'Amer', 'Bakir', 'Alen'];

const bakir = niz.indexOf('Bakir');
console.log(bakir + 1);

// indexOf() metoda vraca -1 ako se neki element ne nalazi u nizu
const omar =
  niz.indexOf('Omar') === -1 ? 'Nije dolazio' : niz.indexOf('Omar' + 1);
console.log(omar);

// Drugi argument predstavlja poziciju od koje trazimo
const hatida = niz.indexOf('Hatidza', 1);
console.log(hatida);

// lastIndexOf() metoda vraca poziciju poslednjeg elementa koji predstavlja argument date metode.
// lastIndexOf() metoda vraca - 1 ako se neki element ne nalazi u nizu

const lastBakir = niz.lastIndexOf('Bakir');
console.log(lastBakir);

// Array.from() nam vraca niz, koji se pravi od nekog objekta koji ima length

const noviNiz = Array.from('SVAKO SLOVO CE BITI POSEBAN ELEMENT NIZA');
console.log(noviNiz);

// includes() metoda nam vraca boolean u zavisnosti od toga da li se argument nalazi u nizu

console.log(niz.includes('Emin'));

// keys() metoda vraca Array iteratora. Object sa kljucevima(indeksima) nekog niza.

const indeksi = niz.keys();
console.log(indeksi);

for (let index of indeksi) {
  console.log(index);
}

// entries() metoda Array iteratora. Object sa key/value parovima nekog niza.

const entries = niz.entries();
console.log(entries);

for (let entry of entries) {
  console.log(entry);
}

// napisi funckiju koja vraca rvi element niza, ili n elementa niza(u zavisnosti od parametra)

function zadatak(niz, broj) {
  let noviNiz = [];
  if (broj > niz.length) {
    return 'Niz nema toliko elemenata';
  } else if (broj === undefined) {
    noviNiz = niz.slice(0, 1);
  } else {
    noviNiz = niz.slice(0, broj);
  }

  return noviNiz;
}
console.log(zadatak(niz));

const getElement = (niz, n) => {
  // ako stavimo n=1 npr onda ako ne stavimo n u parametar onda ce nam n uvek biti 1
  if (n > niz.length) {
    return niz;
  } else if (n === undefined) {
    return niz[0];
  } else {
    return niz.slice(0, n);
  }
};
console.log(getElement(niz, 4));
console.log(getElement(niz, -4));
