// Izracunati rastojanje izmedju dve tacke u prostoru ako su zadate koordinate
// krajnih tacaka

const zadatak1 = (a1, b1, c2, d2) => {
  let kvadratRastojanjaX = (a1 - c2) ** 2;
  let rastojanjeY = (b1 - d2) ** 2;
  let resenje = Math.sqrt(kvadratRastojanjaX + rastojanjeY);
  return resenje.toFixed(2);
};
console.log(zadatak1(2, 7, 5, 2));
// Zadatak: Bolji u dve discipline

const zadatak2 = (mate1, program1, mate2, program2) => {
  let prvi = mate1 + program1;
  let drugi = mate2 + program2;
  if (prvi === drugi) {
    if (program1 > program2) {
      return `Prvi takmicar je pobednik zbog toga sto ima vise poena u programiranju`;
    } else if (program1 < program2) {
      return `Drugi takmicar je pobednik zbog toga sto ima vise poena u programiranju`;
    } else {
      return `Pobednik je prvi takmicar zbog prethodnih uspeha`;
    }
  } else if (prvi > drugi) {
    return `Prvi takmicar ima vise bodova`;
  } else {
    return `Drugi takmicar ima vise bodova`;
  }
};
console.log(zadatak2(20, 20, 20, 20));
console.log(zadatak2(30, 20, 20, 20));
console.log(zadatak2(30, 20, 20, 30));
console.log(zadatak2(20, 20, 30, 20));

// napisi funkciju koja ti daje najveci zajednicki delilac dva broja

const zadatak3 = (br1, br2) => {
  let nzd;
  if (br1 >= br2) {
    for (let i = 1; i <= br2; i++) {
      if (br1 % i === 0 && br2 % i === 0) {
        nzd = i;
      }
    }
    return nzd;
  } else {
    for (let i = 1; i <= br1; i++) {
      if (br1 % i === 0 && br2 % i === 0) {
        nzd = i;
      }
    }
    return nzd;
  }
};
console.log(zadatak3(15, 10));
console.log(zadatak3(10, 15));

// napisi funkciju koja ti daje najmanji zajednicki sadrzilac dva broja

// 2 , 4 nzs je 4
// 4, 5 nzs je 20

// const NZS = (broj1, broj2) => {
//   const nzsbroj = broj1 > broj2 ? broj1 : broj2;
//   let najmanjis;
//   for (let i = nzsbroj; i < Number.MAX_VALUE; i++) {
//     if (i % broj1 === 0 && i % broj2 === 0) {
//       najmanjis = i;
//       return `NZS brojeva ${broj1} i ${broj2} je ${najmanjis}`;
//       break;
//     }
//   }
// };
// console.log(NZS(2, 4));

const nzs = (br1, br2) => {
  const veci = Math.max(br1, br2);
  let i = veci;
  let nzs;
  while (true) {
    if (i % br1 === 0 && i % br2 === 0) {
      nzs = i;
      break;
    }
    i++;
  }
  return nzs;
};
console.log(nzs(2, 4));
console.log(nzs(5, 4));
console.log(nzs(6, 4));
