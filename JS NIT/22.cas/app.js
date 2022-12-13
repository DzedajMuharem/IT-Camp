// Napravi funkciju koja ce da sakrije email adresu da bi zastitila korisnika

const protectEmail = (email) => {
  const donjaCrta = email.indexOf("_") !== -1 ? email.indexOf("_") : null;
  const tacka = email.indexOf(".") !== -1 ? email.indexOf(".") : null;
  let nekiBr = 0;
  let brojevi = "1234567890";

  for (let i = 0; i < email.length; i++) {
    if (email[i] === "_" || email[i] === ".") {
      nekiBr = i;
      break;
    }
  }
  console.log(nekiBr);
  //   let ludoA = email.indexOf("@");
  //   let crta = email.indexOf("_");
  //   let tacka = email.indexOf(".");
  //   let sakriveno = email.slice(crta, ludoA);
  //   console.log(ludoA);
  //   console.log(sakriveno);
  //   return email.replace(sakriveno, "...");
};
console.log(protectEmail("hasan_Mujanovic@gmail.com"));
