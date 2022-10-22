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

// 7. Symbol - novi tip podataka u JS koji za koristi za odredjivanje jedinstvene ili anonimne vrijednosti

x = Symbol("Danas je lepo vreme");
console.log(x);
y = Symbol("Danas je lepo vreme");
console.log(y);
console.log(x === y); //razlikuju se

// Primitivni tipovi podattaka se koriste kada imamo pormenljivu(varijablu),
// sa samo jednom vrednoscu

//=========================================================/

// NEPRIMITIVNI TIPOVI PODATAKA //

// Za promenljive(varijable) koje mogu skladistiti vise vrijednosti, ili neke kompleksne vrijednosti, se koriste
// neprimitivni tipovi podatka

// Kada ispitujemo tip podatka za neku neprimitivnu promenljivu u JS-u
// dobijamo object za tip.

// 1. Nizovi (Arrays) - neprimitivni tip podatka koji nam sluzi za skladistenje vise vrijednosti
// U JS-u niz moze sadrzati elemente razlicitog tipa

niz1 = ["mitar", "dzenan", "haris", "hamed", "nikola"];
console.log(niz1);

niz2 = ["Mitar", 15, false];
console.log(niz2);

//Jos jedan nacin definisanja niza:
niz3 = new Array("mitar", "dzenan", "haris", "hamed", "nikola");
console.log(niz3);

// 2. Objekti (Objects) - su GLAVNI NEPRIMITIVNI TIP PODATKA U JS-U
// Objekti se zapisuju po principu name:value pair (ime:vrijednost par).

Object1 = {
  ime: "Mehmed",
  prezime: "Kucevic",
  godine: 15,
  skola: "Dva heroja",
  punoletnost: false,
};
console.log(Object1.godine);

Object2 = new Object({
  ime: "Amin",
  Prezime: "Nicevic",
  godine: 18,
  skola: "Gimnazija",
  punoletnost: true,
});
console.log(Object2);

// 3. Setovi (Sets) - oni su slicni nizovima sa razlikom da set ne moze da sadrzi duplikate
set1 = new Set(["Alen", "Hasan", "Miona", "Amir", "Alen"]); // Nisu dozvoljeni duplikati
console.log(set1);

// 4. Mape (Maps) - Su slicne objektima sa nesto drugacijim nacinom definisanja

Map1 = new Map([
  ["Jabuke", 50],
  ["Kruske", 60],
  ["Jagode", 80],
]);
console.log(Map1);
