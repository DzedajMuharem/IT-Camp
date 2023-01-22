// Na osnovu stringa koji unosi korisnik napraviti niz, gde cemo ispitati da li se jagoda nalazi unutar tog niza. Ako se jagoda ne nalazi unutar niza, funkcija neka vrati taj niz poredjan abecedno, s tim sto ce se na prvom mestu dodati broj 10, a na poslednjem broj 100.
// Dok ako se jagoda nalazi unutar niza vratiti poziciju gde se ona nalazi.

function zadatak1() {
  let poruka = prompt('unesite');
  let niz = poruka.split(' ');
  let abcd;
  if (!niz.includes('jagoda')) {
    abcd = niz.sort();
  } else {
    return niz.indexOf('jagoda');
  }
  abcd.push(100);
  abcd.unshift(10);
  return abcd;
}
console.log(zadatak1());
