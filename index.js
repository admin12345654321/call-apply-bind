const person1 = {
  firstName: 'Andrei',
  lastName: 'Turcanu'
};

const person2 = {
  firstName: 'John',
  lastName: 'Doe'
};

const person3 = {
  firstName: 'Til',
  lastName: 'Schweiger'
};

const printFullName = function(hometown, country) {
  console.log(
    `${this.firstName} ${this.lastName} is from ${hometown}, ${country}`
  );
};

// function borrowing
printFullName.call(person1, 'Chisinau', 'Moldova');
printFullName.apply(person2, ['New York', 'United States']);

// bind - returns a method which can be called later
const printPersonInfo = printFullName.bind(person3, 'Berlin', 'Germany');
printPersonInfo();
