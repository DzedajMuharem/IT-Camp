class Course {
  constructor(title, length, price) {
    this.title = title;
    this.length = length;
    this.price = price;
  }

  calcLengthPrice() {
    return this.length / Number(this.price.slice(0, -1)) + 'E';
  }

  courseSummary() {
    return `Course title: ${this.title}, Course length: ${this.length}, Course price: ${this.price}`;
  }

  set price(cena) {
    if (cena > 0) {
      this._price = cena + 'E';
    } else {
      alert(`cena ne moze biti negativna`);
    }
  }

  get price() {
    return this._price;
  }
}

const kurs = new Course('NIT', 9, 3000);
console.log(kurs.calcLengthPrice());

const kurs2 = new Course('Jonas', 70, 120);
console.log(kurs2.courseSummary());

class practicalCourse extends Course {
  constructor(title, length, price, numOfExercises) {
    super(title, length, price);
    this.numOfExercises = numOfExercises;
  }
}

class theoreticalCourse extends Course {
  constructor(title, length, price) {
    super(title, length, price);
  }
  publish() {
    console.log(
      'This method from theoreticalCourse prints something to console '
    );
  }
}

const prakticni = new practicalCourse('Jonas', 70, 120, 20);
console.log(prakticni);
const teoretski = new theoreticalCourse();
console.log(teoretski.publish());
