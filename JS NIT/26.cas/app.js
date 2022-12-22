// JS Math Object //

// Math Object nam dozvoljava da izvrsimo neke dodatne radnje sa brojevima

// Math Properties (konstante)
//Sintaksa je Math.Property

// Math konstanti ima 8

// 1.
// Math.E - vraca Ojlerov broj
console.log(Math.E);

// 2. Math.PI - vraca vrijednost pi
console.log(Math.PI);

// 3. Math.SQRT2 - vraca vrijednost kvardatnog korena
console.log(Math.SQRT2);

// 4. Math.SQRT1_2 - vraca vrijednost kvadratnog korena broja 1/2
console.log(Math.SQRT1_2);

// 5. Math.LN2 - vraca vrijednost logaritma osnove e broja 2
console.log(Math.LN2);

// 6. Math.LN10 - vraca vrijednost logaritma osnove e broja 10
console.log(Math.LN10);

// 7. Math.LOG2E - vraca vrijednost logaritma osnove 2 broja E
console.log(Math.LOG2E);

// 8. Math.LOG10E - vraca vrijednost logaritma osnove 10 broja E
console.log(Math.LOG10E);

// Math Methods //

// Sintaksa je:
// Math.method(number)

// Number to intiger:

// 1. Math.round() - vraca blizi ceo broj
console.log(Math.round(22.23));

// 2. Math.ceil() - vraca sledeci ceo broj
console.log(Math.ceil(22.23));
console.log(Math.ceil(-22.23));

// 3. Math.floor() - vraca prethodni ceo broj
console.log(Math.floor(22.23));
console.log(Math.floor(-22.23));

// 4. Math.trunc() - vraca ceo broj bez decimalnog zapisa
console.log(Math.trunc(22.23));
console.log(Math.trunc(-22.23));

// Math.sign(number) - vraca -1 , 0 ili 1 u zavisnosti od toga kog je znaka broj

console.log(Math.sign(22));
console.log(Math.sign(-22));
console.log(Math.sign(0));

// Math.pow(number, power) - vraca number stepenovan na power
console.log(Math.pow(2, 3));

// Math.sqrt(number) - vraca kvadratni koren broja
console.log(Math.sqrt(25));

// Math.abs(number) - vraca apsolutnu vrijednost nekog broja
console.log(Math.abs(22));
console.log(Math.abs(-22));

// Math.sin(radians) - vraca vrijednost sinusa (izmedju -1 i 1). Argument se posmatra
// kao vrijednost u radijanima
console.log(Math.sin(Math.PI / 2));
console.log(Math.sin(1));

// Math.cos(radians) - vraca vrijednost kosinusa (izmedju -1 i 1). Argument se posmatra
// kao vrijednost u radijanima
console.log(Math.cos(Math.PI / 2));
console.log(Math.cos(1));

// 32. Write a JavaScript program to find a value which is nearest to 100 from two different given integer values.

const zadatak32 = (br1, br2) => {
  let broj1 = Math.abs(100 - br1);
  let broj2 = Math.abs(100 - br2);
  const rezultat = broj1 > broj2 ? br2 : broj1 < broj2 ? br1 : null;
  if (rezultat === null) {
    return `Brojevi su jednako udeljni od broja 100`;
  } else {
    return ` Blizi broj je ${rezultat}`;
  }
  //   if (br1 === br2) {
  //     return "Brojevi su jednaki";
  //   } else if (broj1 > broj2) {
  //     return "Broj 2 je blizi";
  //   } else {
  //     return "Broj 1 je blizi";
  //   }
};

console.log(zadatak32(900, -60));
console.log(zadatak32(99, 101));
console.log(zadatak32(200, 0));
console.log(zadatak32(150, 30));
