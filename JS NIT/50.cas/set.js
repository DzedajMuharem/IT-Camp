// JS Set je kolekcija unikatnih vrijednosti.

const mySet = new Set([14, 'asd', true, [14, 'niz']]);
console.log(mySet);

// Metode Setova:

// 1. Za kreiranje seta koristimo new Set([])
// 2. Za dodavanje elemenata koristimo add() metoda

mySet.add('add verdnost');
console.log(mySet);

// 3. za brisanje elemenata koristimo delete() metodu:
mySet.delete(true);
console.log(mySet);

// 4. da bi proverili da li set sadrzi doredjenu vrijednost korisitmo has() metodu:

console.log(mySet.has(false));

// 5. forEach() metoda sluzi za iteraciju kroz set:

mySet.forEach(element => console.log(element));

// 6. values() metoda vraca iterator sa vrijednostima iz seta

console.log(mySet.values());

// 7. za proveru duzine seta se koristi size property

console.log(mySet.size);

// 1. nacin
const duplikat = function (niz) {
  let noviNiz = [];
  for (let i = 0; i < niz.length; i++) {
    if (!noviNiz.includes(niz[i])) {
      noviNiz.push(niz[i]);
    }
  }
  console.log(noviNiz);
};
duplikat([14, 'asd', 14, true, [14, 'niz']]);

// 2. nacin

function newArr(niz) {
  const newSet = new Set(niz);
  const noviNiz = [...newSet];
  return noviNiz;
}
console.log(newArr([14, 'asd', 14, true, [14, 'niz']]));

// Mape u JS sadrze key-value parove gde keys(kljucevi) mogu biti bilo kog tipa podatka.
// Mape pamte originalni redosled elemenata.

const myMap = new Map([
  ['apple', 60],
  ['orange', 198],
  [true, 19],
  [false, -19],
]);

console.log(myMap);

// Glavne metode kod mapa:

// 1. Za kreiranje mape se koristi new Mop;

// 2. za setovanje vrijednosti koristimo set()

// Pravljenje novog key-value para
myMap.set('strawberry', 240);
console.log(myMap);

// Izmena vrijednosti za postojeci key.
myMap.set(false, 0);
console.log(myMap);

// 3. get() metoda koristi se za dobijanje vrijednosti odredjenog kljuca
console.log(myMap.get('apple'));

// 4. delete() metoda sluzi za brisanje key-value para
myMap.delete('orange');
console.log(myMap);

// 5. has() metoda provjerava na osnovu kljuca da li je odredjeni key-value par prisutan u mapi.
console.log(myMap.has(true));
console.log(myMap.has('annanas'));

// 6. forEach() metoda sluzi za iteraciju kroz mapu:
myMap.forEach(el => console.log(el));

// 7. entries() metoda vraca key-value parove u iteratoru.

console.log(myMap.entries());

// 8. Za proveru duzine mape koristimo size

console.log(myMap.size);

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

const zadatak = function (mapa) {
  const events = [...new Set(gameEvents.values())];
  console.log(events);
  gameEvents.delete(64);

  const time = [...gameEvents.keys()].pop();
  console.log(time);
  console.log(
    `An event happened, on average, every ${time / gameEvents.size} minutes`
  );

  for (const [min, event] of gameEvents) {
    const half = min <= 45 ? 'FIRST' : 'SECOND';
    console.log(`[${half} HALF] ${min}: ${event}`);
  }
};
zadatak(gameEvents);
