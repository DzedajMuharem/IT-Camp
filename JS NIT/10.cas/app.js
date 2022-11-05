// Stringovi su immutable promenljive, nije moguce vrsiti
// modifikaciju postojeceg stringa.
// Alternativa je da napravimo novi string i tada je
// moguce dodavati vrijednosti koje zelimo.

let rec1 = "Petak";
console.log(rec1[2]);

// toUpperCase(); - metoda koja pretvara cio string u velika slova

rec1.toUpperCase();
let Petak = rec1.toUpperCase();

// console.log(rec1.toUpperCase());
console.log(Petak);

// toLowerCase() - metoda koja pretvara ceo string u mala slova

console.log(Petak.toLowerCase());

let malaSlova = Petak.toLowerCase();
console.log(malaSlova);

const recenica0 =
  "ZelIMo dAtU reCENicu PRIkazati MalIm, isto Tako veLIKIm slovima.";
let prvaRecenica = recenica0.toUpperCase();
let drugaRecenica = recenica0.toLowerCase();

console.log(recenica0);
console.log(prvaRecenica);
console.log(drugaRecenica);

// Ispisati novu recenicu gde ce svaka rec pocinjati velikim slovom

const recenica =
  "sledece subote cemo imati test koji predstavlja kraj prvog ciklusa. Nakon toga cemo vidjeti ko sve nastavlja sa drugim ciklusom it campa.";

let novaRecenica = "";

for (let i = 0; i < recenica.length; i++) {
  if (i === 0) {
    novaRecenica += recenica[i].toUpperCase();
  } else if (recenica[i - 1] === " ") {
    novaRecenica += recenica[i].toUpperCase();
  } else {
    novaRecenica += recenica[i];
  }
}
console.log(novaRecenica);

// Ispisati novu recenicu gde ce svaka rec da se zavrsi velikim slovom

let recenica01 =
  "sledece subote cemo imati test koji predstavlja kraj prvog ciklusa. Nakon toga cemo vidjeti ko sve nastavlja sa drugim ciklusom it campa";

let novaRecenica1 = "";

for (let i = 0; i < recenica01.length; i++) {
  if (i === recenica01.length - 1) {
    novaRecenica1 += recenica01[i].toUpperCase();
  } else if (recenica01[i + 1] === " ") {
    novaRecenica1 += recenica01[i].toUpperCase();
  } else if (recenica01[i + 1] === "." || recenica01[i + 1] === ",") {
    novaRecenica1 += recenica01[i].toUpperCase();
  } else {
    novaRecenica1 += recenica01[i];
  }
}
console.log(novaRecenica1);
