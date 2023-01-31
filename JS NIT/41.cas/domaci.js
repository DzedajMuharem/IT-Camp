// Domaci zadatak:
// // Napraviti objekat sa sledecim svojstvima:
// 1. firstName,
// 2. lastName,
// 3. language,
// 4. setLanguage - metoda za setovanje jezika,
// 5. setNickName - metoda (svaka osoba ima nadimak sastavljen od prva dva slova
// imena i prva dva slova prezimena)

const zadatak1 = {
  firstName: 'Hasasn',
  lastName: 'Mujanovic',
  laungage: ['Serbian'],
  setLaungage: function (lang) {
    if (!this.laungage.includes(lang)) this.laungage.push(lang);
  },
  setNickName: function () {
    this.nickName =
      this.firstName.toUpperCase().slice(0, 1) +
      this.firstName.toLowerCase().slice(1, 2) +
      this.lastName.toLowerCase().slice(0, 2);
  },
};
zadatak1.setLaungage('English');
zadatak1.setLaungage('French');
zadatak1.setLaungage('French');
zadatak1.setLaungage('Polish');
zadatak1.setNickName();
console.log(zadatak1.laungage);
console.log(zadatak1.nickName);
// 2. Zadatak
const radnik = {
  firstName: 'Dzenan',
  lastName: 'Kosuta',
  fullname: function () {},
  adresa: {
    ulica: 'avnoja',
    broj: 'bb',
    grad: 'Novi Pazar',
    getAdress: function () {
      // vraca Dzenan Kosuta zivi u ulici Avnoja u Novom Pazaru.
      return `${radnik.firstName} ${radnik.lastName} zivi u ulici ${this.ulica} u ${this.grad}`;
    },
  },
};
console.log(radnik.adresa.getAdress());
// 3. Zadatak
const automobil = {
  marka: 'Audi',
  model: 'Q7',
  boja: 'Bela',
  pogon: 'quattro',
  menjac: 'Automatik',
  km: 240000,
  vlasnik: [062321552, 0630123],
  garaza: {
    parking: 'JKP Servis',
    vikend: 'od 17 free',
    satnaKarta: '50',
    dnevnaKarta: '200',
    mesecnaKarta: '2000',
    platiZa: function (od, to) {
      const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
      const firstDate = new Date(od);
      const secondDate = new Date(to);

      const diffDays =
        Math.round(Math.abs((firstDate - secondDate) / oneDay)) *
        Number(automobil.garaza.dnevnaKarta);
      return `Za dnevnu kartu za parking od ${od} do ${to} potrosicemo ${diffDays}Din`;
    },
  },
};
console.log(automobil.garaza.platiZa([2023, 1, 30], [2023, 2, 10]));
