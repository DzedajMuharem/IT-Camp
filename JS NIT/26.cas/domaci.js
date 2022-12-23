//  Domaci:
// 1.
// Napraviti funkciju koja izracunava obim kruga, gde se
//  poluprecnik unosi od strane korisnika.

// const obimKruga = () => {
//   let poluPrecnik = +prompt("Unesite poluprecnik kruga");
//   let obim = 2 * poluPrecnik * Math.PI;
//   return `Obim kruga iznosi ${obim}`;
// };
// console.log(obimKruga());

// 2.
// Napraviti funkciju koja izracunava povrsinu kruga, gde
//  precnik predstavlja argument funkcije.

const povrsinaKruga = (precnik) => {
  let povrsina = precnik * Math.PI;
  return `Povrsina kruga iznosi ${povrsina}`;
};
console.log(povrsinaKruga(4));

// 3.
// Napraviti funkciju za pretvaranje radijana u stepene.

const radians_stepeni = (radiani) => {
  let konvertovano = radiani * 57.2957795;
  return `${radiani} iznosi ${konvertovano} stepeni`;
};
console.log(radians_stepeni(Math.cos(Math.PI / 2)));
console.log(radians_stepeni(Math.sin(1)));
console.log(radians_stepeni(3));
