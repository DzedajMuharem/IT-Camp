// filter() metoda kreira novi niz sa onim elementima koji su prosli test.
// Novodobijeni niz moze imati maksimalno elemenata kao niz na koji se primenjuje metoda, takodje moze biti prazan niz

const godine = [19, 20, 17, 17, 16, 15, 19, 20];
const punlotni = godine.filter(function (element) {
  return element > 17;
});
console.log(punlotni);

// Napraivyr novi niz koji filtrira postojeci i vraca novi sa onim elementima starog nize,gde je drugo slovo e

const niz = [
  'Bakir',
  'Haris',
  'Amer',
  'Dzenan',
  'Hasan',
  'Aladin',
  'Nikola',
  'Merisa',
  'Emin',
  'Aleni',
  'Miona',
  'Mitar',
];

const novi = niz.filter(function (element) {
  return element[1] === 'e';
});
console.log(novi);
const novi1 = niz.filter(function (element) {
  return element.length >= 5;
});
console.log(novi1);

const newArr = ['Rec', 'Dve Reci', 26, true, false, [true, false], 49, true];
const novi2 = newArr.filter(function (element) {
  return typeof element === 'boolean';
});
console.log(novi2);

// values > 2 => values *7
// values >2 and values <8 => (values*4) / 2

const noviniz = [2, 5, 4, 7, 14, 23, 5, 42, 5];

function zadatak1(broj) {
  const noviFilter = noviniz.filter(function (element) {
    return element > 2;
  });
  const novifitler2 = noviniz.filter(function (elemenata) {
    return elemenata > 2 && elemenata < 8;
  });
  const mapped2 = novifitler2.map(x => {
    return (x * 4) / 2;
  });
  const mapped = noviFilter.map(x => {
    return x * 7;
  });
  const vracaSeNiz = mapped.concat('Novi', mapped2);
  return vracaSeNiz.filter(function (elemenata) {
    return elemenata < 10;
  });
}
console.log(zadatak1(noviniz));

// reduce() metoda vraca jednu vrijednost. Iteracija se vrsi kroz ceo niz

// sabrati elemente niza

// const godine = [19, 20, 17, 17, 16, 15, 19, 20];

const zbirGodina = godine.reduce(
  (previousValue, currentValue) => previousValue + currentValue
);
console.log(zbirGodina);

// dodati pocetnu vrijednost 350

const zbirIznosa = godine.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  350
);
console.log(zbirIznosa);

function zadatak2(broj) {
  const zbirGodina2 = broj.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  );
  let return2 = zbirGodina2 / broj.length;
  return return2;
}
console.log(zadatak2(godine));

const miles = [55, 78, 140, 121, 96, 100, 67];

function zadatak3(broj) {
  const kilometri = broj
    .map(x => x * 1.61)
    .reduce((prvi, drugi) => prvi + drugi);
  return kilometri;
}
console.log(zadatak3(miles));

// 19.zadatak

const array = [1, 0, 2, 3, 4];
const array1 = [3, 5, 6, 7, 8, 13];

function zadatak4(broj, broj2) {
  const length = broj.length > broj2.length ? broj.length : broj2.length;
  let zbir = [];
  for (let i = 0; i < length; i++) {
    if (broj[i] === undefined) {
      zbir.push(broj2[i]);
    } else if (broj2[i] === undefined) {
      zbir.push(broj[i]);
    } else {
      zbir.push(broj[i] + broj2[i]);
    }
  }
  return zbir;
}
console.log(zadatak4(array, array1));
