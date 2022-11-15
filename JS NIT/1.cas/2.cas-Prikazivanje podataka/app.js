// JS moze prikazati podatke na nekoliko nacina:

// 1. inner html
document.getElementById("p").innerHTML = "Hello world";

// 2. write()

document.write(); //Najcesci nacin za testiranje nekog koda

// 3. alert() - upozornje
alert("Zdravo");

// 4. console.log() - ispisivanje u konzoli
console.log("Poruka za ispis u konzoli");

// Pravila nazivanja promenljivih:

// Promenljiva u JS-u mora poceti sa nekim od sledecih znakova

// 1. Slovo (Veliko ili malo) A-Z, a-z
// 2. $ znak moze biti pocetni karakter neke promenljive
// 3. _

//Broj moze biti u nazivu pormenljive ali promenljiva NE SME POCETI brojem

// prome1 = 'Neki string' // Ovako moze
// 2prom = 'Neki string2' //Nije korektno

// prosek ocena = 4.14
prosekOcena = 4.14; //Preporucen nacin zapisivanje promenljivih
prosek_ocena = 4.14; // Korektno
ProskOcena = 4.14; //Korektno

// POSTOJE 4 NACINA za deklarisanje neke pormenljive:

// 1. dodeljivanje vrijednosti bez da smo prethodno izvrsili deklaraciju
// prom = 12

// Koriscenjem var keyword (rezervisane rijeci)
// var je koriscena na starijim browserima
// var a = 5

// 3. Koriscenjem let keyword (rezervisane rijeci)
// let se najcesce koristi kada postoji sansa da se vrijednost date promenljive mijenja.

// 4.Koriscenjem const keyword (rezervisane rijeci)
// const se koristi za definisanje konstanti koje nece menjati vrijednost

// Promenljive (varijable) predstavljaju kontejnere za skladistenje vrijednosti
