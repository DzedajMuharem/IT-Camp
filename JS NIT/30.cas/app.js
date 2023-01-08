// Niz predstavlja strukturu podataka koja moze sadrzati vise od jedne vrijednosti
// Nizovi u JS su heterogeni (mogu sadrzati elemente razlicitih tipova)

const niz = ['Mitar', 'Vranic', 20, 'punoletan', true];
console.log(niz);

// Dozvoljeno je, cesto i prakticnije pisati svaki element niza u novom redu

// const niz2 = [
//     "Mitar",
//     "Vranic",
//      20,
//       "punoletan",
//        true
// ]

// Mozemo prvo kreirati  prazan niz pa nakon toga dodavati rucno elemente

const automobili = [];
automobili[0] = 'Audi';
console.log(automobili);
automobili[1] = 'Passerati';
console.log(automobili);
automobili[5] = 'Golf';
console.log(automobili);

console.log(automobili[3]);

// Istu sintaksu mozemo iskoristiti za promeni vrijednosti elementa

automobili[0] = 'Mercedes';
console.log(automobili);

// Niz mozemo definisati preko new keyworda

const niz3 = new Array('Hasan', 'Omar', 'Emin');
console.log(niz3);

// Radi jednostavnosti, citljivosti koda, i brzeg izvrsavanja je bolje koristit [] nego new keyword.

const niz4 = [40];
console.log(niz4);

// new Array ce napraviti niz od 40 praznih mesta
const niz5 = new Array(40);

// Pristupanje elementima se vrsi preko indexa
console.log(automobili[1]);

console.log(typeof automobili);

// 1. Array.isArray(potencijalnoNiz)
console.log(Array.isArray(automobili));
console.log(Array.isArray('string'));

// 2. instanceof Array (potencijalnoNiz)
console.log(automobili instanceof Array);

// Elementi niza mogu biti bilo koje vrijednosti: date, array, boolean, number,

// Za proveru duzine niza koristimo length

console.log(automobili.length);

// Za dodavanje elementa na kraju niza se koristi push() metoda

const dani = ['Ponedeljak', 'Utorak'];
dani.push('Srijeda');
console.log(dani);
// dani.push(...) vraca novu duzina=u niza
console.log(dani.push('Cetvrtak', 'Petak'));
console.log(dani);

dani[dani.length] = 'Subota';
console.log(dani);

// Nizovi su zapravo vrsta objekata koji imaju brojevne indekse.

// Za pretvaranje niza u string mozemo iskoristiti dve metode

// 1. toString()
// 2. join()

// 1.
const daniStr = dani.toString();
console.log(daniStr);
console.log(typeof daniStr);

// obrnuti postupak
let noviniz = daniStr.split(',');
console.log(noviniz);

// 2.
const danistr2 = dani.join();
console.log(danistr2);
console.log(typeof danistr2);
// Dobijanje stringa i stavljanje nekog znaka izmedju elemenata niza koji smo pretvorili u string
const danistr3 = dani.join(': Murga je dobio sertifikat, ');
console.log(danistr3);

// pop() metoda brise poslednji element iz niza

const Subota2 = dani.pop();
console.log(dani);
console.log(Subota2);

// dani.pop() vraca vrijednost izbrisanog elementa
