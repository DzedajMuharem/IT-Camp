// JS objekti su mutable (promenljivi) //

const dzenan = {
  ime: 'Dzenan',
  prezime: 'Mecinovic',
  godine: 15,
};

const dzenan2 = dzenan;

console.log(dzenan2);
dzenan.prezime = 'Kosuta';
dzenan.godine = 26;
console.log(dzenan2);
console.log(dzenan);

// Brisanje svojstava iz objekta:

const mitar = {
  ime: 'Mitar',
  prezime: 'Vranic',
  godine: 20,
  skola: 'Prva Tehnicka',
};

// 1. nacin
// delete mitar.skola; // delete keyword se koristi za brisanje elementa
// delete obj.property brise i key i value
console.log(mitar);

// 2. nacin
// delete mitar[skola];

// Napomena
// Vrijednosti nekog objekta mogu biti:
// Objekti,
// Nizovi,
// Funkcije...

// Konvertovanje objekta u niz:
const niz = Object.values(mitar);
console.log(niz);

// Dodavanje novih svojstava

mitar.punoletnost = true;
console.log(mitar);
