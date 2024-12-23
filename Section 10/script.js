'use strict';
//Default Parameters
// const bookings = [];
// const createBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers) {
//     // ES5
//     // numPassengers = numPassengers || 1;
//     // price = price || 199;
//     const booking = {
//         flightNum, numPassengers, price
//     };
//     console.log(booking);
//     bookings.push(booking);
// }
// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH123', 5);
// createBooking('LH123', undefined, 1000);
// // How passing arguments works: Values vs references
// const flight = 'LH123';
// const jonas = {
//     name: 'Jonas Schmedtmann',
//     passport: 24739479284
// }
// const checkIn = (flightNum, passenger) => {
//     flightNum = 'LH999';
//     passenger.name = 'Mr ' + passenger.name;

//     if (passenger.passport === 24739479284) {
//         alert('Check In')
//     } else {
//         alert("Wrong Password!")
//     }
// }
// // checkIn(flight, jonas);
// // console.log(flight);
// // console.log(jonas);

// // Is the same as doing...
// const newPassport = (person) => {
//     person.passport = Math.trunc(Math.random() * 100000000000)
// }
// newPassport(jonas);
// checkIn(flight, jonas);

// // Function to calculate total cost with optional discount
// const calculateTotal = function (items, discount = 0) {
//     let total = items.reduce((acc, item) => acc + item, 0);
//     total -= total * (discount / 100);
//     return total;
// };

// // Test cases
// console.log(calculateTotal([100, 200, 300])); // Output: 600
// console.log(calculateTotal([100, 200, 300], 10)); // Output: 540

// First-Class Vs Higher order function
// Funtions Accepting callback functions
const oneWord = (str) => {
    return str.replace(/ /g, '').toLowerCase();
};
const upperFirstWord = (str) => {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');

};
//Higher-order function
const transformer = (str, fn) => {
    console.log(`Orignal string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);
    console.log(`Transformed by: ${fn.name}`);

}
transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);
//Js uses callbacks all the time.
// const high5 = () => {
//     console.log("Hello");
// }
// document.body.addEventListener('click', high5);
// ['Jonas', 'Martha', 'Adam'].forEach(high5);

// Functions returning functions
const greet = (greeting) => {
    return (name) => console.log(`${greeting} ${name}`);

}
const greetHey = greet('Hey');
greetHey('Jonas',);
greetHey('Steven');
greet('Hello')('Jonas');
// Challenge
const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Hi')('Jonas');
// The Call and Apply Methods.
const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    // Book: () =>{}
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name })
    }

}
lufthansa.book(239, 'Song Martins');
lufthansa.book(635, 'Jonas Schmedtmann');

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: []
}
const book = lufthansa.book;
// book(23, "Jonas")
// Call Method
book.call(eurowings, 23, 'Jonas Schmedtmann');
console.log(eurowings);
book.call(lufthansa, 239, "Song Martins");
console.log(lufthansa);
const swiss = {
    airline: 'Swiss Air Line',
    iataCode: 'LH',
    bookings: [],
};
book.call(swiss, 583, 'Frances Ejiro');
console.log(swiss);
// Apply Method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);
book.call(swiss, ...flightData);
console.log(swiss);

// The Bind Method.
const bookEw = book.bind(eurowings);
const bookSw = book.bind(swiss);
const bookLh = book.bind(lufthansa);

bookEw(23, 'Steven Williams');
const bookEw23 = book.bind(eurowings, 23);
bookEw23('Jonas Schedtmann');
bookEw23('Emmanuel Uzoma');
// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
    console.log(this);
    this.planes++;
    console.log(this.planes);
}
// lufthansa.buyPlane();
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial Application of Bind method
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23; This is the same as the above.
console.log(addVAT(100));
console.log(addVAT(23));
console.log(addVAT(200));
// Challenge 
// const taxAdd = (value) => (rate, value) => value + value * rate;

// const addedVat = taxAdd(null, 0.23);
// console.log(addedVat(100));

const addTaxRate = function (rate) {
    return function (value) {
        return value + value * rate;
    }
}
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));

// Coding Challenge of the Section
const poll = {
    question: "What is your favourite programming language?",
    options: ["0: Javascript", "2: Python", "3: "]
}





