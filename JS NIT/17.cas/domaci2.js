const domaci2 = (broj) => {
  if (isNaN(broj) || broj < 1000 || broj > 9999) {
    return "Argument nije korektan";
  } else {
    const cifraJedinice = broj % 10;
    const cifraDesetice = Math.trunc((broj % 100) / 10);
    const cifraStotine = Math.trunc((broj % 1000) / 100);
    const cifraHiljade = Math.trunc(broj / 1000);
    return cifraJedinice + cifraDesetice + cifraStotine + cifraHiljade;
  }
};
console.log(domaci2("123dsasda"));
console.log(domaci2(123));
console.log(domaci2(1234));
console.log(domaci2(12345));
