let recenica = "Danas cemo raditi neke operacije sa stringovima";
console.log(recenica);
// console.log(typeof recenica);

let rec = "Omar";

// Pristupanje nekom karakteru stringa se vrsi preko indexa.
// Indeksiranje ide od nule.
// U svakom iterirajucem objektu, poslednji karakter ima index:
// (Ukupna duzina stringa) -1

console.log(rec[0]);
console.log(rec[2]);

// Metoda za dobijanje ukupne duzine stringa je length:
let duzinaRecenice = recenica.length;
console.log(duzinaRecenice);
console.log(rec.length);

// Primer
// Svaki karakter neke recenice neka se ispise jedan ispod drugog.

// Kod ovakvih zadataka iterator predstavlja index pomocu kojeg pristupamo karakteru stringa.

// recenica = "Danas cemo raditi neke operacije sa stringovima";
// for (let i = 0; i < recenica.length; i++) {
//   console.log(recenica[i]);
// }

// Na osnovu unete recenice od stane korisnika ispisati recenicu tako da svaki karakter ide
// jedan ispod drugog. Dok ako je neki karakter jednak = 'a', neka se ispise broj 5.
// A u slucaju da je karakter jednak 's', neka se ne ispise nista

let recenica2 = prompt("Ispisite recenicu");

for (let i = 0; i < recenica2.length; i++) {
  // console.log(recenica2[i]);
  if (recenica2[i] === "a") {
    console.log(5);
  } else if (recenica2[i] === "s") {
    continue;
  } else {
    console.log(recenica2[i]);
  }
}
