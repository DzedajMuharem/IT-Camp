// 31. Write a JavaScript program to find the largest of three given integers.

const zadatak31 = (br1, br2, br3) => {
  if (br1 > br2 && br1 > br3) {
    return "br1 je najveci broj";
  } else if (br2 > br1 && br2 > br3) {
    return "br2 je najveci broj";
  } else if (br3 > br1 && br3 > br2) {
    return "br3 je najveci broj";
  }
};
console.log(zadatak31(2, 5, 0));

// const najveciBroj = function (prvi, drugi, treci) {
//     let max;
//     if (prvi >= drugi && prvi >= treci) {
//       max = prvi;
//     } else if (drugi >= prvi && drugi >= treci) {
//       max = drugi;
//     } else {
//       max = treci;
//     }
//     return `Najveci broj je ${max}.`;
//   };

// 32. Write a JavaScript program to find a value which is nearest to 100 from two different given integer values.

const zadatak32 = (br1, br2) => {
  let brojac = 0;
  let brojac1 = 0;
  if (br1 >= 100) {
    for (let i = br1; i >= 100; i--) {
      brojac++;
    }
  } else for (i = br1; i <= 100; i++) brojac++;

  if (br2 >= 100) {
    for (let i = br2; i >= 100; i--) {
      brojac1++;
    }
  } else for (i = br2; i <= 100; i++) brojac1++;
  if (brojac > brojac1) {
    return "drugi broj je blizi";
  } else if (brojac < brojac1) {
    return "Prvi broj je blizi";
  }
};
console.log(zadatak32(165, 178));
// const zadatak32 = (br1, br2) => {
//   if (br1 === br2) {
//     return "oba broja su podjednako udaljena od broja 100";
//   } else if (100 - br1 < 100 - br2) {
//     return "br1 je blizi broju 100";
//   } else if (100 - br1 > 100 - br2) {
//     return "br2 je blizi broju 100";
//   }
// };
// console.log(zadatak32(65, 78));

// 33. Write a JavaScript program to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.

const zadatak33 = (br1, br2) => {
  if (br1 <= 60 && br1 >= 40 && br2 <= 60 && br2 >= 40) {
    return "oba broja se nalaze izmedju 40/60";
  } else if (br1 <= 100 && br1 >= 70 && br2 <= 100 && br2 >= 70) {
    return "Oba broja se nalaze u intervalu od 70/100";
  } else {
    return "Ne nalaze se u datim intervalima";
  }
};
console.log(zadatak33(50, 85));

// 34. Write a JavaScript program to find the larger number from the two given positive integers
// the two numbers are in the range 40..60 inclusive.

const zadatak34 = (br1, br2) => {
  if (br1 <= 60 && br1 >= 40 && br2 <= 60 && br2 >= 40) {
    if (br1 > br2) {
      return "br1 je veci broj";
    } else if (br1 < br2) {
      return "br2 je veci broj";
    } else {
      return "brojevi su jednaki";
    }
  } else {
    return "uneti brojevi nisu izmedju 40 i 60";
  }
};
console.log(zadatak34(50, 40));
