// JS prepoznaje samo jedan tip podataka za brojeve. U pitanju je number tip podatka i oni
// mogu biti zapisani sa ili bez decimalnog zareza

// Veliki brojevi mogu biti zapisani sa takozvanim exponent oznakom:

const petica = 5e6;
console.log(petica);

const noviBroj = 555e-6;
console.log(noviBroj);

// Sto se tice sabiranja decimalnih brojeva JS nije bas najbolji kalkulator.
console.log(0.1 + 0.2);

// + operator:
console.log("10" + 10); // 1010

console.log("10" - 2); // 8

// NaN - Not a number
// NaN je JS rezervisana rec koja ukazuje da broj nije korektan.
// NaN je tipa number

// Za proveru da li je neka vrijednost korektan broj se koristi !isNan().

// Infinity (ili -infinity) je vrijednost koju cemo da dobijemo kada rezultat premasi
// najveci broj u JS (bude veoma mali broj)
console.log(isNaN(100 / "Jabuka"));

console.log(25 / 0);
console.log(-1 / 0);

// Infinity je tip number

// Hexadecimal numbers:
// Ako su brojevi napisani prefixom 0xff rezultat ce biti 255

const a = 0xff;
console.log(a);

// razlike izmedju hekxadecimalnog i decimalnog sistema je posle broja 9. Od 0 do 9 je isto 10 u decimalnom sistemu a u hexa
// je to A tom logikom 15 je F

// racunamo ovako prvi broj mnozimo sa 16 drugi sa 1 npr 12 = 1*16 + 2*1 = 16 + 2 = 18
// ab = 10*16 + 11*1 = 160 + 11 = 171
// 33 = 3*16 + 3*1 == 48 + 3 = 51

// Pored osnovnog nacina dodeljivanja vrijednosti nekoj promenljivoj mozemo to uraditi i preko  new:
const b = 22;
const l = new Number(33);
console.log(b);
console.log(l);

console.log(b + 1);
console.log(typeof b);
console.log(typeof l);

// Napraviti funkciju koja pretvara kilometre u metre I INCH U CM

function kilometri(broj) {
  return broj * 1000 + "m";
}
console.log(kilometri(20));

function inch(broj2) {
  return broj2 * 2.54 + "cm";
}
console.log(inch(40));
