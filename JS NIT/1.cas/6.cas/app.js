// Ispisati prvih 10 brojeva u konzoli, jedan ispod drugog.
// console.log(1); // pa do 10
// console.log(2);

// Petlja(loop) predstavlja nacin da se neki kod izvrsi (uz odredjene uslove) vise puta.

// for (statement1; statement2; statement3) {
// Kod za izvrsavanje u svakoj iteraciji
// }
// statement1 - Predstavlja definisanje promenljive koja ce da predstvlja iterator

// statement2 - Predstavlja uslov(granica) do koje vrijednosti ce iterator da ide

// statement3 - Predstavlja povecanje ili smanjenje iteratora koje se desi na kraju svake iteracije

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Ispisati brojeve od 1 do 10 izuzev broja 2 i 5

// I nacin
for (let i = 1; i <= 10; i++) {
  if (i !== 2 && i !== 5) {
    console.log(i);
  }
}

// II nacin

// continue keyword (rezervisna rec) ako se nadje u nekoj iteraciji zapravo oznacava
// da se ta iteracija zanemari i da se nastavi sa sledecom

for (let i = 1; i < 11; i++) {
  if (i === 2 || i === 5) {
    continue;
  } else {
    console.log(i);
  }
}

// break keyword (rezervisana rec) predstavlja da od tog trenutka for petlja prestaje sa radom

// Ispisti sve brojeve od 1-10. Ako je neki broj deljiv sa 7 neka se prekine petlja

for (let i = 1; 1 < 11; i++) {
  if (i % 7 === 0) {
    break;
  } else {
    console.log(i);
  }
}

// Ispisati sve parne brojeve od 1-20 na dva nacina

for (let e = 2; e < 21; e += 2) {
  console.log(e);
}

for (let e = 1; e < 21; e += 1) {
  if (e % 2 === 0) {
    console.log(e);
  }
}
