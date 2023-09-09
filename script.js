let js = "amazing";
if (js === "amazing") alert("Javascript is Fun!!!");

const age = 19;

if (age >= 18) {
  console.log("Sarah can start drving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}


const birthYear = 1991;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);

let massMark = 78; // in kg
let heightMark = 1.69; // in meter
let massJohn = 92; // in kg
let heightJohn = 1.95; // in meter

function calculateBMI(mass, height) {
  return mass / (height * height);
}

let BMIMark = calculateBMI(massMark, heightMark);
let BMIJohn = calculateBMI(massJohn, heightJohn);

console.log(
  "BMIMark : " + BMIMark.toFixed(2) + " , BMIJohn  : " + BMIJohn.toFixed(2)
);

let markHigherBMI = BMIMark > BMIJohn ? true : false;

if (markHigherBMI) {
  console.log(
    `Mark's BMI ${BMIMark.toFixed(2)} is heigher than John's ${BMIJohn.toFixed(2)}`
  );
} else {
  console.log(
    `John's BMI ${BMIJohn.toFixed(2)} is heigher than Mark's ${BMIMark.toFixed(2)}`
  );
}

const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear + 18));

console.log(Number('Jonas'));
console.log(typeof Nan);

console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old.');
console.log('23' - '10' - 3);
console.log('23' / '2');

let n = '1' + 1; // '11'
n = n - 1;
console.log(n);

console.log(2 + 3 + 4 + '5');
console.log('10' - '4' - '3' - 2 + '5');

// Truthy and Falsy Value
/*
  5 falsy values: 0, '', undefined, null, NaN
*/
console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean('John')); // true
console.log(Boolean({})); // true
console.log(Boolean('')); // false

const money = 0; // test money = 100 and observe the o/p
if (money) {
  console.log("Don't spend it all :");
} else {
  console.log("You shoule get a job.");
}

let height; // test with different use cases
if (height) {
  console.log("YAY! Height is defined.");
} else {
  console.log('Height is UNDEFINED!!!');
}

// Equality Operators: == vs ===
const _age = 18;
// if only one line of code and no nee to use curly brackets
if (_age === 18) console.log('You just became an adult :D');
if (_age == 18) console.log('You just became an adult :D {loose}');

console.log(18 === 18);
console.log(18 === 19);
// strict type operator, loosely equaityoperator doesn't check type of 
console.log('18' == 18); // true
console.log('18' === 18); // false

const favourite = prompt("what's your favourite number?");
console.log(favourite);
console.log(typeof favourite); // check the type by typeof

if (favourite === 23) {
  console.log('Cool!! 23 is an amazing number');
} else if (favourite === 7) {
  console.log('7 is also a cool number.');
} else if (favourite === 9) {
  console.log('9 is also a cool number');
} else {
  console.log('Number is not 23 ot 7 or 9');
}

if (favourite !== 23) console.log('Why not 23?');

// Logical Operators
const hasDriversLicense = true // A // set false
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense); // false

const shouldDrive = hasDriversLicense && hasGoodVision;
if (shouldDrive) {
  console.log('Sarah is able to dirve!!!');
} else {
  console.log('Someone else should drive...');
}

const isTired = true; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to dirve!!!');
} else {
  console.log('Someone else should drive...');
}

const day = 'Monday';

switch (day) {
  case 'Monday':
    console.log('Plan course structure.');
    console.log('Go to coding meetup.');
    break;
  case 'Tuesday':
    console.log('Prepare theroy videos.');
    break;
  case 'Wednesday':
  case 'Thurdsday':
    console.log('Write code exaples.');
    break;
  case 'Friday':
    console.log('Record videos.');
  case 'Saturday':
  case 'Sunday':
    console.log('Enjoy the weekend :D');
    break;
  default:
    console.log('Not a valid day.');
}

// Statements and Expressions
// expression produce a value

console.log(`I like to drin ${age >= 18 ? 'wind 🍷' : 'water 💧'}`);

