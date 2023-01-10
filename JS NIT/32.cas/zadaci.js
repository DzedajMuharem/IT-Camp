// Za dati niz izvrsiti:
// Sortiranje niza od najveceg ka najmanjem broju,
// Sortiranje niza od najmanjeg ka najvecem broju,
// Napraviti funkciju koja vraca najveci element niza,
// Napraviti funkciju koja vraca najmanji element niza (na 2 nacina).
const niz = [-5, 6, 10, 45, 99, -44];

niz.sort((a, b) => b - a);
console.log(niz);

niz.reverse();
console.log(niz);

// Najveci brojevi
niz.sort((a, b) => b - a);
console.log(niz[0]);

function najveciBroj(niz) {
  let max = niz[0];
  for (let i of niz) {
    if (max < i) {
      max = i;
    }
  }
  return max;
}
console.log(najveciBroj(niz));

// Najmanji brojevi

niz.reverse();
console.log(niz[0]);
function najmanjBroj(niz) {
  let minimum = niz[0];
  for (let i of niz) {
    if (minimum > i) {
      minimum = i;
    }
  }
  return minimum;
}
console.log(najmanjBroj(niz));
