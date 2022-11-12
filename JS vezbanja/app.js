// Trebaju da se odrade:///

// 1.
//  Write a JavaScript for loop that will iterate from 0 to 15.
// For each iteration, it will check if the current number is odd or even,
// and display a message to the screen.

// for (let a = 0; a < 16; a++) {
//   if (a % 2 === 0) {
//     console.log(a + " paran");
//   } else if (a % 2 === 1) {
//     console.log(a + " neparan");
//   }
// }

// ------------------------------------------------ //

// 2.
// Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three
// print "Fizz" instead of the number and for the multiples of five print "Buzz".
// For numbers which are multiples of both three and five print "FizzBuzz".

// for (let b = 1; b < 101; b++) {
//   if (b % 3 === 0 && b % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (b % 3 === 0) {
//     console.log("fizz");
//   } else if (b % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(b);
//   }
// }

// ------------------------------------------------ //

// 3.
// Write a JavaScript program to sum the multiples of 3 and 5 under 1000.

// let zbirc = 0;
// for (let c = 0; c < 1001; c++) {
//   if (c % 3 === 0 && c % 5 === 0) {
//     zbirc += c;
//   }
// }
// console.log(zbirc);

// 4.
// Write the java statement that assigns 1 to x if y is greater than 0

// let x = +prompt("Unesite broj x");
// let y = +prompt("Unesite broj y");
// if (isNaN(x) || isNaN(y)) {
//   console.log("Uneli ste nesto sto nije broj");
// } else if (y > 0) {
//   console.log((x += 1));
// } else {
//   console.log(x);
// }

// -------------------------------------------------//

// 5.
// Ispisati dvostruku vrijednost prirodnih brojeva od 10 do 6 unazad.

// let vrijednoste = 0;
// for (let e = 10; e > 6; e--) {
//   vrijednoste = e * 2;
//   console.log(vrijednoste);
// }

// -------------------------------------------------//

// 6.
// Suma dvostruke vrijednosti prvih 5 prirodnih brojeva.

// let sumaf = 0;
// for (let f = 1; f < 6; f++) {
//   sumaf += f * 2;
// }
// console.log(sumaf);

// // 7.
// // Suma parnih prirodnih brojeva od k do n.

// let broj1g = +prompt("Unesite prvi broj");
// let broj2g = +prompt("Unesite drugi broj");
// let sumag = 0;

// if (isNaN(broj1g) || isNaN(broj2g)) {
//   console.log("Niste uneli broj");
// } else if (broj1g < broj2g) {
//   for (broj1g; broj1g <= broj2g; broj1g++) {
//     if (broj1g % 2 === 0) {
//       sumag += broj1g;
//     }
//   }
// } else if (broj1g > broj2g) {
//   for (broj2g; broj2g <= broj1g; broj2g++) {
//     if (broj2g % 2 === 0) {
//       sumag += broj2g;
//     }
//   }
// } else if (broj1g == broj2g) {
//   console.log("Uneli ste iste brojeve");
// }

// console.log(sumag);

// ------------------------------------------------- //

// 8.
// Write a JavaScript function to parameterize a string.
// console.log(string_parameterize("Robin Singh from USA."));
// "robin-singh-from-usa"

// let recenicah = "Robin Singh from USA.";
// let recenicahM = recenicah.toLowerCase();
// let novaRecenica = "";

// for (let h = 0; h < recenicahM.length; h++) {
//   if (recenicahM[h] === " ") {
//     novaRecenica += "-";
//   } else {
//     novaRecenica += recenicahM[h];
//   }
// }
// console.log(novaRecenica);

// 9.
// Write a JavaScript function to find a word within a string.

// ------------------------------------------------- //

// 10.
// Write a JavaScript function to repeat a string a specified times.

// ------------------------------------------------- //

// 11.
// Write a JavaScript function to convert a string in abbreviated form.

// abbrev_name = function (str1) {
//   var split_names = str1.trim().split(" ");
//   if (split_names.length > 1) {
//     return split_names[0] + " " + split_names[1].charAt(0) + ".";
//   }
//   return split_names[0];
// };
// console.log(abbrev_name("Robin Singh"));

// 12.
// Ispisati sve brojeve manje od 20, krenuvsi od broja koji unosi korisnik

let broj = +prompt("Unesite broj <20");

if (isNaN(broj)) {
  console.log("Niste uneli broj");
} else if (broj >= 20) {
  console.log("Uneli se broj veci ili jednak 20");
} else {
  for (broj; broj < 20; broj++) {
    console.log(broj);
  }
}
