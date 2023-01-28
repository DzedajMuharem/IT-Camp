// Zadatak:
// Unutar postojeceg objekta dodati nova svojstva:
// 1. trenutnaBrzina: 0,
// 2. maksimalnaBrzina: 260,
// 3. povecanjeBrzine: (metoda koja uzima jedan argument),
// 4. smanjenjeBrzine: (metoda koja uzima jedan argument),
// 5. koci: (metoda koja dodeljuje 0 za vrednost trenutne brzine).

const myCar = {
  id: 1,
  marka: 'Audi',
  model: 'a4',
  boja: 'Crvena',
  pogon: 'prednji',
  menjac: 'automatski',
  kontakt: [0622222, 02033322],
  servis: {
    datum: '04,maj',
    km: 23000,
    serviser: 'Pasovic',
  },
  udaran: true,
};

myCar.trenutnaBrzina = 0;
myCar.maksimalnaBrzina = 260;
myCar.povecanjeBrzine = function (par1) {
  if (this.trenutnaBrzina + par1 <= 260) this.trenutnaBrzina += par1;
  else return 'Maksimalna brzina je 260';
};
myCar.smanjenjeBrzine = function (par1) {
  if (this.trenutnaBrzina - par1 > 0) this.trenutnaBrzina -= par1;
  else return 'Brzina ne mse biti manje od 0';
};
myCar.koci = function () {
  this.trenutnaBrzina = 0;
  return this.trenutnaBrzina;
};

console.log(myCar.povecanjeBrzine(1230));
myCar.povecanjeBrzine(100);
myCar.smanjenjeBrzine(50);
console.log(myCar.trenutnaBrzina);
myCar.koci();
console.log(myCar.trenutnaBrzina);
