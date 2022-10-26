// INTERAKCIJA SA KORISNIKOM //

// prompt() metoda nam sluzi za komunikaciju sa korisnikom.

const ime = prompt("Unesite vase ime:");
console.log(ime);

const godine = prompt("Unesite svoju starost:");
console.log(godine);
// Sve sto korisnik unese je tipa string
console.log(typeof godine);
// Sad je neophodno godine(string) prevesti u broj

// Postoje dva nacina za prevodjenje stringa u broj

// 1. Number(Promenljiva)
const brGodina = Number(godine);
console.log(brGodina);
console.log(typeof brGodina);

// 2. +promenljiva
const brGodina2 = +godine;
console.log(brGodina2);
console.log(typeof brGodina2);

const visina = +prompt("Unesite svoju visinu u cm");
console.log(visina);
