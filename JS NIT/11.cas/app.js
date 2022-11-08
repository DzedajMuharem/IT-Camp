// Napraviti novu recenicu koja ce imati isti tekst, ali bez razmaka

// let recenica = "Omare jesi li spremio test";
// let novaRecenica = "";
// let brojac = 0;

// for (let i = 0; i < recenica.length; i++) {
//   if (recenica[i] === " ") {
//     brojac++;
//   }
// }
// console.log(brojac);
// for (let i = 0; i < recenica.length; i++) {
//   if (recenica[i] !== " ") {
//     novaRecenica += recenica[i];
//   }

//   //   if (recenica[i] === " ") {
//   //     // novaRecenica += "";
//   //     continue;
//   //   } else {
//   //     novaRecenica += recenica[i];
//   //   }
// }
// console.log(novaRecenica);

// Napravite recenicu gde se umesto a pise t. Dok ako se posle slova a nalazi slovo n pisace d umesto a

let recenica = prompt("Unesite recenicu");
let novaRecenica = "";
for (let i = 0; i < recenica.length; i++) {
  if (recenica[i] === "a" && recenica[i + 1] === "n") {
    novaRecenica += "d";
  } else if (recenica[i] === "a") {
    novaRecenica += "t";
  } else {
    novaRecenica += recenica[i];
  }
}
console.log(novaRecenica);
