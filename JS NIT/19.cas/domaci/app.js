// Zadatak pokloni

const poklon = (k, n) => {
  let brojPoklona = n / k;
  if (20 < k < 1 && 1000 < n < 0) {
    return `Niste uneli korektne vrijednosti`;
  } else {
    return `Mozemo zapokovati: ${Math.floor(brojPoklona)}`;
  }
};
console.log(poklon(20, 1000));
