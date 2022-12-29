// Metode za prikazivanje datuma:

const trenutno = new Date();
console.log(trenutno);

// 1. toString() metoda
console.log(trenutno.toString());

// 2. toUTCString()
console.log(trenutno.toUTCString());

// 3. toDateString()
console.log(trenutno.toDateString());

// 4. toISOString()
console.log(trenutno.toISOString());

// 5. toTimeString()
console.log(trenutno.toTimeString());

// 6. toLocaleTimeString()
console.log(trenutno.toLocaleTimeString());

// Get metode:

// Koristimo ih za dobijanje informacija iz Date objekta

// getFullYear()
console.log(trenutno.getFullYear());

// getMonth()
console.log(trenutno.getMonth() + 1);

// getDate()
console.log(trenutno.getDate());

// getDay()
let nedelja = new Date("2022 Dec 25");
console.log(nedelja.getDay());

// getHours()

// getMinutes()

// getSeconds()

// getMiliseconds()

// getTime()
console.log(trenutno.getTime()); // vraca broj milisekundi

// Set metode:

// Dozvoljavaju menjanje nekih vrijednosti kod Date objekta.

// setDate()
trenutno.setDate(19);
console.log(trenutno);

// setFullYear()
trenutno.setFullYear(2012);
console.log(trenutno);

// setHours()
trenutno.setHours(10);
console.log(trenutno);

// setMinutes()

// setSeconds()

// setMiliseconds()
