// Odrediti koliko flasa date zapremine je moguce napuniti datom kolicinom limunade
// zapremina flase je data do 3 decimale, tako i kolicina limunade
// zapremina flase max 5 kolicina limunade max 50

const limunadaZadatak = (zapremina, kolicina) => {
  let puneFlase = kolicina / zapremina;
  let dec3Zap = zapremina.toFixed(3);
  let dec3Kol = kolicina.toFixed(3);
  let cifraJedinice = (puneFlase * 1000) % 10;
  let cifraJedinice2 = Math.round(cifraJedinice);
  let cifraDesetice = Math.trunc(((puneFlase * 1000) % 100) / 10);
  let cifraStotine = Math.trunc(((puneFlase * 1000) % 1000) / 100);
  let mililitri = `${cifraStotine}${cifraDesetice}${cifraJedinice2}`;
  if (zapremina > 5 || kolicina > 50 || zapremina <= 0 || kolicina <= 0) {
    return "Niste uneli korektne vrijednosti";
  } else if (dec3Zap < zapremina) {
    return "Zapremina flase ne sme imati vise od 3 decimale";
  } else if (dec3Kol < kolicina) {
    return "Kolicina limunade ne sme imati vise od 3 decimale";
  } else if (puneFlase.toFixed(3) % puneFlase === 0) {
    return puneFlase;
  } else if (puneFlase.toFixed(3) !== puneFlase) {
    console.log(puneFlase.toFixed(3));
    return "Mozemo napuniti ".concat(
      Math.trunc(puneFlase),
      " cijele flase, i ostaje nam ",
      mililitri,
      " mililitara"
    );
  }
};
console.log(limunadaZadatak(1.5, 10));
