// Uneti string se sifruje tako sto se zamenjuje redosled znacima u stringu. Prvi i drugi zamene mesta
// zatim 3. i 4. zamene mesta itd. Ako string ima neparan broj znakova, poslednji znak se ne dira

function zadatak(recenica) {
  let nova = "";
  let drugaNova = "";
  let najNov = "";
  for (let i = 0; i < recenica.length; i++) {
    if (i % 2 === 0) {
      nova += recenica[i];
    } else if (i % 2 !== 0) {
      drugaNova += recenica[i];
    }
  }
  console.log(nova);
  console.log(recenica.length);
  console.log(Math.floor(recenica.length / 2) + 1);

  for (e = 0; e < Math.ceil(recenica.length / 2); e++) {
    if (drugaNova[e] === undefined) {
      najNov += recenica[recenica.length - 1];
    } else {
      najNov += drugaNova[e] + nova[e];
    }
  }
  return najNov;
}
console.log(zadatak("Ovovad"));

///////////////////////////////////////////////////

// Unose se dva stringa A i B. Kreirati novi string kao kombinaciju stringova A i B, tako sto se
// Kombinuje prvi sa prvim, drugi sa drugim itd. Ako je jedan string duzi od drugog, na kraju se samo
// dodaju znakovi viska.

function novi(recenica1, recenica2) {
  let duzina = recenica1.length - 1 + recenica2.length;
  let novaRecenica = "";
  // console.log(duzina)
  // console.log(recenica1.length)
  // console.log(recenica2.length)
  for (let c = 0; c < duzina; c++) {
    if (recenica1[c] === undefined || recenica2[c] === undefined) {
      continue;
    } else {
      novaRecenica += recenica1[c] + recenica2[c];
    }
  }
  if (recenica1.length - 1 < recenica2.length - 1) {
    novaRecenica += recenica2.substr(recenica1.length, recenica2.length);
  } else {
    novaRecenica += recenica1.substr(recenica2.length, recenica1.length);
  }

  return novaRecenica;
}
console.log(novi("Nekada Ovo je visak", "nekada Ovo je visak Visak je i ovo"));
