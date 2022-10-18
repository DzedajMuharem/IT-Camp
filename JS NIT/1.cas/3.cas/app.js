// 1. var
var x; // Deklarisanje promenljive x (Obezbedjivanje lokacijske memorije za promenljivu x)
x = 15; // Inicijalizacija promenljive x (Dodela vrijednosti unared vec deklarisanoj promenljivoj x)
// var x = 15;
console.log(x);

// Redaklrasianje promenljive x definisane putem var ketworda je dozvoljeno bilo gde u prostoru.
var x;
//Reinizijalizacija promenljive x definisane putem var keyword je dozvoljeno bilo gde u prostoru.
x = 22;
console.log(x);

// 2. let - definisanje promenljive za koju postoji mogucnost promene vrijednosti
let y; // Deklarisanje promenljive y (Obezbedjivanje lokacijske memorije za promenljivu y)
y = 14; // Inicijalizacija promenljive y (Dodela vrijednosti unared vec deklarisanoj promenljivoj y)
// let y = 14;
console.log(y);

// let a, b, c; // korektan nacin deklarisanja

// Redeklarisanje promenljive definisane pute let keyword nije dozvoljeno ako govorimo o istom prostoru
// let y;

// Reinizijalizacije promenljive y definisane putem let keyword je dozvoljena bilo gde u prostoru
y = 12;
console.log(y);

// Promenljive koje su definisane putem let ili const keyword nam obezbedjuju blockscope.
{
  //   console.log(y); - Prepoznaje se poremnljiva iz Global Scope-a
  // Redeklaracija promenljive definisane putem let, u drugom prostoru je dozvoljena.
  let y = 22;
  console.log(y);
  y = 33;
}
// Ispusuje se poslednje dodeljenja vrijednost unutar Global Scope-a
console.log(y);

// 3. const
// Promenljive definisane putem const keyword moraju biti deklarisane i inicijalizovanes.
// const z;
// z = 22
// - ne moze ovako

const z = 29;
console.log(z);

// NIJE DOZVOLJENA NI REDEKLARACIJA NI REINICIJALIZACIJA

// Redeklarisanje promenljive definisane putem const keyword nije dozvoljeno kada se radi o istom prostoru
// const z = 23;

// Reinicijalizacije promenljive definisane const keywordom nije dozvoljeno kada se radi o istom prostoru
// z = 23;
// console.log(z);

// Sve karakteristike vae za promenljive definisane putem let keyword-a u Block Scope-u vazi i za
// promenljive definisane putem const keyword-a

const cars = ["Audi", "BMW", "Mercedes"];
