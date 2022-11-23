// 1.
// Traziti od korisnika unos nekog realnog broja. Nakon toga ispisati u konzoli kvadrat tog
// broja (pozeljno je obuhvatiti slucaj kada korisnik ne unese odgovarajucu vrednost).

function unosBroja(a) {
  if (isNaN(a)) {
    return "Niste uneli odgovarajucu vrijednost";
  } else {
    return a ** 2;
  }
}
console.log(unosBroja(3));
console.log(unosBroja("asdas"));

// 3.
// let recenica;
// recenica = “Nakon danasnjeg testa cemo znati ko ce nastaviti sa drugim ciklusom it campa”
// Na osnovu date recenice napraviti i ispisati novu recenicu tako da:
//
// (i)	se svi samoglasnici pretvore u velika slova;
// (ii)	na kraju se doda ‘.’
// (iii)	ostali karakteri se ne menjaju.
// Dakle, treba se ispisati:
// “NAkOn dAnAsnjEg tEstA cEmO znAtI kO cE nAstAvItI sA drUgIm cIklUsOm It cAmpA.”

function recenica(b) {
  const samoglasnici = "aeiou";
  let novaRecenica = "";
  for (let i = 0; i <= b.length; i++) {
    if (samoglasnici.includes(b[i])) {
      novaRecenica += b[i].toUpperCase();
    } else if (b[i] === undefined) {
      novaRecenica += ".";
    } else {
      novaRecenica += b[i];
    }
  }
  return novaRecenica;
}
console.log(recenica("bilo koja recenica"));
