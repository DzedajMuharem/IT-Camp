// Domaci:
// Napraviti objekat student koji ce da ima vrednosti (po zelji), svojstava:
// ime, prezime, broj indeksa, ocene (niz svih ocena koje student ima u
// trenutnoj godini), prosekOcena (funckija koja na osnovu ocene vraca prosek
// datih ocena).
const student = {
  ime: 'Hasan',
  prezime: 'Mujanovic',
  brojIndeksa: 12,
  ocene: [10, 7, 9, 3, 8, 9, 10],
  prosekOcena() {
    return this.ocene.reduce((acc, ocena) => acc + ocena) / this.ocene.length;
  },
};
console.log(student.prosekOcena());
