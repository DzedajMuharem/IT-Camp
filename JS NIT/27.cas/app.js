// Math metode //

// Math.min() nam vraca najmanji broj od poslatih. Argumenata moze imati neograniceno
console.log(Math.min(23, 45, 23, -32));

// Math.max() nam vraca najveci broj od poslatih. Argumenta moze imati neograniceno
console.log(Math.max(23, 45, 23, -32));

// Primena kod nizova
const najmanji = Math.min.apply(null, [19, 55, 33]);
console.log(najmanji);

// Math.random() nam daje broj izmedju 0(ukljucena) i 1(nije ukljucena).
console.log(Math.random());

// Broj izmedju 0 i 1
const broj01 = Math.round(Math.random());
console.log(broj01);

// Broj izmedju 0 i 5(ukljucujuci)
const broj02 = Math.round(Math.random() * 5);
console.log(broj02);

// Broj izmedju 50 i 100(ukljucujuci)
// mnozimo sa brojem koji predstavlja opseg, a dodajemo broji koji predstavlja pocetnu vrijednost
const broj03 = Math.round(Math.random() * 50 + 50);
console.log(broj03);

// Math.log(x) - vraca vrijednost logaritma x za osnovu e
// Math.log2(x) - vraca vrijednost logaritma x za osnovu 2
// Math.log10(x) - vraca vrijednost logaritma x za osnovu 10
console.log(Math.log(3));
console.log(Math.log2(32));
console.log(Math.log10(123));
