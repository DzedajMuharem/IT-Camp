// 1. Osnovni Tipovi Podaaka
// (Primitivni tipovi podataka)
// (Vrijednosni tipovi podataka)

// 2. (Referentni Tipovi Podataka)
// Neprimitivni tipovi podataka

let brojGodina = 26;
let brojTvojihGodina = brojGodina;

console.log(brojTvojihGodina);

brojTvojihGodina = 22;
console.log(brojTvojihGodina);

console.log(brojGodina);
// --------------------------------------------------------------------------- //
let godine = [20, 21, 18, 17, 17, 19, 18, 17, 18, 19];

let noveGodine = godine;
// Dele isti prostor u memoriji i preoman na jednom znaci da ce se promeniti i drugi
console.log(noveGodine);

noveGodine.push(34);
console.log(noveGodine);
console.log(godine);

// 1. zadatak sa w3resouurces
// 7. zadatak sa w3resouurces
