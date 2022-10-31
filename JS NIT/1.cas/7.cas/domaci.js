console.log(new Date().getDay());
// getDay() - daje vrijednost od 0-6

// switch(new Date().getDay());
// Na osnovu vrijednosti koju nam daje izraz iz swtich naredbe kroz caseove
// i eventualn defauta ispsiati poruku
// 'Danas je 'radni dan''
// 'Ugodno provedite vikend'

switch (new Date().getDay()) {
  case 0:
    console.log("Ugodno provedite vikend");
    break;
  case 1:
    console.log("Danas je radni dan");
    break;
  case 2:
    console.log("Danas je radni dan");
    break;
  case 3:
    console.log("Danas je radni dan");
    break;
  case 4:
    console.log("Danas je radni dan");
    break;
  case 5:
    console.log("Danas je radni dan");
    break;
  case 6:
    console.log("Ugodno provedite vikend");
    break;
}
