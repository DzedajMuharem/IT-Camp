// Jos jedan nacin pravljenja objekta
const objFunctions = {
  incrementScore: function () {
    this.score += 1;
  },
};

function createUser(firstName, lastName, score) {
  const newUser = Object.create(objFunctions);
  newUser.firstName = firstName;
  newUser.lastName = lastName;
  newUser.score = score;
  return newUser;
}

const tarik = new createUser('Tarik', 'Ibrovic', '16');
console.log(tarik);

tarik.incrementScore();
console.log(tarik);
