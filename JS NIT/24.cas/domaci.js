// Napraviti funkciju koja ocekuje cetvorocifren broj, a vraca broj kojem
// su zamenjene prva i treca cifra, kao i druga i cetvrta cifra.
// 4752
// 5247

const domaci = (broj) => {
  let stringBroj = broj.toString();
  console.log(stringBroj);
  let noviString = "";

  //   return `${stringBroj[2]}${stringBroj[3]}${stringBroj[0]}${stringBroj[1]} `;

  if (stringBroj.length !== 4) {
    return "Niste uneli broj sa 4 cifre";
  }
  for (let i = 0; i < stringBroj.length; i++) {
    if (i === stringBroj.length - 1) {
      noviString += stringBroj[1];
    } else if (i === stringBroj.length - 2) {
      noviString += stringBroj[0];
    } else if (i % 2 === 0) {
      noviString += stringBroj[i + 2];
    } else if (i % 2 !== 0) {
      noviString += stringBroj[i + 2];
    }
  }
  console.log(noviString);
  return noviString;
};
console.log(domaci(4752));
