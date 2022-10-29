// 1.
// Ispisati neparne brojeve od 1 do 20 na dva nacina

for (let i = 1; i < 21; i += 2) {
  console.log(i);
}
console.log("------------------------------------");

for (let i = 1; i < 21; i++) {
  if (i % 2 === 1) {
    console.log(i);
  }
}
console.log("------------------------------------");

// 2.
// Ispisti sve brojeve od 50 d0 100 koji su deljivi sa 5

for (let e = 50; e < 101; e++) {
  if (e % 5 === 0) {
    console.log(e);
  }
}
console.log("------------------------------------");
// 3.
// Ispisati dvostruku vrednost prirodnih brojeva od 6 do 14

for (let b = 6; b < 15; b++) {
  console.log(b * 2);
}
console.log("------------------------------------");

// 4.
// Suma neparnih prirodnih brojeva od 10 do 20

let suma = 0;

for (let c = 10; c < 21; c++) {
  if (c % 2 !== 0) {
    suma += c;
  }
}
console.log(suma);
