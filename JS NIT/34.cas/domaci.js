// Domaci:
// 1. Pomocu map() metode napraviti novi niz stringova ciji ce elementi da budu
// ispisani velikim slovima.

// 2. Napraviti novi niz koji sadrzi kvadrate elemenata postojeceg niza:

// 3. Napraviti novi niz koji sadrzi kvadratne korene elemenata postojeceg niza.

// 4.
// const brojevi = [-5, 4, 3, 10, 14, -5];
// Napraviti novi niz koji ce sve negativne brojeve pomnoziti sa (-1), a pozitivne kvadrirati.

const niz = ['tarik', 'hamed', 'emin', 'bakir', 'dzenan'];

// zadatak1
const noviNiz = niz.map(element => {
  return element.toUpperCase();
});
console.log(noviNiz);

// zadatak 2
const brojevi = [-5, 4, 3, 10, 14, -5];

const kvadrateElemenata = brojevi.map(broj => {
  return broj ** 2;
});
console.log(kvadrateElemenata);

// zadatak 3

const kvadrateKorena = brojevi.map(broj => {
  if (broj < 0) {
    return 'broj je negaivan';
  } else {
    return Math.sqrt(broj);
  }
});
console.log(kvadrateKorena);

// zadatak 4

const noviNiz4 = brojevi.map(broj => {
  if (broj < 0) {
    return broj * -1;
  } else {
    return broj ** 2;
  }
});
console.log(noviNiz4);
