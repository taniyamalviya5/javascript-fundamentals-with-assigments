// const country = "India", continent = "Asia", language = "english";
// let isIsland = false, population = "48";

// // let, const, var
// console.log(country);
// console.log(continent);
// console.log(population);
// console.log(isIsland);
// console.log(language);

// // Basic Operators
// console.log(population / 2);
// population++;
// console.log(population);
// let Finland = 6;
// console.log(Finland > population);
// let avgPopulation = 33;
// console.log(population < avgPopulation);
// const description = `${country} is in ${continent}, and its ${population} million people speak ${language}.`;
// console.log(description);

// // Taking Desisions: if / else Statements
// if(+population > 33){
//     console.log(`${country}'s population is above average.`);
// } else {
//     console.log(`${country}'s population is 22 million below average.`);
// }


// // Assigment - 2
// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if(scoreDolphins > scoreKoalas && scoreDolphins >= 100){
//     console.log('Dolphins win the trophy 🏆');
// } else if(scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//     console.log('Koalas win the trophy 🏆');
// } else if(scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
//     console.log('both win the trophy!');
// } else {
//     console.log('No one wins the trophy 😭');
// }

// // Type conversion and coercion

// console.log('9' - '5',
// '19' - '13' + '17',
// '19' - '13' + 17,
// '123' < 57,
// 5 + 6 + '4' + 9 - 4 - 2);

// // Equality Operators
// // let numNeighbours = prompt('How many neighbour countries does your country have?');
// let numNeighbours = 1;

// if(+numNeighbours === 1){
//     console.log("Only 1 border!");
// } else if(+numNeighbours > 1){
//     console.log('More than 1 border');
// } else {
//     console.log('No borders!!');
// }

// // Logical Operators
// if(language === "english" && +population < 50 && !isIsland){
//     console.log(`You should live in ${country}`);
// } else {
//     console.log(`${country} does not meet your criteria :(`);
// }

// // Switch Statement
// switch(language){
//     case 'chinese': 
//     case 'mandarin': 
//         console.log('MOST number of native speakers!');
//         break;
//     case 'spanish':
//         console.log('2nd place in number of native speakers');
//         break;
//     case 'english': 
//         console.log('3rd place');
//         break;
//     case 'hindi': 
//         console.log('Number 4');
//         break;
//     case 'arabic': 
//         console.log('5th most spoken kanguage');
//         break;
//     default:
//         console.log('Great language too :D');
//         break;
// };

// // Conditional (Ternary) Operator


// console.log(`${country}'s population is ${+population > 33 ? 'above' : 'below'} average`);

// // Calculate the tip

// let bill = 40, tip = 0;

// const tipPercentage = (bill >=50 && bill <= 300) ? 0.15 : 0.20;
// tip = bill * tipPercentage;

// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

// Javascript Fundamentals - Part - 2