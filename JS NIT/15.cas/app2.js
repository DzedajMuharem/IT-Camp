// STRINGOVI //

// Stringovi su immutable vrijednosti (nepromenljive). Sto znaci
// da ako hocemo neki slican string da dobijemo moramo napraviti novi.

// Metode (Funkcije koje primenjujemo za datu promenljivu) //

// 1. length - nam sluzi za dobijanje duzine stringa

const recenica = "ne dobijate kamerun!";
console.log(recenica.length);

// Pristupanje odredjenom karakteru ide preko indexa
// Indexiranje ide od 0 do ukupna duzina stringa -1
console.log(recenica[3]);

// Koriscenje \ (backslash) karaktera.

// String zapisujemo na 3 nacina:
// 1. ' '
// Rec koja treba da se nadje pod navodnicma mora bit pod obicnim navodnicima
// ako je string okruzen duplim navodnicima, ili obrnuto
const string1 = "Danas je bilo lijepo vrijeme";
// ne radi zbog prettiera

// \:
const string4 = 'Danas je bilo "lijepo" vrijeme';
console.log(string4);
// 2. ""
const string2 = "Danas je bilo lijepo vrijeme";
// 3. ``
const string3 = "Danas je bilo lijepo vrijeme";

// \ na kraju reda

const string5 =
  "Ovo ce biti jedan dugacki string. \
   Poenta je da prikazemo jedan te isti string u vise redova";

console.log(string5);
// sa \ ne mozemo nastaviti liniju koda vec samo string
// \n prikazivanje stringa:
const string6 =
  "Ovo ce biti jos jedna duga recenica.\nDa vidimo da li \n radi beksles n";

console.log(string6);

// Postoje 3 metode za ekstraktovanje stringa:

// 1. slica(start, end) end nije ukljucen u opseg

// 2. substring(start, end) razlika u odnosu na slice je da substring ne prihvata negativne indekse
// 3. substr(start, length)

// Racunanje ide od 0.

const string7 = "Danas je bilo lijepo vrijeme.";
console.log(string7.slice(0, 5));
console.log(string7.slice(-8, -1));

console.log(string7.substring(0, 5));
console.log(string7.substr(0, 8));
