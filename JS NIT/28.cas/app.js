// Date objects //

// Kreiranje datuma //
//Kreiranje se vrsi preko new keyworda

// Kreiranje datuma mozemo izvrsiti na 4 nacina:

// 1. new Date()
const trenutnoVrijeme = new Date();
console.log(trenutnoVrijeme);

// 2. new Date(year, month, day, hours, minutes, seconds, miliseconds)
// Ako pravimo datume moramo imati min. dva argumenta, a max. 7
const rodjenjeDatum = new Date(2005, 0, 24, 17, 34, 54, 34);
console.log(rodjenjeDatum);
// meseci se racunaju od 0 - 11
const newdate1 = new Date(2013, 7);
console.log(newdate1);

// 3. Slanje jednog argumenta unutar new Date()
// Ovako napravljen datum je zapravo dodat broj milisekundi na 1.1.1970.
// Defaultna veijednost za datume u JS je 1970-01-01T00:00:00:miliseconds
const newdate12 = new Date(2013);
console.log(newdate12);

// 4. Slanjem stringa u Date() kao argument. String ce biti parse-ovan i dobicemo
// datum na osnovu toga
let datum = new Date("2017 Jan 25");
console.log(datum);

// Jedna i dve cifre godine ce biti intrepretirane kao:
// 19xx ili 190x.

datum = new Date(86, 0);
console.log(datum);

datum = new Date(6, 0);
console.log(datum);

// Date.now() je metoda koja nam vraca broj milisekundi od 1.1.1970. do trenutnog vrijemena
const datenow = Date.now();
console.log(datenow);

// Date.parse(neki datum) je metoda koja nam vraca broj milisekundi od 1.1.1970. do poslatog datuma
console.log(Date.parse(rodjenjeDatum));
