const domaci = function () {
  let broj = prompt("Unesite cetverocifreni broj");
  //   console.log(broj);
  //   console.log(broj.length);
  let moraDaBudeBroj = parseInt(broj);
  console.log(moraDaBudeBroj);
  let prvi = parseInt(broj[0]);
  let drugi = parseInt(broj[1]);
  let treci = parseInt(broj[2]);
  let cetvrti = parseInt(broj[3]);
  let rezultat = prvi + drugi + treci + cetvrti;
  console.log(rezultat);
  //   console.log(treci);
  if (isNaN(moraDaBudeBroj) || isNaN(rezultat)) {
    return "Uneli ste nesto sto nije broj";
  } else if (broj.length === 4) {
    return "zbir svih brojeva iznosi: ".concat(rezultat);
  } else if (broj.length <= 3) {
    return "Uneli ste broj sa manje od cetiri cifre";
  } else if (broj.length > 3) {
    return "Uneli ste broj sa vise od cetiri cifre";
  }
};
console.log(domaci());
