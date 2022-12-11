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

// let broj = +prompt("Unesite broj <20");

// if (isNaN(broj)) {
//   console.log("Niste uneli broj");
// } else if (broj >= 20) {
//   console.log("Uneli se broj veci ili jednak 20");
// } else {
//   for (broj; broj < 20; broj++) {
//     console.log(broj);
//   }
// }

// 12.
// Dodaj tacku na kraju recenice

// let recenica = "Neka recenica bez tacke";
// let nova = "";

// for (let i = 0; i <= recenica.length; i++) {
//   if (recenica[i] === undefined) {
//     nova += ".";
//   } else {
//     nova += recenica[i];
//   }
// }
// console.log(nova);

// 13.
// Prebrojati koliko ima malih slova u unetom stringu. Slova koja se koriste u stringu
// pripadaju isključivo engleskoj abecedi.

// let recenica = prompt("Recenica");
// let brojac = 0;

// for (let i = 0; i < recenica.length; i++) {
//   if (recenica[i] === ".") {
//     console.log("Uneli ste slovo koje nije u engleeskoj abecedi");
//   } else if (recenica[i] === recenica[i].toLowerCase()) {
//     brojac++;
//   }
// }
// console.log(brojac);

// 14.
// Ispitati da li u unetom stringu ima više malih ili velikih slova.

// let recenica = prompt("Recenica");

// let brojac1 = 0;
// let broja2 = 0;

// for (let i = 0; i < recenica.length; i++) {
//   if (recenica[i] === recenica[i].toLowerCase()) {
//     brojac1++;
//   } else if (recenica[i] === recenica[i].toUpperCase()) {
//     broja2++;
//   }
// }
// if (brojac1 > broja2) {
//   console.log(
//     `U recenici ima vise malih slova: ${brojac1} nego velikih ${broja2}`
//   );
// } else if (broja2 > brojac1) {
//   console.log(
//     `U recenici ima vise velikih slova: ${broja2} nego malih ${brojac1}`
//   );
// }

// 15.
// Prebrojati koliko ima potvrdnih, upitnih i uzvičnih rečenica u unetom stringu.
// Nekoliko uzastopnih znakova pitanja ili uzvika se računaju kao jedan, '!?' označava uzvičnu,
// a '?!' upitnu rečenicu (gleda se samo prvi znak).
// Uneti string je ispravan, u smislu da se po završetku svake rečenice ubacuje razmak.

// let recenica = prompt("Unesite vise recenica");
// let potvrdnih = 0;
// let upitnih = 0;
// let uzvičnih = 0;

// for (let i = 0; i < recenica.length; i++) {
//   if (recenica[i] === "!" && recenica[i + 1] === "?") {
//     uzvičnih++;
//   } else if (recenica[i] === "?" && recenica[i - 1] === "!") {
//     continue;
//   } else if (recenica[i] === "?" && recenica[i + 1] === "!") {
//     upitnih++;
//   } else if (recenica[i] === "!" && recenica[i - 1] === "?") {
//     continue;
//   } else if (recenica[i] === "!" && recenica[i + 1] === "!") {
//     continue;
//   } else if (recenica[i] === "!") {
//     uzvičnih++;
//   } else if (recenica[i] === "?" && recenica[i + 1] === "?") {
//     continue;
//   } else if (recenica[i] === "?") {
//     upitnih++;
//   } else if (recenica[i] === "." && recenica[i + 1] === ".") {
//     continue;
//   } else if (recenica[i] === ".") {
//     potvrdnih++;
//   }
// }

// console.log(
//   `Upitnih ima ${upitnih}, uzvicnih ima ${uzvičnih}, potvrdnih ima ${potvrdnih}`
// );

// 16.
// Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

// const date = new Date();
// let sati = date.getHours();
// let minuti = date.getMinutes();
// let sekunde = date.getSeconds();
// let dan = date.getDay();
// console.log(dan);
// let satNovi = 0;
// let recenicaDan = "";

// if (dan === 0) {
//   recenicaDan += "Danas je : Nedelja.";
// } else if (dan === 1) {
//   recenicaDan += "Danas je : Ponedeljak.";
// } else if (dan === 2) {
//   recenicaDan += "Danas je : Utorak.";
// } else if (dan === 3) {
//   recenicaDan += "Danas je : Srijeda.";
// } else if (dan === 4) {
//   recenicaDan += "Danas je : Cetvrtak";
// } else if (dan === 5) {
//   recenicaDan += "Danas je : Petak";
// } else if (dan === 6) {
//   recenicaDan += "Danas je : Subota";
// }

// let pmAm = sati >= 12 ? "PM" : "AM";
// console.log(pmAm);
// if (sati >= 12) {
//   satNovi = sati - 12;
// }

// console.log(`Danas je : ${recenicaDan}`);
// console.log(
//   `Trenutno vrijeme je : ${satNovi} ${pmAm}  : ${minuti} : ${sekunde}`
// );

// 17.
// Write a JavaScript program to get the current date.
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

// let date = new Date();
// let mesec = date.getMonth() + 1;
// let datum = date.getDate();
// let godina = date.getFullYear();
// if (mesec < 10) {
//   mesec = "0" + mesec;
// }
// if (datum < 10) {
//   datum = "0" + datum;
// }

// console.log(`${mesec}-${datum}-${godina}`);
// console.log(`${mesec}/${datum}/${godina}`);
// console.log(`${datum}-${mesec}-${godina}`);
// console.log(`${datum}/${mesec}/${godina}`);

// 18.  Write a JavaScript function to concatenates a given string n times (default is 1).

// const function18 = (recenica, n) => {
//   if (n) {
//     return recenica.repeat(n);
//   }
// };
// console.log(function18("rec", 6));

// 19. Write a JavaScript program to create a new string from a given string taking the
// last 3 characters and added at both the front and back. The string length must be 3 or more.

// const function19 = (str1) => {
//   let poslednja3 = str1.substring(str1.length - 3);
//   let novi = poslednja3.concat(` ${str1} ${poslednja3}`);
//   console.log(poslednja3);
//   if (str1.length < 3) {
//     return "string mora imati 3+ karaktera";
//   } else {
//     return novi;
//   }
// };
// console.log(function19("radil ovo"));
