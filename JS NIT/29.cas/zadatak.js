// Write a JavaScript program to display the current day and time in the following format.
// Current time is: 10 PM : 30 : 38

const zadatak1 = () => {
  let danasnji = new Date();
  console.log(danasnji.toLocaleString());
  let sati = danasnji.getHours();
  console.log(sati);
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
