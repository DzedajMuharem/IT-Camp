// var a = 10
// let b = 20
// const c = 30
// d = 40;

// HOISTING //

// Hoisting predstavlja deklarisanje promenljivih pre same dodele vrijednosti (u pozadini).
// Prilikom citanja koda se izvlaci deklaracija na vrhu

// var prom1 // Ovo radi JS sam, u pozadinu, povlaci deklaraciju promenljive na vrh, pre dodele vrijednosti
prom1 = 23;
console.log(prom1);

// var prom1; // Mozemo izvrsiti naknadnu deklaraciju vec koriscenje promenljive preko var keyword(a i ne mora, jer JS to radi
// u pozadini prilikom citanja koda)

// let prom1; // Kasnije deklarisanje promenljive preko let keyworda nije moguce

// const prom1 // Kasnije deklarisanje promenljive preko const keyworda nije moguce
