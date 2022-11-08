// OPERATORI U JS-u //

// Operatore delimo u 6 grupa:

// 1. Aritmeticke operatori; (Aritmetic operators);
// 2. Operatori dodeljivanja vrijednosti (Assignments operators);
// 3. String operatori (String operators);
// 4. Operatori poredjenja (Comparison operators);
// 5. Logicki operatori ( Logical operators);
// 6. Tip operatori

// 1. Aritmeticke operatori; (Aritmetic operators);
// 1.1 + operator sabiranja
console.log(4 + 5);
// 1.2 - op. oduzimanja
console.log(4 - 5);
// 1.3 * op. mnozenja
console.log(4 * 5);
// 1.4 / op. deljenja
console.log(8 / 2);
// 1.5 ** op. stepenovanja
console.log(2 ** 3 + 2);
// 1.6 % Modulo (ostatak deljenja dva broja)
console.log(11 % 3);
console.log(12 % 3);

// Uslov za parnost:
// i % 2 === 0
// Uslov za neparnost
// i % 2 !== 0

// 1.7 ++ increment (Povecava vrijednost za 1)
let m = 5;
// postfiksni operator
m++; // x = x+1
console.log(m);
//prefiksni operator
let y = 11;
console.log(++y);

// 1.8 -- Decrement (Smanjuje vrijednost za 1)
let z = 99;
// Postfiksni operator
z--; // z = z-1
console.log(z);
// Prefiksni operator
console.log(--z);

// 2. Operatori dodeljivanja vrijednosti (Assignments operators);

// 2.1 = - Dodeljivanje vrijednosti nekoj promenljivoj

// 2.2 += - Dodavanje odredjene vrijednosti na postojecu promenljivu
m += 5; // m = w+5
console.log(m);

// 2.3 -= - Oduzimanje odredjene vrijednosti na postojecu promenljivu
z -= 3; // z = z-3
console.log(z);

// 2.4 *= - Mnozenje odredjene vrijednosti na postojecu promenljivu
z *= 2; // z = z*2
console.log(z);

// 2.5 /= - Deljenje odredjene vrijednosti na postojecu promenljivu
z /= 5; // z = z/5
console.log(z);

// 2.6 %= - Modul odredjene vrijednosti na postojecu promenljivu
let x = 6;
x %= 2; // x = Ostatak deljenja x/2
console.log(x);

// 2.7 **= - Stepenovanje odredjene vrijednosti na postojecu promenljivu
let p = 3;
p **= 2; // p = p na kvadrat
console.log(p);

// 3. String operatori (String operators);

// Jedan od nacina za spajanje stringova je koriscenjem + operatora.

let prviDeo = "Danas je Omar";
let drugiDeo = "doneo pizzu";
console.log(prviDeo + " " + drugiDeo);
console.log(Boolean(prviDeo + " " + drugiDeo));

// Neki slucajevi kod sabiranja:
console.log("Omar" + 3); // Rezultat spajanja stringa i broja je Uvek string
console.log(3 + "Omar");
console.log(typeof (3 + "Omar"));
console.log(3 + "2"); // Bez obzira sto 2 moze biti pretvoren
// u korektan broj, nece se izvrsiti sabiranje

// JS ce pokusati da prevede string u broj i da izvrsi racunsku operaciju
console.log(4 - "2"); // 2
console.log(4 / "2"); // 2
console.log("3" * 2); // 6
console.log(2 ** "3"); // 8

// Ako JS ne uspe da prevede string u broj, rezultat ce biti NaN
console.log(21 / "7dana"); // Not a Number (NaN) je vrijednost za nekorektan broj

// 4. Operatori poredjenja (Comparison operators);

// 4.1 == - Provera jednakosti vrijednosti

let k = 5;
let j = 7;
let g = k;

console.log(g == k);
console.log(k == j);

g += 2;
console.log(g); // Ima novi vrijednost
console.log(k); // Ostaje na staru vrijednost

// 4.2 === - Proverava jednakost tipa i jednakost vrijednosti
// BOLJE KORISTITI ===
let d = "5";
console.log(d == k);
console.log(k === d); // pritom proverava i tip

// 4.3 != - Proverava razlicitost vrijednosti

console.log(j != g);

// 4.4 !== - Ispituje da li je razlicita vrijednost ILI razlict tip
console.log(j != d);

// 4.5 > - da li je prva vrijednost veca od druge:
console.log(d > k);

// 4.6 < - da li je prva vrijednost manja od druge:
console.log(d < k);

// 4.7 >= - da li je prva vrvijednost veca ili jednaka drugoj:
console.log(9 >= 9);

// 4.8 <= - da li je prva vrijednost manja ili jednaka drugoj:
console.log(8 <= 4);

// 4.9 ? - ternarni operator

// uslov ? (radnja koja se izvrsava ako je uslov zadovoljen) : (Radnja koja se izvrsava ako uslov nije zadoovljen)

let isSunny = false;

isSunny
  ? console.log("Vrijeme je suncano." + " Ponesite naocare.")
  : console.log("Vrijeme je kisovito." + " Ponesite kisobran.");

// 5. Logicki operatori ( Logical operators);

// && - and (i) - zahteva zadovoljavanje svih uslova
let prom1 = 4;
let prom2 = 19;
let prom3 = -3;

prom1 > 0 && prom2 > 0 && prom3 > 0
  ? console.log("Sve tri promenljive su pozitivni brojevi")
  : console.log("Nisu sve promenljive pozitivne");

// 5.2 || or (ili) - Zahteva zadovoljavanje bar jednog od ponudjenig uslova

prom1 > 0 || prom2 > 0 || prom3 > 0
  ? console.log("Nasli smo bra jednu promenljivu koja je veca od nule")
  : console.log("Nismo nasli jednu promenljivu");

// 5.3 ! - not(Okrece vrijednost => iz true u false i obratno)

console.log(!Boolean(prviDeo + " " + drugiDeo));

// 6. Tip operatori

// 6.1 typeof se korisit za ispitivanje  tipa odredjenje promenljive
isSunny = false;
console.log(typeof isSunny);

// 6.2 instanceof - za proveru da li je neka promenljiva insatnca objekta npr.
const obj = {
  ime: "Omar",
  prezime: "Semsovic",
};
console.log(obj instanceof Object);
