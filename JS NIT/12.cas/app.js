// Funkcija u JS predstavlja blok koda koji se izvrsava samo
// prilikom pozivanja iste.
// Mozemo je definisati putem:
// 1. function keyworda
// 2. arrow function

// 1. FUNCTION KEYWORD:

// Pravimo funckiju koja sabira broj 3 i 5:

function zbirTriIPet() {
  const zbir = 3 + 5;

  return zbir;
  // Sve nakon return u function scope-u se zanemaruje
}

console.log(zbirTriIPet());

// Pravimo funckiju koja sabira dva broja

function zbirDvaBroja(par1, par2) {
  // par1 i par2 predstavljaju parametre funkcije
  return par1 + par2;
}
console.log(zbirDvaBroja(5, 22)); // 5 i 22 predstavljaju argumente funkcije

// Napraviti funkciju koja vraca zbir kvadrata dva broja.

function kvadrat(br1, br2) {
  return br1 ** 2 + br2 ** 2;
}
console.log(kvadrat(2, 2));

// Defaultna vrijednost nekog parametra:
// Napraviti funckiju koja vraca zbir kvadrata dva broja. Ako se izostavi
// drugi argument, funkcija ga racuna kao 0

// 1. Nacin
function kvadratZbir(a, b) {
  if (b === undefined) {
    return a ** 2;
  } else {
    return a ** 2 + b ** 2;
  }
}
console.log(kvadratZbir(2));
console.log(kvadratZbir(2, 4));

// 2. Nacin

// Defaultne vrijednosti se stavljaju na KRAJU
// Ne moze neka defaultna vrijednost biti definisana pre obavezne

function kvadratZbir2(x, y = 0) {
  return x ** 2 + y ** 2;
}

console.log(kvadratZbir2(2));
console.log(kvadratZbir2(2, 6));

// Jos jedan nacin definisanja funkcije preko function keyworda:

const AritmetisckaSredina = function (
  parametar1 = 1,
  parametar2 = 1,
  parametar3 = 1
) {
  return (parametar1 + parametar2 + parametar3) / 3;
};

console.log(AritmetisckaSredina(4, 3, 5));
console.log(AritmetisckaSredina(4, 5));
console.log(AritmetisckaSredina());

// Napravite f-ju povrsina koja uzima dvije vrijednosti.
//Ako su vrijednosti jednake da vraca povrsinu kvadrata uz odredjenu poruku
// dok su razlicite vrijednosti da vraca pov pravougaonika uz odredjenu poruku

function povrsina(f, g) {
  if (f === g) {
    return "Vrijednosti su jednake pa povrsina kvadrata iznosi: " + f ** 2;
  } else {
    return "Vrijednosti nisu jednake pa povrsina pravougaonika inzosi:" + f * g;
  }
}
console.log(povrsina(2, 2));
