// 'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section
// // const openingHours = {
// //   thu: {
// //     open: 12,
// //     close: 22,
// //   },
// //   fri: {
// //     open: 11,
// //     close: 23,
// //   },
// //   sat: {
// //     open: 0, // Open 24 hours
// //     close: 24,
// //   },
// // };


// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   // Before Es6
//   //openingHours: openingHours,

//   //1. Es6 Enhanced objects literals
//   // openingHours,
//   //2. Es6 Enhanced object literals
//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDeliverey: function ({ starterIndex, mainIndex, time, address }) {
//     console.log(`Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`)
//   },

//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`);
//   },
//   orderPizza: function (mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient);
//     console.log(otherIngredients);
//   },


// };


// restaurant.orderDeliverey({
//   time: '22:30',
//   address: 'Via del sole, 21',
//   mainIndex: 2,
//   starterIndex: 1,
// });

// // Destructuring OBJECTS 
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const { name: restaurantName, openingHours: hours, categories: tags, } = restaurant;
// console.log(restaurantName, hours, tags);

// // Default Values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // Mutating Variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// // Nested objects
// // const { fri: { open, close } } = openingHours;
// // console.log(open, close);

// //Destructuring Arrays.
// // Without Destructuring 
// const arr = [2, 3, 4];
// // const a = arr[0];
// // const b = arr[1];
// const c = arr[2];

// // Destructuring 
// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// // Restaurant
// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // Switching variables.

// // Without destructuring
// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// // Using detructuring 
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // Write a funtion to order food.
// // Recieve 2 return values from a function.

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// // Nested array
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);


// // Nested destructuring
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Default Values : This can sometimes be useful when we get data from API 
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

// // Course Assignment
// const books = [
//   {
//     title: 'Algorithms',
//     author: ['Robert Sedgewick', 'Kevin Wayne'],
//     publisher: 'Addison-Wesley Professional',
//     publicationDate: '2011-03-24',
//     edition: 4,
//     keywords: ['computer science', 'programming', 'algorithms', 'data structures', 'java', 'math', 'software', 'engineering'],
//     pages: 976,
//     format: 'hardcover',
//     ISBN: '9780321573513',
//     language: 'English',
//     programmingLanguage: 'Java',
//     onlineContent: true,
//     thirdParty: {
//       goodreads: {
//         rating: 4.41,
//         ratingsCount: 1733,
//         reviewsCount: 63,
//         fiveStarRatingCount: 976,
//         oneStarRatingCount: 13
//       }
//     },
//     highlighted: true
//   },
//   {
//     title: 'Structure and Interpretation of Computer Programs',
//     author: ['Harold Abelson', 'Gerald Jay Sussman', 'Julie Sussman (Contributor)'],
//     publisher: 'The MIT Press',
//     publicationDate: '2022-04-12',
//     edition: 2,
//     keywords: ['computer science', 'programming', 'javascript', 'software', 'engineering'],
//     pages: 640,
//     format: 'paperback',
//     ISBN: '9780262543231',
//     language: 'English',
//     programmingLanguage: 'JavaScript',
//     onlineContent: false,
//     thirdParty: {
//       goodreads: {
//         rating: 4.36,
//         ratingsCount: 14,
//         reviewsCount: 3,
//         fiveStarRatingCount: 8,
//         oneStarRatingCount: 0
//       }
//     },
//     highlighted: true
//   },
//   {
//     title: 'Computer Systems: A Programmer\'s Perspective',
//     author: ['Randal E. Bryant', 'David Richard O\'Hallaron'],
//     publisher: 'Prentice Hall',
//     publicationDate: '2002-01-01',
//     edition: 1,
//     keywords: ['computer science', 'computer systems', 'programming', 'software', 'C', 'engineering'],
//     pages: 978,
//     format: 'hardcover',
//     ISBN: '9780130340740',
//     language: 'English',
//     programmingLanguage: 'C',
//     onlineContent: false,
//     thirdParty: {
//       goodreads: {
//         rating: 4.44,
//         ratingsCount: 1010,
//         reviewsCount: 57,
//         fiveStarRatingCount: 638,
//         oneStarRatingCount: 16
//       }
//     },
//     highlighted: true
//   },
//   {
//     title: 'Operating System Concepts',
//     author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
//     publisher: 'John Wiley & Sons',
//     publicationDate: '2004-12-14',
//     edition: 10,
//     keywords: ['computer science', 'operating systems', 'programming', 'software', 'C', 'Java', 'engineering'],
//     pages: 921,
//     format: 'hardcover',
//     ISBN: '9780471694663',
//     language: 'English',
//     programmingLanguage: 'C, Java',
//     onlineContent: false,
//     thirdParty: {
//       goodreads: {
//         rating: 3.9,
//         ratingsCount: 2131,
//         reviewsCount: 114,
//         fiveStarRatingCount: 728,
//         oneStarRatingCount: 65
//       }
//     }
//   },
//   {
//     title: 'Engineering Mathematics',
//     author: ['K.A. Stroud', 'Dexter J. Booth'],
//     publisher: 'Palgrave',
//     publicationDate: '2007-01-01',
//     edition: 14,
//     keywords: ['mathematics', 'engineering'],
//     pages: 1288,
//     format: 'paperback',
//     ISBN: '9781403942463',
//     language: 'English',
//     programmingLanguage: null,
//     onlineContent: true,
//     thirdParty: {
//       goodreads: {
//         rating: 4.35,
//         ratingsCount: 370,
//         reviewsCount: 18,
//         fiveStarRatingCount: 211,
//         oneStarRatingCount: 6
//       }
//     },
//     highlighted: true
//   },
//   {
//     title: 'The Personal MBA: Master the Art of Business',
//     author: 'Josh Kaufman',
//     publisher: 'Portfolio',
//     publicationDate: '2010-12-30',
//     keywords: ['business'],
//     pages: 416,
//     format: 'hardcover',
//     ISBN: '9781591843528',
//     language: 'English',
//     thirdParty: {
//       goodreads: {
//         rating: 4.11,
//         ratingsCount: 40119,
//         reviewsCount: 1351,
//         fiveStarRatingCount: 18033,
//         oneStarRatingCount: 1090
//       }
//     }
//   },
//   {
//     title: 'Crafting Interpreters',
//     author: 'Robert Nystrom',
//     publisher: 'Genever Benning',
//     publicationDate: '2021-07-28',
//     keywords: ['computer science', 'compilers', 'engineering', 'interpreters', 'software', 'engineering'],
//     pages: 865,
//     format: 'paperback',
//     ISBN: '9780990582939',
//     language: 'English',
//     thirdParty: {
//       goodreads: {
//         rating: 4.7,
//         ratingsCount: 253,
//         reviewsCount: 23,
//         fiveStarRatingCount: 193,
//         oneStarRatingCount: 0
//       }
//     }
//   },
//   {
//     title: 'Deep Work: Rules for Focused Success in a Distracted World',
//     author: 'Cal Newport',
//     publisher: 'Grand Central Publishing',
//     publicationDate: '2016-01-05',
//     edition: 1,
//     keywords: ['work', 'focus', 'personal development', 'business'],
//     pages: 296,
//     format: 'hardcover',
//     ISBN: '9781455586691',
//     language: 'English',
//     thirdParty: {
//       goodreads: {
//         rating: 4.19,
//         ratingsCount: 144584,
//         reviewsCount: 11598,
//         fiveStarRatingCount: 63405,
//         oneStarRatingCount: 1808
//       }
//     },
//     highlighted: true
//   }
// ];

// //Assignment Solutions
// // Destructuring Arrays﻿
// // 1.1﻿
// // Destructure the books array into two variables called firstBook and secondBook.

// const [firstBook, secondBook] = books;
// console.log(firstBook, secondBook);

// // 1.2﻿
// // Destructure the books array into a variable called thirdBook. You must skip the first two books.

// const [, , thirdBook] = books;
// console.log(thirdBook);

// // 1.3﻿
// // Below is the nested ratings array that contains two other arrays. Destructure the nested ratings arrays into two variables called rating and ratingsCount. In the result of your destructuring, the ratings variable should store a number 4.19, and the ratingsCount variable should store a number 144584.

// const ratings = [['rating', 4.19], ['ratingsCount', 144584]];

// const [[, rating], [, ratingsCount]] = ratings;
// console.log(rating, ratingsCount);

// // 1.4﻿
// // Below is the ratingStars array. Destructure it into three variables called fiveStarRatings, oneStarRatings and threeStarRatings. Assign the threeStarRatings variable with a default value of 0.

// const ratingStars = [63405, 1808];
// const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;
// console.log(fiveStarRatings, oneStarRatings, threeStarRatings);

// // Spread Operators
// const arrr = [7, 8, 9];
// const badNewArr = [1, 2, arrr[0], arrr[1], arrr[2]];
// console.log(badNewArr);

// // Using spraed operators
// const newArr = [1, 2, ...arrr];
// console.log(newArr);
// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// //Two important use cases of spread operator [creating shallow copies of array and Merging two arrays together].
// const mainMenuCopy = [...restaurant.mainMenu];

// //Joining 2 arrays 
// const menuu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menuu);

// //Iterables: arrays, strings, maps, sets, NOT objects
// const str = 'Jonas';
// const letters = [...str, ' ', 's,'];
// console.log(letters);
// console.log(...str);

// // Real-world Example
// // const ingredients = [prompt('Let\'s make pasta! Ingredient 1?'), prompt('Ingredient 2?'), prompt(' Ingredient 3?')];
// // console.log(ingredients);
// // restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// // restaurant.orderPasta(...ingredients);

// //Objects ... Operator.
// const newRestaurant = { foundIn: 1998, ...restaurant, founder: 'Guiseppe' };
// console.log(newRestaurant);
// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// // 1) Destructuring
// // Rest Patterns and Parameters
// //Spread, because on Right side of =
// const arrrr = [1, 2, ...[3, 4]];

// //REST, because on the LEFT side of =
// const [e, f, ...others] = [1, 2, 3, 4, 5];
// console.log(e, f, others);
// const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(pizza, risotto, otherFood);

// //REST in Objects
// // const { sat, ...weekdays } = restaurant.openingHours;
// // console.log(weekdays);

// // 2) Functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++)sum += numbers[i];
//   console.log(sum);
// }
// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const s = [23, 5, 7];
// add(...s);

// restaurant.orderPizza('Mushrooms', 'Onion', 'Olives', 'Spinach');
// restaurant.orderPizza('Mushrooms');

// // Short Circuiting (&& and ||)
// console.log('---- OR ----');
// // They can use any data type, they return any data type and they do short circuiting.


// console.log(3 || 'Jonas');
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// // restaurant.numGuests = 0;
// // const guests = restaurant.numGuests || 10;
// // console.log(guests)

// const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guest1);

// const guest2 = restaurant.numGuests || 10;
// console.log(guest2);



// console.log('---- AND ----');
// console.log(0 && 'Jonas');
// console.log(7 && 'Jonas');
// console.log('Hello' && 23 && null && 'Jonas');

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('Mushrooms', 'Spinach');
// }
// restaurant.orderPizza && restaurant.orderPizza('Mushroom', 'Spinach');


// //The Nullish coalescing Operator
// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// //Nullish: Null and undefined
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

// // Logicall Assignment Operators


// const rest1 = {
//   name: 'Capri',
//   // numGuests: 20,
//   numGuests: 0,
// }
// const rest2 = {
//   name: 'la Piazza',
//   owner: 'Giovanni rossi',
// }
// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;

// //OR operator
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// //Nullish Assignment Operator
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// // rest1.owner = rest1.owner && '<ANONYMOUS>';
// // rest2.owner = rest2.owner && '<ANONYMOUS>';

// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);

// /* Betting App Challenge 
// We're building a football betting app (soccer for my American friends �)!
// Suppose we get data from a web service about a certain game ('game' variable on
// next page). In this challenge we're gonna work with that data.

// Your tasks:
// 1. Create one player array for each team (variables 'players1' and
// 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field
// players. For Bayern Munich (team 1) create one variable ('gk') with the
// goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
// field players
// 3. Create an array 'allPlayers' containing all players of both teams (22
// players)
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
// new array ('players1Final') containing all the original team1 players plus
// 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd (called
// 'team1', 'draw' and 'team2')
// 6. Write a function ('printGoals') that receives an arbitrary number of player
// names (not an array) and prints each of them to the console, along with the
// number of goals that were scored in total (number of player names passed in)
// 7. The team with the lower odd is more likely to win. Print to the console which
// team is more likely to win, without using an if/else statement or the ternary
// operator.
// Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
// Then, call the function again with players from game.scored
// GOOD LUCK �
// */


// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };


// // Solution 1
// const [players1, players2] = game.players;
// console.log(players1, players2);

// //solution 2

// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// // Solution 3
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// // Solution 4
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// // Solution 5
// const { odds: { team1, x: draw, team2 } } = game;
// console.log(team1, draw, team2);

// //Solution 6

// const printGoals = (...players) => {
//   console.log(`${players.length} goals were scored`);
// }

// printGoals(...game.score);

// //Solution 7
// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win');


// // Looping Arrays: For-of Loop.
// const menuuu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menuuu) console.log(item);

// for (const [i, el] of menuuu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// // Optional Chaining (?.)
// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon);

// // With Optional Chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// // Example
// const days = ['Mon', 'Tue', 'Wed', 'thu', 'Fri'];
// for (const day of days) {
//   console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? 'Closed'
//   console.log(`On ${day}, we open at ${open}`);
// }

// // Optional Chaining for Methods
// console.log(restaurant.order?.(0, 1) ?? 'method does not exist');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'method does not exist');
// //Optional Chaining on Arrays

// const users = [
//   { name: 'jonas', email: 'hello@jonas.io' }
// ];

// console.log(users[0]?.name ?? 'user array empty');

// // Looping Objects: Objects keys, values and entries

// //Property Names
// const properties = object.keys(openingHours);
// console.log(properties);

// let openStr = `We're open on ${properties.length} days: `;

// for (const day of properties) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// //Property Values
// const values = object.values(openingHours);
// console.log(values);

// //Entries
// const entries = object.entries(openingHours);
// // console.log(entries);

// // [key, value]
// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and  we close at ${close}`);
// }

// /*Let's continue with our football betting app! Keep using the 'game' variable from
// before.
// Your tasks:
// 1. Loop over the game.scored array and print each player name to the console,
// along with the goal number (Example: "Goal 1: Lewandowski")
// 2. Use a loop to calculate the average odd and log it to the console (We already
// studied how to calculate averages, you can go check if you don't remember)
// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
//       Odd of victory Bayern Munich: 1.33
//       Odd of draw: 3.25
//       Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them
// (except for "draw"). Hint: Note how the odds and the game objects have the
// same property names �
// 4. Bonus: Create an object called 'scorers' which contains the names of the
// players who scored as properties, and the number of goals as the value. In this
// game, it will look like this:
// {
//  Gnarby: 1,
//  Hummels: 1,
//  Lewandowski: 2
// }
// GOOD LUCK � */

// // Solution 1
// for (const [i, player] of game.scored.entries())
//   console.log(`Goal ${i + 1}: ${player}`);

// // 2.
// let average = 0;
// const odds = object.values(game.odds);
// for (const odd of odds) average += odd;
// average / + odds.length;
// console.log(average);

// // 3.
// for (const [teams, odd] of object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `Victtory ${game[team]}`;
//   console.log(`Odd of ${teamStr} ${odd}`);
// }


// SETS
//The use case of sets is to remove duplicate valuse from arrays.
const orderSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);
console.log(orderSet);
console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));
orderSet.add('Garlic Bread');
orderSet.delete('Risotto');
// orderSet.clear();
console.log(orderSet);

for (const order of orderSet) console.log(order);

//Example 
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size);
console.log(new Set('Jehoshaphat').size);


//Maps: Fundamentals
const rest = new Map();
rest.set('Name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));


rest.set('Categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Oragnic']).set('Open', 11).set('Close', 23).set(true, "We're open").set(false, "we're closed");

console.log(rest.get('Name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;
console.log(rest.get(time > rest.get('Open') && time < rest.get('Close')));

console.log(rest.has('Categories'));
rest.delete(2)
// rest.clear()

const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading')
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));

//Map Iteration
const question = new Map([
  ['question', 'What is the best programing language in the world'], [1, 'C'], [2, 'Java'], [3, 'Javascript'], ['Correct', 3], [true, 'Correct'], [false, 'Try again']
]);
console.log(question);

//Convert objects to maps
// console.log(oject.entries(openingHours));
// const hoursMap = new Map(object.entries(openingHours));
// console.log(hoursMap);

//Iteration Quiz App
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`)
}
const answer = 3
// const answer = Number(prompt('Your Answer'));
console.log(answer);

console.log(question.get(question.get('Correct') === answer));

// convertins Maps to objects
console.log([...question]);
// console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);

//  Summary: which data structure to use?
/*
Let's continue with our football betting app! This time, we have a map called
'gameEvents' (see below) with a log of the events that happened during the
game. The values are the events themselves, and the keys are the minutes in which
each event happened (a football game has 90 minutes plus some extra time).
Your tasks:
1. Create an array 'events' of the different game events that happened (no
duplicates)
2. After the game has finished, it was found that the yellow card from minute 64
was unfair. So remove this event from the game events log.
3. Compute and log the following string to the console: "An event happened, on
average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over 'gameEvents' and log each element to the console, marking
whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17: ⚽ GOAL
GOOD LUCK �
 const gameEvents = new Map([
 [17, '⚽ GOAL'],
 [36, '� Substitution'],
 [47, '⚽ GOAL'],
 [61, '� Substitution'],
 [64, '� Yellow card'],
 [69, '� Red card'],
 [70, '� Substitution'],
 [72, '� Substitution'],
 [76, '⚽ GOAL'],
 [80, '⚽ GOAL'],
 [92, '� Yellow card'],
 ]);
 */

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
]);
// 1.
const events = [...new Set(gameEvents.values())];
console.log(events);

//2.
gameEvents.delete(64);

//3.
const timee = [...gameEvents.keys()].pop();
console.log(timee)
console.log(`An event happened, on
  average, every ${timee / gameEvents.size} minutes`);

//4.
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALf] ${min}: ${event}`);
}
//Working with strings: Part 1
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('8737'[0]);

console.log(airline.length);
console.log('8737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('portugal'));

// Slice Method
console.log(airline.slice(4));
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));


const checkMidddleSeat = (seat) => {
  //B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('You got the middle seat')
  } else {
    console.log('You got lucky');
  }
}
checkMidddleSeat('118');
checkMidddleSeat('23C');
checkMidddleSeat('3E');

// Reason why methods works on strings.
console.log(new String('Jonas'));
console.log(typeof new String('Jonas'));
console.log(typeof new String('Jonas').slice(1));

//Working with strings: Part 2
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// const passenger = 'jOnAs';
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);
// console.log(passengerLower);

function UpperCase() {
  const passenger = 'jOnAs';
  const passengerLower = passenger.toLowerCase();
  const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
  console.log(passengerLower);
  console.log(passengerCorrect);
}
UpperCase();

//Check User Input Emailing (Comparing Emails)
const email = 'hello@jonas.io';
const loginEmail = ' Hello@Jonas.Io \n';

const lowerEmail = loginEmail.toLowerCase().trim();
console.log(lowerEmail);
console.log(email === lowerEmail);

// replace() method
const priceGB = '£288,97';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement = 'All passengers should come to the boarding door 23. Boarding door 23';
console.log(announcement.replaceAll('door', 'gate'));

// Booleans
const planee = 'Airbus A320neo';
console.log(planee.includes('A320'));
console.log(planee.includes('Boeing'));
console.log(planee.startsWith('Airb'));
// console.log(planee.includes('A320'));
if (planee.startsWith('Airbus') && planee.endsWith('neo')) {
  console.log('Part of the New Airbus Family');
};

//Practice Exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();

  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log("You're NOT allowed on board");
  } else {
    console.log('Welcome On Board!');
  }
};
checkBaggage('I have a laptop, some food and a pocket Knife');
checkBaggage('Socka and a camera');
checkBaggage('Got some snacks and a gun for protection');

//Working with strings: Part 3 split() and join()
console.log('a+very+nice+string'.split('+'));
console.log('Jonas schmedtmann'.split(' '));

const [firstName, lastName] = 'Jonas schmedtmann'.split(' ');
console.log(firstName, lastName);

const newName = ['Mr', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = (name) => {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
}
capitalizeName('jessica ann smith davis');
capitalizeName('jonas schmedtmann');
//padding
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+'));

console.log('Jonas'.padStart(20, '+').padEnd(30, '+'));

const maskCreditCard = (number) => {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
}
console.log(maskCreditCard(83984975));
console.log(maskCreditCard(988273864686842));
console.log(maskCreditCard('7483475626983479837498565732'));

// Repeat() method
const message2 = 'Bad weather... All departures delayed...';
console.log(message2.repeat(5));

const planesInLine = (n) => {
  console.log(`There are ${n} planes in line ${"✈️".repeat(n)}`);
}
planesInLine(5)
planesInLine(3)
planesInLine(13)

//Challenge
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');

    const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
})

//Strings Practice
// // Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Solution
const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const outputt = `${type.startsWith('_Delayed') ? '🛑' : '  '}${type.replaceAll('_', '')}
  ${getCode(from)} ${getCode(to)} (${time.replace(':', ('h'))})`.padStart(36);
  console.log(outputt);
}







//CodeWars solution
function highAndLow(numbers) {
  // ...
  const number = numbers.split(" ");

  const intNumber = number.map(Number);
  console.log(intNumber);

  const highest = Math.max(...intNumber);
  console.log(highest);
  const lowest = Math.min(...intNumber);
  console.log(lowest);
  return `${highest} ${lowest} `
}

console.log(highAndLow("1 2 3 4 5"));

