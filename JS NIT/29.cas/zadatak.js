// Write a JavaScript program to display the current day and time in the following format.
// Current time is: 10 PM : 30 : 38

const zadatak1 = () => {
  let danasnji = new Date();
  let sati = danasnji.getHours();
  let minut = danasnji.getMinutes();
  let sekund = danasnji.getSeconds();
  let praviSati;
  if (sati === 12) {
    praviSati = sati + " PM";
  } else if (sati === 00) {
    praviSati = sati + 12 + " AM";
  } else if (sati > 12) {
    praviSati = sati - 12 + " PM";
  } else {
    praviSati = sati + " AM";
  }

  return `Trenutno vrijeme je: ${praviSati} : ${minut} : ${sekund}`;
};
console.log(zadatak1());

// Write a JavaScript program to find 1st january is being a Sunday between 2014 and 2050.

const zadatak2 = () => {
  let prvi = new Date(2014, 00, 01);
  let drugi = new Date(2050, 00, 01);
  let godinaPrvi = prvi.getFullYear();
  let godinaDrugi = drugi.getFullYear();

  let brojac = 0;

  for (let i = godinaPrvi; i <= godinaDrugi; i++) {
    let noviDatum = new Date(i, 00, 01);
    if (noviDatum.getDay() === 0) {
      console.log(i);
      brojac++;
    } else {
      continue;
    }
  }

  console.log(brojac);
  return `1. Januar pada u nedelju ${brojac} puta.`;
};
console.log(zadatak2());
