// KONDICIONALI //

// if (uslov1) {
// Kod za izvrsavanje prvog uslova u slucaju ispunjenja uslova
// } else if (uslov2) {
// Kod za izvrsavanje drugog uslova u slucaju ispunjenja uslova
// } else {
// Kod za izvrsavanje u slucaju neispunjenja uslova
// }

// Ako je broj godina unet od strane korisnika >= 18 neka se ispise poruka,
// 'punoletni ste', u suprotnom, 'maloletni ste'
// const godine = +prompt("Unesite broj vasih godina");
// const godine = Number(prompt("Unesie broj vasih godina"));

// if (godine >= 18) {
//   console.log("Punoletni ste");
// }
// //  else if (godine < 18 && godine > 0) {
// //     console.log("Maloletni ste");
// //   }
// else if (godine < 0) {
//   console.log("Seljam alejkum");
// } else if (godine < 18) {
//   console.log("Maloletni ste");
// } else {
//   console.log("Niste uneli broj godina");
// }

// if(godine < 0){
//     console.log('Seljam alejkum')
// }
// if (godine < 12) {
//   console.log("Vi ste decijeg doba");
// } else if (godine >= 12 && godine < 18) {
//   console.log("Vi ste maloletni");
// } else if (godine >= 18 && godine < 40) {
//   console.log("Vi ste punoletni");
// } else if (godine >= 40) {
//   console.log("Vi ste zrela osoba");
// } else {
//   alert("Niste uneli broj godina");
// }

// Switch naredba

// switch (izraz) {
//   case x:
//     //Blok koda koji se izvrsava u slucaju da je izraz = x
//     break;
//   // break se ne sme izostaviti jer bi se izvrsio kod narednog slucaja
//   // sto svakako nije nesto sto zelimo da se desi
//   case y:
//     //Blok koda koji se izvrsava u slucaju da je izraz = y
//     break;
//   case z:
//     // Blok koda koji se izvrsava u slucaju da je izraz = z
//     break;
//   default:
//   //Blok koda koji se izvrsava u slucaju da izraz nije jednak ni x, ni y, ni z
// }

// Ukljucuje se i 12 i 15
const broj = +prompt("Unesite broj izmedju 12 i 15");

switch (broj) {
  case 12:
    console.log("Korisnik je uneo broj 12");
    break;
  case 13:
    console.log("Korisnik je uneo broj 13");
    break;
  case 14:
    console.log("Korisnik je uneo broj 14");
    break;
  case 15:
    console.log("Korisnik je uneo broj 15");
    break;
  default:
    console.log("Korisnik nije uneo broj izmedju 12 i 15");
}
