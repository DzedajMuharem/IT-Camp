// Napravi metodu koja vraca niz bez duplikata, mora da se pazi na case insesitivity

function zadatak1(niz) {
  let noviNiz = [];

  if (typeof niz[0] === 'number') {
    for (let [i, value] of niz.entries()) {
      if (!noviNiz.slice(0, i).includes(value)) {
        noviNiz.push(value);
      }
    }
    return noviNiz;
  }
  let malaSlova = niz.map(x => x.toLowerCase());
  let drugiNovi = [];
  let entri = malaSlova.entries();
  for (let [i, v] of entri) {
    if (!noviNiz.slice(0, i).includes(v)) {
      noviNiz.push(v);
      drugiNovi.push(niz[i]);
    }
  }
  return drugiNovi;
}
const brojevi = [4, 9, 16, 25, 29, 4, 9, 25];
const string = ['hasan', 'dzEnan', 'dzEnan', 'HAsan'];
console.log(zadatak1(string));

function zadatak2(niz, niz2) {
  let poruka;
  for (let [i, value] of niz.entries()) {
    if (i < 4) {
      poruka = `${i + 1}${niz2[i]} choice is ${value}`;
      console.log(poruka);
    } else {
      poruka = `${i + 1}th choice is ${value}`;
      console.log(poruka);
    }
  }
}
zadatak2(
  ['Green', 'Blue', 'Red', 'Black', 'White', 'Pink'],
  ['st', 'nd', 'td', 'th']
);
