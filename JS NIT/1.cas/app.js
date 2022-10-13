document.getElementById("paragraf").innerHTML =
  "Ovo je paragraf koji je unet naknadno.";
paragraf = document.getElementById("paragraf");
paragraf.style.backgroundColor = "red";
console.log("Ovo je nas prvi ispis u konzoli");

// TIPOVI PODATAKA U JAVASCRIPTU//
// Za proveru tipa neke varijable(Promenljive) koristi se typeof operator.

// PRIMITIVNI TIPOVI PODATAKA//
// 1. string- Predstavljaju niz karaktera koji je zapisan unutar navodnika
//Obicnih ili duplih
console.log("Ovo je neki tekst napisanih unutra duplih navodnika");
console.log(typeof "Ovo je neki tekst napisanih unutra duplih navodnika");
console.log(`Ovo je neki tekst napisanih unutra cudnih navodnika`);
// 2. number - predstavlja broj koji moze biti zapisan sa ili bez decimalnog zareza(.)
// Ne pravi se razlika izmedju celih realnih i kompleksnih brojeva
console.log(14);
console.log(typeof 14);
console.log(-5.67);
console.log(typeof -5.67);

// 3.BigInt = se koristi za skladistenje brojeva cija granica prelazi granicu number tipa podatka

console.log(BigInt(123123123123123));
console.log(typeof BigInt(123123123123123));

// 4. boolean - logicki entitet koji moze imati dve vrednosti :
// true, false. Najcesce se koristi u kondicionalima ii ma veliku primenu.
daLiPadaKisa = false;
console.log(daLiPadaKisa);
console.log(true);
console.log(typeof true);
console.log(false);
console.log(typeof false);

// 5. undefined - je tip podatka koji se javlja kada imamo deklarisanu neku promenljivu
// ali joj nismo dodelili vrijednost
// U tom slucaju i vrednost i tip promenljive je undefined
let prom1; //deklarisanje promenljive
prom1 = 54; // inicijalizacija (Dodela vrijednosti) promenljive

// 6. null - je tip podatka za nepostojecu promenljivu ili za promenljivu kojoj
// smo dodeli nekorektnu vrijednost
console.log(typeof skola);
