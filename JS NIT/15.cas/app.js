// TRUTHY AND FALSY VALUES

const isSunny = false;

// Kraca sintaksa

if (isSunny) {
  console.log("Napolju je suncano");
} else {
  console.log("napolju nije suncano");
}

// Postoji samo 8 FALSY vrijednosti i one su:

// 1. false;
// 2. '' - prazan string
// 3. 0
// 4. -0
// 5. 0n
// 6. undefined
// 7. null
// 8. NaN

// Napraviti funkciju gde se trazi unos od strane korisnika
// i vraca poruka da li je uneta vrijednost truthy ili falsy vrijednost

function istina() {
  let broja = +prompt("Unesite broj");
  if (broja) {
    return "truthy je";
  } else {
    return "falsy je";
  }
}
console.log(istina());
