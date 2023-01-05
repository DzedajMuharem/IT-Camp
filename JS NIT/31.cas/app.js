// unshift() metoda dodaje na pocetak niza jedan ili vise elemenata.

const niz = ["Cetvrtak", "Petak", "Subota"];

niz.unshift("Srijeda");
console.log(niz);

// unshift() prikazuje novu duzinu niza.

niz.unshift("Ponedeljak", "Utorak");
console.log(niz);

// shift() metoda brise prvi i niza i svim ostalim elementima se smanjuje indeks

niz.shift();
console.log(niz);

console.log(niz.shift());
console.log(niz);

// delete keyword za brisanje oderdjenog elementa

console.log(niz.length);

delete niz[3];
console.log(niz);

// preko delete kwyeorda mozemo izbrisati bilo koji element iz niza ali na taj nacin
// ostavljamo rupu u nizu (undefined vrijednost)

// concat() metoda se koristi za spajanje nizova. S tim sto kao argument mozemo poslati i string,
// ne mora biti iskljucivo string, string ce postati element niza

const muskarci = ["Mitar", "Tarik", "Dzenan"];
const devojke = ["Miona", "Merisa", "Hatidza"];

const grupa = muskarci.concat(devojke, "Mehmed", "Omar");
console.log(grupa);

// Iz naseg niza grupa napraviti dva niza muskarci i devojke, s tim sto se Omar ne sme naci nigde

// function zadatak1(niz2) {
//   let muskarciNiz = [];
//   let devojkeNiz = [];
//   for (let i of niz2) {
//     if (i === "Omar") {
//       continue;
//     } else if (i[i.length - 1] === "a") {
//       devojkeNiz.push(i);
//     } else {
//       muskarciNiz.push(i);
//     }
//   }
//   return devojkeNiz + " Drugi niz " + muskarciNiz;
// }

// console.log(zadatak1(grupa));

// Napraviti funckiju koja pravi novni niza, koji ce sadrzati samo elemente koji se se
// nalazili na neparnim pozicijama unutar originalnog niza\\

function zadatak2(niz) {
  let nizanovi = [];
  for (let i = 0; i < niz.length; i++)
    if (i % 2 === 0) {
      nizanovi.push(niz[i]);
    }
  // else {
  //   continue;
  // }
  return nizanovi;
}

console.log(zadatak2(grupa));

// za domaci funkcija koja daje elemente na parnom mestu

// iz nekog niza izdvojiti sve pozitivne brojeve

let nekiniz = [1, 3, 5, 3, 4, 6234, -234, -12, 32, -123, 4];
function pozitivni(niz) {
  let noviniz = [];
  for (let i = 0; i < niz.length; i++) {
    if (niz[i] > 0) {
      noviniz.push(niz[i]);
    }
  }
  return noviniz;
}
console.log(pozitivni(nekiniz));
