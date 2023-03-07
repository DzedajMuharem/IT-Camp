//
// Promise je JS objekat koji predstavlja mjesto za rezultate asinhrone funkcije sve dok traje izvrsavanje asihrone operacije

const cizburger = new Promise((resolve, reject) => {
  const response = 404;
  if (response >= 200 && response < 300) resolve();
  else reject();
});
cizburger
  .then(() => console.log('Dobio sam cizburger'))
  .catch(() => console.log('Nisam dobio obrok'))
  .finally(() => console.log('Obecanje je zavrseno.'));

const zadatak1 = new Promise((resolve, reject) => {
  let niz = ['neki niz', 1, 'koji treba', true, 'da vratimo'];
  if (niz.length > 2) resolve(niz);
  else reject(new Error('Niz nema duzinu vecu od 2'));
});

// Chain efekat se postize tako sto vrijednost koja treba biti koriscena u narednoj calalback funkciji then metode se mora naci u return prethodne callback funkcije, prethodne then metode

zadatak1
  .then(niz => {
    console.log(`Dobili ste niz: ${niz}`);
    const parni = niz.filter(br => br % 2 === 0);
    return parni;
  })
  .then(parniNiz => console.log(`Filtrirani niz je: ${parniNiz}`))
  .catch(err => console.log(err))
  .finally(() => console.log('Promise je zavrsena'));

const zadatak2 = new Promise((resolve, reject) => {
  const objekat = {
    firstName: 'Hasan',
    lastName: 'Mujanovic',
    age: 18,
  };
  if (objekat.age >= 18) resolve('Punoletni ste');
  else reject(objekat.age);
});

zadatak2.then(msg => console.log(msg)).catch(err => console.log(err));

const zadatak3 = function (string) {
  let string2 = string.toLowerCase();
  let samogalsnici = '';
  for (let i = 0; i < string2.length; i++) {
    if (
      string2[i] === 'a' ||
      string2[i] === 'e' ||
      string2[i] === 'i' ||
      string2[i] === 'o' ||
      string2[i] === 'u'
    )
      samogalsnici += string2[i];
  }

  const zadatak3Promise = new Promise((resolve, reject) => {
    if (samogalsnici.length > 10) resolve('String zadovoljava uslov');
    else reject(new Error('String ne zadovoljava uslov'));
  });

  zadatak3Promise
    .then(msg => console.log(msg))
    .catch(err => console.log(err))
    .finally(() => console.log('Funkcija je zavrsena'));
};

zadatak3('Neka recenica');
