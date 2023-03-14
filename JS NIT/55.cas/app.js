// const gettUsers = () => {
//   return fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(err => console.log(err.message));
//   // .finally(() => setTimeout(gettUsers, 1000 * 60 * 5)); // 5 minutes
// };
// gettUsers();

// Asinhrona funkcija za prikupljanje podataka sa servera
// odredjeni user

const gettUsers = async id => {
  const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const users = await data.json();
  console.log(users);
};

// gettUsers(5);

// async function gettUsers(){
//     const data = await fetch('https://jsonplaceholder.typicode.com/users');
//     const users = await data.json();
// }

const gettUsers2 = async () => {
  const data = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users = await data.json();

  //   users.forEach(element => {
  //     console.log({
  //       id: element.id,
  //       name: element.name,
  //       email: element.email.toLowerCase(),
  //       phone: element.phone,
  //       address: {
  //         street: element.address.street,
  //         suite: element.suite,
  //       },
  //     });
  //   });

  const gettUsersMap = users.map(user => {
    return {
      id: user.id,
      name: user.name,
      email: user.email.toLowerCase(),
      phone: user.phone,
      address: {
        street: user.address.street,
        suite: user.suite,
      },
    };
  });
  return gettUsersMap;
};
gettUsers2()
  .then(data => console.log(data))
  .catch(err => console.log(err.message));

// Prikupiti sve usere, vartiti json sa svim userima koji su prikazani sa odredjenim svojstvima
// id,name,email ispisan malim slovima, phone ,addresa-> street, suite
